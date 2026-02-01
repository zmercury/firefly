import { Outlet } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";

// const navData = [
//   { title: "Home", href: "/" },
//   { title: "Products", href: "/products" },
//   { title: "About Us", href: "/about" },
//   { title: "Contacts", href: "/contact" },
// ];

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* <Navbar navigationData={navData} /> */}

      <main className="flex-1 p-4">
        <Outlet />
      </main>

      {/* <Footer /> */}
      <ModeToggle />
    </div>
  );
}

export default MainLayout;
