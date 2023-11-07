import "../style/index.css";
import Header from "../components/layout/header";
import { Hero } from "../components/home/hero";
import { About } from "../components/home/about"
import { Venue } from "../components/home/venue"
import { Event } from "../components/home/event";
import { Schedule } from "../components/home/schedule";
import { Partner } from "../components/home/partner"
import Footer from "../components/layout/footer";

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
            <Event />
            <Schedule />
            <Partner />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
