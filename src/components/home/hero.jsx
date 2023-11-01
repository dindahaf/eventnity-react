import HeroAbout from "../../assets/images/hero-about.png";
import { Button } from "../common/button";

export function Hero() {
  return (
    <div className="relative mx-auto mt-[37px] grid max-w-screen-xl grid-cols-4 gap-[20px] px-[30px] md:grid-cols-8  lg:grid-cols-12 lg:h-[695px]">
      <div className="col-span-4 md:col-span-8 lg:col-span-12">
        <img src={HeroAbout} alt={HeroAbout} />
      </div>
      <div className="absolute left-14 right-4 top-2 lg:left-[83px] lg:col-span-7 lg:max-w-[667px] lg:top-[120px]">
        <h4 className="font-inter text-xs font-medium leading-7 text-white md:text-xl">
          Welcome to our ticketing website!
        </h4>
        <h1 className="mt-2 font-inter text-3xl font-black leading-none text-white md:mt-[34px] md:text-6xl lg:text-7xl">
          Where Your 
          <span className="bg-gradient-to-tr from-[#6D28D9] from-0% via-[#E127FF] via-90% to-[#FF2976] to-100% bg-clip-text text-transparent">
          Event
          </span>
          Dreams Come to Life!
        </h1>
      </div>
      <div
            className="static col-span-4 md:absolute md:left-14 md:top-[240px] md:w-[600px] lg:left-[83px] lg:max-w-[601px] lg:top-[440px]"
          >
            <p
              className="text-justify font-inter text-[10px] font-semibold leading-3 text-black md:text-left md:text-[18px] md:leading-7 md:text-white"
            >
              Not only can you purchase tickets to the hottest events in town
              but you can also create your own custom tickets with our
              easy-to-use platform. Say goodbye to generic tickets and hello to
              personalized and professional-looking ones that will make your
              event stand out from the rest.
            </p>
          </div>
          <div className="col-span-4 flex items-center justify-center md:col-span-8 lg:col-span-12">
            <Button name="Explore Event" className="rounded-lg bg-[#070148] px-4 py-2 font-rubik text-xs font-medium text-[#FFF] md:absolute md:bottom-[-35px] md:rounded-[14px] md:px-[60px] md:py-[30px] md:text-2xl lg:bottom-[-44px]"/>
          </div>
    </div>
  );
}

{
  /* <section
          id="hero"
          class="relative mx-auto mt-[37px] grid max-w-screen-xl grid-cols-4 gap-[20px] px-[30px] md:grid-cols-8  lg:grid-cols-12 lg:h-[695px]"
        >
          <div class="col-span-4 md:col-span-8 lg:col-span-12">
            <img src="/images/hero-about.png" alt="hero-about" />
          </div>
          <div
            class="absolute left-14 right-4 top-2 lg:left-[83px] lg:col-span-7 lg:max-w-[667px] lg:top-[120px]"
          >
            <h4
              class="font-inter text-xs font-medium leading-7 text-white md:text-xl"
            >
              Welcome to our ticketing website!
            </h4>
            <h1
              class="mt-2 font-inter text-3xl font-black leading-none text-white md:mt-[34px] md:text-6xl lg:text-7xl"
            >
              Where Your
              <span
                class="bg-gradient-to-tr from-[#6D28D9] from-0% via-[#E127FF] via-90% to-[#FF2976] to-100% bg-clip-text text-transparent"
                >Event</span
              >
              Dreams Come to Life!
            </h1>
          </div>
          <div
            class="static col-span-4 md:absolute md:left-14 md:top-[240px] md:w-[600px] lg:left-[83px] lg:max-w-[601px] lg:top-[440px]"
          >
            <p
              class="text-justify font-inter text-[10px] font-semibold leading-3 text-black md:text-left md:text-[18px] md:leading-7 md:text-white"
            >
              Not only can you purchase tickets to the hottest events in town
              but you can also create your own custom tickets with our
              easy-to-use platform. Say goodbye to generic tickets and hello to
              personalized and professional-looking ones that will make your
              event stand out from the rest.
            </p>
          </div>
          <div
            class="col-span-4 flex items-center justify-center md:col-span-8 lg:col-span-12"
          >
            <button
              class="rounded-lg bg-[#070148] px-4 py-2 font-rubik text-xs font-medium text-[#FFF] md:absolute md:bottom-[-35px] md:rounded-[14px] md:px-[60px] md:py-[30px] md:text-2xl lg:bottom-[-44px]"
            >
              Explore Event
            </button>
          </div>
        </section> */
}
