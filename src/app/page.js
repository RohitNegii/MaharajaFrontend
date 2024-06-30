import WhyChooseUs from "./homePage/component/whyChooseUs";
import TasteView from "./homePage/component/tasteView";
import Timing from "./homePage/component/timing";
import TwoImageBox from "./homePage/component/twoImageBox";
import Menu from "./homePage/component/menu";
import Banner from "./homePage/component/Banner";
import Header from "./homePage/component/Header";
import ReserveTable from "./homePage/component/reserveTable";

import TopQuality from "./homePage/component/topQuality";

import SplendorOf from "./homePage/component/SplendorOf";

export default function Home() {
  return (
    <>
      <main className="home-page-main">
        <Banner />
        {/* <section className="width-wrapper"> */}
          <TopQuality />
          <TwoImageBox />
          <Menu />
          <WhyChooseUs />
          <Timing />
          <TasteView />
          <ReserveTable />
          <SplendorOf />
        {/* </section> */}
      </main>
    </>
  );
}
