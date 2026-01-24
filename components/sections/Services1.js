import Link from "next/link"
import { useState } from 'react'

export default function Services1() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    
    const cleaningServices = [
        {
            id: 1,
            title: "House Washing",
            icon: "/assets/img/icon/services_icon01.svg",
            bgImage: "/assets/img/services/house_washing.jpg",
            description: "Complete exterior cleaning to remove dirt, mold, and mildew from your home's surfaces.",
        },
        {
            id: 2,
            title: "Driveway Cleaning",
            icon: "/assets/img/icon/services_icon02.svg",
            bgImage: "/assets/img/services/driveway_cleaning.jpg",
            description: "Remove oil stains, dirt, and grime from driveways to restore their original appearance.",
        },
        {
            id: 3,
            title: "Solar Panel Cleaning",
            icon: "/assets/img/icon/services_icon03.svg",
            bgImage: "/assets/img/services/solar_cleaning.jpg",
            description: "Professional cleaning to maximize solar panel efficiency and energy production.",
        },
        {
            id: 4,
            title: "Office Cleaning",
            icon: "/assets/img/icon/services_icon04.svg",
            bgImage: "/assets/img/services/office_cleaning.jpg",
            description: "Commercial cleaning services for offices, ensuring a clean and healthy work environment.",
        },
        {
            id: 5,
            title: "Pressure Washing",
            icon: "/assets/img/icon/services_icon05.svg",
            bgImage: "/assets/img/services/pressure_washing.jpg",
            description: "High-pressure cleaning for patios, decks, sidewalks, and other hard surfaces.",
        },
        {
            id: 6,
            title: "Exterior Cleaning",
            icon: "/assets/img/icon/services_icon06.svg",
            bgImage: "/assets/img/services/exterior_cleaning.jpg",
            description: "Comprehensive cleaning of all exterior building surfaces including walls and fences.",
        }
    ];

    return (
        <>
            <section className="services-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">What We Do</span>
                                <h2 className="title tg-element-title">Our Cleaning Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {cleaningServices.map((service, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-10" key={service.id}>
                                <div 
                                    className="services-item wow fadeInUp" 
                                    data-wow-delay={`${0.2 + (index * 0.2)}s`} 
                                    data-background={service.bgImage}
                                    onMouseEnter={() => handleToggle(service.id)} 
                                    onMouseLeave={() => handleToggle(service.id)}
                                >
                                    <div className="services-icon" style={{ display: `${isActive.key == service.id ? "none" : "flex"}` }}>
                                        <img src={service.icon} alt={service.title} />
                                    </div>
                                    <div className="services-content">
                                        <h2 className="title" style={{ display: `${isActive.key == service.id ? "none" : "block"}` }}>
                                            <Link href="/services-details">{service.title}</Link>
                                        </h2>
                                        <h2 className="number">{String(service.id).padStart(2, '0')}</h2>
                                    </div>
                                    <div className="services-overlay-content" style={{ display: `${isActive.key == service.id ? "block" : "none"}` }}>
                                        <h2 className="title"><Link href="/services-details">{service.title}</Link></h2>
                                        <p>{service.description}</p>
                                        <Link href="/services-details" className="read-more">
                                            Read More <i className="fas fa-arrow-right" />
                                        </Link>
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