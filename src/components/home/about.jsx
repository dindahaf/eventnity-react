import { Button } from "../common/button";
import About1 from "../../assets/images/about-1.png";
import About2 from "../../assets/images/about-2.png";
import { Square } from "../../components/common/square";

export function About() {
  return (
    <div className="relative mx-auto grid max-w-screen-xl grid-cols-4 gap-[20px] px-[30px] md:grid-cols-8 lg:grid-cols-12">
      <div className="wow animate__animated animate__slideInLeft col-span-4 mt-[36px] md:col-span-8 lg:col-span-6">
        <h1 className="md:text-center lg:text-left font-rubik text-3xl font-semibold md:mt-36 md:text-5xl lg:text-[64px] lg:mt-[300px]">
          About Eventnity
        </h1>
        <p className="md:text-center lg:text-left  font-inter text-[10px] md:mt-[36px] lg:w-[551px] md:text-[28px] md:leading-10">
          Evenity is event management expertise that helps and facilitates Event
          Planners in achieving the goal of carrying out an event.
        </p>
        <div className="flex items-center justify-center lg:block">
          <Button
            name="More About Us"
            className="mt-4 rounded-[10px] bg-[#070148] px-4 py-2 font-rubik text-xs font-medium text-[#FFF] md:px-[60px] md:py-[30px] md:text-2xl lg:mt-[97px]"
          />
        </div>
      </div>
      <div className="wow animate__animated animate__slideInRight relative col-span-4 h-[470px] md:col-span-8 md:mt-36 lg:col-span-6 lg:mt-0">
        <img
          src={About1}
          alt={About1}
          className="absolute h-auto w-[170px] md:h-[421px] md:w-[319px] lg:h-[421px] lg:w-[319px] lg:left-[42px] lg:top-[225px]"
        />
        <div>
          <Square className="wow animate__animated animate__slideInDown absolute right-0 top-[100px] md:top-[240px] z-10 px-4 py-4  md:right-[258px] md:px-[30px] md:py-[20px] lg:left-[99px] lg:top-[622px]">
            <h1 className="text-center font-rubik text-4xl font-medium md:text-[64px] md:leading-[94px]">
              46+
            </h1>
            <h2 className="text-center font-rubik text-[10px] font-medium leading-6 md:text-base">
            Events In The Last Year
            </h2>
          </Square>
        </div>

        {/* <div
              className="wow animate__animated animate__slideInDown absolute right-0 top-[100px] md:top-[240px] z-10 px-4 py-4  md:right-[258px] md:px-[30px] md:py-[20px] lg:left-[99px] lg:top-[622px]"
            >
              <h1
                className="text-center font-rubik text-4xl font-medium md:text-[64px] md:leading-[94px]"
              >
                46+
              </h1>
              <h2
                className="text-center font-rubik text-[10px] font-medium leading-6 md:text-base"
              >
                Events In The Last Year
              </h2>
            </div> */}
        <img
          src={About2}
          alt={About2}
          className="absolute bottom-0 md:top-0 right-0 h-auto w-[170px] md:h-[421px] md:w-[319px] lg:right-0 lg:top-[435px]"
        />
      </div>
    </div>
  );
}
