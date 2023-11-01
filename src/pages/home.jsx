import "../style/index.css";
import Header from "../components/layout/header";
import { Hero } from "../components/home/hero";
import { About } from "../components/home/about"
import { Venue } from "../components/home/venue"

function Home() {
  return (
    <>
      <div className="mx-auto w-[320px] md:w-[768px] lg:w-[1440px]">
        <div className="box-border">
          <Header />
        </div>
        <div>
            <Hero />
            <About />
            <Venue />
        </div>
      </div>
    </>
  );
}

export default Home;
