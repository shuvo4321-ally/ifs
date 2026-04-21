import React from 'react';
import Link from 'next/link';

export default function PressureCTA() {
    return (
        <section className="pw-cta-section">
            <style jsx>{`
                .pw-cta-section {
                    position: relative;
                    background: #ffffff;
                    overflow: hidden;
                }

                .pw-cta-inner {
                    margin: 0 max(5vw, 140px);
                    background: #0a162b;
                    border-radius: 28px;
                    padding: 90px 80px;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 60px;
                }

                /* Decorative Background */
                .pw-cta-inner::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -20%;
                    width: 600px;
                    height: 600px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(0,204,255,0.08) 0%, transparent 70%);
                    pointer-events: none;
                }
                .pw-cta-inner::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
                    background-size: 50px 50px;
                    pointer-events: none;
                    border-radius: 28px;
                }

                /* Accent Bar */
                .pw-cta-accent {
                    position: absolute;
                    top: 0;
                    left: 60px;
                    right: 60px;
                    height: 3px;
                    background: linear-gradient(90deg, 
                        transparent, 
                        var(--primary-cyan, #00CCFF) 30%, 
                        var(--primary-cyan, #00CCFF) 70%, 
                        transparent);
                    border-radius: 0 0 4px 4px;
                }

                .pw-cta-content {
                    position: relative;
                    z-index: 2;
                    flex: 1;
                }

                .pw-cta-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.6rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: rgba(255,255,255,0.35);
                    margin-bottom: 18px;
                }
                .pw-cta-eyebrow::before {
                    content: '';
                    width: 20px;
                    height: 1.5px;
                    background: var(--primary-cyan, #00CCFF);
                }

                .pw-cta-title {
                    font-size: clamp(2rem, 3.5vw, 3rem);
                    font-weight: 900;
                    color: #ffffff;
                    letter-spacing: -2px;
                    line-height: 1.08;
                    margin: 0 0 20px;
                }
                .pw-cta-title span {
                    color: var(--primary-cyan, #00CCFF);
                    font-style: italic;
                }

                .pw-cta-desc {
                    font-size: 1.05rem;
                    color: rgba(255,255,255,0.55);
                    line-height: 1.7;
                    margin: 0;
                    max-width: 500px;
                }

                .pw-cta-actions {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    flex-shrink: 0;
                }

                .pw-cta-btn-main {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    background: var(--primary-cyan, #00CCFF);
                    color: #0a162b;
                    font-weight: 700;
                    font-size: 0.95rem;
                    letter-spacing: 0.5px;
                    padding: 18px 40px;
                    border: none;
                    border-radius: 6px;
                    text-decoration: none;
                    transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
                    min-width: 240px;
                }
                .pw-cta-btn-main:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 40px rgba(0, 204, 255, 0.3);
                    color: #0a162b;
                }
                .pw-cta-btn-main i {
                    transition: transform 0.3s ease;
                    font-size: 0.8rem;
                }
                .pw-cta-btn-main:hover i {
                    transform: translateX(5px);
                }

                .pw-cta-btn-phone {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    background: transparent;
                    color: rgba(255,255,255,0.7);
                    font-weight: 600;
                    font-size: 0.9rem;
                    padding: 16px 40px;
                    border: 1px solid rgba(255,255,255,0.12);
                    border-radius: 6px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .pw-cta-btn-phone:hover {
                    border-color: var(--primary-cyan, #00CCFF);
                    color: var(--primary-cyan, #00CCFF);
                }

                /* ── Mobile ── */
                @media (max-width: 991px) {
                    .pw-cta-inner {
                        margin: 0 24px;
                        padding: 60px 36px;
                        flex-direction: column;
                        text-align: center;
                        gap: 36px;
                        border-radius: 20px;
                    }
                    .pw-cta-accent {
                        left: 30px;
                        right: 30px;
                    }
                    .pw-cta-eyebrow {
                        justify-content: center;
                    }
                    .pw-cta-title {
                        font-size: 2rem !important;
                        letter-spacing: -1px;
                    }
                    .pw-cta-desc {
                        max-width: 100%;
                        font-size: 0.95rem;
                    }
                    .pw-cta-actions {
                        width: 100%;
                    }
                    .pw-cta-btn-main,
                    .pw-cta-btn-phone {
                        width: 100%;
                    }
                }

                @media (max-width: 767px) {
                    .pw-cta-inner {
                        margin: 0 16px;
                        padding: 48px 24px;
                    }
                    .pw-cta-title {
                        font-size: 1.7rem !important;
                    }
                }
            `}</style>

            <div className="pw-cta-inner wow fadeInUp">
                <div className="pw-cta-accent"></div>

                <div className="pw-cta-content">
                    <div className="pw-cta-eyebrow">Get Started</div>
                    <h2 className="pw-cta-title">
                        Ready to Restore<br />
                        Your <span>Property?</span>
                    </h2>
                    <p className="pw-cta-desc">
                        Don't wait another season. Every day without treatment means deeper staining and costlier repairs. 
                        Get your obligation-free quote today.
                    </p>
                </div>

                <div className="pw-cta-actions">
                    <Link href="/contact" className="pw-cta-btn-main">
                        Get Free Quote <i className="fas fa-arrow-right"></i>
                    </Link>
                    <a href="tel:1800418411" className="pw-cta-btn-phone">
                        <i className="fas fa-phone-alt"></i> 1800 418 411
                    </a>
                </div>
            </div>
        </section>
    );
}
