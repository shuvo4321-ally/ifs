import Link from "next/link"

export default function Features1() {
    const cleaningServices = [
        {
            id: 1,
            icon: "/assets/img/icon/features_icon01.svg",
            title: "Professional Equipment",
            description: "We use industrial-grade cleaning equipment for superior results every time.",
            link: "/services-details"
        },
        {
            id: 2,
            icon: "/assets/img/icon/features_icon02.svg",
            title: "Trained Specialists",
            description: "Our certified cleaning experts ensure safe and efficient service delivery.",
            link: "/services-details"
        },
        {
            id: 3,
            icon: "/assets/img/icon/features_icon03.svg",
            title: "Eco-Friendly Solutions",
            description: "Environmentally safe cleaning products that protect your property and nature.",
            link: "/services-details"
        }
    ];

    return (
        <>
            <section className="features-area pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        {cleaningServices.map((service, index) => (
                            <div className="col-lg-4 col-md-6" key={service.id}>
                                <div className="features-item wow fadeInUp" data-wow-delay={`${0.2 + (index * 0.2)}s`}>
                                    <div className="features-item-inner">
                                        <div className="features-content">
                                            <h4 className="title">{service.title}</h4>
                                            <p>{service.description}</p>
                                            <Link href={service.link} className="link-btn">
                                                <i className="fas fa-arrow-right" /> Read More
                                            </Link>
                                        </div>
                                        <div className="features-icon">
                                            <img src={service.icon} alt={service.title} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}