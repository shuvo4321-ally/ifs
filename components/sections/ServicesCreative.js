import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ServicesCreative() {
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
                        const firstCard = scrollRef.current.querySelector('.pf-service-card-v2');
                        if (firstCard) {
                            const cardWidth = firstCard.clientWidth;
                            scrollRef.current.scrollBy({ left: cardWidth + 40, behavior: 'smooth' });
                        }
                    }
                }
            }, 4000);
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
                    const firstCard = scrollRef.current.querySelector('.pf-service-card-v2');
                    if (firstCard) {
                        const cardWidth = firstCard.clientWidth;
                        scrollRef.current.scrollBy({ left: cardWidth + 40, behavior: 'smooth' });
                    }
                }
            }
        }, 4000);
    };

    const scrollPrev = () => {
        if (scrollRef.current) {
            const firstCard = scrollRef.current.querySelector('.pf-service-card-v2');
            if (firstCard) {
                const cardWidth = firstCard.clientWidth;
                scrollRef.current.scrollBy({ left: -(cardWidth + 40), behavior: 'smooth' });
            }
        }
    };

    const scrollNext = () => {
        if (scrollRef.current) {
            const firstCard = scrollRef.current.querySelector('.pf-service-card-v2');
            if (firstCard) {
                const cardWidth = firstCard.clientWidth;
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollBy({ left: cardWidth + 40, behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <section className="pf-services-grid-container" style={{ padding: '100px 0', background: '#fff' }}>
            <div className="container-fluid" style={{ padding: '0 5vw', position: 'relative' }}>
                <div className="section-title-wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
                    <div className="pf-section-header wow fadeInUp">
                        <span className="pf-subtitle">What We Do</span>
                        <h2 className="main-title" style={{ fontSize: '3.5rem', fontWeight: 900, color: '#0a162b' }}>
                            Our Cleaning Services
                        </h2>
                    </div>
                    <div className="pf-horizontal-nav wow fadeIn" data-wow-delay=".5s" style={{ position: 'static', display: 'flex', gap: '15px' }}>
                        <button className="pf-nav-arrow" onClick={scrollPrev} aria-label="Previous service" style={{ width: '60px', height: '60px', borderRadius: '50%', border: '1px solid #e2e8f0', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button className="pf-nav-arrow" onClick={scrollNext} aria-label="Next service" style={{ width: '60px', height: '60px', borderRadius: '50%', border: '1px solid #e2e8f0', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>

                <div 
                    className="pf-services-horizontal-track" 
                    ref={scrollRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ 
                        display: 'flex', 
                        overflowX: 'auto', 
                        gap: '40px', 
                        paddingBottom: '40px',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    {services.map((item) => (
                        <div className="pf-service-card-v2 pf-mobile-card-scale wow fadeInUp" key={item.id} data-wow-delay={`.${item.id}s`} style={{ flex: '0 0 400px' }}>
                            <div className="pf-card-img-wrap" style={{ height: '450px' }}>
                                <img src={item.poster} alt={item.title} className="pf-card-img" style={{ height: '100%', objectFit: 'cover' }} />
                                <div className="pf-card-number-v2">{item.id}</div>
                            </div>
                            <div className="pf-card-content-v2" style={{ padding: '30px' }}>
                                <h3 className="pf-card-title-v2" style={{ minHeight: 'auto', marginBottom: '20px', fontSize: '1.8rem' }}>{item.title}</h3>
                                <Link href={item.link} className="pf-card-link-v2">
                                    Service details <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
