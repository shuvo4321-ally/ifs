import React from 'react';
import Link from 'next/link';

export default function AboutPink() {
    return (
        <section className="about-area" style={{ background: '#fff', overflow: 'hidden' }}>
            <style jsx>{`

                /* ── Layout: full-viewport flex, no container ── */
                .about-wrap {
                    display: flex;
                    align-items: stretch;
                    min-height: 700px;
                }

                /* ── Left: image bleeds to viewport edge ──────── */
                .about-img-zone {
                    flex: 0 0 52%;
                    position: relative;
                    overflow: hidden;
                }
                .about-img-zone img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }
                /* Subtle right-edge fade so image meets content naturally */
                .about-img-zone::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 120px;
                    height: 100%;
                    background: linear-gradient(to right, transparent, #fff);
                    pointer-events: none;
                }

                /* ── Right: content zone ──────────────────────── */
                .about-content-zone {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 90px max(40px, 7vw) 90px 48px;
                }

                /* Overline */
                .about-eyebrow {
                    font-size: 0.65rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: #94a3b8;
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .about-eyebrow::before {
                    content: '';
                    display: block;
                    width: 28px;
                    height: 1.5px;
                    background: var(--primary-cyan);
                    flex-shrink: 0;
                }

                /* Headline */
                .about-headline {
                    font-size: clamp(2.4rem, 4vw, 3.6rem);
                    font-weight: 900;
                    color: #0d1b33;
                    line-height: 1.07;
                    letter-spacing: -2px;
                    margin: 0 0 24px;
                }
                .about-headline-accent {
                    color: var(--primary-cyan);
                    font-style: italic;
                }

                /* Body */
                .about-body {
                    font-size: 1rem;
                    color: #64748b;
                    line-height: 1.85;
                    margin: 0 0 44px;
                    max-width: 440px;
                }

                /* Stats — pure typography, zero containers */
                .about-stat-band {
                    display: flex;
                    gap: 40px;
                    margin-bottom: 40px;
                }
                .about-stat-item {
                    display: flex;
                    flex-direction: column;
                }
                .about-stat-num {
                    font-size: 3rem;
                    font-weight: 900;
                    color: #0d1b33;
                    letter-spacing: -3px;
                    line-height: 1;
                }
                .about-stat-label {
                    font-size: 0.62rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #94a3b8;
                    margin-top: 7px;
                }

                /* Horizontal rule between stats and trust marks */
                .about-rule {
                    width: 100%;
                    height: 1px;
                    background: #f1f5f9;
                    margin: 0 0 32px;
                }

                /* Trust marks — dash style, no bullets/icons */
                .about-trust-list {
                    display: flex;
                    flex-direction: column;
                    gap: 9px;
                    margin-bottom: 40px;
                }
                .about-trust-item {
                    font-size: 0.84rem;
                    color: #475569;
                    font-weight: 500;
                    letter-spacing: 0.1px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .about-trust-item::before {
                    content: '—';
                    color: var(--primary-cyan);
                    font-weight: 400;
                    flex-shrink: 0;
                }

                /* CTA */
                .about-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.85rem;
                    font-weight: 800;
                    color: #0d1b33;
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    border-bottom: 1.5px solid #0d1b33;
                    padding-bottom: 3px;
                    transition: color 0.2s, border-color 0.2s;
                    width: fit-content;
                }
                .about-cta:hover {
                    color: var(--primary-cyan);
                    border-color: var(--primary-cyan);
                }
                .about-cta i {
                    font-size: 0.75rem;
                    transition: transform 0.2s;
                }
                .about-cta:hover i {
                    transform: translateX(4px);
                }

                /* ── Mobile ────────────────────────────────────── */
                @media (max-width: 991px) {
                    .about-wrap {
                        flex-direction: column;
                        min-height: auto;
                    }
                    .about-img-zone {
                        flex: none;
                        height: 300px;
                        width: 100%;
                    }
                    .about-img-zone::after {
                        display: none;
                    }
                    .about-content-zone {
                        padding: 48px 24px 56px;
                    }
                    .about-headline {
                        font-size: 2rem !important;
                        letter-spacing: -1px !important;
                    }
                    .about-stat-num {
                        font-size: 2.2rem !important;
                        letter-spacing: -2px !important;
                    }
                    .about-stat-band {
                        gap: 28px !important;
                    }
                    .about-body {
                        margin-bottom: 32px !important;
                    }
                }
            `}</style>

            <div className="about-wrap">

                {/* Left — full-bleed image, no rounded corners, no badge */}
                <div className="about-img-zone wow fadeInLeft" data-wow-delay=".2s">
                    <img
                        src="/assets/img/services/office_cleaning_premium.jpg"
                        alt="Icon Facility Services"
                    />
                </div>

                {/* Right — editorial content */}
                <div className="about-content-zone wow fadeInRight" data-wow-delay=".3s">

                    <div className="about-eyebrow">
                        Est. 2010 &middot; Sydney, Australia
                    </div>

                    <h2 className="about-headline">
                        Complete Facility<br />
                        Solutions For<br />
                        <span className="about-headline-accent">Modern Business.</span>
                    </h2>

                    <p className="about-body">
                        Icon Facility Services is your trusted partner in maintaining high-performance environments. From clinical sanitation to industrial maintenance — we protect your assets and keep your operations seamless.
                    </p>

                    {/* Stats — pure floating typography, zero boxes */}
                    <div className="about-stat-band">
                        <div className="about-stat-item">
                            <span className="about-stat-num">500+</span>
                            <span className="about-stat-label">Clients Served</span>
                        </div>
                        <div className="about-stat-item">
                            <span className="about-stat-num">98%</span>
                            <span className="about-stat-label">Retention Rate</span>
                        </div>
                        <div className="about-stat-item">
                            <span className="about-stat-num">12+</span>
                            <span className="about-stat-label">Industries</span>
                        </div>
                    </div>

                    <div className="about-rule"></div>

                    {/* Trust marks */}
                    <div className="about-trust-list">
                        <div className="about-trust-item">ISO 9001 Certified Quality Management</div>
                        <div className="about-trust-item">Fully insured, police-checked staff on every job</div>
                        <div className="about-trust-item">24/7 emergency response &amp; dedicated account managers</div>
                    </div>

                    <Link href="/about" className="about-cta">
                        Discover More <i className="fas fa-arrow-right"></i>
                    </Link>

                </div>

            </div>
        </section>
    );
}
