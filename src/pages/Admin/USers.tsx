import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton"; // 👈 Import skeleton
import { useGetUsersQuery } from "@/store/api/admin.api";
import { BanIcon, ShieldCheckIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Users() {
  const { data, isLoading } = useGetUsersQuery(null); // 👈 Use isLoading

  return (
    <div className="rounded-md border shadow-sm">
      <h1 className="text-2xl font-bold m-3 text-center text-primary">
        Manage Users
      </h1>
      <Table>
        <TableCaption className="text-muted-foreground mt-4">
          A list of all users in the system.
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Name</TableHead>
            <TableHead className="w-[200px]">Email</TableHead>
            <TableHead className="w-[100px]">Role</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className="w-[140px]">Phone</TableHead>
            <TableHead className="text-right w-[120px]">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {isLoading
            ? // 👇 Render 5 skeleton rows while loading
              Array.from({ length: 10 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton className="h-4 w-32" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-48" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-20" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-28" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Skeleton className="h-8 w-8 rounded-md" />
                  </TableCell>
                </TableRow>
              ))
            : data?.data.map((user) => (
                <TableRow
                  className="hover:bg-muted/50 transition-colors"
                  key={user.email}
                >
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell className="text-right">
                    {user.isBlocked ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className="bg-green-600 hover:bg-green-700">
                            <ShieldCheckIcon className="w-4 h-4 text-white" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          <p className="text-foreground">UnBlock</p>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button className="bg-red-600 hover:bg-red-700">
                            <BanIcon className="w-4 h-4 text-white" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          <p className="text-foreground">Block</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Users;
