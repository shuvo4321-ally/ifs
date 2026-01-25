import Link from "next/link"

export default function Features2() {
    const services = [
        {
            id: 1,
            icon: "/assets/img/icon/features_icon01.svg",
            title: "Office Cleaning",
            description: "Professional cleaning for offices and workspaces."
        },
        {
            id: 2,
            icon: "/assets/img/icon/features_icon02.svg",
            title: "Retail Cleaning",
            description: "Clean and hygienic retail stores for customers."
        },
        {
            id: 3,
            icon: "/assets/img/icon/features_icon03.svg",
            title: "Education Cleaning",
            description: "Safe cleaning solutions for schools and institutions."
        },
        {
            id: 4,
            icon: "/assets/img/icon/features_icon01.svg",
            title: "Entertainment Cleaning",
            description: "Reliable cleaning for cinemas and entertainment venues."
        },
        {
            id: 5,
            icon: "/assets/img/icon/features_icon02.svg",
            title: "Industrial Cleaning",
            description: "Heavy-duty cleaning for industrial environments."
        },
        {
            id: 6,
            icon: "/assets/img/icon/features_icon03.svg",
            title: "Building Maintenance",
            description: "Strata and building maintenance cleaning services."
        },
        {
            id: 7,
            icon: "/assets/img/icon/features_icon01.svg",
            title: "End of Lease Cleaning",
            description: "Thorough cleaning to secure your bond return."
        },
        {
            id: 8,
            icon: "/assets/img/icon/features_icon02.svg",
            title: "Pressure Washing",
            description: "Residential and commercial pressure washing services."
        }
    ]

    return (
        <>
            <section
                className="features-area-two features-bg"
                data-background="/assets/img/bg/features_bg.jpg"
            >
                <div className="container">
                    <div className="row justify-content-center">
                        {services.map((service, index) => (
                            <div className="col-xl-4 col-lg-6 col-md-8" key={service.id}>
                                <div
                                    className="features-item-two wow fadeInUp"
                                    data-wow-delay={`${0.2 + index * 0.2}s`}
                                >

                                    <div className="features-item-top text-center">
                                        <div className="features-icon-two mb-20">
                                            <img src={service.icon} alt={service.title} />
                                        </div>

                                        <div className="features-content-two">
                                            <h2 className="title">{service.title}</h2>
                                            <p>{service.description}</p>

                                            <Link
                                                href="/services-details"
                                                className="link-btn mt-10 d-inline-block"
                                            >
                                                See More →
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="more-btn text-center mt-20">
                        <Link href="/services" className="btn">
                            More Services
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
