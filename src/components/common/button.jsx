export function Button({ name, className }) {
  return (
    <button className={className}>
     {name}
    </button>
  );

}

export function Square({ titleName, titleClassName, locationName, locationClassName, cityName, cityClassName }){
  return (
    <>
    <div className="flex flex-col items-end gap-1 md:items-start md:gap-[21px]">
                <h3 className= {titleClassName}>
                  {titleName} 
                </h3>
                <h2 className={locationClassName}>
                  {locationName}
                </h2>
              </div>
              <h4 className={cityClassName}>
                {cityName}
              </h4>
    </>
  )
}