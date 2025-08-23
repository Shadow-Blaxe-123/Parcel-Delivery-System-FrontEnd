import type { ReactNode } from "react";
import Navigation from "./Navigation";
import { Footer } from "./Footer";

function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky, semi-transparent, blurred navbar */}
      <div className="sticky top-0 z-50 bg-background border-b">
        <Navigation />
      </div>

      {/* Content below navbar */}
      <main className="grow">{children}</main>

      <Footer />
    </div>
  );
}
export default PublicLayout;
