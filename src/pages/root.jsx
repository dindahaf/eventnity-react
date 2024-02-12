import { Outlet } from "react-router-dom"
import { Navbar } from "../components/common/navbar";
import { SideNavigation } from "../components/common/side-navigation";

function RootLayout() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <SideNavigation/>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
