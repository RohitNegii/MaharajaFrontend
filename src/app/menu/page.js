import Faq from "../components/menuPage/component/faq";
import MenuBanner from "../components/menuPage/component/menuBanner";
import TwoImageBox from "../homePage/component/twoImageBox";
import TasteView from "../homePage/component/tasteView";
import ReserveTable from "../homePage/component/reserveTable";
import { Reservtion } from "../components/menuPage/component/reservation";
import Menu from "../components/menuPage/component/menu";

export default function Home() {
  return (
    <>
      <main className="home-page-main">
        <MenuBanner />
        <Menu/>
        <TwoImageBox />
        <Reservtion />
        <Faq />
        <TasteView />
        <ReserveTable />
      </main>
    </>
  );
}
