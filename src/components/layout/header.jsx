import { Button } from "../common/button";
import { MENUS } from "../../data/data"


function NavBar() {
  const listItems = MENUS.map((menu) => (
    <div
      key={menu.id}
      className="font-fredoka text-xs font-medium md:pr-3 md:text-[18px] lg:pl-[10px] lg:pr-[30px]"
    >
      {menu.title}
    </div>
  ));

  return (
    <a
      href="#"
      className="flex flex-col items-end md:flex md:flex-row md:items-center"
    >
      {listItems}
    </a>
  );
}

function Header() {
  return (
    <div className="mx-auto mt-[46px] grid max-w-screen-xl grid-cols-4 gap-[20px] px-[30px] md:grid-cols-8 lg:grid-cols-12">
      <div className="col-span-3 font-fredoka text-xl font-semibold md:col-span-2 md:flex md:items-center lg:col-span-3 lg:text-[28px]">
        Eventnity
      </div>
      <div className="col-span-1 flex flex-col items-end md:col-span-6 md:flex md:flex-row md:items-center md:justify-between lg:col-span-9">
        <NavBar />
        <div className="flex content-between items-center">
          <Button name="Login" className="pr-2 font-fredoka text-xs font-medium md:text-[18px] lg:pr-[41px]"/>
          <Button name="Register" className="rounded-lg bg-[#070148] px-4 py-1 font-rubik text-xs text-white md:text-[18px] lg:rounded-[14px] lg:px-[40px] lg:py-[15px]"/>
        </div>
      </div>
    </div>
  );
}


export default Header;
