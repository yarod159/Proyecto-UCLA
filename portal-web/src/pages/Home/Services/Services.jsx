import "./service.css"
import React from 'react';
import { useNavigate } from 'react-router-dom';


function ServiceCard({ icon, heading, description, url }) {
  return (
    <div className="card-services">
      <a href={url}>
        <div className="icon-wrapper">
          <i className={icon} />
        </div>
        <h3>{heading}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default function Services() {

  const navigate = useNavigate();

    const services = [
        { icon: 'fas fa-phone', heading: 'Nuestros Servicios', description: 'Contamos con servicios de instalación, reparación y mantenimiento ', url:'/Servicios' },
        { icon: 'fas fa-tv', heading: 'Mis Solicitudes', description: 'Traemos para ti la posibilidad de manejar todas tus solicitudes de servicios', url:'/#' },
        { icon: 'fas fa-globe', heading: '¿Necesitas ayuda?', description: 'Acude a nuestra area de Atencion al cliente para cualquier duda o reclamo', url: '/AtencionAlCliente' },
        { icon: 'fas fa-tv', heading: '¿Deseas Realizar un pago?', description: 'Puedes pagar en cualquier momento y lugar', url:'/FormPagos' },
       
      ];
  return (
    <section className="services-section">
      <ul className="service-list">
        {services.map((service) => (
          <li key={service.heading} className="column-service" onClick={() => navigate(service.url)}> {/* Usa navigate para navegar */}
            <ServiceCard {...service} />
          </li>
        ))}
      </ul>
    </section> 
  )
}
