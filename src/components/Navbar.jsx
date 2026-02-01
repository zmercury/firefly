import { MenuIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = ({ navigationData }) => {
  return (
    <header className="bg-background sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-start justify-between gap-8 px-4 py-7 sm:px-6">
        <div className="text-muted-foreground flex flex-1 items-center gap-8 font-medium lg:gap-16">
          <Link to="/">
            <h1 className="text-foreground gap-3 text-3xl font-bold">
              Firefly
            </h1>
          </Link>
          <Link to="/" className="hover:text-primary max-md:hidden">
            Home
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden" asChild>
              <Button variant="outline" size="icon">
                <MenuIcon />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <a href={item.href}>{item.title}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
