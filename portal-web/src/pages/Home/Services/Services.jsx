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
        { icon: 'fas fa-phone', heading: 'Telefonía móvil', description: 'Lorem ipsum dolor...' },
        { icon: 'fas fa-tv', heading: 'Telefonía móvil', description: 'Lorem ipsum dolor...' },
        { icon: 'fas fa-globe', heading: 'Internet', description: 'Lorem ipsum dolor...' },
        { icon: 'fas fa-tv', heading: 'Televisión por cable', description: 'Lorem ipsum dolor...' },
       
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
