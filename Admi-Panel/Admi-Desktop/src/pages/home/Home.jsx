import Chart from "../../components/chart/Chart";
import ChartCategoria from "../../components/chartCategoria/ChartCategoria";
import ChartServives from "../../components/chartServices/ChartServices";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Sidebar from "../../components/sideBar/SideBar";
import Topbar from "../../components/topBar/TopBar";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import "../../index.css";
export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          <FeaturedInfo />
          <Chart />
          <div className="widgets-row">
            <ChartCategoria />
            <ChartServives />
          </div>
          <div className="widgets-row">
            <WidgetSm />
            <WidgetLg />
          </div>
        </div>
      </div>
    </div>
  );
}
