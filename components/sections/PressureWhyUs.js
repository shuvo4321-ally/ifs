import React, { useEffect, useRef } from 'react';

export default function PressureWhyUs() {
    const statsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('pw-stat-visible');
                }
            });
        }, { threshold: 0.5 });

        statsRef.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const stats = [
        { number: '15K+', label: 'Surfaces Restored', icon: 'fas fa-spray-can' },
        { number: '100%', label: 'Satisfaction Rate', icon: 'fas fa-star' },
        { number: '12+', label: 'Years Experience', icon: 'fas fa-award' },
        { number: '4.9', label: 'Google Rating', icon: 'fab fa-google' }
    ];

    const benefits = [
        {
            icon: 'fas fa-shield-alt',
            title: 'Damage-Free Process',
            desc: 'Calibrated PSI control ensures surfaces are deep-cleaned without erosion, etching, or coating damage.'
        },
        {
            icon: 'fas fa-leaf',
            title: 'Eco-Certified Solutions',
            desc: 'GECA-approved, biodegradable cleaning agents that protect your property and the Australian environment.'
        },
        {
            icon: 'fas fa-bolt',
            title: 'Same-Day Turnaround',
            desc: 'Most residential surfaces are completed in a single session — your property restored before sundown.'
        }
    ];

    return (
        <section className="pw-whyus">
            <style jsx>{`
                .pw-whyus {
                    position: relative;
                    background: #ffffff;
                    overflow: hidden;
                }

                /* ── Stats Band ── */
                .pw-stats-band {
                    background: #0a162b;
                    padding: 60px max(5vw, 140px);
                    display: flex;
                    justify-content: space-between;
                    gap: 30px;
                    position: relative;
                    overflow: hidden;
                }
                .pw-stats-band::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, 
                        transparent, 
                        var(--primary-cyan, #00CCFF) 20%, 
                        var(--primary-cyan, #00CCFF) 80%, 
                        transparent);
                }
                /* Subtle grid pattern */
                .pw-stats-band::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
                    background-size: 60px 60px;
                    pointer-events: none;
                }

                .pw-stat-card {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    position: relative;
                    z-index: 2;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .pw-stat-card.pw-stat-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .pw-stat-card:nth-child(2) { transition-delay: 0.1s; }
                .pw-stat-card:nth-child(3) { transition-delay: 0.2s; }
                .pw-stat-card:nth-child(4) { transition-delay: 0.3s; }

                .pw-stat-icon-wrap {
                    width: 56px;
                    height: 56px;
                    border-radius: 14px;
                    background: rgba(0, 204, 255, 0.08);
                    border: 1px solid rgba(0, 204, 255, 0.15);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .pw-stat-icon-wrap i {
                    color: var(--primary-cyan, #00CCFF);
                    font-size: 1.2rem;
                }

                .pw-stat-number {
                    font-size: 2.4rem;
                    font-weight: 900;
                    color: #ffffff;
                    letter-spacing: -2px;
                    line-height: 1;
                }
                .pw-stat-label {
                    font-size: 0.68rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: rgba(255,255,255,0.4);
                    margin-top: 4px;
                }

                /* ── Benefits Section ── */
                .pw-benefits-section {
                    padding: 100px max(5vw, 140px);
                    display: flex;
                    gap: 80px;
                    align-items: flex-start;
                }

                .pw-benefits-header {
                    flex: 0 0 380px;
                    position: sticky;
                    top: 120px;
                }

                .pw-benefits-eyebrow {
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
                .pw-benefits-eyebrow::before {
                    content: '';
                    display: block;
                    width: 28px;
                    height: 1.5px;
                    background: var(--primary-cyan, #00CCFF);
                    flex-shrink: 0;
                }

                .pw-benefits-title {
                    font-size: clamp(2.2rem, 4vw, 3.4rem);
                    font-weight: 900;
                    color: #0d1b33;
                    letter-spacing: -2px;
                    line-height: 1.08;
                    margin: 0 0 24px;
                }
                .pw-benefits-title span {
                    color: var(--primary-cyan, #00CCFF);
                    font-style: italic;
                }
                .pw-benefits-subtitle {
                    font-size: 1rem;
                    color: #64748b;
                    line-height: 1.8;
                    margin: 0;
                    max-width: 340px;
                }

                /* Benefit Cards */
                .pw-benefits-grid {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }

                .pw-benefit-item {
                    padding: 40px 0;
                    border-bottom: 1px solid #f1f5f9;
                    display: flex;
                    gap: 28px;
                    align-items: flex-start;
                    transition: all 0.4s ease;
                    cursor: default;
                }
                .pw-benefit-item:first-child {
                    border-top: 1px solid #f1f5f9;
                }
                .pw-benefit-item:hover {
                    padding-left: 12px;
                }

                .pw-benefit-icon {
                    width: 64px;
                    height: 64px;
                    border-radius: 16px;
                    background: linear-gradient(135deg, #f0f9ff 0%, #e6f7ff 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .pw-benefit-icon i {
                    font-size: 1.3rem;
                    color: #0a162b;
                    transition: color 0.3s ease;
                }
                .pw-benefit-item:hover .pw-benefit-icon {
                    background: #0a162b;
                    transform: scale(1.08) rotate(3deg);
                    box-shadow: 0 12px 30px rgba(10,22,43,0.15);
                }
                .pw-benefit-item:hover .pw-benefit-icon i {
                    color: var(--primary-cyan, #00CCFF);
                }

                .pw-benefit-text h3 {
                    font-size: 1.3rem;
                    font-weight: 800;
                    color: #0d1b33;
                    margin: 0 0 10px;
                    letter-spacing: -0.5px;
                    transition: color 0.3s ease;
                }
                .pw-benefit-item:hover .pw-benefit-text h3 {
                    color: var(--primary-cyan, #00CCFF);
                }
                .pw-benefit-text p {
                    font-size: 0.95rem;
                    color: #64748b;
                    line-height: 1.75;
                    margin: 0;
                    max-width: 420px;
                }

                /* ── Mobile ── */
                @media (max-width: 991px) {
                    .pw-stats-band {
                        padding: 40px 24px;
                        flex-wrap: wrap;
                        gap: 24px;
                    }
                    .pw-stat-card {
                        flex: 0 0 calc(50% - 12px);
                    }
                    .pw-stat-number {
                        font-size: 1.8rem;
                    }
                    .pw-benefits-section {
                        padding: 70px 24px;
                        flex-direction: column;
                        gap: 40px;
                    }
                    .pw-benefits-header {
                        flex: none;
                        position: static;
                        width: 100%;
                    }
                    .pw-benefits-title {
                        font-size: 2rem !important;
                        letter-spacing: -1px;
                    }
                    .pw-benefits-subtitle {
                        max-width: 100%;
                    }
                }

                @media (max-width: 767px) {
                    .pw-stats-band {
                        padding: 32px 20px;
                        gap: 20px;
                    }
                    .pw-stat-icon-wrap {
                        width: 44px;
                        height: 44px;
                        border-radius: 10px;
                    }
                    .pw-stat-icon-wrap i {
                        font-size: 1rem;
                    }
                    .pw-stat-number {
                        font-size: 1.5rem !important;
                        letter-spacing: -1px;
                    }
                    .pw-stat-label {
                        font-size: 0.58rem;
                    }
                    .pw-benefit-item {
                        padding: 28px 0;
                        gap: 20px;
                    }
                    .pw-benefit-item:hover {
                        padding-left: 0;
                    }
                    .pw-benefit-icon {
                        width: 52px;
                        height: 52px;
                    }
                    .pw-benefit-text h3 {
                        font-size: 1.1rem;
                    }
                    .pw-benefit-text p {
                        font-size: 0.88rem;
                    }
                }
            `}</style>

            {/* ── Stats Band ── */}
            <div className="pw-stats-band">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="pw-stat-card"
                        ref={el => statsRef.current[i] = el}
                    >
                        <div className="pw-stat-icon-wrap">
                            <i className={stat.icon}></i>
                        </div>
                        <div>
                            <div className="pw-stat-number">{stat.number}</div>
                            <div className="pw-stat-label">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Benefits Section ── */}
            <div className="pw-benefits-section">
                <div className="pw-benefits-header wow fadeInUp">
                    <div className="pw-benefits-eyebrow">Why Choose Us</div>
                    <h2 className="pw-benefits-title">
                        Precision That<br />
                        <span>Protects.</span>
                    </h2>
                    <p className="pw-benefits-subtitle">
                        Our advanced pressure washing methodology combines industrial-grade power with surgical precision — ensuring a flawless finish on every surface type.
                    </p>
                </div>

                <div className="pw-benefits-grid">
                    {benefits.map((benefit, i) => (
                        <div key={i} className="pw-benefit-item wow fadeInUp" data-wow-delay={`${i * 0.15}s`}>
                            <div className="pw-benefit-icon">
                                <i className={benefit.icon}></i>
                            </div>
                            <div className="pw-benefit-text">
                                <h3>{benefit.title}</h3>
                                <p>{benefit.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
