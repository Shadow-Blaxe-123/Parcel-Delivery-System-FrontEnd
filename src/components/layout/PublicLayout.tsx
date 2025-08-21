import type { ReactNode } from "react";
import Navigation from "./Navigation";

function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
export default PublicLayout;
