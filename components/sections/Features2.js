import Link from "next/link"
export default function Features2() {
    const services = [
        {
            id: 1,
            icon: "/assets/img/icon/features_icon01.svg",
            title: "House Washing",
            description: "Complete exterior cleaning for your entire home.",
            image: "/assets/img/images/house_washing.jpg"
        },
        {
            id: 2,
            icon: "/assets/img/icon/features_icon02.svg",
            title: "Driveway Cleaning",
            description: "Remove stains and restore your driveway's look.",
            image: "/assets/img/images/driveway_cleaning.jpg"
        },
        {
            id: 3,
            icon: "/assets/img/icon/features_icon03.svg",
            title: "General Pressure Cleaning",
            description: "High-pressure cleaning for all outdoor surfaces.",
            image: "/assets/img/images/pressure_cleaning.jpg"
        },
        {
            id: 4,
            icon: "/assets/img/icon/features_icon01.svg",
            title: "Exterior Cleaning",
            description: "Thorough cleaning of all outside building surfaces.",
            image: "/assets/img/images/exterior_cleaning.jpg"
        },
        {
            id: 5,
            icon: "/assets/img/icon/features_icon02.svg",
            title: "Office Cleaning",
            description: "Professional cleaning services for commercial spaces.",
            image: "/assets/img/images/office_cleaning.jpg"
        },
        {
            id: 6,
            icon: "/assets/img/icon/features_icon03.svg",
            title: "Solar Panel Cleaning",
            description: "Maximize energy efficiency with clean solar panels.",
            image: "/assets/img/images/solar_cleaning.jpg"
        }
    ];

    return (
        <>
            <section className="features-area-two features-bg" data-background="/assets/img/bg/features_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        {services.map((service, index) => (
                            <div className="col-xl-4 col-lg-6 col-md-8" key={service.id}>
                                <div className="features-item-two wow fadeInUp" data-wow-delay={`${0.2 + (index * 0.2)}s`}>
                                    <div className="features-item-shape">
                                        <svg viewBox="0 0 451 518" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 15.5706C0 12.3122 2.60044 9.64945 5.85786 9.57226L389.414 0.483096C423.541 -0.32561 451.466 27.4618 450.825 61.5922L442.369 512.113C442.308 515.382 439.64 518 436.37 518H6C2.6863 518 0 515.314 0 512V15.5706Z" fill="currentcolor" />
                                        </svg>
                                    </div>
                                    <div className="features-item-top">
                                        <div className="features-icon-two">
                                            <img src={service.icon} alt="" />
                                        </div>
                                        <div className="features-content-two">
                                            <h2 className="title">{service.title}</h2>
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                    <div className="features-thumb">
                                        <Link href="/services-details"><img src={service.image} alt={service.title} /></Link>
                                        <Link href="/services-details" className="link-btn"><img src="/assets/img/icon/right_arrow02.svg" alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="more-btn text-center mt-20">
                        <Link href="/services" className="btn">More Services</Link>
                    </div>
                </div>
            </section>
        </>
    )
}