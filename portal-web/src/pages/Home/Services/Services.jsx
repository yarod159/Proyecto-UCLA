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
        { icon: 'fas fa-satellite-dish', heading: 'Televisión por satélite', description: 'Lorem ipsum dolor...' },
        { icon: 'fas fa-headphones', heading: 'Servicios de consultoría', description: 'Lorem ipsum dolor...' },
      ];
  return (
    <section>
    <div className="row-service">
      {services.map((service) => (
        <div className="column-service" key={service.heading}>
          <ServiceCard {...service} />
        </div>
      ))}
    </div>
  </section>    
  )
}
