import Logo from "@/assets/Logo";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Logo or Brand Icon */}
          <Link to={"/"}>
            <Logo />
          </Link>

          {/* Footer Text */}
          <p className="mt-4 text-center text-sm text-muted-foreground sm:mt-0 sm:text-right">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
