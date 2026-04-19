import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

export default function BannerPink() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const settings = {
        autoplay: true,
        autoplaySpeed: 1500, // Very fast 1.5s auto-scroll as requested
        infinite: true,
        speed: 600, // Adjust transition speed so it completes well within the 1.5s window
        fade: true,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false, // Prevents mobile touch from permanently stopping the slider
        swipeToSlide: true,
        beforeChange: (current, next) => setCurrentSlide(next),
        customPaging: i => (
            <div className={`hero-paging-dot ${i === currentSlide ? 'active' : ''}`}>
                <div className="dot-progress-bg">
                    <div className="dot-progress-fill"></div>
                </div>
                <span className="dot-number">0{i + 1}</span>
            </div>
        ),
        appendDots: dots => (
            <div className="hero-dots-wrapper">
                <div className="container">
                    <ul className="hero-dots-list"> {dots} </ul>
                </div>
            </div>
        ),
    };

    const slides = [
        {
            id: 1,
            bgImage: "/assets/img/services/office_team.jpg",
            category: "Commercial Cleaning",
            headline: "Elevate Your",
            headlineHighlight: "Workspace.",
            desc: "Immaculate cleaning solutions tailored for modern enterprises. We deliver exceptional standards that reflect the true quality of your business.",
            features: ["Workplace Hygiene", "Tailored Schedules", "Guaranteed Quality"]
        },
        {
            id: 2,
            bgImage: "/assets/img/services/brick_washing.jpg",
            category: "Exterior Care",
            headline: "Restore Your",
            headlineHighlight: "Brilliance.",
            desc: "Industrial-grade pressure and soft washing. We instantly strip away years of grime, mould, and weathering from any commercial or residential surface.",
            features: ["Deep Grime Removal", "Surface Protection", "Eco-Friendly Solvents"]
        },
        {
            id: 3,
            bgImage: "/assets/img/services/heavy_duty_maintenance.jpg",
            category: "Facility Maintenance",
            headline: "Heavy-Duty",
            headlineHighlight: "Precision.",
            desc: "Unmatched safety and cleanliness for warehouses, factories, and industrial sites. Our certified teams handle the toughest environments with precision.",
            features: ["Specialized Equipment", "Safety & Compliance", "Certified Operators"]
        },
        {
            id: 4,
            bgImage: "/assets/img/services/pressure_washing_hero.jpg",
            category: "Pressure Washing",
            headline: "Powerful",
            headlineHighlight: "Restoration.",
            desc: "Remove years of dirt, grime, mould, and stains with our high-performance pressure washing services. Deep, damage-free cleaning for all commercial surfaces.",
            features: ["Advanced Systems", "Precision Control", "Industry Standards"]
        }
    ];

    return (
        <section className={`premium-hero-wrapper ${mounted ? 'is-mounted' : ''}`}>
            <style jsx global>{`
                .premium-hero-wrapper {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    min-height: 700px;
                    background-color: var(--primary-navy, #0a162b);
                    overflow: hidden;
                }
                
                /* Custom Paging & Dots Layout */
                .hero-dots-wrapper {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    padding-bottom: 5vh;
                    z-index: 20;
                }
                .hero-dots-list {
                    display: flex;
                    gap: 30px;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                .hero-dots-list li {
                    width: auto;
                    height: auto;
                    margin: 0;
                }
                .hero-paging-dot {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    cursor: pointer;
                    opacity: 0.5;
                    transition: opacity 0.4s ease;
                }
                .hero-paging-dot.active {
                    opacity: 1;
                }
                .dot-progress-bg {
                    width: 40px;
                    height: 2px;
                    background: rgba(255,255,255,0.2);
                    position: relative;
                    overflow: hidden;
                }
                .dot-progress-fill {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 0%;
                    background: var(--primary-cyan, #00CCFF);
                }
                .hero-paging-dot.active .dot-progress-fill {
                    animation: fillProgress 1.5s linear forwards;
                }
                @keyframes fillProgress {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                .dot-number {
                    color: white;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 0.85rem;
                    font-weight: 700;
                    letter-spacing: 1px;
                }

                @media (max-width: 900px) {
                    .hero-dots-list { gap: 15px; }
                    .dot-progress-bg { width: 25px; }
                    .dot-number { display: none; }
                }

                /* Slick Slider Overrides */
                .premium-hero-slider, .slick-list, .slick-track, .slick-slide > div {
                    height: 100%;
                }
                
                /* Animations for Active Slide Text */
                .slick-slide.slick-active .anim-fade-up {
                    animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .slick-slide.slick-active .slide-bg {
                    animation: kenBurns 10s ease-out forwards;
                }
                
                @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes kenBurns {
                    from { transform: scale(1.05); }
                    to { transform: scale(1); }
                }

                /* Premium Button Styling */
                .btn-premium {
                    display: inline-flex;
                    align-items: center;
                    background: transparent;
                    color: #fff;
                    font-family: 'DM Sans', sans-serif;
                    font-weight: 600;
                    font-size: 0.95rem;
                    letter-spacing: 0.5px;
                    padding: 16px 32px;
                    border: 1px solid rgba(255,255,255,0.2);
                    border-radius: 4px;
                    text-decoration: none;
                    transition: all 0.4s ease;
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                }
                .btn-premium::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: var(--primary-cyan, #00CCFF);
                    z-index: -1;
                    transform: scaleX(0);
                    transform-origin: right;
                    transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
                }
                .btn-premium:hover {
                    border-color: var(--primary-cyan, #00CCFF);
                    color: var(--primary-navy, #0a162b);
                }
                .btn-premium:hover::before {
                    transform: scaleX(1);
                    transform-origin: left;
                }
                .btn-premium i {
                    margin-left: 10px;
                    transition: transform 0.3s ease;
                }
                .btn-premium:hover i {
                    transform: translateX(5px);
                }

                /* Minimal Features List */
                .minimal-features {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    list-style: none;
                    padding: 0;
                    margin: 40px 0;
                }
                .minimal-features li {
                    color: rgba(255,255,255,0.7);
                    font-family: 'DM Sans', sans-serif;
                    font-size: 0.9rem;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .minimal-features li i {
                    color: var(--primary-cyan, #00CCFF);
                    font-size: 0.7rem;
                }
            `}</style>

            <Slider {...settings} className="premium-hero-slider">
                {slides.map((slide, index) => (
                    <div key={slide.id} className="premium-slide">
                        <div style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>

                            {/* Background Image with Ken Burns */}
                            <div className="slide-bg" style={{
                                position: 'absolute',
                                top: 0, left: 0,
                                width: '100%', height: '100%',
                                backgroundImage: `url(${slide.bgImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                zIndex: 1,
                                transform: 'scale(1.05)'
                            }}></div>

                            {/* Sophisticated Dark Gradient Overlay (Cinematic Shadow) */}
                            <div style={{
                                position: 'absolute',
                                top: 0, left: 0,
                                width: '100%', height: '100%',
                                background: 'linear-gradient(90deg, rgba(10,22,43,0.95) 0%, rgba(10,22,43,0.85) 25%, rgba(10,22,43,0.3) 65%, transparent 100%)',
                                zIndex: 2
                            }}></div>
                            <div style={{
                                position: 'absolute',
                                top: 0, left: 0,
                                width: '100%', height: '100%',
                                background: 'linear-gradient(0deg, rgba(10,22,43,0.6) 0%, transparent 20%, transparent 80%, rgba(10,22,43,0.4) 100%)',
                                zIndex: 2
                            }}></div>

                            {/* Content Alignment */}
                            <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center' }}>
                                <div style={{ maxWidth: '800px', paddingTop: '5vh' }}>

                                    {/* Massive Ultra-Premium Typography */}
                                    <h1 className="anim-fade-up title" style={{
                                        animationDelay: '0.3s', opacity: 0,
                                        color: '#ffffff',
                                        fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                                        lineHeight: '1.05',
                                        marginBottom: '25px',
                                        textTransform: 'none'
                                    }}>
                                        {slide.headline} <br />
                                        <span style={{ color: 'var(--primary-cyan, #00CCFF)', fontStyle: 'italic' }}>
                                            {slide.headlineHighlight}
                                        </span>
                                    </h1>

                                    {/* Sub-description paragraph with Gradient Mask fade */}
                                    <p className="anim-fade-up" style={{
                                        animationDelay: '0.5s', opacity: 0,
                                        color: 'rgba(255,255,255,0.85)',
                                        fontSize: 'clamp(1.05rem, 1.2vw, 1.2rem)',
                                        lineHeight: '1.7',
                                        maxWidth: '650px',
                                        margin: '0',
                                        fontWeight: '400',
                                        WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0.05) 100%)',
                                        maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0.05) 100%)'
                                    }}>
                                        {slide.desc}
                                    </p>


                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}
