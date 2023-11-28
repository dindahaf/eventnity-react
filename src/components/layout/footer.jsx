import FooterAppStore from "../../assets/images/footer-app-store.png";
import FooterGooglePlay from "../../assets/images/footer-google-play.png";
import { FooterMenuItem } from "../common/footer-menu-item";
import { EVENTNITY_LIST } from "../../data/data";
import { FEATURE_LIST } from "../../data/data";
import { COMPANY_LIST } from "../../data/data";
import { FooterMedia } from "../common/footer-media";
import { MEDIA_LIST } from "../../data/data";

function Footer() {
  return (
    <div className="mx-auto mt-10 grid max-w-screen-xl grid-cols-4 gap-[20px] rounded-[40px] bg-[#171717] px-[30px] md:mt-[155px] md:grid-cols-8 lg:grid-cols-12">
      <div className="col-span-4 flex flex-col gap-[100px] px-9 py-7 md:col-span-8 lg:px-[155px] lg:py-[84px] lg:col-span-12">
        <div className="flex flex-col lg:flex-row md:gap-[195px]">
          <div className="flex flex-col gap-[42px]">
            <div className="flex flex-col gap-2">
              <a
                href="/"
                className="font-fredoka text-xl font-semibold text-[#FFF] md:text-[32px]"
              >
                Eventnity.
              </a>
              <h2 className="font-fredoka text-xs font-medium text-[#FFF] md:text-[15px]">
                Ease of being together
              </h2>
            </div>
            <div className="flex flex-col gap-[15px]">
              <img
                src={FooterAppStore}
                alt={FooterAppStore}
                className="w-[100px] md:w-[180px]"
              />
              <img
                src={FooterGooglePlay}
                alt={FooterGooglePlay}
                className="w-[100px] md:w-[180px]"
              />
            </div>
          </div>
          <div className="mt-10 flex flex-col md:flex-row md:gap-[98px]">
            <div>
              <h1 className="p-[10px] font-fredoka text-[15px] font-semibold text-[#FFF]">
                EVENTNITY
              </h1>
              <ul className="p-[10px]">
                {EVENTNITY_LIST.map((item) => {
                  return <FooterMenuItem key={item.id} title={item.title} />;
                })}
              </ul>
            </div>
            <div>
              <h1 className="p-[10px] font-fredoka text-[15px] font-semibold text-[#FFF]">
                FEATURES
              </h1>
              <ul className="p-[10px]">
                {FEATURE_LIST.map((item) => {
                  return <FooterMenuItem key={item.id} title={item.title} />;
                })}
              </ul>
            </div>
            <div>
              <h1 className="p-[10px] font-fredoka text-[15px] font-semibold text-[#FFF]">
                COMPANY
              </h1>
              <ul className="p-[10px]">
                {COMPANY_LIST.map((item) => {
                  return <FooterMenuItem key={item.id} title={item.title} />;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex flex-row md:gap-5">
            <div className="flex flex-col gap-5 md:flex-row">
              {MEDIA_LIST.map((item) => {
                return <FooterMedia key={item.id} ImageURL={item.svg} />;
              })}
            </div>
            <div className="pl-10 md:p-[10px]">
              <ul className="flex flex-col gap-4 md:flex-row">
                <li>
                  <a
                    href="/"
                    className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                  >
                    Return and Refund
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:p-[10px]">
            <h1 className="text-right font-inter text-xs font-medium leading-4 text-[#D1D5DB] md:text-center">
              Copyright © 2023
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

{
  /* <footer
        className="mx-auto mt-10 grid max-w-screen-xl grid-cols-4 gap-[20px] rounded-[40px] bg-[#171717] px-[30px] md:mt-[155px] md:grid-cols-8 lg:grid-cols-12"
      >
        <div
          className="col-span-4 flex flex-col gap-[100px] px-9 py-7 md:col-span-8 lg:px-[155px] lg:py-[84px] lg:col-span-12"
        >
          <div className="flex flex-col lg:flex-row md:gap-[195px]">
            <div className="flex flex-col gap-[42px]">
              <div className="flex flex-col gap-2">
                <a
                  href="/"
                  className="font-fredoka text-xl font-semibold text-[#FFF] md:text-[32px]"
                  >Eventnity.</a
                >
                <h2
                  className="font-fredoka text-xs font-medium text-[#FFF] md:text-[15px]"
                >
                  Ease of being together
                </h2>
              </div>
              <div className="flex flex-col gap-[15px]">
                <img
                  src="images/footer-app-store.png"
                  alt="footer-app-store"
                  className="w-[100px] md:w-[180px]"
                />
                <img
                  src="images/footer-google-play.png"
                  alt="footer-google-play"
                  className="w-[100px] md:w-[180px]"
                />
              </div>
            </div>
            <div className="mt-10 flex flex-col md:flex-row md:gap-[98px]">
              <div>
                <h1
                  className="p-[10px] font-fredoka text-[15px] font-semibold text-[#FFF]"
                >
                  EVENTNITY
                </h1>
                <ul className="p-[10px]">
                  <li>
                    <a
                      href=""
                      className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                      >Start For Free</a
                    >
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                      >Login</a
                    >
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                      >Pricing</a
                    >
                  </li>
                </ul>
              </div>
              <div>
                <h1
                  className="p-[10px] font-fredoka text-[15px] font-semibold text-[#FFF]"
                >
                  FEATURES
                </h1>
                <ul className="p-[10px]">
                  <li>
                    <a
                      href=""
                      className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                      >Payment Integration</a
                    >
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                      >Newstlatter</a
                    >
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                      >Email Marketing</a
                    >
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                      >QR Code Ticketing</a
                    >
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                      >Event Hosting</a
                    >
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                      >Promote</a
                    >
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                      >Advertising</a
                    >
                  </li>
                </ul>
              </div>
              <div>
                <h1
                  className="p-[10px] font-fredoka text-[15px] font-semibold text-[#FFF]"
                >
                  COMPANY
                </h1>
                <ul className="p-[10px]">
                  <li>
                    <a
                      href=""
                      className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                      >For Bussines</a
                    >
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                      >About Us</a
                    >
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                      >Blog</a
                    >
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                      >Career</a
                    >
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                      >Event</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-row md:gap-5">
              <div className="flex flex-col gap-5 md:flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                >
                  <path
                    fill="#D1D5DB"
                    d="M19.443 3.342c-8.41.275-15.486 7.076-16.068 15.471C2.76 27.695 9.112 35.2 17.51 36.462V24.416h-2.69a2.19 2.19 0 1 1 0-4.38h2.688v-2.915c0-4.826 2.352-6.944 6.364-6.944.595 0 1.103.013 1.535.034a1.988 1.988 0 0 1 1.881 1.997 2 2 0 0 1-2 2h-.736c-1.704 0-2.299 1.615-2.299 3.435v2.395h3.117c.985 0 1.738.878 1.588 1.852l-.18 1.168a1.607 1.607 0 0 1-1.588 1.362h-2.937v12.078C30.392 35.393 36.667 28.437 36.667 20c0-9.39-7.765-16.965-17.224-16.658Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="40"
                  fill="none"
                >
                  <path
                    fill="#D1D5DB"
                    d="M13 5c-4.487 0-8.125 3.732-8.125 8.333v13.334C4.875 31.268 8.513 35 13 35h13c4.487 0 8.125-3.732 8.125-8.333V13.333C34.125 8.732 30.487 5 26 5H13Zm16.25 3.333c.897 0 1.625.747 1.625 1.667s-.728 1.667-1.625 1.667-1.625-.747-1.625-1.667.728-1.667 1.625-1.667Zm-9.75 3.334c4.487 0 8.125 3.731 8.125 8.333s-3.638 8.333-8.125 8.333-8.125-3.731-8.125-8.333 3.638-8.333 8.125-8.333Zm0 3.333a4.814 4.814 0 0 0-3.447 1.465A5.065 5.065 0 0 0 14.625 20c0 1.326.514 2.598 1.428 3.535A4.814 4.814 0 0 0 19.5 25a4.814 4.814 0 0 0 3.447-1.465A5.065 5.065 0 0 0 24.375 20a5.065 5.065 0 0 0-1.428-3.535A4.814 4.814 0 0 0 19.5 15Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="40"
                  fill="none"
                >
                  <path
                    fill="#D1D5DB"
                    d="M35.155 6.719c-1.324.641-3.578 1.845-4.71 2.075-.044.011-.08.026-.122.038C29 7.495 27.19 6.667 25.187 6.667c-4.038 0-7.312 3.358-7.312 7.5 0 .218-.018.62 0 .833-5.23 0-9.048-2.798-11.906-6.395-.382-.483-.788-.231-.873.112-.19.777-.255 2.075-.255 3.002 0 2.335 1.78 4.628 4.55 6.05A6.505 6.505 0 0 1 7.733 18a4.73 4.73 0 0 1-2.175-.558c-.257-.138-.811-.1-.647.573.658 2.699 3.66 4.594 6.344 5.145-.61.369-1.91.294-2.508.294-.22 0-.99-.054-1.486-.117-.454-.057-1.151.063-.568.97 1.253 1.945 4.087 3.167 6.526 3.213-2.245 1.807-5.918 2.467-9.436 2.467-.712-.017-.676.815-.102 1.123 2.595 1.397 6.846 2.224 9.883 2.224 12.074 0 18.936-9.439 18.936-18.335 0-.144-.003-.444-.008-.745 0-.03.008-.059.008-.089 0-.045-.013-.088-.013-.133-.005-.227-.01-.438-.015-.548.957-.709 2.423-1.939 3.164-2.88.252-.32.049-.709-.294-.587-.882.315-2.408.925-3.364 1.042 1.913-1.299 2.859-2.429 3.671-3.684.278-.428-.07-.863-.494-.656Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="40"
                  fill="none"
                >
                  <path
                    fill="#D1D5DB"
                    d="M30.875 5H8.125c-1.796 0-3.25 1.492-3.25 3.333v23.334c0 1.841 1.454 3.333 3.25 3.333h22.75c1.796 0 3.25-1.492 3.25-3.333V8.333c0-1.841-1.454-3.333-3.25-3.333Zm-18.3 23.333c-1.133 0-2.051-.941-2.051-2.103v-7.462c.001-1.16.92-2.101 2.05-2.101 1.133 0 2.051.941 2.051 2.103v7.462c0 1.16-.918 2.101-2.05 2.101Zm-.072-13.805c-1.253 0-2.09-.856-2.09-2 0-1.143.835-2 2.228-2 1.253 0 2.09.857 2.09 2 0 1.144-.836 2-2.228 2Zm14.763 13.805c-1.095 0-1.984-.911-1.984-2.035v-4.341c0-1.764-1.058-1.957-1.455-1.957-.396 0-1.719.058-1.719 1.957v4.341c0 1.124-.889 2.035-1.984 2.035h-.132c-1.095 0-1.984-.911-1.984-2.035V18.77c0-1.162.918-2.103 2.051-2.103s2.05.941 2.05 2.103c0 0 .459-2.103 3.572-2.103 1.981 0 3.569 1.628 3.569 5.29v4.341c0 1.124-.889 2.035-1.984 2.035Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                >
                  <path
                    fill="#D1D5DB"
                    d="M35.97 10.31a4.177 4.177 0 0 0-2.947-2.947C30.423 6.666 20 6.666 20 6.666s-10.423 0-13.023.697A4.177 4.177 0 0 0 4.03 10.31c-.697 2.6-.697 9.69-.697 9.69s0 7.09.697 9.69a4.177 4.177 0 0 0 2.947 2.946c2.6.697 13.023.697 13.023.697s10.423 0 13.023-.697a4.174 4.174 0 0 0 2.947-2.946c.697-2.6.697-9.69.697-9.69s0-7.09-.697-9.69ZM16.667 24.33v-8.66a.834.834 0 0 1 1.25-.722l7.5 4.33a.834.834 0 0 1 0 1.444l-7.5 4.33a.833.833 0 0 1-1.25-.722Z"
                  />
                </svg>
              </div>
              <div className="pl-10 md:p-[10px]">
                <ul className="flex flex-col gap-4 md:flex-row">
                  <li>
                    <a
                      href="/"
                      className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                      >Terms of Service</a
                    >
                  </li>
                  <li>
                    <a
                      href="/"
                      className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                      >Privacy</a
                    >
                  </li>
                  <li>
                    <a
                      href="/"
                      className="font-inter text-xs font-medium leading-4 text-[#D1D5DB]"
                      >Return and Refund</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:p-[10px]">
              <h1
                className="text-right font-inter text-xs font-medium leading-4 text-[#D1D5DB] md:text-center"
              >
                Copyright © 2023
              </h1>
            </div>
          </div>
        </div>
      </footer> */
}
