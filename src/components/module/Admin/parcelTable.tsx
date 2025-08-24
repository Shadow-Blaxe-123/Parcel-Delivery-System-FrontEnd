import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BanIcon, ShieldCheckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ParcelStatus } from "@/types";
import { useGetParcelsQuery } from "@/store/api/admin.api";

function ParcelTable() {
  const statusClassMap: Record<ParcelStatus, string> = {
    Requested: "bg-gray-500 text-white",
    Approved: "bg-yellow-600 text-white",
    Dispatched: "bg-purple-600 text-white",
    "In Transit": "bg-indigo-400 text-white",
    Delivered: "bg-green-600 text-white",
    Cancelled: "bg-red-600 text-white",
  };

  const { data, isLoading } = useGetParcelsQuery(null);
  return (
    <div className="rounded-lg border shadow-sm overflow-hidden">
      <Table className="text-sm">
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead className="w-[150px]">Tracking ID</TableHead>
            <TableHead className="w-[200px]">Title</TableHead>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead className="w-[140px]">Delivery Date</TableHead>
            <TableHead className="w-[140px]">Sender</TableHead>
            <TableHead className="w-[120px]">Receiver</TableHead>
            <TableHead className="w-[120px]">Fee</TableHead>
            <TableHead className="text-right w-[120px]">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {isLoading
            ? Array.from({ length: 10 }).map((_, i) => (
                <TableRow key={i} className="animate-pulse">
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
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-28" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-8 w-8 rounded-md" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Skeleton className="h-8 w-8 rounded-md" />
                  </TableCell>
                </TableRow>
              ))
            : data?.data.map((parcel) => (
                <TableRow
                  className="hover:bg-muted/50 transition-colors"
                  key={parcel._id}
                >
                  <TableCell className="font-medium text-primary">
                    {parcel.trackingId}
                  </TableCell>
                  <TableCell>{parcel.title}</TableCell>
                  <TableCell>
                    <Badge
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        statusClassMap[parcel.status]
                      }`}
                      // style={{
                      //   color: "white",
                      // }}
                    >
                      {parcel.status}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    {new Date(parcel.deliveryDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{parcel.sender?.name ?? "N/A"}</TableCell>
                  <TableCell>{parcel.receiver?.name ?? "N/A"}</TableCell>
                  <TableCell>{parcel.fee}</TableCell>
                  <TableCell className="text-right grid grid-cols-3 gap-5">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button className="text-foreground">View Icons</Button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p className="text-sm">View</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button className="text-foreground">
                          Update Icons
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p className="text-sm">Update</p>
                      </TooltipContent>
                    </Tooltip>
                    {parcel.isBlocked ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            className="bg-green-600 hover:bg-green-700"
                            size="icon"
                          >
                            <ShieldCheckIcon className="w-4 h-4 text-white" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          <p className="text-sm">Unblock</p>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            className="bg-red-600 hover:bg-red-700"
                            size="icon"
                          >
                            <BanIcon className="w-4 h-4 text-white" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          <p className="text-sm">Block</p>
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
export default ParcelTable;
