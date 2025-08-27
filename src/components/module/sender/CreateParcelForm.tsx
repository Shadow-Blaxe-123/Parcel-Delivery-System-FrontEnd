"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import type { ParcelTypes } from "@/types";

const createParcelSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(50, "Title must be at most 50 characters long"),
  weight: z.number(),
  deliveryDate: z.union([z.string(), z.date()]).optional(),
  receiverEmail: z.email(),
  fee: z.number(),
  type: z.string(),
});

type ParcelFormValues = z.infer<typeof createParcelSchema>;
const parcelTypes: ParcelTypes[] = [
  "Box",
  "Clothing",
  "Document",
  "Electronics",
  "Fragile",
  "Perishable",
  "Other",
];

export default function CreateParcelForm() {
  const form = useForm<ParcelFormValues>({
    resolver: zodResolver(createParcelSchema),
    defaultValues: {
      title: "",
      weight: 0,
      deliveryDate: new Date(),
      receiverEmail: "",
      fee: 0,
      type: undefined,
    },
  });

  const onSubmit = (values: ParcelFormValues) => {
    console.log("Submitting parcel:", values);
    // call your API here
  };

  return (
    <div className="flex flex-col gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Parcel title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Delivery Date */}
          <FormField
            control={form.control}
            name="deliveryDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Delivery Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
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
                  <PopoverContent className="p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value as Date}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Receiver Email */}
          <FormField
            control={form.control}
            name="receiverEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Receiver Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="receiver@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex gap-5">
            {/* Weight */}
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Weight (kg)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter weight"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Fee */}
            <FormField
              control={form.control}
              name="fee"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Fee (BDT)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter fee" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Type */}
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {parcelTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full">
            Create Parcel
          </Button>
        </form>
      </Form>
    </div>
  );
}
