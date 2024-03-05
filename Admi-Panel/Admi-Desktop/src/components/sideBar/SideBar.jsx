import "./sideBar.css";
import TimelineIcon from '@mui/icons-material/Timeline';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PaidIcon from '@mui/icons-material/Paid';

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyleIcon className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analitica
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Ventas
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu Rapido</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentityIcon className="sidebarIcon" />
                Usuarios
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <StorefrontIcon className="sidebarIcon" />
                Productos
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoneyIcon className="sidebarIcon" />
              transacciones
            </li>
            <li className="sidebarListItem">
              <BarChartIcon  className="sidebarIcon" />
              Reportes
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Gestión de Servicios</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              < MailOutlineIcon className="sidebarIcon" />
              Manejo de Solicitudes
            </li>
            <li className="sidebarListItem">
            <PermIdentityIcon className="sidebarIcon" />
              Atención Post/Servicio
            </li>
            <li className="sidebarListItem">
              <PaidIcon className="sidebarIcon" />
              Control de Pagos
            </li>
            <li className="sidebarListItem">
              <StarHalfIcon className="sidebarIcon" />
              Evaluación y/o Calificación
            </li>
            <li className="sidebarListItem">
              <ConfirmationNumberIcon className="sidebarIcon" />
              Promociones
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Personal</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutlineIcon className="sidebarIcon" />
              Administrar
            </li>
            <li className="sidebarListItem">
              <TimelineIcon className="sidebarIcon" />
              Analitica
            </li>
            <li className="sidebarListItem">
              <ReportIcon className="sidebarIcon" />
              Informe
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}