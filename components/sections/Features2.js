import Link from "next/link"
import Service from './../../pages/services';

export default function Features2() {
    const services = [
        {
            id: 1,
            icon: "/assets/img/icon/features_icon01.svg",
            title: "Office",
            description: "Professional office cleaning for a spotless, productive workspace environment."
        },
        {
            id: 2,
            icon: "/assets/img/icon/features_icon02.svg",
            title: "Retail",
            description: "Comprehensive retail space cleaning to enhance customer shopping experience."
        },
        {
            id: 3,
            icon: "/assets/img/icon/features_icon03.svg",
            title: "Education",
            description: "Safe, thorough cleaning for schools, universities, and educational institutions."
        },
        {
            id: 4,
            icon: "/assets/img/icon/features_icon01.svg",
            title: "Industrial",
            description: "Heavy-duty industrial facility cleaning for manufacturing and warehouse spaces."
        },
        {
            id: 5,
            icon: "/assets/img/icon/features_icon02.svg",
            title: "Commercial",
            description: "Complete commercial property cleaning solutions for businesses of all sizes."
        },
        {
            id: 6,
            icon: "/assets/img/icon/features_icon03.svg",
            title: "Entertainment",
            description: "Professional cleaning for cinemas, theaters, and entertainment venues."
        },
        {
            id: 7,
            icon: "/assets/img/icon/features_icon01.svg",
            title: "Strata & Building Maintenance Cleaning",
            description: "Comprehensive strata cleaning for common areas and building maintenance."
        },
        {
            id: 8,
            icon: "/assets/img/icon/features_icon02.svg",
            title: "End of Lease Cleaning & Move-Out Cleaning",
            description: "Thorough move-out cleaning to help secure your full bond return."
        },
        {
            id: 9,
            icon: "/assets/img/icon/features_icon03.svg",
            title: "Pressure Washing",
            description: "Residential and commercial pressure washing for exterior surfaces."
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
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">What We Do</span>
                                <h2 className="title tg-element-title">Our Services</h2>
                            </div>
                        </div>
                    </div>
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