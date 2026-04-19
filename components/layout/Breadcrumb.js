import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle, breadcrumbSubtitle, breadcrumbBg }) {
    // Fallback to default if no specific image is provided
    const bgImage = breadcrumbBg || "/assets/img/services/office_cleaning_premium.jpg";

    return (
        <>
            <section className="pf-breadcrumb-area pf-luxury-hero">
                <style jsx>{`
                    .pf-luxury-hero {
                        position: relative;
                        height: 85vh;
                        min-height: 700px;
                        display: flex;
                        align-items: center;
                        background: #000;
                        overflow: hidden;
                        padding-top: 100px;
                    }
                    .pf-hero-bg-wrap {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 120%; /* Extra height for parallax */
                        background-image: url('${bgImage}');
                        background-size: cover;
                        background-position: center;
                        z-index: 1;
                        transition: transform 0.1s linear;
                    }
                    /* Cinematic Gradient Overlay — heavy left fade to black/navy */
                    .pf-hero-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(to right, rgba(13, 27, 51, 0.95) 0%, rgba(13, 27, 51, 0.6) 40%, transparent 100%);
                        z-index: 2;
                    }

                    .pf-hero-content-wrap {
                        position: relative;
                        z-index: 5;
                        width: 100%;
                    }

                    .pf-hero-eyebrow {
                        font-size: 0.7rem;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 4px;
                        color: #94a3b8; /* Muted Slate */
                        margin-bottom: 24px;
                        display: flex;
                        align-items: center;
                        gap: 15px;
                    }
                    .pf-hero-eyebrow::before {
                        content: '';
                        width: 30px;
                        height: 1px;
                        background: rgba(0, 204, 255, 0.5); /* Muted Cyan */
                    }

                    .pf-hero-title {
                        font-size: clamp(3rem, 6vw, 5rem);
                        font-weight: 900;
                        color: #fff;
                        line-height: 1.05;
                        letter-spacing: -2.5px;
                        margin: 0 0 28px;
                        max-width: 900px;
                    }
                    .pf-hero-desc {
                        font-size: 1.1rem;
                        color: rgba(255, 255, 255, 0.75);
                        line-height: 1.8;
                        max-width: 520px;
                        margin: 0;
                        font-weight: 400;
                    }

                    @media (max-width: 991px) {
                        .pf-luxury-hero {
                            height: auto;
                            min-height: auto !important;
                            padding: 140px 0 70px;
                        }
                        .pf-hero-overlay {
                            background: linear-gradient(to bottom, rgba(13, 27, 51, 0.9) 0%, rgba(13, 27, 51, 0.85) 100%);
                        }
                        .pf-hero-title {
                            font-size: 2.8rem;
                        }
                        .pf-hero-desc {
                            font-size: 1rem;
                        }
                    }
                    @media (max-width: 767px) {
                        .pf-luxury-hero {
                            padding: 110px 0 50px !important;
                            min-height: auto !important;
                        }
                        .pf-hero-eyebrow {
                            font-size: 0.6rem !important;
                            letter-spacing: 3px !important;
                            margin-bottom: 16px !important;
                        }
                        .pf-hero-title {
                            font-size: 2rem !important;
                            letter-spacing: -1px !important;
                            margin-bottom: 18px !important;
                            line-height: 1.1 !important;
                        }
                        .pf-hero-desc {
                            font-size: 0.88rem !important;
                            line-height: 1.65 !important;
                            max-width: 100% !important;
                        }
                    }
                `}</style>

                <div className="pf-hero-bg-wrap" id="hero-parallax-bg" />
                <div className="pf-hero-overlay" />
                
                <div className="container pf-hero-content-wrap">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pf-breadcrumb-content">
                                <div className="pf-hero-eyebrow wow fadeInUp" data-wow-delay=".2s">
                                    Service Excellence
                                </div>
                                <h1 className="pf-hero-title wow fadeInUp" data-wow-delay=".4s">
                                    {breadcrumbTitle}
                                </h1>
                                {breadcrumbSubtitle && (
                                    <p className="pf-hero-desc wow fadeInUp" data-wow-delay=".6s">
                                        {breadcrumbSubtitle}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <script dangerouslySetInnerHTML={{ __html: `
                    window.addEventListener('scroll', function() {
                        const bg = document.getElementById('hero-parallax-bg');
                        if (bg) {
                            const scroll = window.pageYOffset;
                            bg.style.transform = 'translateY(' + (scroll * 0.4) + 'px)';
                        }
                    });
                `}} />
            </section>
        </>
    )
}
