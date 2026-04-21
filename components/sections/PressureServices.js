import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function PressureServices() {
    const scrollRef = useRef(null);
    const autoScrollTimer = useRef(null);

    const services = [
        {
            id: '01',
            title: "Driveway & Concrete Cleaning",
            poster: "/assets/img/services/driveway_clean_v3.png",
            desc: "Eliminate stubborn oil stains, dirt buildup, and grime from driveways, walkways, and concrete areas.",
            link: "/services/driveway-concrete-cleaning"
        },
        {
            id: '02',
            title: "Exterior House Washing",
            poster: "/assets/img/services/house_washing_v3.png",
            desc: "A safe and gentle soft-wash solution designed to clean render, brick, and cladding safely.",
            link: "/services/exterior-house-washing"
        },
        {
            id: '03',
            title: "Roof Restoration Cleaning",
            poster: "/assets/img/services/roof_wash_v3.png",
            desc: "Expert cleaning for tiled and metal roofs, removing moss and lichen while protecting surface coatings.",
            link: "/services/roof-restoration-cleaning"
        },
        {
            id: '04',
            title: "Gutter Maintenance",
            poster: "/assets/img/services/gutter_clean_v4.png",
            desc: "Ensure smooth water flow by clearing leaves and debris, preventing blockages and water damage.",
            link: "/services/gutter-maintenance-cleaning"
        },
        {
            id: '05',
            title: "Deck & Patio Revitalization",
            poster: "/assets/img/services/deck_patio_v3.png",
            desc: "Restore the natural beauty of your outdoor living spaces with our deep-cleaning pressure wash services.",
            link: "/services/deck-patio-revitalization"
        },
        {
            id: '06',
            title: "Professional Window Cleaning",
            poster: "/assets/img/services/window_clean_v3.png",
            desc: "Streak-free cleaning for residential and commercial windows, ensuring maximum clarity.",
            link: "/services/window-cleaning"
        },
        {
            id: '07',
            title: "Retaining Wall Cleaning",
            poster: "/assets/img/services/retaining_wall_v3.png",
            desc: "Remove dirt and organic buildup from brick, stone, and concrete retaining walls.",
            link: "/services/retaining-wall-cleaning"
        },
        {
            id: '08',
            title: "Concrete Sealing Solutions",
            poster: "/assets/img/services/concrete_sealing_v3.png",
            desc: "Enhance durability by applying high-grade sealers that protect against wear and moisture.",
            link: "/services/concrete-sealing-solutions"
        },
        {
            id: '09',
            title: "Decorative Concrete Staining",
            poster: "/assets/img/services/concrete_staining_v3.png",
            desc: "Upgrade plain concrete with professional staining techniques that add color and depth.",
            link: "/services/decorative-concrete-staining"
        }
    ];

    useEffect(() => {
        const startAutoScroll = () => {
            autoScrollTimer.current = setInterval(() => {
                if (scrollRef.current) {
                    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                    const maxScroll = scrollWidth - clientWidth;

                    if (scrollLeft >= maxScroll - 10) {
                        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        const firstCard = scrollRef.current.querySelector('.pw-svc-card');
                        if (firstCard) {
                            const cardWidth = firstCard.clientWidth;
                            scrollRef.current.scrollBy({ left: cardWidth + 32, behavior: 'smooth' });
                        }
                    }
                }
            }, 4500);
        };

        startAutoScroll();
        return () => {
            if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
        };
    }, []);

    const handleMouseEnter = () => {
        if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
    };

    const handleMouseLeave = () => {
        autoScrollTimer.current = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                const maxScroll = scrollWidth - clientWidth;
                if (scrollLeft >= maxScroll - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    const firstCard = scrollRef.current.querySelector('.pw-svc-card');
                    if (firstCard) {
                        const cardWidth = firstCard.clientWidth;
                        scrollRef.current.scrollBy({ left: cardWidth + 32, behavior: 'smooth' });
                    }
                }
            }
        }, 4500);
    };

    const scrollPrev = () => {
        if (scrollRef.current) {
            const firstCard = scrollRef.current.querySelector('.pw-svc-card');
            if (firstCard) {
                scrollRef.current.scrollBy({ left: -(firstCard.clientWidth + 32), behavior: 'smooth' });
            }
        }
    };

    const scrollNext = () => {
        if (scrollRef.current) {
            const firstCard = scrollRef.current.querySelector('.pw-svc-card');
            if (firstCard) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollBy({ left: firstCard.clientWidth + 32, behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <section className="pw-services-section">
            <style jsx>{`
                .pw-services-section {
                    padding: 110px 0;
                    background: #ffffff;
                    position: relative;
                    overflow: hidden;
                }

                /* Subtle background decoration */
                .pw-services-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, #e2e8f0 20%, #e2e8f0 80%, transparent);
                }

                .pw-services-wrap {
                    padding: 0 max(5vw, 140px);
                }

                /* Header */
                .pw-svc-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-bottom: 60px;
                }

                .pw-svc-eyebrow {
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
                .pw-svc-eyebrow::before {
                    content: '';
                    display: block;
                    width: 28px;
                    height: 1.5px;
                    background: var(--primary-cyan, #00CCFF);
                    flex-shrink: 0;
                }

                .pw-svc-title {
                    font-size: clamp(2.2rem, 4vw, 3.6rem);
                    font-weight: 900;
                    color: #0d1b33;
                    letter-spacing: -2px;
                    line-height: 1.08;
                    margin: 0;
                }
                .pw-svc-title span {
                    color: var(--primary-cyan, #00CCFF);
                    font-style: italic;
                }

                /* Nav Arrows */
                .pw-svc-nav {
                    display: flex;
                    gap: 12px;
                }
                .pw-nav-btn {
                    width: 54px;
                    height: 54px;
                    border-radius: 50%;
                    border: 1px solid #e2e8f0;
                    background: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    color: #0d1b33;
                    font-size: 0.85rem;
                }
                .pw-nav-btn:hover {
                    background: #0a162b;
                    border-color: #0a162b;
                    color: #fff;
                    transform: scale(1.05);
                }

                /* Cards Track */
                .pw-svc-track {
                    display: flex;
                    overflow-x: auto;
                    gap: 32px;
                    padding-bottom: 20px;
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                    scroll-snap-type: x mandatory;
                }
                .pw-svc-track::-webkit-scrollbar {
                    display: none;
                }

                /* Service Card */
                .pw-svc-card {
                    flex: 0 0 380px;
                    scroll-snap-align: start;
                    border-radius: 20px;
                    overflow: hidden;
                    background: #fff;
                    border: 1px solid #f1f5f9;
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    position: relative;
                }
                .pw-svc-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 25px 60px rgba(10, 22, 43, 0.1);
                    border-color: transparent;
                }

                .pw-svc-img-wrap {
                    position: relative;
                    height: 320px;
                    overflow: hidden;
                }
                .pw-svc-img-wrap img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .pw-svc-card:hover .pw-svc-img-wrap img {
                    transform: scale(1.06);
                }

                /* Number Badge */
                .pw-svc-number {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    background: rgba(255,255,255,0.15);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.75rem;
                    font-weight: 800;
                    color: #fff;
                    z-index: 2;
                }

                /* Gradient overlay on image */
                .pw-svc-img-gradient {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 120px;
                    background: linear-gradient(to top, rgba(255,255,255,1) 0%, transparent 100%);
                    z-index: 1;
                }

                .pw-svc-body {
                    padding: 20px 28px 28px;
                    position: relative;
                }

                .pw-svc-card-title {
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: #0d1b33;
                    margin: 0 0 10px;
                    letter-spacing: -0.5px;
                    line-height: 1.25;
                    transition: color 0.3s ease;
                }
                .pw-svc-card:hover .pw-svc-card-title {
                    color: var(--primary-cyan, #00CCFF);
                }

                .pw-svc-card-desc {
                    font-size: 0.88rem;
                    color: #64748b;
                    line-height: 1.65;
                    margin: 0 0 20px;
                }

                .pw-svc-card-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.78rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: #0d1b33;
                    text-decoration: none;
                    border-bottom: 1.5px solid #0d1b33;
                    padding-bottom: 2px;
                    transition: all 0.3s ease;
                }
                .pw-svc-card-link:hover {
                    color: var(--primary-cyan, #00CCFF);
                    border-color: var(--primary-cyan, #00CCFF);
                }
                .pw-svc-card-link i {
                    font-size: 0.65rem;
                    transition: transform 0.3s ease;
                }
                .pw-svc-card-link:hover i {
                    transform: translateX(4px);
                }

                /* ── Mobile ── */
                @media (max-width: 991px) {
                    .pw-services-section {
                        padding: 70px 0;
                    }
                    .pw-services-wrap {
                        padding: 0 24px;
                    }
                    .pw-svc-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 20px;
                        margin-bottom: 40px;
                    }
                    .pw-svc-nav {
                        display: none;
                    }
                    .pw-svc-title {
                        font-size: 2rem !important;
                        letter-spacing: -1px;
                    }
                    .pw-svc-card {
                        flex: 0 0 320px;
                    }
                    .pw-svc-img-wrap {
                        height: 260px;
                    }
                }

                @media (max-width: 767px) {
                    .pw-svc-card {
                        flex: 0 0 280px;
                    }
                    .pw-svc-img-wrap {
                        height: 220px;
                    }
                    .pw-svc-body {
                        padding: 16px 20px 22px;
                    }
                    .pw-svc-card-title {
                        font-size: 1.1rem;
                    }
                    .pw-svc-card-desc {
                        font-size: 0.82rem;
                        margin-bottom: 14px;
                    }
                }
            `}</style>

            <div className="pw-services-wrap">
                {/* Header */}
                <div className="pw-svc-header wow fadeInUp">
                    <div>
                        <h2 className="pw-svc-title">
                            Our Cleaning<br /><span>Services.</span>
                        </h2>
                    </div>
                    <div className="pw-svc-nav">
                        <button className="pw-nav-btn" onClick={scrollPrev} aria-label="Previous">
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button className="pw-nav-btn" onClick={scrollNext} aria-label="Next">
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div
                    className="pw-svc-track"
                    ref={scrollRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {services.map((item) => (
                        <div className="pw-svc-card wow fadeInUp" key={item.id} data-wow-delay={`0.${item.id}s`}>
                            <div className="pw-svc-img-wrap">
                                <img src={item.poster} alt={item.title} />
                                <div className="pw-svc-number">{item.id}</div>
                                <div className="pw-svc-img-gradient"></div>
                            </div>
                            <div className="pw-svc-body">
                                <h3 className="pw-svc-card-title">{item.title}</h3>
                                <p className="pw-svc-card-desc">{item.desc}</p>
                                <Link href={item.link} className="pw-svc-card-link">
                                    Learn More <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
