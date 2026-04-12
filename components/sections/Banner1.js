import Link from "next/link"
import { useState } from "react"

export default function Banner1() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <style jsx>{`
                @media (max-width: 991px) {
                    .banner-area {
                        padding: 0 !important;
                        min-height: 75vh !important;
                        display: flex !important;
                        align-items: center !important;
                    }
                    .banner-content {
                        padding-top: 20px !important;
                        padding-bottom: 20px !important;
                        text-align: center;
                    }
                    .banner-content .title {
                        font-size: 38px !important;
                        margin-bottom: 20px !important;
                        line-height: 1.2 !important;
                    }
                    .banner-content p {
                        font-size: 16px !important;
                        margin: 0 auto 30px !important;
                        max-width: 100% !important;
                        line-height: 1.5 !important;
                    }
                    .banner-features {
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 20px !important;
                        margin: 0 auto !important;
                    }
                    .banner-content p, 
                    .banner-btn-wrap {
                        display: none !important;
                    }
                    .banner-features {
                        display: flex !important;
                        justify-content: center !important;
                        flex-wrap: wrap !important;
                        gap: 20px !important;
                        border: none !important;
                        padding-top: 20px !important;
                    }
                    .banner-features > div {
                        flex: 0 0 auto !important;
                    }
                    .banner-features span {
                        font-size: 11px !important;
                    }
                }
                @media (max-width: 767px) {
                    .banner-area .container-fluid {
                        padding-left: 20px !important;
                        padding-right: 20px !important;
                    }
                    .banner-content .title {
                        font-size: 32px !important;
                    }
                }
            `}</style>
            <section className="banner-area dark-section" style={{ padding: '120px 0', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
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
                        zIndex: -2
                    }}
                >
                    <source src="/assets/videos/banner_video.mp4" type="video/mp4" />
                </video>

                <div style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    background: 'linear-gradient(to right, rgba(10, 22, 43, 0.95) 0%, rgba(10, 22, 43, 0.8) 40%, rgba(10, 22, 43, 0.2) 100%)', 
                    zIndex: -1 
                }}></div>
                
                <div className="container-fluid" style={{ paddingLeft: 'max(5vw, 140px)', paddingRight: 'max(5vw, 40px)' }}>
                    <div className="row align-items-center">
                        {/* Text Content */}
                        <div className="col-xl-7 col-lg-9">
                            <div className="banner-content" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
                                <span className="pf-subtitle wow fadeInUp" data-wow-delay=".2s" style={{ color: 'var(--primary-cyan)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '14px', display: 'block', marginBottom: '20px' }}>Premium Exterior Care</span>
                                <h1 className="title wow fadeInUp" data-wow-delay=".4s" style={{ fontSize: '72px', fontWeight: '900', lineHeight: '1.1', marginBottom: '30px', color: '#ffffff', letterSpacing: '-2px' }}>
                                    Professional Pressure <br /><span style={{ color: 'var(--primary-cyan)' }}>Washing Services</span>
                                </h1>
                                <p className="wow fadeInUp" data-wow-delay=".6s" style={{ fontSize: '20px', color: 'rgba(255,255,255,0.85)', marginBottom: '45px', maxWidth: '600px', lineHeight: '1.6', fontWeight: '400' }}>
                                    Transform your property instantly with our high-impact restoration. We specialize in precision cleaning for driveways, facades, and commercial assets.
                                </p>

                                <div className="banner-btn-wrap" style={{ marginBottom: '50px' }}>
                                    <Link href="/contact" className="pf-btn pf-btn-lg">
                                        Request instant quote <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>

                                <div className="banner-features wow fadeInUp" data-wow-delay=".8s" style={{ display: 'flex', gap: '35px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', maxWidth: 'fit-content' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <i className="fas fa-shield-alt" style={{ color: 'var(--primary-cyan)', fontSize: '18px' }}></i>
                                        <span style={{ fontWeight: '600', color: '#fff', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Fully Insured</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <i className="fas fa-star" style={{ color: 'var(--primary-cyan)', fontSize: '18px' }}></i>
                                        <span style={{ fontWeight: '600', color: '#fff', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>5-Star Rated</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <i className="fas fa-leaf" style={{ color: 'var(--primary-cyan)', fontSize: '18px' }}></i>
                                        <span style={{ fontWeight: '600', color: '#fff', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Eco-Friendly</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
