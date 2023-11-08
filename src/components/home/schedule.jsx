import { ScheduleItem } from "../common/schedule-item";
import { SCHEDULES } from "../../data/data";
import Shedule1 from "../../assets/images/shedule-1.png";
import Shedule2 from "../../assets/images/shedule-2.png";
import Shedule3 from "../../assets/images/shedule-3.png";
import Shedule4 from "../../assets/images/shedule-4.png";
import Shedule5 from "../../assets/images/shedule-5.png";
import Shedule6 from "../../assets/images/shedule-6.png";

export function Schedule() {
  return (
    <div className="mx-auto mt-10 grid max-w-screen-xl grid-cols-4 gap-[20px] px-[30px] md:grid-cols-8 lg:grid-cols-12 lg:pt-[162px]">
      <div className="wow animate__animated animate__slideInUp col-span-4 text-center md:col-span-8 lg:col-span-12">
        <h1 className="font-fredoka text-3xl font-semibold md:text-[64px]">
          EVENT SCHEDULE
        </h1>
      </div>
      <div className="col-span-4 grid grid-cols-1 gap-y-[40px] md:col-span-8 md:mt-[127px] md:grid-cols-2 lg:col-span-12 lg:grid-cols-3 lg:gap-x-[53px] lg:gap-y-[106px]">
        {SCHEDULES.map((item) => (
          <ScheduleItem
            key={item.id}
            image={item.image}
            date={item.date}
            time={item.time}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="col-span-4 flex flex-row justify-center md:col-span-8 md:mt-[103px] lg:col-span-12">
        <button className="rounded-lg bg-[#070148] px-4 py-2 font-rubik text-xs font-medium text-[#FFF] md:rounded-[10px] md:px-[70px] md:py-[30px] md:text-2xl">
          Explore Event
        </button>
      </div>
    </div>
  );
}
