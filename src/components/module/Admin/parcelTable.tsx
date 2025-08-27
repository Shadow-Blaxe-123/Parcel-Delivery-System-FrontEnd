import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import {
  BanIcon,
  CalendarIcon,
  PencilIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { IError, ParcelStatus } from "@/types";
import {
  useBlockParcelMutation,
  useGetParcelsQuery,
  useUpdateParelMutation,
} from "@/store/api/admin.api";
import { toast } from "sonner";
import { BlockConfirmation } from "@/components/layout/BlockConfirmation";
import { useAppSelector } from "@/hooks/redux";
import { useForm } from "react-hook-form";
import type z from "zod";
import { updateAdminParcelSchema } from "./updateSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { parcelStatusOptions } from "@/types/parcel.types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useState } from "react";

function ParcelTable() {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetParcelsQuery({ page });
  const [trackingId, setTrackingId] = useState<string>("");

  const form = useForm<z.infer<typeof updateAdminParcelSchema>>({
    resolver: zodResolver(updateAdminParcelSchema),
    defaultValues: {
      trackingId: "",
      status: "",
      statusLog: {
        location: "",
        notes: "",
      },
    },
  });
  const admin = useAppSelector((state) => state.auth.user);
  const statusClassMap: Record<ParcelStatus, string> = {
    Requested: "bg-gray-500 text-white",
    Approved: "bg-yellow-600 text-white",
    Dispatched: "bg-purple-600 text-white",
    "In Transit": "bg-indigo-400 text-white",
    Delivered: "bg-green-600 text-white",
    Cancelled: "bg-red-600 text-white",
    Blocked: "bg-red-600 text-white",
  };

  const [blockParcel] = useBlockParcelMutation();
  const [updateParcel] = useUpdateParelMutation();

  const handleBlock = async (
    trackingId: string,
    isBlocked: boolean,
    status: ParcelStatus,
    blockable: boolean
  ) => {
    const msg = isBlocked
      ? "Parcel blocked successfully"
      : "Parcel unblocked successfully";

    const t = toast.loading("Loading...");
    if (!blockable) {
      toast.error("Parcel is not blockable as it has been dispatched", {
        id: t,
      });
      return;
    }
    try {
      await blockParcel({
        trackingId,
        isBlocked,
        address: admin?.address as string,
        status: status,
      }).unwrap();
      toast.success(msg, { id: t });
    } catch (error) {
      console.log(error);
      toast.error((error as IError)?.message || "Something went wrong", {
        id: t,
      });
    }
  };
  const onSubmit = async (data: z.infer<typeof updateAdminParcelSchema>) => {
    console.log(data);
    const t = toast.loading("Loading...");
    try {
      const d = {
        ...data,
        status: data.status as ParcelStatus,
        deliveryDate:
          typeof data.deliveryDate === "string"
            ? new Date(data.deliveryDate)
            : data.deliveryDate,
        trackingId,
      };

      const res = await updateParcel(d).unwrap();
      console.log(res);
      toast.success("Parcel updated successfully", { id: t });
    } catch (err) {
      console.log(err);
      toast.error(
        (err as IError)?.message ||
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (err as any)?.data?.message ||
          "Something went wrong",
        {
          id: t,
        }
      );
    }
  };

  return (
    <div className="rounded-lg border shadow-sm overflow-hidden">
      <Table className="text-sm">
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead className="w-[150px]">Tracking ID</TableHead>
            <TableHead className="w-[200px]">Title</TableHead>
            <TableHead className="w-[50px]">Type</TableHead>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead className="w-[100px]">Delivery Date</TableHead>
            <TableHead className="w-[140px]">Sender</TableHead>
            <TableHead className="w-[120px]">Receiver</TableHead>
            <TableHead className="w-[100px]">Fee</TableHead>
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
                  <TableCell>{parcel.type}</TableCell>
                  <TableCell>
                    <Badge
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        statusClassMap[parcel.status]
                      }`}
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
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-5">
                      <Dialog>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <DialogTrigger asChild>
                              <Button
                                className="text-foreground bg-muted hover:bg-primary"
                                onClick={() =>
                                  setTrackingId(parcel.trackingId as string)
                                }
                              >
                                <PencilIcon className="w-4 h-4" />
                              </Button>
                            </DialogTrigger>
                          </TooltipTrigger>
                          <TooltipContent side="bottom">
                            <p className="text-sm">Update</p>
                          </TooltipContent>
                        </Tooltip>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Update Parcel</DialogTitle>
                            <DialogDescription>
                              Update the parcel details.
                            </DialogDescription>
                          </DialogHeader>
                          <Form {...form}>
                            <form
                              onSubmit={form.handleSubmit(onSubmit)}
                              className="space-y-8"
                            >
                              <FormField
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Status</FormLabel>
                                    <Select
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger className="w-full">
                                          <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {parcelStatusOptions.map((status) => (
                                          <SelectItem
                                            key={status}
                                            value={status}
                                          >
                                            {status}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={form.control}
                                name="statusLog.location"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Location</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Location"
                                        {...field}
                                      />
                                    </FormControl>

                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="statusLog.notes"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Notes</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Notes" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="deliveryDate"
                                render={({ field }) => (
                                  <FormItem className="flex flex-col">
                                    <FormLabel>Date of birth</FormLabel>
                                    <Popover>
                                      <PopoverTrigger asChild>
                                        <FormControl>
                                          <Button
                                            variant={"outline"}
                                            className={cn(
                                              "w-[240px] pl-3 text-left font-normal",
                                              !field.value &&
                                                "text-muted-foreground"
                                            )}
                                          >
                                            {field.value ? (
                                              format(field.value, "PPP")
                                            ) : (
                                              <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                          </Button>
                                        </FormControl>
                                      </PopoverTrigger>
                                      <PopoverContent
                                        className="w-auto p-0"
                                        align="start"
                                      >
                                        <Calendar
                                          mode="single"
                                          selected={field.value as Date}
                                          onSelect={field.onChange}
                                          disabled={(date) =>
                                            date <
                                            new Date(
                                              new Date().setHours(0, 0, 0, 0)
                                            )
                                          }
                                          captionLayout="dropdown"
                                        />
                                      </PopoverContent>
                                    </Popover>

                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <Button type="submit">Submit</Button>
                            </form>
                          </Form>
                        </DialogContent>
                      </Dialog>

                      {parcel.isBlocked ? (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <BlockConfirmation
                              onConfirm={() =>
                                handleBlock(
                                  parcel.trackingId as string,
                                  false,
                                  "Requested",
                                  true
                                )
                              }
                              msg="Are you sure you want to unblock this parcel?"
                            >
                              <Button
                                className="bg-green-600 hover:bg-green-700"
                                size="icon"
                              >
                                <ShieldCheckIcon className="w-4 h-4 text-white" />
                              </Button>
                            </BlockConfirmation>
                          </TooltipTrigger>
                          <TooltipContent side="bottom">
                            <p className="text-sm">Unblock</p>
                          </TooltipContent>
                        </Tooltip>
                      ) : (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <BlockConfirmation
                              onConfirm={() =>
                                handleBlock(
                                  parcel.trackingId as string,
                                  true,
                                  "Blocked",
                                  parcel.status === "Requested" ||
                                    parcel.status === "Approved"
                                )
                              }
                              msg="Are you sure you want to block this parcel?"
                            >
                              <Button
                                className="bg-red-600 hover:bg-red-700"
                                size="icon"
                              >
                                <BanIcon className="w-4 h-4 text-white" />
                              </Button>
                            </BlockConfirmation>
                          </TooltipTrigger>
                          <TooltipContent side="bottom">
                            <p className="text-sm">Block</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem className="cursor-pointer">
            <PaginationPrevious onClick={() => page > 1 && setPage(page - 1)} />
          </PaginationItem>

          <PaginationItem className="cursor-pointer">
            <PaginationLink isActive>{page}</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem className="cursor-pointer">
            <PaginationNext
              onClick={() =>
                data?.meta?.totalPages &&
                data.meta.totalPages > page &&
                setPage(page + 1)
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
export default ParcelTable;
