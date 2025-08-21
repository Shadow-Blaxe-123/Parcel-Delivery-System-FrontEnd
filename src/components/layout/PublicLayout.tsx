import type { ReactNode } from "react";
import Navigation from "./Navigation";
import { Footer } from "./Footer";

function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
export default PublicLayout;
