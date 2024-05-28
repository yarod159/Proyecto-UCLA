import "./service.css"


function ServiceCard({ icon, heading, description }) {
  return (
    <div className="card-services">
      <div className="icon-wrapper">
        <i className={icon} />
      </div>
      <h3>{heading}</h3>
      <p>{description}</p>
     
    </div>
  );
}

export default function Services() {

    const services = [
        { icon: 'fas fa-phone', heading: 'Nuestros Servicios', description: 'Contamos con servicios de:' },
        { icon: 'fas fa-tv', heading: 'Mis Solicitudes', description: 'Traemos para ti la posibilidad de manejar todas tus solicitudes de servicios' },
        { icon: 'fas fa-globe', heading: 'Necesitas ayuda?', description: 'Acude a nuestra area de Atencion al cliente para cualquier duda o reclamo' },
        { icon: 'fas fa-tv', heading: 'Deseas Realizar un pago?', description: 'Puedes pagar en cualquier momento y lugar' },
       
      ];
  return (
    <section className="services-section">
    <ul className="service-list">
        {services.map((service) => (
          <li key={service.heading} className="column-service">
            <ServiceCard {...service} />
          </li>
        ))}
      </ul>
    
  </section>    
  )
}
