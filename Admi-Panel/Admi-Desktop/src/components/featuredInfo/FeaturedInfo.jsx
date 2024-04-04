import "./featuredInfo.css";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Ingresos Por Servicios Prestados</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownwardIcon  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Comparado con el mes pasado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Ventas</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowUpwardIcon className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Comparado con el mes pasado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Costo</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpwardIcon className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Comparado con el mes pasado</span>
      </div>
    </div>
  );
}