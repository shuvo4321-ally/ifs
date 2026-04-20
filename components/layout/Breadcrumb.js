import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle, breadcrumbSubtitle, breadcrumbBg, breadcrumbHighlight }) {
    const bgImage = breadcrumbBg || "/assets/img/services/office_cleaning_premium.jpg";

    return (
        <section className="pf-breadcrumb-area pf-luxury-hero">
            <style jsx>{`
                .pf-luxury-hero {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    min-height: 700px;
                    display: flex;
                    align-items: center;
                    background-color: var(--primary-navy, #0a162b);
                    overflow: hidden;
                }
                .pf-hero-bg-wrap {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: url('${bgImage}');
                    background-size: cover;
                    background-position: center;
                    z-index: 0;
                    transform: scale(1.05);
                    animation: pfKenBurns 10s ease-out forwards;
                }
                .pf-hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, rgba(10,22,43,0.95) 0%, rgba(10,22,43,0.7) 35%, rgba(10,22,43,0.1) 75%, transparent 100%);
                    z-index: 1;
                }
                .pf-hero-vignette {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(0deg, rgba(10,22,43,0.4) 0%, transparent 25%, transparent 75%, rgba(10,22,43,0.3) 100%);
                    z-index: 1;
                }
                .pf-hero-content-wrap {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    height: 100%;
                }
                .pf-hero-inner {
                    max-width: 800px;
                }
                .pf-hero-title {
                    font-size: clamp(3rem, 6vw, 5.5rem);
                    font-weight: 700;
                    color: #fff;
                    line-height: 1.05;
                    margin: 0 0 25px;
                    text-transform: none;
                    opacity: 0;
                    animation: pfFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
                }
                .pf-hero-title .pf-hero-title-accent {
                    color: var(--primary-cyan, #00CCFF);
                    font-style: italic;
                }
                .pf-hero-desc {
                    font-size: clamp(1.05rem, 1.2vw, 1.2rem);
                    color: rgba(255, 255, 255, 0.85);
                    line-height: 1.7;
                    max-width: 650px;
                    margin: 0;
                    font-weight: 400;
                    opacity: 0;
                    animation: pfFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
                    -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0.05) 100%);
                    mask-image: linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0.05) 100%);
                }

                @keyframes pfKenBurns {
                    from { transform: scale(1.05); }
                    to { transform: scale(1); }
                }
                @keyframes pfFadeUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (max-width: 900px) {
                    .pf-luxury-hero, .pf-hero-content-wrap {
                        min-height: 600px;
                    }
                }
                @media (max-width: 768px) {
                    .pf-luxury-hero {
                        height: auto;
                        min-height: 600px;
                    }
                    .pf-hero-overlay {
                        background: linear-gradient(95deg, rgba(10,22,43,0.95) 0%, rgba(10,22,43,0.85) 60%, rgba(10,22,43,0.1) 90%, transparent 100%);
                    }
                    .pf-hero-vignette {
                        display: none;
                    }
                    .pf-hero-content-wrap {
                        padding-top: 90px;
                        padding-bottom: 60px;
                    }
                    .pf-hero-inner {
                        max-width: 100%;
                    }
                    .pf-hero-title {
                        font-size: 2.7rem;
                        line-height: 1.05;
                        margin-bottom: 18px;
                    }
                    .pf-hero-desc {
                        font-size: 0.95rem;
                        line-height: 1.6;
                        color: rgba(255,255,255,0.82);
                        max-width: 100%;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%);
                        mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%);
                    }
                }
                @media (max-width: 420px) {
                    .pf-hero-title {
                        font-size: 2.35rem;
                    }
                }
            `}</style>

            <div className="pf-hero-bg-wrap" />
            <div className="pf-hero-overlay" />
            <div className="pf-hero-vignette" />

            <div className="container pf-hero-content-wrap">
                <div className="pf-hero-inner">
                    <h1 className="pf-hero-title">
                        {breadcrumbTitle}
                        {breadcrumbHighlight && (
                            <>
                                {' '}
                                <span className="pf-hero-title-accent">{breadcrumbHighlight}</span>
                            </>
                        )}
                    </h1>
                    {breadcrumbSubtitle && (
                        <p className="pf-hero-desc">{breadcrumbSubtitle}</p>
                    )}
                </div>
            </div>
        </section>
    )
}
