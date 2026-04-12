import React from 'react';
import Link from 'next/link';

export default function AboutPink() {
    return (
        <section className="about-area pf-bg-light" style={{ padding: '60px 0' }}>
            <div className="container">
                <div className="row align-items-center">
                    
                    {/* Left: Desktop 2x2 Image Grid / Mobile Bento Mosaic */}
                    <div className="col-lg-6">
                        {/* Desktop View (Traditional Grid) */}
                        <div className="pf-about-img-grid pr-lg-5 wow fadeInLeft d-none d-lg-grid" data-wow-delay=".2s">
                            <div className="pf-about-img-wrap" style={{ height: '300px' }}>
                                <img src="/assets/img/services/office_cleaning_premium.jpg" alt="Corporate Office Maintenance" />
                            </div>
                            <div className="pf-about-img-wrap" style={{ height: '260px', marginTop: '40px' }}>
                                <img src="/assets/img/services/industrial_cleaning_premium.jpg" alt="Industrial Facility Care" />
                            </div>
                            <div className="pf-about-img-wrap" style={{ height: '260px', marginTop: '-20px' }}>
                                <img src="/assets/img/services/retail_cleaning_premium.jpg" alt="Retail Environment Excellence" />
                            </div>
                            <div className="pf-about-img-wrap" style={{ height: '300px', marginTop: '20px' }}>
                                <img src="/assets/img/services/about_collage_4.jpg" alt="Comprehensive Facility Support" />
                            </div>
                        </div>

                        {/* Mobile View: High-End Compact Bento Mosaic */}
                        <div className="d-lg-none mb-4" style={{ 
                            display: 'grid', 
                            gridTemplateColumns: '1fr 1fr', 
                            gridAutoRows: '140px',
                            gap: '12px',
                            padding: '0 5px'
                        }}>
                            {/* Tall Feature */}
                            <div style={{ gridRow: 'span 2', borderRadius: '20px', overflow: 'hidden', position: 'relative', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
                                <img src="/assets/img/services/office_cleaning_premium.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Office" />
                                <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(255,255,255,0.9)', padding: '4px 10px', borderRadius: '10px', fontSize: '0.65rem', fontWeight: '800', color: 'var(--primary-navy)', textTransform: 'uppercase' }}>Office</div>
                            </div>
                            {/* Retail/New */}
                            <div style={{ borderRadius: '20px', overflow: 'hidden', position: 'relative', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
                                <img src="/assets/img/services/about_collage_4.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Retail" />
                                <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(255,255,255,0.9)', padding: '4px 10px', borderRadius: '10px', fontSize: '0.65rem', fontWeight: '800', color: 'var(--primary-navy)', textTransform: 'uppercase' }}>Support</div>
                            </div>
                            {/* Industry */}
                            <div style={{ borderRadius: '20px', overflow: 'hidden', position: 'relative', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
                                <img src="/assets/img/services/industrial_cleaning_premium.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Industrial" />
                                <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(255,255,255,0.9)', padding: '4px 10px', borderRadius: '10px', fontSize: '0.65rem', fontWeight: '800', color: 'var(--primary-navy)', textTransform: 'uppercase' }}>Industry</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content wow fadeInRight" data-wow-delay=".4s" style={{ paddingLeft: 'var(--about-text-pad, 40px)', paddingRight: 'var(--about-text-pad-right, 0px)' }}>
                            <style jsx>{`
                                .about-content {
                                    --about-text-pad: 0 0 0 clamp(40px, 6vw, 100px);
                                    --about-text-pad-right: 0;
                                    --about-h2-size: var(--font-h2);
                                    --about-accent-size: 1.8rem;
                                    --about-p-size: var(--font-p);
                                    --about-li-size: var(--font-body);
                                    --about-btn-width: fit-content;
                                }
                                @media (max-width: 991px) {
                                    .about-content {
                                        --about-text-pad: 20px;
                                        --about-text-pad-right: 20px;
                                        --about-h2-size: var(--font-h2-mob);
                                        --about-accent-size: 1.4rem;
                                        --about-p-size: var(--font-p-mob);
                                        --about-li-size: 0.85rem;
                                        --about-btn-width: fit-content;
                                        padding: 0 !important;
                                    }
                                    .about-area {
                                        padding: 60px 0 !important;
                                    }
                                    .about-cta {
                                        margin-top: 5px !important;
                                        display: inline-flex !important;
                                        align-items: center;
                                        white-space: nowrap;
                                    }
                                    .pf-subtitle {
                                        font-size: 0.8rem !important;
                                        margin-bottom: 8px !important;
                                    }
                                }
                            `}</style>
                            <span className="pf-subtitle">Global Standards, Local Excellence</span>
                            
                            <h2 className="title" style={{ fontSize: 'var(--about-h2-size, 3rem)', fontWeight: '800', marginBottom: '20px', lineHeight: '1.2' }}>
                                Complete Facility Solutions For <br />
                                <span className="pf-accent" style={{ fontSize: 'var(--about-accent-size, 2.2rem)' }}>Modern Businesses</span>
                            </h2>
                            
                            <p style={{ fontSize: 'var(--about-p-size, 1.1rem)', color: '#64748b', marginBottom: '30px', lineHeight: '1.7' }}>
                                Icon Facility Services is your trusted partner in maintaining high-performance environments. We deliver integrated facility management—from clinical sanitation to industrial maintenance—ensuring your assets are protected and your operations run seamlessly.
                            </p>

                            <div className="row" style={{ marginBottom: '30px' }}>
                                <div className="col-sm-6">
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--about-li-size, 1.05rem)', fontWeight: '500' }}>
                                            <i className="fas fa-check-circle text-cyan" style={{ fontSize: '18px' }}></i> Integrated Maintenance
                                        </li>
                                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--about-li-size, 1.05rem)', fontWeight: '500' }}>
                                            <i className="fas fa-check-circle text-cyan" style={{ fontSize: '18px' }}></i> Specialized Sanitation
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--about-li-size, 1.05rem)', fontWeight: '500' }}>
                                            <i className="fas fa-check-circle text-cyan" style={{ fontSize: '18px' }}></i> Scalable Solutions
                                        </li>
                                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--about-li-size, 1.05rem)', fontWeight: '500' }}>
                                            <i className="fas fa-check-circle text-cyan" style={{ fontSize: '18px' }}></i> Safety Compliance
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <Link href="/about" className="pf-btn about-cta" style={{ padding: '10px 24px', fontSize: '0.9rem', width: 'var(--about-btn-width, auto)' }}>
                                Discover More About Us <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
