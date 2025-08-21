// app/about/page.tsx

import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="flex justify-center">
      <div className="container max-w-4xl py-10 space-y-10 ">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            About the Parcel Delivery System
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            A secure, role-based, and user-friendly frontend built for modern
            parcel logistics. Inspired by services like{" "}
            <strong>Pathao Courier</strong> and <strong>Sundarban</strong>, our
            system allows seamless interaction between Senders, Receivers, and
            Admins.
          </p>
        </div>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">Core Features</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              🧑‍🤝‍🧑 <strong>Role-based dashboards</strong> tailored for Senders,
              Receivers, and Admins.
            </li>
            <li>
              ⚡ <strong>Real-time API</strong> integration with Redux Toolkit &
              RTK Query.
            </li>
            <li>
              🎯 <strong>Unique parcel tracking ID</strong> for public &
              authenticated users.
            </li>
            <li>
              📱 <strong>Responsive UI</strong> built with ShadCN + Tailwind.
            </li>
            <li>
              🛡️ <strong>Secure authentication</strong> with protected routes
              and state management.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            User Roles & Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">Sender</Badge> Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>📦 Create parcel delivery requests</p>
                <p>❌ Cancel parcels before dispatch</p>
                <p>📊 Track all created parcels & their statuses</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">Receiver</Badge> Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>📥 View incoming parcels</p>
                <p>✅ Confirm delivery</p>
                <p>📁 View delivery history</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">Admin</Badge> Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>👥 Manage users (block/unblock)</p>
                <p>📦 Oversee all parcels & statuses</p>
                <p>🧑‍🔧 Assign delivery personnel (optional)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="outline">Public</Badge> Parcel Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-2">
                <p>🔍 Track parcels using unique tracking ID</p>
                <p>📝 View status logs with timestamps & notes</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="text-muted-foreground space-y-1">
            <p>
              💻 <strong>Frontend:</strong> React.js + Next.js + ShadCN UI
            </p>
            <p>
              ⚙️ <strong>State Management:</strong> Redux Toolkit + RTK Query
            </p>
            <p>
              🎨 <strong>Styling:</strong> Tailwind CSS + Dark Mode Support
            </p>
            <p>
              🔐 <strong>Auth & Access:</strong> Role-based routing + JWT
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
