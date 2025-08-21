// app/about/page.tsx

import image from "@/assets/img.jpg";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">About Swift</h1>
        <p className="text-muted-foreground text-lg">
          Swift is a secure, modern parcel delivery system built to simplify
          logistics for Senders, Receivers, and Admins. Inspired by platforms
          like Pathao Courier and Sundarban, we provide a seamless, role-based
          dashboard experience — all powered by real-time API integration.
        </p>
      </div>

      <Separator />

      <section className="py-16">
        <div className="container space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Transforming Parcel Delivery with Smart Logistics
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Our Parcel Delivery System is designed to simplify the way parcels
            are sent, tracked, and received. Whether you're a small business or
            an individual, we provide a seamless, real-time experience powered
            by modern technology. Built with secure authentication and
            intelligent workflows, we bring reliability to your doorstep.
          </p>
        </div>
      </section>

      <Separator />

      <section className="bg-muted py-16">
        <div className="container space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Mission
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            To revolutionize parcel delivery in emerging markets by making it
            accessible, trackable, and secure — empowering users with the tools
            to manage every delivery confidently. We aim to provide a trusted
            platform that bridges senders, receivers, and admins through
            transparency and efficiency.
          </p>
        </div>
      </section>

      <Separator />

      <section className="py-16">
        <div className="container space-y-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Meet the Team
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                name: "Shamyun Ahmed",
                role: "Frontend Engineer",
                img: image,
              },
              {
                name: "Shamyun Ahmed",
                role: "Backend Architect",
                img: image,
              },
              {
                name: "Shamyun Ahmed",
                role: "UX Designer",
                img: image,
              },
            ].map((member, i) => (
              <div key={i} className="space-y-3">
                <img
                  src={member.img}
                  alt={member.name}
                  className="mx-auto h-24 w-24 rounded-full object-cover border"
                />
                <div className="text-lg font-semibold">{member.name}</div>
                <div className="text-sm text-muted-foreground">
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why Choose SwiftParcel?</h2>
        <p className="text-muted-foreground">
          Whether you're a small business, a regular sender, or managing a
          logistics operation — SwiftParcel gives you the control, visibility,
          and reliability you need to streamline deliveries and ensure parcels
          reach their destination safely and efficiently.
        </p>
      </section>
    </div>
  );
}
