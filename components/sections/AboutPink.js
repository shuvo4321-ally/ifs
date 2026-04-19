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

                /* Trust marks — icon style */
                .about-trust-list {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    margin-bottom: 40px;
                }
                .about-trust-item {
                    font-size: 0.88rem;
                    color: #475569;
                    font-weight: 600;
                    letter-spacing: 0.1px;
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    line-height: 1.4;
                }
                .about-trust-item img {
                    width: 34px;
                    height: 34px;
                    object-fit: contain;
                    flex-shrink: 0;
                    border-radius: 6px;
                }

                /* CTA Button - Dark Navy Style matching Header BG */
                :global(.about-cta) {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    background-color: #0a162b !important;
                    border: 1px solid #0a162b !important;
                    color: #ffffff !important;
                    font-family: 'DM Sans', sans-serif !important;
                    font-size: 0.93rem !important;
                    font-weight: 700 !important;
                    letter-spacing: 0.5px !important;
                    padding: 14px 32px !important;
                    border-radius: 4px !important;
                    text-decoration: none !important;
                    transition: all 0.3s ease !important;
                    box-shadow: 0 4px 15px rgba(10, 22, 43, 0.2) !important;
                    width: fit-content;
                    margin-top: 10px;
                }
                :global(.about-cta:hover) {
                    background-color: var(--primary-cyan, #00CCFF) !important;
                    border-color: var(--primary-cyan, #00CCFF) !important;
                    transform: translateY(-2px) !important;
                    box-shadow: 0 6px 15px rgba(0, 204, 255, 0.3) !important;
                    color: #0a162b !important;
                }
                :global(.about-cta i) {
                    font-size: 0.8rem;
                    transition: transform 0.3s;
                }
                :global(.about-cta:hover i) {
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
                        overflow-x: hidden !important;
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
                        padding: 24px 24px 0 !important;
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
                        margin-bottom: 8px !important;
                        gap: 12px !important;
                    }
                    .about-trust-item {
                        color: rgba(255,255,255,0.55) !important;
                        font-size: 0.82rem !important;
                    }
                    .about-trust-item img {
                        width: 28px !important;
                        height: 28px !important;
                    }
                    :global(.about-cta) {
                        padding: 12px 28px !important;
                        width: 100% !important;
                        justify-content: center !important;
                        font-size: 0.95rem !important;
                        margin-top: 4px !important;
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


                    <h2 className="about-headline">
                        Complete Facility<br />
                        Solutions For<br />
                        <span className="about-headline-accent">Modern Business.</span>
                    </h2>

                    <p className="about-body">
                        Icon Facility Services is your trusted partner in maintaining high-performance environments. From clinical sanitation to industrial maintenance — we protect your assets and keep your operations seamless.
                    </p>


                    {/* Trust marks */}
                    <div className="about-trust-list">
                        <div className="about-trust-item">
                            <img src="/assets/img/icons/iso_quality_icon.png" alt="ISO 9001" style={{ transform: 'scale(1.4)' }} />
                            <span>ISO 9001 Certified<br/>Quality Management</span>
                        </div>
                        <div className="about-trust-item">
                            <img src="/assets/img/icons/insured_staff_icon.png" alt="Insured Staff" style={{ transform: 'scale(1.25)' }} />
                            <span>Fully insured, police-checked<br/>staff on every job</span>
                        </div>
                        <div className="about-trust-item">
                            <img src="/assets/img/icons/support_24_7_icon.png" alt="24/7 Support" style={{ transform: 'scale(0.9)' }} />
                            <span>24/7 emergency response &amp;<br/>dedicated account managers</span>
                        </div>
                    </div>

                    <Link href="/about" className="about-cta">
                        Discover More <i className="fas fa-arrow-right"></i>
                    </Link>

                </div>

            </div>
        </section>
    );
}
