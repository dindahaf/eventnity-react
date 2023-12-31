import PartnerBd from "../../assets/images/partner-bd.png";
import PartnerCanva from "../../assets/images/partner-canva.png";
import PartnerCoca from "../../assets/images/partner-coca.png";
import PartnerGenpact from "../../assets/images/partner-genpact.png";
import PartnerHulu from "../../assets/images/partner-hulu.png";
import PartnerSpotify from "../../assets/images/partner-spotify.png";
import PartnerTiktok from "../../assets/images/partner-tiktok.png";
import PartnerUniversal from "../../assets/images/partner-universal.png";
import { Square } from "../common/square";
import { Partner } from "../common/partner";
import { PARTNERS } from "../../data/data";
import { Button } from "../common/button";

export function PartnerSection() {
  return (
    <div className="mx-auto mt-10 grid max-w-screen-xl grid-cols-4 gap-[20px] px-[30px] md:mt-[148px] md:grid-cols-8 lg:grid-cols-12">
      <div className="col-span-4 flex flex-col gap-9 md:col-span-8 md:gap-[82px] lg:col-span-12">
        <div>
          <h1 className="wow animate__animated animate__slideInUp text-center font-rubik text-3xl font-medium md:text-[75px]">
            Client Partner
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-x-[20px] lg:gap-x-[92px] md:gap-y-[56px] lg:grid-cols-4">
          {PARTNERS.map((item) => (
            <Square key={item.id} className="wow animate__animated animate__slideInUp flex h-[100px] w-[125px] flex-wrap content-center justify-center px-4 py-2 md:h-[143px] md:w-[200px] md:px-[27px] md:py-[28px]">
              <Partner imageURL={item.image} />
            </Square>
          ))}
        </div>
        <div className="col-span-12 flex justify-center">
          <Button variant={"secondary"}>
          All Client Partner
          </Button>
          {/* <button className="rounded-[10px] bg-[#070148] px-4 py-2 font-rubik text-xs font-medium text-[#FFF] md:px-[78px] md:py-[32px] md:text-2xl">
            All Client Partner
          </button> */}
        </div>
      </div>
    </div>
  );
}
