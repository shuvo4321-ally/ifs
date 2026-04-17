import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button className="pf-slider-arrow pf-next-arrow" onClick={onClick}>
            <i className="fas fa-chevron-right"></i>
        </button>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button className="pf-slider-arrow pf-prev-arrow" onClick={onClick}>
            <i className="fas fa-chevron-left"></i>
        </button>
    );
};

export default function BannerPink() {
    const settings = {
        autoplay: true,
        autoplaySpeed: 6000,
        infinite: true,
        speed: 1500, // Slightly slower transition for premium feel
        fade: true,
        arrows: true, // Enable arrows
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dots: true,
        pauseOnHover: true,
        cssEase: 'cubic-bezier(0.25, 1, 0.5, 1)',
    };

    const slides = [
        {
            id: 1,
            bgImage: "/assets/img/services/office_team.jpg",
            badge: "Premium Commercial Cleaning",
            heading1: "Elevate Your",
            heading2: "Workspace Experience",
            desc: "Immaculate cleaning solutions tailored for modern enterprises. We deliver exceptional standards that reflect the true quality of your business.",
            features: [
                { icon: "fas fa-hand-sparkles", title: "Workplace<br/>Hygiene", desc: "Healthier environments for your team" },
                { icon: "fas fa-clock", title: "Tailored<br/>Schedules", desc: "Non-disruptive after-hours service" },
                { icon: "fas fa-clipboard-check", title: "Quality<br/>Guaranteed", desc: "Rigorous QA checks on every job" }
            ]
        },
        {
            id: 2,
            bgImage: "/assets/img/services/brick_washing.jpg",
            badge: "Advanced Exterior Care",
            heading1: "Restore Your",
            heading2: "Property's Brilliance",
            desc: "Industrial-grade pressure and soft washing. We instantly strip away years of grime, mould, and weathering from any commercial or residential surface.",
            features: [
                { icon: "fas fa-water", title: "Deep Grime<br/>Removal", desc: "Instant restoration capabilities" },
                { icon: "fas fa-shield-alt", title: "Surface<br/>Protection", desc: "Damage-free pressure tuning" },
                { icon: "fas fa-leaf", title: "Eco-Friendly<br/>Solvents", desc: "Completely safe for landscaping" }
            ]
        },
        {
            id: 3,
            bgImage: "/assets/img/services/heavy_duty_maintenance.jpg",
            badge: "Specialized Industrial Services",
            heading1: "Heavy-Duty",
            heading2: "Facility Maintenance",
            desc: "Unmatched safety and cleanliness for warehouses, factories, and industrial sites. Our certified teams handle the toughest environments with precision.",
            features: [
                { icon: "fas fa-cogs", title: "Specialized<br/>Equipment", desc: "Heavy degreasing & oil removal" },
                { icon: "fas fa-hard-hat", title: "Safety &<br/>Compliance", desc: "Strict adherence to WHS standards" },
                { icon: "fas fa-certificate", title: "Certified<br/>Operators", desc: "Trained for high-risk environments" }
            ]
        },
        {
            id: 4,
            bgImage: "/assets/img/services/pressure_washing_hero.jpg",
            badge: "Pressure Washing",
            heading1: "Powerful",
            heading2: "Surface Restoration",
            desc: "Remove years of dirt, grime, mould, and stains with our high-performance pressure washing services. Our expert team delivers deep, damage-free cleaning for all commercial and industrial surfaces.",
            features: [
                { icon: "fas fa-tools", title: "Specialized<br/>Equipment", desc: "Advanced high-pressure systems for deep cleaning" },
                { icon: "fas fa-shield-alt", title: "Surface<br/>Protection", desc: "Precision-controlled pressure to prevent damage" },
                { icon: "fas fa-user-check", title: "Certified<br/>Operators", desc: "Trained professionals for safe, effective results" },
                { icon: "fas fa-clipboard-check", title: "Safety &<br/>Compliance", desc: "Strict adherence to industry standards" }
            ]
        }
    ];

    return (
        <section className="pf-hero-section" style={{ position: 'relative', width: '100vw', overflow: 'hidden', backgroundColor: '#0a162b' }}>
            <style jsx global>{`
                .pf-hero-section {
                    width: 100%;
                    max-width: 100vw;
                    margin: 0;
                    padding: 0;
                }
                .pf-hero-slider {
                    width: 100%;
                }
                .pf-hero-slider .slick-slide {
                    width: 100vw !important; /* Force true 100% viewport width */
                }
                .pf-hero-slider .slick-slide > div {
                    height: auto;
                    min-height: 600px;
                    width: 100%;
                }
                @media (max-width: 767px) {
                    .pf-hero-slider .slick-slide > div {
                        min-height: 440px !important;
                    }
                }
                
                /* Dots */
                .pf-hero-slider .slick-dots {
                    bottom: 50px;
                    z-index: 10;
                }
                .pf-hero-slider .slick-dots li {
                    margin: 0 6px;
                }
                .pf-hero-slider .slick-dots li button:before {
                    display: none;
                }
                .pf-hero-slider .slick-dots li button {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.4);
                    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
                    padding: 0;
                }
                .pf-hero-slider .slick-dots li.slick-active button {
                    width: 40px;
                    border-radius: 10px;
                    background: var(--primary-cyan);
                    box-shadow: 0 0 15px rgba(58, 176, 255, 0.6);
                }

                @media (max-width: 767px) {
                    .pf-hero-slider .slick-dots {
                        bottom: 25px !important;
                    }
                }
                
                /* Arrows */
                .pf-slider-arrow {
                    position: absolute;
                    top: 40%;
                    transform: translateY(-50%);
                    width: 65px;
                    height: 65px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    color: white;
                    font-size: 24px;
                    display: flex !important;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    opacity: 0;
                    backdrop-filter: blur(10px);
                    transition: all 0.4s ease;
                    z-index: 10;
                }
                .pf-hero-slider:hover .pf-slider-arrow {
                    opacity: 1;
                }
                .pf-slider-arrow:hover {
                    background: var(--primary-cyan);
                    border-color: var(--primary-cyan);
                    transform: translateY(-50%) scale(1.1);
                    box-shadow: 0 0 20px rgba(58, 176, 255, 0.4);
                }
                .pf-prev-arrow {
                    left: 40px;
                }
                .pf-next-arrow {
                    right: 40px;
                }

                @media (max-width: 767px) {
                    .pf-slider-arrow {
                        display: none !important;
                    }
                    .text-start {
                        padding-left: 20px !important;
                        padding-right: 20px !important;
                    }
                    .hero-content-wrapper {
                        padding-top: 15vh !important;
                        padding-bottom: 70px !important; // Slightly more compact
                        min-height: 440px;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                    }
                    h1.title {
                        font-size: var(--font-h1-mob) !important;
                        margin-bottom: 12px !important;
                        line-height: 1.15 !important;
                    }
                    h1.title span.pf-accent {
                        font-size: 1.4rem !important;
                    }
                    p {
                        font-size: var(--font-p-mob) !important;
                        line-height: 1.5 !important;
                        margin-bottom: 15px !important;
                        max-width: 100% !important;
                    }
                    h2 {
                        margin-bottom: 15px !important;
                        font-size: 1.8rem !important;
                        letter-spacing: -0.5px !important;
                    }
                    .pf-pill {
                        margin-bottom: 10px !important;
                        padding: 5px 12px !important;
                        font-size: 0.75rem !important;
                    }
                    .hero-feature-col {
                        display: none !important;
                    }
                    .hero-primary-cta {
                        margin-top: 20px !important;
                    }
                    .hero-primary-cta a {
                        padding: 12px 25px !important;
                        font-size: 0.9rem !important;
                        width: fit-content !important;
                    }
                }

                .pf-accent {
                    color: var(--primary-cyan) !important;
                }
                .pf-accent-bg {
                    background-color: var(--primary-cyan) !important;
                }

                .hero-content-wrapper {
                    position: relative;
                    padding-top: clamp(160px, 18vh, 300px); // Fluid scaling for vertical presence
                    padding-bottom: clamp(60px, 8vh, 120px);
                    width: 100%;
                    z-index: 5;
                }
            `}</style>

            <Slider {...settings} className="pf-hero-slider">
                {slides.map(slide => (
                    <div key={slide.id} style={{ position: 'relative', height: '100%', width: '100vw' }}>
                        <div style={{ 
                            position: 'absolute', 
                            top: 0, left: 0, 
                            width: '100vw', height: '100%', 
                            backgroundImage: `url(${slide.bgImage})`, 
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center',
                            opacity: 0.85, // Slightly reduced for better overall readability
                            zIndex: 1
                        }}></div>
                        
                        {/* Top-Down Gradient for Header Readability */}
                        <div style={{ 
                            position: 'absolute', 
                            top: 0, left: 0, 
                            width: '100vw', height: '25%', // Targets the header area
                            background: 'linear-gradient(to bottom, rgba(10,22,43,0.85) 0%, rgba(10,22,43,0) 100%)',
                            zIndex: 2
                        }}></div>
                        


                        {/* Immersive Dark Gradient Overlay - Sharpened to leave right side clear */}
                        <div style={{ 
                            position: 'absolute', 
                            top: 0, left: 0, 
                            width: '100vw', height: '100%', 
                            background: 'linear-gradient(to right, rgba(10,22,43,1) 0%, rgba(10,22,43,0.95) 30%, rgba(10,22,43,0) 55%)', 
                            zIndex: 2 
                        }}></div>
                        <div style={{ position: 'relative', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: 'max(1vh, 20px)', paddingBottom: '20px' }}>
                            <div className="hero-content-wrapper">
                                <div className="text-start" style={{ paddingLeft: 'clamp(20px, 8vw, 140px)', paddingRight: '12vw' }}>
                                <div className="row m-0">
                                    <div className="col-lg-10 col-xl-9 p-0">
                                        <div 
                                            className="pf-pill" 
                                            style={{ 
                                                margin: '0 0 8px', 
                                                display: 'inline-flex',
                                                backgroundColor: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                borderLeft: '3px solid var(--primary-cyan)',
                                                backdropFilter: 'blur(10px)',
                                                padding: '8px 20px',
                                                borderRadius: '0',
                                                color: '#fff',
                                                fontSize: '0.9rem'
                                            }}>
                                            <i className="fas fa-gem" style={{ color: 'var(--primary-cyan)', marginRight: '10px' }}></i>
                                            {slide.badge}
                                        </div>
                                        
                                        <h1 
                                            className="title" 
                                            style={{ 
                                                color: '#ffffff', 
                                                fontSize: 'var(--font-h1)', 
                                                fontWeight: '800', 
                                                lineHeight: '1.15', 
                                                marginBottom: '35px',
                                            }}>
                                            {slide.heading1} <br />
                                            <span className="pf-accent" style={{ fontSize: '0.85em' }}>{slide.heading2}</span>
                                        </h1>
                                        
                                        <p style={{ 
                                            fontSize: 'var(--font-p)', 
                                            color: '#e2e8f0', 
                                            maxWidth: '750px', 
                                            margin: '0 0 45px', 
                                            lineHeight: '1.8',
                                        }}>
                                            {slide.desc}
                                        </p>

                                        {/* Features Row */}
                                        <div className="row g-4 hero-feature-row" style={{ maxWidth: '850px', marginTop: '10px' }}>
                                            {slide.features.map((feat, index) => (
                                                <div key={index} className="col-12 col-md-6 hero-feature-col">
                                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                                        <div style={{ 
                                                            width: '40px', height: '40px', borderRadius: '4px', 
                                                            border: '1px solid rgba(58, 176, 255, 0.25)',
                                                            background: 'rgba(58, 176, 255, 0.08)',
                                                            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-cyan)',
                                                            flexShrink: 0, fontSize: '0.9rem'
                                                        }}>
                                                            <i className={feat.icon}></i>
                                                        </div>
                                                        <div>
                                                            <h5 style={{ color: '#fff', fontSize: '1rem', margin: '0 0 8px', fontWeight: '700' }} dangerouslySetInnerHTML={{ __html: feat.title }}></h5>
                                                            <p style={{ color: '#a0aec0', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>{feat.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Primary CTA Row */}
                                        <div className="hero-primary-cta" style={{ marginTop: '50px', display: 'flex', alignItems: 'center', gap: '30px' }}>
                                            <Link href="/contact" className="pf-accent-bg" style={{ 
                                                color: '#0a162b', 
                                                textDecoration: 'none', 
                                                padding: '16px 35px', 
                                                borderRadius: '8px',
                                                fontSize: '1rem',
                                                fontWeight: '800',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px',
                                                transition: 'all 0.3s ease',
                                                boxShadow: '0 10px 20px rgba(58, 176, 255, 0.3)'
                                            }}>
                                                Get a Quote <i className="fas fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}
