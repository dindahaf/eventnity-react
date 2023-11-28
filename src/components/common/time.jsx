export function Time({value, unit}){
    return (
        <>
        <h1 className="text-center font-inter text-4xl font-extrabold md:text-7xl">
            {value}
          </h1>
          <h2 className="text-center font-inter text-xs font-extrabold leading-8 text-[#6B7280] md:text-xl lg:text-2xl">
            {unit}
          </h2>
          </>
    )
}