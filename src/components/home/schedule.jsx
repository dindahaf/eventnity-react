import Shedule1 from "../../assets/images/shedule-1.png"
import Shedule2 from "../../assets/images/shedule-2.png"
import Shedule3 from "../../assets/images/shedule-3.png"
import Shedule4 from "../../assets/images/shedule-4.png"
import Shedule5 from "../../assets/images/shedule-5.png"
import Shedule6 from "../../assets/images/shedule-6.png"

export function Schedule() {
  return (
    <div className="mx-auto mt-10 grid max-w-screen-xl grid-cols-4 gap-[20px] px-[30px] md:grid-cols-8 lg:grid-cols-12 lg:pt-[162px]">
      <div className="wow animate__animated animate__slideInUp col-span-4 text-center md:col-span-8 lg:col-span-12">
        <h1 className="font-fredoka text-3xl font-semibold md:text-[64px]">
          EVENT SCHEDULE
        </h1>
      </div>
      <div className="col-span-4 grid grid-cols-1 gap-y-[40px] md:col-span-8 md:mt-[127px] md:grid-cols-2 lg:col-span-12 lg:grid-cols-3 lg:gap-x-[53px] lg:gap-y-[106px]">
        <div className="wow animate__animated animate__slideInLeft w-[260px] md:h-[332px] md:w-[300px]">
          <div className="flex flex-col gap-[14px]">
            <div>
              <img
                className="h-full w-full"
                src={Shedule1}
                alt={Shedule1}
              />
            </div>
            <div>
              <div className="flex flex-row justify-between">
                <p className="font-inter text-xs font-medium leading-4 text-[#6B7280]">
                  February 6th 2023
                </p>
                <p className="font-inter text-xs font-medium leading-4 text-[#6B7280]">
                  10 PM to 12 PM
                </p>
              </div>
              <div className="mt-2 flex flex-col items-start gap-2">
                <h1 className="font-inter text-xl font-bold leading-7 text-[#374151]">
                  Meet up Freelancer
                </h1>
                <p className="font-inter text-xs leading-4 text-[#6B7280]">
                  Become a potential and professional freelancer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wow animate__animated animate__fadeIn w-[260px] md:h-[332px] md:w-[300px]">
          <div className="flex flex-col gap-[14px]">
            <div>
              <img
                className="h-full w-full"
                src={Shedule2}
                alt={Shedule2}
              />
            </div>
            <div>
              <div className="flex flex-row justify-between">
                <p className="font-inter text-xs font-medium leading-4 text-[#6B7280]">
                  February 17th 2023
                </p>
                <p className="font-inter text-xs font-medium leading-4 text-[#6B7280]">
                  10 PM to 12 PM
                </p>
              </div>
              <div className="mt-2 flex flex-col items-start gap-2">
                <h1 className="font-inter text-xl font-bold leading-7 text-[#374151]">
                  Metal Band Concert
                </h1>
                <p className="font-inter text-xs leading-4 text-[#6B7280]">
                  Become a potential and professional freelancer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wow animate__animated animate__slideInRight w-[260px] md:h-[332px] md:w-[300px]">
          <div className="flex flex-col gap-[14px]">
            <div>
              <img
                className="h-full w-full"
                src={Shedule3}
                alt={Shedule3}
              />
            </div>
            <div>
              <div className="flex flex-row justify-between">
                <p className="font-inter text-xs font-medium leading-4 text-[#6B7280]">
                  February 28th 2023
                </p>
                <p className="font-inter text-xs font-medium leading-4 text-[#6B7280]">
                  9 AM to 4 PM
                </p>
              </div>
              <div className="mt-2 flex flex-col items-start gap-2">
                <h1 className="font-inter text-xl font-bold leading-7 text-[#374151]">
                  International Education Exhibition
                </h1>
                <p className="font-inter text-xs leading-4 text-[#6B7280]">
                  Explore knowledge from the outside world
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wow animate__animated animate__slideInLeft w-[260px] md:h-[332px] md:w-[300px]">
          <div className="flex flex-col gap-[14px]">
            <div>
              <img
                className="h-full w-full"
                src={Shedule4}
                alt={Shedule4}
              />
            </div>
            <div>
              <div className="flex flex-row justify-between">
                <p className="font-inter text-xs font-medium leading-4 text-[#6B7280]">
                  February 6th 2023
                </p>
                <p className="font-inter text-xs font-medium leading-4 text-[#6B7280]">
                  10 PM to 12 PM
                </p>
              </div>
              <div className="mt-2 flex flex-col items-start gap-2">
                <h1 className="font-inter text-xl font-bold leading-7 text-[#374151]">
                  Beatbox Battle Festival
                </h1>
                <p className="font-inter text-xs leading-4 text-[#6B7280]">
                  Become a potential and professional freelancer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wow animate__animated animate__fadeIn w-[260px] md:h-[332px] md:w-[300px]">
          <div className="flex flex-col gap-[14px]">
            <div>
              <img
                className="h-full w-full"
                src={Shedule5}
                alt={Shedule5}
              />
            </div>
            <div>
              <div className="flex flex-row justify-between">
                <p className="font-inter text-xs font-medium leading-4 text-[#6B7280]">
                  Maret 8th 2023
                </p>
                <p className="font-inter text-xs font-medium leading-4 text-[#6B7280]">
                  18 AM to 10 PM
                </p>
              </div>
              <div className="mt-2 flex flex-col items-start gap-2">
                <h1 className="font-inter text-xl font-bold leading-7 text-[#374151]">
                  Festival Holi Indian
                </h1>
                <p className="font-inter text-xs leading-4 text-[#6B7280]">
                  Color your life with us, let's join the festival now
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wow animate__animated animate__slideInRight w-[260px] md:h-[332px] md:w-[300px]">
          <div className="flex flex-col gap-[14px]">
            <div>
              <img
                className="h-full w-full"
                src={Shedule6}
                alt={Shedule6}
              />
            </div>
            <div>
              <div className="flex flex-row justify-between">
                <p className="font-inter text-xs font-medium leading-4 text-[#6B7280]">
                  Maret 17th 2023
                </p>
                <p className="font-inter text-xs font-medium leading-4 text-[#6B7280]">
                  8 PM to 12 PM
                </p>
              </div>
              <div className="mt-2 flex flex-col items-start gap-2">
                <h1 className="font-inter text-xl font-bold leading-7 text-[#374151]">
                  Concert Coldplay Band
                </h1>
                <p className="font-inter text-xs leading-4 text-[#6B7280]">
                  Become a potential and professional freelancer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 flex flex-row justify-center md:col-span-8 md:mt-[103px] lg:col-span-12">
        <button className="rounded-lg bg-[#070148] px-4 py-2 font-rubik text-xs font-medium text-[#FFF] md:rounded-[10px] md:px-[70px] md:py-[30px] md:text-2xl">
          Explore Event
        </button>
      </div>
    </div>
  );
}
