import "../style/index.css";
import Header from "../components/layout/header";
import { Hero } from "../components/home/hero-section";
import { About } from "../components/home/about-section"
import { Venue } from "../components/home/venue-section"
import { Event } from "../components/home/event-section";
import { Schedule } from "../components/home/schedule";
import { PartnerSection } from "../components/home/partner-section"
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
            <PartnerSection />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
