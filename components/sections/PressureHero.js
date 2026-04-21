import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PressureHero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className={`pw-hero-wrapper ${mounted ? 'is-mounted' : ''}`}>
            <style jsx>{`
                .pw-hero-wrapper {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    min-height: 700px;
                    background-color: #0a162b;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                }

                /* Video Background */
                .pw-hero-video {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 1;
                    transform: scale(1.05);
                }
                .pw-hero-wrapper.is-mounted .pw-hero-video {
                    animation: pwKenBurns 20s ease-out forwards;
                }
                @keyframes pwKenBurns {
                    0% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }

                /* Cinematic Overlay Stack */
                .pw-overlay-shadow {
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    background: linear-gradient(90deg,
                        rgba(10,22,43,0.97) 0%,
                        rgba(10,22,43,0.82) 30%,
                        rgba(10,22,43,0.4) 60%,
                        rgba(10,22,43,0.15) 100%);
                    z-index: 2;
                }
                .pw-overlay-vignette {
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    background: linear-gradient(0deg,
                        rgba(10,22,43,0.6) 0%,
                        transparent 20%,
                        transparent 80%,
                        rgba(10,22,43,0.4) 100%);
                    z-index: 2;
                }

                /* Decorative Accent Line */
                .pw-accent-line {
                    position: absolute;
                    top: 0;
                    left: max(5vw, 140px);
                    width: 1px;
                    height: 100%;
                    background: linear-gradient(to bottom,
                        transparent 0%,
                        rgba(0, 204, 255, 0.15) 30%,
                        rgba(0, 204, 255, 0.3) 50%,
                        rgba(0, 204, 255, 0.15) 70%,
                        transparent 100%);
                    z-index: 5;
                }

                /* Floating Orb Decoration */
                .pw-hero-orb {
                    position: absolute;
                    width: 500px;
                    height: 500px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(0,204,255,0.08) 0%, transparent 70%);
                    right: 10%;
                    top: 20%;
                    z-index: 3;
                    pointer-events: none;
                }
                .pw-hero-wrapper.is-mounted .pw-hero-orb {
                    animation: pwOrbFloat 8s ease-in-out infinite;
                }
                @keyframes pwOrbFloat {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-30px, 20px) scale(1.05); }
                }

                /* Content */
                .pw-hero-content {
                    position: relative;
                    z-index: 10;
                    padding: 0 max(5vw, 140px);
                    max-width: 900px;
                }

                /* Category Tag */
                .pw-hero-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 0.7rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    color: rgba(255,255,255,0.5);
                    margin-bottom: 28px;
                    opacity: 0;
                }
                .pw-hero-tag::before {
                    content: '';
                    width: 40px;
                    height: 1.5px;
                    background: var(--primary-cyan, #00CCFF);
                }
                .pw-hero-wrapper.is-mounted .pw-hero-tag {
                    animation: pwFadeUp 1s 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                /* Title */
                .pw-hero-title {
                    color: #ffffff;
                    font-size: clamp(3rem, 6.5vw, 5.8rem);
                    font-weight: 900;
                    line-height: 1.02;
                    letter-spacing: -3px;
                    margin: 0 0 30px;
                    opacity: 0;
                }
                .pw-hero-title span {
                    color: var(--primary-cyan, #00CCFF);
                    font-style: italic;
                }
                .pw-hero-wrapper.is-mounted .pw-hero-title {
                    animation: pwFadeUp 1s 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                /* Description */
                .pw-hero-desc {
                    font-size: clamp(1rem, 1.15vw, 1.15rem);
                    color: rgba(255,255,255,0.7);
                    line-height: 1.75;
                    max-width: 550px;
                    margin: 0 0 45px;
                    opacity: 0;
                    -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0.1) 100%);
                    mask-image: linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0.1) 100%);
                }
                .pw-hero-wrapper.is-mounted .pw-hero-desc {
                    animation: pwFadeUp 1s 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                /* CTA Buttons */
                .pw-hero-actions {
                    display: flex;
                    gap: 20px;
                    align-items: center;
                    opacity: 0;
                }
                .pw-hero-wrapper.is-mounted .pw-hero-actions {
                    animation: pwFadeUp 1s 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                .pw-btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: var(--primary-cyan, #00CCFF);
                    color: #0a162b;
                    font-weight: 700;
                    font-size: 0.9rem;
                    letter-spacing: 0.5px;
                    padding: 16px 36px;
                    border: none;
                    border-radius: 4px;
                    text-decoration: none;
                    transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
                    position: relative;
                    overflow: hidden;
                }
                .pw-btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 35px rgba(0, 204, 255, 0.35);
                    color: #0a162b;
                }
                .pw-btn-primary i {
                    transition: transform 0.3s ease;
                    font-size: 0.8rem;
                }
                .pw-btn-primary:hover i {
                    transform: translateX(4px);
                }

                .pw-btn-ghost {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: transparent;
                    color: #fff;
                    font-weight: 600;
                    font-size: 0.9rem;
                    padding: 16px 32px;
                    border: 1px solid rgba(255,255,255,0.2);
                    border-radius: 4px;
                    text-decoration: none;
                    transition: all 0.4s ease;
                }
                .pw-btn-ghost:hover {
                    border-color: var(--primary-cyan, #00CCFF);
                    color: var(--primary-cyan, #00CCFF);
                }

                /* Bottom Scroll Indicator */
                .pw-scroll-indicator {
                    position: absolute;
                    bottom: 40px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                    opacity: 0;
                }
                .pw-hero-wrapper.is-mounted .pw-scroll-indicator {
                    animation: pwFadeUp 1s 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .pw-scroll-line {
                    width: 1px;
                    height: 50px;
                    background: linear-gradient(to bottom, var(--primary-cyan, #00CCFF), transparent);
                    animation: pwScrollPulse 2s ease-in-out infinite;
                }
                .pw-scroll-text {
                    font-size: 0.6rem;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.4);
                    font-weight: 600;
                }
                @keyframes pwScrollPulse {
                    0%, 100% { opacity: 0.3; transform: scaleY(1); }
                    50% { opacity: 1; transform: scaleY(1.2); }
                }

                @keyframes pwFadeUp {
                    from { opacity: 0; transform: translateY(35px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* ── Mobile ── */
                @media (max-width: 991px) {
                    .pw-hero-wrapper {
                        min-height: 600px;
                    }
                    .pw-hero-content {
                        padding: 0 30px;
                    }
                    .pw-accent-line {
                        display: none;
                    }
                    .pw-hero-orb {
                        width: 300px;
                        height: 300px;
                    }
                }
                @media (max-width: 768px) {
                    .pw-hero-wrapper {
                        min-height: auto;
                        height: auto;
                        padding: 140px 0 100px;
                    }
                    .pw-hero-content {
                        padding: 0 22px;
                    }
                    .pw-hero-title {
                        font-size: 2.6rem !important;
                        letter-spacing: -1.5px;
                        margin-bottom: 20px;
                    }
                    .pw-hero-desc {
                        font-size: 0.95rem !important;
                        max-width: 100%;
                        -webkit-mask-image: none;
                        mask-image: none;
                        margin-bottom: 35px;
                    }
                    .pw-hero-actions {
                        flex-direction: column;
                        width: 100%;
                    }
                    .pw-btn-primary, .pw-btn-ghost {
                        width: 100%;
                        justify-content: center;
                    }
                    .pw-scroll-indicator {
                        display: none;
                    }
                    .pw-hero-orb {
                        display: none;
                    }
                }
                @media (max-width: 420px) {
                    .pw-hero-title {
                        font-size: 2.2rem !important;
                    }
                }
            `}</style>

            {/* Video Background */}
            <video
                className="pw-hero-video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/assets/videos/pressure_washing.mp4" type="video/mp4" />
            </video>

            {/* Overlay Stack */}
            <div className="pw-overlay-shadow"></div>
            <div className="pw-overlay-vignette"></div>

            {/* Decorative Elements */}
            <div className="pw-accent-line"></div>
            <div className="pw-hero-orb"></div>

            {/* Main Content */}
            <div className="pw-hero-content">
                <div className="pw-hero-tag">Pressure Washing Specialists</div>
                <h1 className="pw-hero-title">
                    Powerful<br />
                    <span>Restoration.</span>
                </h1>
                <p className="pw-hero-desc">
                    Remove years of embedded grime, mould, and weathering with industrial-grade precision. 
                    We restore driveways, facades, and commercial surfaces to pristine condition — damage-free, every time.
                </p>
                <div className="pw-hero-actions">
                    <Link href="/contact?from=pressure-washing" className="pw-btn-primary">
                        Get Free Quote <i className="fas fa-arrow-right"></i>
                    </Link>
                    <a href="tel:1800418411" className="pw-btn-ghost">
                        <i className="fas fa-phone-alt"></i> 1800 418 411
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="pw-scroll-indicator">
                <div className="pw-scroll-line"></div>
                <span className="pw-scroll-text">Scroll</span>
            </div>
        </section>
    );
}
