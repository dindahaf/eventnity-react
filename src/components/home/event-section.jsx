import EventImg from "../../assets/images/event.png";
import { Square } from "../common/square";
import { Time } from "../common/time";
import { TIMES } from "../../data/data";

export function Event() {
  return (
    <div className="wow animate__animated animate__slideInUp mx-auto mt-10 md:mt-36 grid max-w-screen-xl grid-cols-4 gap-[20px] px-[30px] lg:mt-[127px] md:grid-cols-8 lg:grid-cols-12">
      <div className="col-span-4 text-center md:col-span-8 lg:col-span-12">
        <h1 className="font-fredoka text-3xl font-semibold md:text-[64px]">
          RECAP EVENT 2022
        </h1>
      </div>

      <div className="relative col-span-4 h-[128px] md:h-[347px] md:col-span-8 md:mt-[57px] lg:h-[597px] lg:col-span-12">
        <div className="absolute col-span-4 md:col-span-4 lg:col-span-12">
          <img src={EventImg} alt={EventImg} className="" />
        </div>

        <div className="absolute col-span-4 flex flex-col md:col-span-8 md:left-5 md:top-5 lg:left-[61px] lg:top-[100px] lg:col-span-12 md:w-[660px] lg:w-[1067px] md:gap-y-[100px] lg:gap-y-[172px]">
          <div className="col-span-4 md:col-span-8 lg:col-span-12">
            <h1 className="font-inter text-xl font-black text-[#FFF] md:text-6xl">
              Green Day
            </h1>
            <h2 className="font-inter text-sm font-medium text-[#FFF] md:text-3xl md:leading-9">
              California, USA
            </h2>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <div className="flex items-center">
                <svg
                  className="absolute w-[40px] h-[40px] md:w-[98px] md:h-[98px] left-[11px] z-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 98 98"
                  fill="none"
                >
                  <circle cx="49" cy="49" r="49" fill="white" />
                </svg>

                <svg
                  className="z-20 w-[50px] h-[50px] md:w-[120px] md:h-[120px] stroke-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120 120"
                >
                  <path
                    fillRule="evenodd"
                    d="M60 108c26.51 0 48-21.49 48-48S86.51 12 60 12 12 33.49 12 60s21.49 48 48 48Zm-2.672-64.992A6 6 0 0 0 48 48v24a6 6 0 0 0 9.328 4.992l18-12a6 6 0 0 0 0-9.984l-18-12Z"
                    clipRule="evenodd"
                  />
                </svg>
                <h2 className="font-fredoka text-sm font-medium text-[#FFF] md:text-2xl lg:text-4xl">
                  START VIDEO
                </h2>
              </div>
            </div>
            <h3 className="flex items-center font-inter text-[8px] font-medium text-[#FFF] md:text-2xl md:leading-8">
              February 29, 2023
            </h3>
          </div>
        </div>
      </div>
      <div className="wow animate__animated animate__slideInUp col-span-4 grid grid-cols-1 lg:gap-x-[102px] md:col-span-8 md:mt-6 lg:mt-[121px] md:grid-cols-4 lg:col-span-12">
        {TIMES.map((item) => {
          return (
            <Square
              className="m-auto px-9 py-5 lg:px-[70px] lg:py-[36px]"
              key={item.id}
            >
              <Time value={item.value} unit={item.unit}></Time>
            </Square>
          );
        })}
      </div>
    </div>
  );
}
