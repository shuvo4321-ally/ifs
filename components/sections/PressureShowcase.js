import React, { useState, useRef, useEffect } from 'react';

export default function PressureShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const progressRef = useRef(null);
    const timerRef = useRef(null);

    const showcases = [
        {
            id: 1,
            category: 'Residential',
            title: 'Driveway & Pathway Restoration',
            desc: 'Full high-pressure scouring and chemical treatment for a luxury residential driveway, removing structural oil stains and organic buildup to reveal pristine concrete.',
            image: '/assets/img/services/driveway_before_after.jpg',
            stats: { area: '180m²', time: '4 Hours', result: 'Like-New' }
        },
        {
            id: 2,
            category: 'Restoration',
            title: 'Heritage Brick Soft-Wash',
            desc: 'Delicate low-pressure cleaning of a heritage render facade, preserving historical integrity while eliminating years of industrial soot and biological growth.',
            image: '/assets/img/services/brick_washing.jpg',
            stats: { area: '320m²', time: '6 Hours', result: 'Preserved' }
        },
        {
            id: 3,
            category: 'Commercial',
            title: 'Retail Complex Exterior',
            desc: 'Comprehensive cleaning of a high-traffic shopping storefront, focusing on crystal-clear window detailing, pavement hygiene, and signage restoration.',
            image: '/assets/img/services/pressure_washing_hero.jpg',
            stats: { area: '850m²', time: '2 Days', result: 'Spotless' }
        },
        {
            id: 4,
            category: 'Maintenance',
            title: 'Roof & Gutter Safety Audit',
            desc: 'Debris extraction and anti-fungal roof treatment for a strata complex, ensuring full water management compliance and extended roof lifespan.',
            image: '/assets/img/services/roof_wash_v3.png',
            stats: { area: '400m²', time: '5 Hours', result: 'Certified' }
        }
    ];

    useEffect(() => {
        const autoAdvance = () => {
            timerRef.current = setInterval(() => {
                setActiveIndex(prev => (prev + 1) % showcases.length);
            }, 6000);
        };
        autoAdvance();
        return () => clearInterval(timerRef.current);
    }, []);

    const handleSelect = (index) => {
        clearInterval(timerRef.current);
        setActiveIndex(index);
        timerRef.current = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % showcases.length);
        }, 6000);
    };

    const active = showcases[activeIndex];

    return (
        <section className="pw-showcase">
            <style jsx>{`
                .pw-showcase {
                    background: #0a162b;
                    padding: 110px 0;
                    position: relative;
                    overflow: hidden;
                }

                /* Background Texture */
                .pw-showcase::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image:
                        radial-gradient(circle at 20% 50%, rgba(0,204,255,0.04) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(0,204,255,0.03) 0%, transparent 40%);
                    pointer-events: none;
                }

                .pw-showcase-inner {
                    padding: 0 max(5vw, 140px);
                    position: relative;
                    z-index: 2;
                }

                /* Header */
                .pw-showcase-header {
                    margin-bottom: 70px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }
                .pw-showcase-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 0.65rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: rgba(255,255,255,0.35);
                    margin-bottom: 20px;
                }
                .pw-showcase-eyebrow::before {
                    content: '';
                    width: 28px;
                    height: 1.5px;
                    background: var(--primary-cyan, #00CCFF);
                    flex-shrink: 0;
                }
                .pw-showcase-title {
                    font-size: clamp(2.2rem, 4vw, 3.6rem);
                    font-weight: 900;
                    color: #ffffff;
                    letter-spacing: -2px;
                    line-height: 1.08;
                    margin: 0;
                }
                .pw-showcase-title span {
                    color: var(--primary-cyan, #00CCFF);
                    font-style: italic;
                }
                .pw-showcase-counter {
                    font-size: 5rem;
                    font-weight: 900;
                    color: rgba(255,255,255,0.04);
                    letter-spacing: -3px;
                    line-height: 1;
                }

                /* Main Layout */
                .pw-showcase-layout {
                    display: flex;
                    gap: 60px;
                    align-items: stretch;
                    min-height: 500px;
                }

                /* Image Side */
                .pw-showcase-image-wrap {
                    flex: 0 0 55%;
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    background: #131944;
                }
                .pw-showcase-img {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0;
                    transition: opacity 0.8s ease, transform 8s ease-out;
                    transform: scale(1.08);
                }
                .pw-showcase-img.active {
                    opacity: 1;
                    transform: scale(1);
                }
                .pw-showcase-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top,
                        rgba(10,22,43,0.6) 0%,
                        transparent 40%);
                    z-index: 2;
                }

                /* Content Side */
                .pw-showcase-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                /* Project Selector Tabs */
                .pw-project-tabs {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }
                .pw-project-tab {
                    padding: 28px 0;
                    border-bottom: 1px solid rgba(255,255,255,0.06);
                    cursor: pointer;
                    transition: all 0.4s ease;
                    position: relative;
                }
                .pw-project-tab:first-child {
                    border-top: 1px solid rgba(255,255,255,0.06);
                }
                .pw-project-tab::before {
                    content: '';
                    position: absolute;
                    left: -24px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 3px;
                    height: 0%;
                    background: var(--primary-cyan, #00CCFF);
                    transition: height 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    border-radius: 2px;
                }
                .pw-project-tab.active::before {
                    height: 60%;
                }
                .pw-project-tab:hover {
                    padding-left: 8px;
                }

                .pw-tab-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0;
                    transition: margin 0.3s ease;
                }
                .pw-project-tab.active .pw-tab-header {
                    margin-bottom: 14px;
                }

                .pw-tab-category {
                    font-size: 0.6rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2.5px;
                    color: rgba(255,255,255,0.3);
                    transition: color 0.3s ease;
                }
                .pw-project-tab.active .pw-tab-category {
                    color: var(--primary-cyan, #00CCFF);
                }
                .pw-tab-number {
                    font-size: 0.75rem;
                    font-weight: 800;
                    color: rgba(255,255,255,0.15);
                    letter-spacing: 1px;
                }

                .pw-tab-title {
                    font-size: 1.4rem;
                    font-weight: 800;
                    color: rgba(255,255,255,0.5);
                    letter-spacing: -0.5px;
                    margin: 0;
                    transition: color 0.3s ease;
                }
                .pw-project-tab.active .pw-tab-title,
                .pw-project-tab:hover .pw-tab-title {
                    color: #ffffff;
                }

                .pw-tab-desc {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.5s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .pw-project-tab.active .pw-tab-desc {
                    max-height: 140px; /* Slight bump for desktop */
                }
                .pw-tab-desc p {
                    font-size: 0.9rem;
                    color: rgba(255,255,255,0.45);
                    line-height: 1.7;
                    margin: 0;
                    padding-top: 4px;
                }
                .pw-mobile-img-wrap {
                    display: none;
                }

                /* ── Mobile ── */
                @media (max-width: 991px) {
                    .pw-showcase {
                        padding: 70px 0;
                    }
                    .pw-showcase-inner {
                        padding: 0 24px;
                    }
                    .pw-showcase-layout {
                        flex-direction: column;
                        gap: 40px;
                        min-height: auto;
                    }
                    .pw-showcase-image-wrap {
                        display: none;
                    }
                    .pw-showcase-header {
                        margin-bottom: 40px;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 10px;
                    }
                    .pw-showcase-counter {
                        display: none;
                    }
                    .pw-showcase-title {
                        font-size: 2rem !important;
                        letter-spacing: -1px;
                    }
                    .pw-project-tab::before {
                        display: none;
                    }
                    .pw-tab-title {
                        font-size: 1.15rem;
                    }
                    .pw-mobile-img-wrap {
                        display: block;
                        margin-top: 15px;
                        height: 220px;
                        border-radius: 12px;
                        overflow: hidden;
                        margin-bottom: 5px;
                    }
                    .pw-mobile-img-wrap img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    .pw-project-tab.active .pw-tab-desc {
                        max-height: 400px;
                    }
                }

                @media (max-width: 767px) {
                    .pw-showcase {
                        padding: 60px 0;
                    }
                    .pw-showcase-image-wrap {
                        display: none;
                    }
                    .pw-project-tab {
                        padding: 20px 0;
                    }
                }
            `}</style>

            <div className="pw-showcase-inner">
                {/* Header */}
                <div className="pw-showcase-header wow fadeInUp">
                    <div>
                        <div className="pw-showcase-eyebrow">Project Portfolio</div>
                        <h2 className="pw-showcase-title">
                            Our Recent<br /><span>Conversions.</span>
                        </h2>
                    </div>
                    <div className="pw-showcase-counter">
                        0{activeIndex + 1}
                    </div>
                </div>

                {/* Layout */}
                <div className="pw-showcase-layout">
                    {/* Image */}
                    <div className="pw-showcase-image-wrap wow fadeInLeft">
                        {showcases.map((item, i) => (
                            <img
                                key={item.id}
                                src={item.image}
                                alt={item.title}
                                className={`pw-showcase-img ${i === activeIndex ? 'active' : ''}`}
                            />
                        ))}
                        <div className="pw-showcase-image-overlay"></div>

                    </div>

                    {/* Content Tabs */}
                    <div className="pw-showcase-content wow fadeInRight">
                        <div className="pw-project-tabs">
                            {showcases.map((item, i) => (
                                <div
                                    key={item.id}
                                    className={`pw-project-tab ${i === activeIndex ? 'active' : ''}`}
                                    onClick={() => handleSelect(i)}
                                >
                                    <div className="pw-tab-header">
                                        <span className="pw-tab-category">{item.category}</span>
                                        <span className="pw-tab-number">0{item.id}</span>
                                    </div>
                                    <h3 className="pw-tab-title">{item.title}</h3>
                                    <div className="pw-tab-desc">
                                        <p>{item.desc}</p>
                                        <div className="pw-mobile-img-wrap">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
