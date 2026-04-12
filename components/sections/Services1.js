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
            bgImage: "/assets/img/services/office-cleaning.jpg",
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
            <section className="services-area" style={{ padding: '100px 0', backgroundColor: 'var(--light-bg)' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-60">
                                <span className="sub-title accent-font" style={{ color: 'var(--primary-cyan)', fontSize: '24px', display: 'block', marginBottom: '10px' }}>What We Do</span>
                                <h2 className="title" style={{ color: 'var(--primary-navy)', fontSize: '48px', fontWeight: '800' }}>Our Premium Cleaning Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center" style={{ gap: '30px 0' }}>
                        {cleaningServices.map((service, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-10" key={service.id}>
                                <div 
                                    className="services-card-modern wow fadeInUp" 
                                    data-wow-delay={`${0.2 + (index * 0.2)}s`}
                                    style={{
                                        position: 'relative',
                                        borderRadius: '15px',
                                        overflow: 'hidden',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                                        height: '400px',
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(58, 176, 255, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                                    }}
                                >
                                    {/* Background Image Setup */}
                                    <div style={{
                                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                        backgroundImage: `url(${service.bgImage})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        zIndex: 0
                                    }}></div>
                                    <div style={{
                                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                        background: 'linear-gradient(to top, rgba(10, 22, 43, 0.95) 0%, rgba(10, 22, 43, 0.4) 50%, rgba(255, 255, 255, 0) 100%)',
                                        zIndex: 1
                                    }}></div>

                                    {/* Content inside the card */}
                                    <div className="services-content-modern" style={{ position: 'relative', zIndex: 2, padding: '30px', width: '100%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
                                            <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '700', margin: 0 }}>{service.title}</h3>
                                            <div style={{ backgroundColor: 'var(--primary-cyan)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <i className="fas fa-arrow-right"></i>
                                            </div>
                                        </div>
                                        <p style={{ color: '#e2e8f0', margin: 0, fontSize: '15px', lineHeight: '1.6' }}>{service.description}</p>
                                    </div>
                                    
                                    <Link href="/services-details" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 3 }} aria-label={service.title}></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}