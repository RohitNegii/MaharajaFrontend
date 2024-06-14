import WhyChooseUs from "./homePage/component/whyChooseUs";
import TasteView from "./homePage/component/tasteView";
import Timing from "./homePage/component/timing";
import TwoImageBox from "./homePage/component/twoImageBox";
import Menu from "./homePage/component/menu";
import Banner from "./homePage/component/Banner";
import Header from "./homePage/component/Header";
import ReserveTable from "./homePage/component/reserveTable";

export default function Home() {
  return (
    <>
      <main className="home-page-main">
        <section className="width-wrapper">
          <Header />
          <Banner />
          <TwoImageBox />
          <Menu />
          <WhyChooseUs />
          <Timing />
          <TasteView />
          <ReserveTable />
        </section>
      </main>
    </>
  );
}
