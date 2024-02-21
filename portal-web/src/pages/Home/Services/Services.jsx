import "./service.css"

function ServiceCard({ icon, heading, description,backgroundImage }) {
  return (
    <div className="card-services" >
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
        { icon: 'fas fa-phone', heading: 'Instalacion', description: 'Lorem ipsum dolor...'  },
        { icon: 'fas fa-tv', heading: 'Mantenimiento', description: 'Lorem ipsum dolor...' },
        { icon: 'fas fa-globe', heading: 'Reparación', description: 'Lorem ipsum dolor...' },
        { icon: 'fas fa-tv', heading: 'Productos', description: 'Lorem ipsum dolor...' },
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
