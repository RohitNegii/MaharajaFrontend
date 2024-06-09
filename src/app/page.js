import WhyChooseUs from "./homePage/component/whyChooseUs";
import TasteView from "./homePage/component/tasteView";

export default function Home() {
  return (
    <>
      <main className="home-page-main">
        <section className="width-wrapper">
          <WhyChooseUs />
          <TasteView />
        </section>
      </main>
    </>
  );
}
