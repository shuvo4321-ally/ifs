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

    return (
        <section id="services" className="Services-area pf-bg-light" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
            <style jsx>{`

                /* ─── SECTION HEADER — editorial left-align ──── */
                .svc-header {
                    padding-left: max(5vw, 140px);
                    padding-right: max(5vw, 140px);
                    margin-bottom: clamp(50px, 8vh, 100px);
                    position: relative;
                    z-index: 1;
                }
                .svc-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.65rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: #94a3b8;
                    margin-bottom: 20px;
                }
                .svc-eyebrow::before {
                    content: '';
                    display: block;
                    width: 28px;
                    height: 1.5px;
                    background: var(--primary-cyan);
                    flex-shrink: 0;
                }
                .svc-headline {
                    font-size: clamp(3.5rem, 6vw, 5.5rem);
                    font-weight: 900;
                    color: #0a162b;
                    line-height: 1.05;
                    letter-spacing: -0.04em;
                    margin: 0 0 18px;
                    text-transform: none;
                }
                .svc-tagline {
                    color: #64748b;
                    line-height: 1.7;
                    font-size: 1.05rem;
                    margin: 0;
                    max-width: 520px;
                }

                /* ─── DESKTOP: DARK OVERLAY IMAGE CARDS ──────── */
                .svc-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    padding: 0 max(5vw, 100px);
                }
                @media (min-width: 769px) and (max-width: 1200px) {
                    .svc-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 16px;
                    }
                }

                .svc-card-link {
                    text-decoration: none;
                    color: inherit;
                    display: block;
                }
                .svc-card {
                    position: relative;
                    height: clamp(380px, 44vh, 520px);
                    overflow: hidden;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .svc-card-img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .svc-card:hover .svc-card-img {
                    transform: scale(1.06);
                }

                /* Dark gradient from bottom — editorial photography style */
                .svc-card-gradient {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 75%;
                    background: linear-gradient(
                        to top,
                        rgba(10, 22, 43, 0.94) 0%,
                        rgba(10, 22, 43, 0.5) 45%,
                        transparent 100%
                    );
                    z-index: 1;
                    transition: all 0.5s ease;
                    pointer-events: none;
                }
                .svc-card:hover .svc-card-gradient {
                    height: 85%;
                }

                /* Card content — positioned at bottom */
                .svc-card-content {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 32px;
                    z-index: 2;
                }
                .svc-card-num {
                    display: block;
                    font-size: 0.6rem;
                    font-weight: 700;
                    letter-spacing: 2px;
                    color: var(--primary-cyan);
                    margin-bottom: 14px;
                    opacity: 0.8;
                }
                .svc-card-title {
                    font-size: 1.3rem;
                    font-weight: 800;
                    color: #ffffff;
                    margin: 0 0 0;
                    letter-spacing: -0.02em;
                    line-height: 1.25;
                    transition: all 0.3s ease;
                }
                .svc-card:hover .svc-card-title {
                    margin-bottom: 10px;
                }
                .svc-card-desc {
                    font-size: 0.85rem;
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 1.6;
                    margin: 0;
                    max-width: 92%;
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                    transition: all 0.45s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .svc-card:hover .svc-card-desc {
                    max-height: 80px;
                    opacity: 1;
                }

                /* Cyan accent line — slides in from left on hover */
                .svc-card-accent {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 3px;
                    background: var(--primary-cyan);
                    transition: width 0.5s cubic-bezier(0.25, 1, 0.5, 1);
                    z-index: 3;
                }
                .svc-card:hover .svc-card-accent {
                    width: 100%;
                }

                /* Arrow indicator — fades in on hover */
                .svc-card-arrow {
                    position: absolute;
                    top: 24px;
                    right: 24px;
                    z-index: 2;
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0.75rem;
                    opacity: 0;
                    transform: translateX(-8px);
                    transition: all 0.4s ease;
                }
                .svc-card:hover .svc-card-arrow {
                    opacity: 1;
                    transform: translateX(0);
                    color: var(--primary-cyan);
                }

                /* ─── MOBILE: EDITORIAL NARRATIVE LIST ───────── */
                .svc-editorial-list {
                    display: none;
                }

                @media (max-width: 768px) {
                    .Services-area {
                        padding: 56px 0 64px !important;
                        overflow-x: hidden !important;
                    }
                    .svc-grid {
                        display: none !important;
                    }
                    .svc-editorial-list {
                        display: block;
                        width: 100%;
                        max-width: 100%;
                        padding: 0 18px;
                        box-sizing: border-box;
                    }
                    .svc-header {
                        padding-left: 22px !important;
                        padding-right: 22px !important;
                        margin-bottom: 34px !important;
                        max-width: 100% !important;
                        box-sizing: border-box !important;
                    }
                    .svc-headline {
                        font-size: 2.1rem !important;
                        letter-spacing: -0.8px !important;
                        line-height: 1.08 !important;
                        margin-bottom: 14px !important;
                    }
                    .svc-eyebrow {
                        letter-spacing: 2px !important;
                        font-size: 0.6rem !important;
                        margin-bottom: 12px !important;
                    }
                    .svc-tagline {
                        font-size: 0.95rem !important;
                        line-height: 1.6 !important;
                        max-width: 100% !important;
                    }

                    /* Editorial card — refined */
                    .svc-ed-item {
                        display: block;
                        position: relative;
                        text-decoration: none;
                        background: #ffffff;
                        border-radius: 12px;
                        overflow: hidden;
                        margin-bottom: 18px;
                        box-shadow: 0 1px 2px rgba(10, 22, 43, 0.04), 0 8px 24px rgba(10, 22, 43, 0.06);
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                    }
                    .svc-ed-item:first-child {
                        border-top: none;
                    }
                    .svc-ed-item:active {
                        transform: translateY(1px);
                    }
                    .svc-ed-img-wrap {
                        position: relative;
                        width: 100%;
                        height: 200px;
                        overflow: hidden;
                    }
                    .svc-ed-img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        display: block;
                        transition: transform 0.6s ease;
                    }
                    .svc-ed-img-wrap::after {
                        content: '';
                        position: absolute;
                        inset: 0;
                        background: linear-gradient(180deg, transparent 45%, rgba(10,22,43,0.45) 100%);
                        pointer-events: none;
                    }
                    .svc-ed-item:active .svc-ed-img {
                        transform: scale(1.04);
                    }
                    .svc-ed-num {
                        position: absolute;
                        top: 14px;
                        left: 14px;
                        background: rgba(10, 22, 43, 0.82);
                        backdrop-filter: blur(6px);
                        color: var(--primary-cyan);
                        font-size: 0.68rem;
                        font-weight: 800;
                        letter-spacing: 1.5px;
                        padding: 5px 10px;
                        border-radius: 4px;
                        z-index: 2;
                    }
                    .svc-ed-body {
                        padding: 18px 20px 20px;
                        background: #fff;
                        max-width: 100%;
                        box-sizing: border-box;
                    }
                    .svc-ed-title {
                        font-size: 1.15rem;
                        font-weight: 800;
                        color: #0d1b33;
                        letter-spacing: -0.3px;
                        line-height: 1.2;
                        margin: 0 0 8px;
                        word-wrap: break-word;
                        overflow-wrap: break-word;
                    }
                    .svc-ed-desc {
                        font-size: 0.86rem;
                        color: #64748b;
                        line-height: 1.6;
                        margin: 0 0 14px;
                        word-wrap: break-word;
                        overflow-wrap: break-word;
                    }
                    .svc-ed-link {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        font-size: 0.74rem;
                        font-weight: 800;
                        color: var(--primary-cyan);
                        text-transform: uppercase;
                        letter-spacing: 1.2px;
                    }
                    .svc-ed-link i {
                        font-size: 0.65rem;
                        transition: transform 0.2s;
                    }
                    .svc-ed-item:active .svc-ed-link i {
                        transform: translateX(4px);
                    }
                }

                @media (min-width: 769px) and (max-width: 991px) {
                    .svc-header {
                        padding-left: 24px !important;
                        padding-right: 24px !important;
                        margin-bottom: 40px !important;
                    }
                    .svc-headline {
                        font-size: var(--font-h2-mob) !important;
                    }
                    .svc-grid {
                        padding: 0 24px !important;
                    }
                }
            `}</style>

            {/* ── Section header — editorial left-aligned ── */}
            <div className="svc-header wow fadeInUp">
                <h2 className="svc-headline">Excellence In Every Sector</h2>
                <p className="svc-tagline">
                    Specialized maintenance protocols for Australia's most demanding industries.
                </p>
            </div>

            {/* ── DESKTOP: dark overlay image cards ── */}
            <div className="svc-grid">
                {cleaningServices.map((service, index) => {
                    const slug = slugMap[service.id];
                    const num = String(index + 1).padStart(2, '0');
                    return (
                        <Link href={`/services/${slug}`} key={service.id} className="svc-card-link">
                            <div className="svc-card">
                                <img
                                    src={service.bgImage}
                                    alt={service.title}
                                    className="svc-card-img"
                                />
                                <div className="svc-card-gradient" />
                                <span className="svc-card-arrow">
                                    <i className="fas fa-arrow-right" />
                                </span>
                                <div className="svc-card-content">
                                    <span className="svc-card-num">{num}</span>
                                    <h3 className="svc-card-title">{service.title}</h3>
                                    <p className="svc-card-desc">{service.description}</p>
                                </div>
                                <div className="svc-card-accent" />
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* ── MOBILE: editorial narrative list ── */}
            <div className="svc-editorial-list">
                {cleaningServices.map((service, index) => {
                    const slug = slugMap[service.id];
                    const num = String(index + 1).padStart(2, '0');
                    return (
                        <Link href={`/services/${slug}`} key={service.id} className="svc-ed-item">
                            <div className="svc-ed-img-wrap">
                                <span className="svc-ed-num">{num}</span>
                                <img
                                    src={service.bgImage}
                                    alt={service.title}
                                    className="svc-ed-img"
                                />
                            </div>
                            <div className="svc-ed-body">
                                <h3 className="svc-ed-title">{service.title}</h3>
                                <p className="svc-ed-desc">{service.description}</p>
                                <span className="svc-ed-link">
                                    View Service <i className="fas fa-arrow-right" />
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>

        </section>
    );
}
