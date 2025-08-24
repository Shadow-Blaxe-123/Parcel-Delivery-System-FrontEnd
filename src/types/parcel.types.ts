export type ParcelTypes =
  | "Document"
  | "Box"
  | "Fragile"
  | "Electronics"
  | "Clothing"
  | "Perishable"
  | "Other";

export type ParcelStatus =
  | "Requested"
  | "Approved"
  | "Dispatched"
  | "In Transit"
  | "Delivered"
  | "Cancelled";

export interface ParcelStatusLog {
  // Auto from service layer
  timestamp: Date;
  status: ParcelStatus;
  updatedBy: string;
  // Req.body
  location: string;
  notes?: string;
}

export interface IParcel {
  _id?: string;
  title: string;
  weight: number;
  deliveryDate: Date;
  isBlocked: boolean;
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  // Need extra logic
  trackingId?: string; // from pre save hook
  sender: string; // Req.Sender -> Service Layer -> Get Id from req.user -> Save
  receiver: string; // Req.ReceiverEmail -> Service Layer -> Fetch Id from DB -> Save
  toAddress: string; // Fetch from DB in service
  toPhone: string; // Fetch from DB in service
  fromAddress: string; // Fetch from DB in service
  fromPhone: string; // Fetch from DB in service
  fee: number; // Calculated sendercut + (sendercut * 20%) + (weight * distance * 20tk)
  // Enums
  type: ParcelTypes;
  status: ParcelStatus;
  statusLogs: ParcelStatusLog[];
}
export interface ICreateParcel {
  title: string;
  weight: number;
  deliveryDate: Date;
  // Need extra logic
  receiverEmail: string;
  fee: number;
  type: ParcelTypes;
  receiver?: string;
}
