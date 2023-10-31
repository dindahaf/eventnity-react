import { VENUES } from "../../data/data";
import Venue1 from "../../assets/images/venue-1.png";
import Venue2 from "../../assets/images/venue-2.png";
import { Square } from "../../components/common/button";

export function Venue() {
  return (
    <div className="mx-auto mt-[36px] grid max-w-screen-xl grid-cols-4 gap-[20px] px-[30px] lg:h-[1396px] md:grid-cols-8 lg:mt-[103px] lg:grid-cols-12">
      <div className="wow animate__animated animate__slideInLeft relative col-span-4 md:col-span-4 lg:col-span-6 lg:mt-[109px]">
        <h1 className="text-center font-rubik text-3xl font-semibold md:text-left md:text-6xl md:leading-[100px] lg:text-8xl lg:leading-[144px]">
          Explore Beautiful Venues
        </h1>
        <div class="relative mt-[36px]">
          <img
            src={Venue2}
            alt={Venue2}
            className="h-auto w-[170px] md:h-[525px] md:w-auto lg:h-[675px] lg:w-[438px]"
          />
          <div className="wow animate__animated animate__slideInDown absolute right-0 top-[50px] z-10 flex flex-col items-start rounded-lg bg-white px-4 py-3 shadow-[0px_4px_40px_0px_rgba(91,33,182,0.19)] lg:bottom-[88px] lg:left-[318px] lg:top-[342px] md:w-[291px] md:gap-[10px] md:rounded-[30px] md:px-[40px] md:py-[31px]">
            <div className="flex flex-col items-end gap-2 md:items-start md:gap-[28px]">
              <Square
                titleName="VENUE : 2"
                titleClassName="font-rubik text-xs font-medium text-[#6B7280] md:text-xl"
                locationName="KEMPINSKI HOTEL INDONESIA"
                locationClassName="text-right font-rubik text-base font-medium leading-6 text-[#1F2937] md:text-2xl md:leading-9"
                cityClassName="font-rubik text-[10px] font-medium leading-5 text-[#6B7280] md:text-sm"
                cityName="Jakarta, Indonesia"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="wow animate__animated animate__slideInRight col-span-4 mt-[36px] lg:col-span-6 lg:mt-[109px]">
        <div className="relative h-[275px] lg:mt-[185px] md:h-[525px] lg:h-[675px]">
          <img
            src={Venue1}
            alt={Venue1}
            className="absolute right-0 h-auto w-[170px] md:h-[525px] md:w-auto lg:h-[675px] lg:w-[438px]"
          />

          <div className="wow animate__animated animate__slideInDown absolute left-0 top-[50px] z-10 flex flex-col items-start gap-[10px] rounded-lg bg-white px-4 py-3 shadow-[0px_4px_40px_0px_rgba(91,33,182,0.19)] md:rounded-[30px] md:px-[40px] md:py-[31px] lg:right-[330px] lg:top-[133px] lg:w-[313px]">
            <div className="flex flex-col items-start gap-2 md:gap-[28px]">
              <Square
                titleName="VENUE : 1"
                titleClassName="font-rubik text-xs font-medium text-[#6B7280] md:text-xl"
                locationName="REGAEL CONVENTION HALL"
                locationClassName="text-right font-rubik text-base font-medium leading-6 text-[#1F2937] md:text-2xl md:leading-9"
                cityClassName="font-rubik text-[10px] font-medium leading-5 text-[#6B7280] md:text-sm"
                cityName="North Sumatera, Indonesia"
              />
            </div>
          </div>
        </div>
        <div className="md:mt-[66px] lg:relative">
          <p className="font-inter text-sm md:text-xl md:leading-8 lg:w-[438px] lg:text-[28px] lg:leading-10 lg:absolute lg:right-0">
            Explore new ideas at astoundingly beautiful venues. Attend Tech
            Startup Conferences and meet new brilliant minds from all over the
            world.
          </p>
        </div>
      </div>
    </div>
  );
}
