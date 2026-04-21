import { useState, useEffect } from "react"

export default function Banner1() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

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
                .premium-slide-inner {
                    position: relative;
                    height: 100vh;
                    min-height: 700px;
                    width: 100%;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                }
                
                .premium-hero-wrapper .container {
                    display: flex;
                    align-items: center;
                    height: 100%;
                }

                @media (max-width: 768px) {
                    .premium-hero-wrapper, .premium-slide-inner {
                        min-height: 600px !important;
                        height: auto !important;
                    }
                    .premium-hero-wrapper .container {
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                        padding-left: 18px !important;
                        padding-right: 18px !important;
                        text-align: left !important;
                        max-width: 100vw !important;
                        overflow-x: hidden !important;
                    }
                    .premium-hero-wrapper .container > div {
                        margin: 0 !important;
                        width: 100%;
                    }
                    .premium-hero-wrapper .anim-fade-up.title {
                        font-size: 2.7rem !important;
                        line-height: 1.05 !important;
                        margin-bottom: 18px !important;
                    }
                    .premium-hero-wrapper .slide-desc {
                        font-size: 0.95rem !important;
                        line-height: 1.6 !important;
                        color: rgba(255,255,255,0.82) !important;
                        max-width: 100% !important;
                        display: -webkit-box !important;
                        -webkit-line-clamp: 3 !important;
                        -webkit-box-orient: vertical !important;
                        overflow: hidden !important;
                    }
                }
                @media (max-width: 420px) {
                    .premium-hero-wrapper .anim-fade-up.title {
                        font-size: 2.35rem !important;
                    }
                }
                
                /* Animations for Text */
                .anim-fade-up {
                    animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
            `}</style>
            
            <div className="premium-slide-inner">
                {/* Background Video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 1,
                        transform: 'scale(1.05)',
                        animation: 'kenBurns 10s ease-out forwards'
                    }}
                >
                    <source src="/assets/videos/banner_video.mp4" type="video/mp4" />
                </video>

                {/* Sophisticated Dark Gradient Overlay (Cinematic Shadow) */}
                <div className="hero-overlay-shadow" style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '100%', height: '100%',
                    background: 'linear-gradient(90deg, rgba(10,22,43,0.95) 0%, rgba(10,22,43,0.7) 35%, rgba(10,22,43,0.1) 75%, transparent 100%)',
                    zIndex: 2
                }}></div>
                <div className="hero-overlay-vignette" style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '100%', height: '100%',
                    background: 'linear-gradient(0deg, rgba(10,22,43,0.4) 0%, transparent 25%, transparent 75%, rgba(10,22,43,0.3) 100%)',
                    zIndex: 2
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ maxWidth: '800px' }}>
                        {/* Massive Ultra-Premium Typography */}
                        <h1 className="anim-fade-up title" style={{
                            animationDelay: '0.3s', opacity: 0,
                            color: '#ffffff',
                            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                            lineHeight: '1.05',
                            marginBottom: '25px',
                            textTransform: 'none'
                        }}>
                            Professional Pressure <br />
                            <span style={{ color: 'var(--primary-cyan, #00CCFF)', fontStyle: 'italic' }}>
                                Washing Services.
                            </span>
                        </h1>

                        {/* Sub-description paragraph with Gradient Mask fade */}
                        <p className="anim-fade-up slide-desc" style={{
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
                            Transform your property instantly with our high-impact restoration. We specialize in precision cleaning for driveways, facades, and commercial assets.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
