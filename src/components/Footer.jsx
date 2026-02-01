import { Link } from "react-router-dom";
import { InstagramIcon, GithubIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8">
        <Link to="/">
          <div className="flex items-center gap-3">
            <h1 className="text-foreground gap-3 text-3xl font-bold">
              Firefly
            </h1>
          </div>
        </Link>

        <div className="flex items-center gap-5 whitespace-nowrap">
          <Link
            to="#"
            className="opacity-80 transition-opacity duration-300 hover:opacity-100"
          >
            Home
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="#">
            <GithubIcon className="size-5" />
          </Link>
          <Link to="#">
            <InstagramIcon className="size-5" />
          </Link>
        </div>
      </div>

      <Separator />

      <div className="mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6">
        <p className="text-center font-medium text-balance">
          {`©${new Date().getFullYear()}`} | Made with ❤️ by Mercury.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
