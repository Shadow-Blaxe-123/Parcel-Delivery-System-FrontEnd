import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetUsersQuery } from "@/store/api/admin.api";
import { CheckCircle, Package, Truck, Users, XCircle } from "lucide-react";

function Overview() {
  const { data } = useGetUsersQuery(null);
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-6 lg:mx-20">
      {/* Total Users */}
      <Card className="shadow-md hover:shadow-lg transition">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          <Users className="w-6 h-6 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data?.meta?.total}</div>
        </CardContent>
      </Card>

      {/* Total Parcels */}
      <Card className="shadow-md hover:shadow-lg transition">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Parcels</CardTitle>
          <Package className="w-6 h-6 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">438</div>
        </CardContent>
      </Card>

      {/* Delivered */}
      <Card className="shadow-md hover:shadow-lg transition">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Delivered</CardTitle>
          <CheckCircle className="w-6 h-6 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">321</div>
        </CardContent>
      </Card>

      {/* In Transit */}
      <Card className="shadow-md hover:shadow-lg transition">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">In Transit</CardTitle>
          <Truck className="w-6 h-6 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">89</div>
        </CardContent>
      </Card>

      {/* Cancelled */}
      <Card className="shadow-md hover:shadow-lg transition">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Cancelled</CardTitle>
          <XCircle className="w-6 h-6 text-red-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">28</div>
        </CardContent>
      </Card>
    </div>
  );
}
export default Overview;
