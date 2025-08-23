import type { ReactNode } from "react";
import Navigation from "./Navigation";
import { Footer } from "./Footer";

function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky, semi-transparent, blurred navbar */}
      <div className="sticky top-0 z-50 backdrop-blur bg-background/70 border-b">
        <Navigation />
      </div>

      {/* Content goes behind navbar on scroll */}
      <main className="-mt-[1px] grow pt-4">{children}</main>

      <Footer />
    </div>
  );
}
export default PublicLayout;
