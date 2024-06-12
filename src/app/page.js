import WhyChooseUs from "./homePage/component/whyChooseUs";
import TasteView from "./homePage/component/tasteView";
import Timing from "./homePage/component/timing";
import TwoImageBox from "./homePage/component/twoImageBox";
import Menu from "./homePage/component/menu";

export default function Home() {
  return (
    <>
      <main className="home-page-main">
        <section className="width-wrapper">
          <TwoImageBox />
          <Menu />
          <WhyChooseUs />
          <Timing />
          <TasteView />
        </section>
      </main>
    </>
  );
}
