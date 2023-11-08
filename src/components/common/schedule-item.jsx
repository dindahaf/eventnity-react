export function ScheduleItem({ image, date, time, title, description }){
    return (
      <div className="wow animate__animated animate__slideInLeft w-[260px] md:h-[332px] md:w-[300px]">
          <div className="flex flex-col gap-[14px]">
            <div>
              <img
                className="h-full w-full"
                src={image}
                alt={image}
              />
            </div>
            <div>
              <div className="flex flex-row justify-between">
                <p className="font-inter text-xs font-medium leading-4 text-[#6B7280]">
                  {date}
                </p>
                <p className="font-inter text-xs font-medium leading-4 text-[#6B7280]">
                  {time}
                </p>
              </div>
              <div className="mt-2 flex flex-col items-start gap-2">
                <h1 className="font-inter text-xl font-bold leading-7 text-[#374151]">
                  {title}
                </h1>
                <p className="font-inter text-xs leading-4 text-[#6B7280]">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
    )
} 