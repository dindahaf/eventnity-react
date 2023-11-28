import { Navbar } from "../components/common/navbar";
import { Product } from "../components/common/product";
import { SideNavigation } from "../components/common/side-navigation";

function Dashboard() {
  return (
    <>
      <Navbar />
      <SideNavigation />
      <Product />
    </>
  );
}

export default Dashboard;
