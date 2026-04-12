import React from 'react';
import Link from 'next/link';

export default function ServicesPink() {
    const cleaningServices = [
        {
            id: 1,
            icon: "fas fa-briefcase",
            title: "Workplace Cleaning Solutions",
            bgImage: "/assets/img/services/workplace_cleaning_ifs.jpg",
            description: "Keep your office environment clean, organized, and productivity-ready with flexible service plans tailored to your schedule.",
        },
        {
            id: 2,
            icon: "fas fa-shopping-basket",
            title: "Retail Environment Care",
            bgImage: "/assets/img/services/retail_environment_ifs.jpg",
            description: "Maintain a spotless and welcoming shopping atmosphere that enhances customer experience and brand image.",
        },
        {
            id: 3,
            icon: "fas fa-industry",
            title: "Industrial Facility Cleaning",
            bgImage: "/assets/img/services/industrial_facility_ifs.jpg",
            description: "Heavy-duty cleaning designed for warehouses, factories, and large operational spaces with demanding requirements.",
        },
        {
            id: 4,
            icon: "fas fa-hospital",
            title: "Healthcare Hygiene Services",
            bgImage: "/assets/img/services/healthcare_hygiene_ifs.jpg",
            description: "Precision cleaning for medical environments, following strict sanitation standards to ensure safety and compliance.",
        },
        {
            id: 5,
            icon: "fas fa-graduation-cap",
            title: "Educational Facility Cleaning",
            bgImage: "/assets/img/services/educational_facility_ifs.jpg",
            description: "Safe and detailed cleaning for schools and institutions, promoting a healthy learning environment.",
        },
        {
            id: 6,
            icon: "fas fa-utensils",
            title: "Hospitality Cleaning Services",
            bgImage: "/assets/img/services/hospitality_cleaning_ifs.jpg",
            description: "Professional cleaning solutions for restaurants and hospitality venues, aligned with food safety standards.",
        },
        {
            id: 7,
            icon: "fas fa-dumbbell",
            title: "Fitness Facility Maintenance",
            bgImage: "/assets/img/services/fitness_facility_ifs.jpg",
            description: "Dedicated cleaning for gyms and wellness centers, including equipment sanitation and locker room care.",
        },
        {
            id: 8,
            icon: "fas fa-building",
            title: "Residential & Tower Cleaning",
            bgImage: "/assets/img/services/residential_cleaning_ifs.jpg",
            description: "Comprehensive maintenance for apartment complexes and high-rise buildings, ensuring pristine shared spaces.",
        },
        {
            id: 9,
            icon: "fas fa-calendar-alt",
            title: "Event Venue Preparation",
            bgImage: "/assets/img/services/event_cleaning_ifs.jpg",
            description: "Reliable cleaning services for events, handling both pre-event setup and post-event cleanup efficiently.",
        },
        {
            id: 10,
            icon: "fas fa-car",
            title: "Exterior & Parking Area Cleaning",
            bgImage: "/assets/img/services/exterior_parking_ifs.jpg",
            description: "Complete outdoor cleaning services covering parking areas, walkways, and building exteriors.",
        },
        {
            id: 11,
            icon: "fas fa-hard-hat",
            title: "Post-Construction Cleaning",
            bgImage: "/assets/img/services/post_construction_ifs.jpg",
            description: "Thorough cleanup services for construction sites, ensuring spaces are ready for use or handover.",
        },
        {
            id: 12,
            icon: "fas fa-palette",
            title: "Luxury Display Space Cleaning",
            bgImage: "/assets/img/services/luxury_display_ifs.jpg",
            description: "Specialized cleaning for showrooms and galleries, delivering a flawless and polished presentation.",
        }
    ];

    return (
        <section id="services" className="Services-area pf-bg-light" style={{ padding: '60px 0', position: 'relative', overflow: 'hidden' }}>
            <style jsx>{`
                .service-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 40px;
                    padding: 0 5vw;
                }
                @media (max-width: 1200px) {
                    .service-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 30px;
                    }
                }
                @media (max-width: 768px) {
                    .service-grid {
                        display: flex !important;
                        flex-wrap: nowrap !important;
                        overflow-x: auto !important;
                        gap: 20px !important;
                        padding: 0 20px 30px !important;
                        -webkit-overflow-scrolling: touch;
                        scrollbar-width: none; /* Hide scrollbar for clean look */
                    }
                    .service-grid::-webkit-scrollbar {
                        display: none;
                    }
                    .service-grid > div {
                        flex: 0 0 85% !important;
                        scroll-snap-align: start;
                    }
                    .pf-service-card {
                        height: 480px !important;
                    }
                }
                .pf-service-card {
                    height: clamp(500px, 55vh, 700px); // Fluid height scales with the screen
                    border-radius: 32px;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
                }
                .pf-service-card:hover {
                    transform: translateY(-15px);
                    box-shadow: 0 30px 60px rgba(10, 22, 43, 0.15);
                }
                .card-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                    transition: all 0.8s ease;
                    z-index: 0;
                }
                .pf-service-card:hover .card-bg {
                    transform: scale(1.1);
                }
                .frosted-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 50%; 
                    background: rgba(255, 255, 255, 0.86); 
                    backdrop-filter: blur(80px); 
                    -webkit-backdrop-filter: blur(80px);
                    border-top: 1px solid rgba(255, 255, 255, 0.5);
                    padding: 60px 40px 40px; // Increased top padding to account for the floating icon
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    transition: all 0.5s ease;
                    z-index: 1;
                    overflow: visible; // Critical to prevent icon clipping
                }
                .pf-service-card:hover .frosted-overlay {
                    height: 62%; // Consistency with hover growth
                    background: rgba(255, 255, 255, 0.94);
                }
                .icon-circle {
                    position: absolute;
                    top: 0;
                    left: 40px;
                    transform: translateY(-50%);
                    width: 65px;
                    height: 65px;
                    background: #ffffff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    color: var(--primary-cyan);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                    transition: all 0.4s ease;
                    z-index: 5; // Ensure it sits on top of the border
                }
                .pf-service-card:hover .icon-circle {
                    background: var(--primary-cyan);
                    color: #fff;
                    transform: translateY(-50%) rotate(360deg) scale(1.1);
                }
                .service-title {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: #0a162b;
                    margin-bottom: 15px;
                    letter-spacing: -0.01em;
                }
                .service-desc {
                    color: #0a162b; // Darkened for absolute readability
                    line-height: 1.7;
                    font-size: 1.05rem;
                    margin-bottom: 0;
                    opacity: 0.9;
                }
                .section-header {
                   padding-left: max(5vw, 140px);
                   margin-bottom: clamp(60px, 10vh, 140px);
                   position: relative;
                   z-index: 1;
                }
                @media (max-width: 991px) {
                    .section-header {
                        padding-left: 20px !important;
                        margin-bottom: 30px !important;
                    }
                    #services {
                        padding: 60px 0 !important;
                    }
                    .main-title {
                        font-size: var(--font-h2-mob) !important;
                        letter-spacing: -0.5px !important;
                        line-height: 1.15 !important;
                    }
                    .subtitle {
                        letter-spacing: 2px !important;
                        font-size: 0.75rem !important;
                        margin-bottom: 12px !important;
                    }
                    .service-grid {
                       padding-left: 0 !important;
                    }
                    .frosted-overlay, 
                    .pf-service-card:hover .frosted-overlay {
                        padding: 50px 25px 50px !important;
                        background: rgba(0, 204, 255, 0.86) !important;
                    }
                    .service-title {
                        font-size: var(--font-h3-mob) !important;
                    }
                    .service-desc {
                        font-size: var(--font-p-mob) !important;
                        line-height: 1.5 !important;
                    }
                }
                .subtitle {
                    display: inline-block;
                    color: var(--primary-cyan);
                    text-transform: uppercase;
                    letter-spacing: 5px;
                    font-weight: 800;
                    font-size: 0.9rem;
                    margin-bottom: 20px;
                }
                .main-title {
                    font-size: var(--font-h2); 
                    font-weight: 900;
                    color: #0a162b;
                    line-height: 1.1;
                    letter-spacing: -0.04em;
                }
                .glass-glow {
                   position: absolute;
                   top: 20px;
                   right: 20px;
                   width: 40px;
                   height: 40px;
                   background: rgba(255,255,255,0.4);
                   backdrop-filter: blur(5px);
                   border-radius: 50%;
                   display: flex;
                   align-items: center;
                   justify-content: center;
                   color: #fff;
                   z-index: 2;
                }
            `}</style>

                <div className="section-header wow fadeInUp">
                    <span className="subtitle">Premium Solutions</span>
                    <h2 className="main-title">Excellence In Every Sector</h2>
                    <p className="service-desc" style={{ maxWidth: '600px' }}>
                        Specialized maintenance protocols for Australia's most demanding industries.
                    </p>
                </div>

            <div className="container-fluid" style={{ padding: '0', maxWidth: '100vw' }}>
                <div className="service-grid" style={{ paddingLeft: 'max(5vw, 100px)' }}>
                    {cleaningServices.map((service, index) => {
                        // Generate slug based on title (or map it manually for precision)
                        const slugMap = {
                            1: "workplace-cleaning",
                            2: "retail-care",
                            3: "industrial-cleaning",
                            4: "healthcare-hygiene",
                            5: "educational-cleaning",
                            6: "hospitality-cleaning",
                            7: "fitness-maintenance",
                            8: "residential-cleaning",
                            9: "event-preparation",
                            10: "exterior-parking",
                            11: "post-construction",
                            12: "luxury-display"
                        };
                        const slug = slugMap[service.id];

                        return (
                            <div key={service.id}>
                                <Link href={`/services/${slug}`}>
                                    <div className="pf-service-card" style={{ cursor: 'pointer' }}>
                                        {/* Visible Image at full opacity */}
                                        <div className="card-bg" style={{ backgroundImage: `url(${service.bgImage})` }}></div>
                                        
                                        <div className="glass-glow">
                                            <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem' }}></i>
                                        </div>

                                        {/* Transparent Glass Box Overlay */}
                                        <div className="frosted-overlay">
                                            <div className="icon-circle">
                                                <i className={service.icon}></i>
                                            </div>
                                            <h3 className="service-title">{service.title}</h3>
                                            <p className="service-desc">{service.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
