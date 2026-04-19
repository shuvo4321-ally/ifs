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
                /* Shade effect: hide the far left with a gradient from white to align with global padding */
                .about-img-zone::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: max(5vw, 140px);
                    height: 100%;
                    background: linear-gradient(to right, #fff, transparent);
                    z-index: 2;
                    pointer-events: none;
                }
                /* Right edge shade for smooth transition to content */
                .about-img-zone::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 120px;
                    height: 100%;
                    background: linear-gradient(to right, transparent, #fff);
                    pointer-events: none;
                    z-index: 2;
                }
                .about-img-zone img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
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
                    font-weight: 700;
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
                        height: 350px;
                        width: 100%;
                    }
                    .about-img-zone::before {
                        display: none;
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
                        max-width: 100% !important;
                    }
                }
                
                /* ── Premium mobile-only enhancements ────────── */
                @media (max-width: 767px) {
                    .about-area {
                        background: #0a162b !important;
                    }
                    .about-img-zone {
                        height: 300px !important;
                        position: relative !important;
                    }
                    /* Gradient transition from image to dark content */
                    .about-img-zone::after {
                        display: block !important;
                        width: 100% !important;
                        height: 120px !important;
                        right: auto !important;
                        left: 0 !important;
                        bottom: 0 !important;
                        top: auto !important;
                        background: linear-gradient(to top, #0a162b, transparent) !important;
                    }
                    .about-content-zone {
                        padding: 32px 24px 56px !important;
                        background: #0a162b !important;
                    }
                    .about-eyebrow {
                        color: rgba(255,255,255,0.4) !important;
                    }
                    .about-eyebrow::before {
                        background: var(--primary-cyan) !important;
                    }
                    .about-headline {
                        color: #ffffff !important;
                        font-size: 1.85rem !important;
                        letter-spacing: -0.8px !important;
                        margin-bottom: 18px !important;
                    }
                    .about-headline-accent {
                        color: var(--primary-cyan) !important;
                    }
                    .about-body {
                        color: rgba(255,255,255,0.6) !important;
                        font-size: 0.92rem !important;
                        line-height: 1.7 !important;
                        margin-bottom: 28px !important;
                    }
                    /* Stats row — dark theme */
                    .about-stat-band {
                        gap: 0 !important;
                        margin-bottom: 32px !important;
                        justify-content: space-between !important;
                    }
                    .about-stat-item {
                        text-align: center;
                        flex: 1;
                        border-right: 1px solid rgba(255,255,255,0.08);
                    }
                    .about-stat-item:last-child {
                        border-right: none;
                    }
                    .about-stat-num {
                        color: #ffffff !important;
                        font-size: 2rem !important;
                    }
                    .about-stat-label {
                        color: rgba(255,255,255,0.35) !important;
                        font-size: 0.58rem !important;
                    }
                    .about-rule {
                        background: rgba(255,255,255,0.08) !important;
                        margin-bottom: 24px !important;
                    }
                    .about-trust-list {
                        margin-bottom: 32px !important;
                        gap: 8px !important;
                    }
                    .about-trust-item {
                        color: rgba(255,255,255,0.55) !important;
                        font-size: 0.82rem !important;
                    }
                    .about-trust-item::before {
                        color: var(--primary-cyan) !important;
                    }
                    .about-cta {
                        color: #0a162b !important;
                        background: var(--primary-cyan) !important;
                        border: none !important;
                        border-bottom: none !important;
                        padding: 14px 28px !important;
                        border-radius: 6px !important;
                        width: 100% !important;
                        justify-content: center !important;
                        font-size: 0.82rem !important;
                        letter-spacing: 1.5px !important;
                    }
                    .about-cta:hover {
                        color: #0a162b !important;
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
