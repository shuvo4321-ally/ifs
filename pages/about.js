import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import Link from "next/link"
import React from "react"
import Breadcrumb from "@/components/layout/Breadcrumb"

export default function About() {
    return (
        <>
            <Layout headerCls="transparent-header">
                {/* 1. Corporate Hero */}
                <Breadcrumb 
                    breadcrumbTitle="Company Profile" 
                    breadcrumbSubtitle="Icon Facility Services is a premier Australian maintenance firm, delivering clinical precision and industrial-grade reliability to the nation's most critical infrastructures."
                    breadcrumbBg="/assets/img/services/about_story_main.jpg"
                />

                {/* 2. The Executive Mission - High Impact Statement */}
                <section className="corporate-statement-area pt-120 pb-120 overflow-hidden">
                    <style jsx>{`
                        .corporate-statement-area { background: #fff; }
                        .impact-mission {
                            font-size: clamp(2rem, 5vw, 3.5rem);
                            font-weight: 900;
                            color: #0d1b33;
                            line-height: 1.1;
                            letter-spacing: -2px;
                            margin-bottom: 40px;
                        }
                        .mission-pill {
                            display: inline-block;
                            padding: 8px 16px;
                            background: rgba(0, 204, 255, 0.08);
                            color: var(--primary-cyan);
                            font-weight: 800;
                            font-size: 0.75rem;
                            text-transform: uppercase;
                            letter-spacing: 2px;
                            border-radius: 50px;
                            margin-bottom: 30px;
                        }
                        .mission-desc {
                            font-size: 1.25rem;
                            color: #64748b;
                            line-height: 1.8;
                            max-width: 800px;
                        }
                        .mission-bg-accent {
                            position: absolute;
                            top: 0;
                            right: -10%;
                            width: 600px;
                            height: 600px;
                            background: radial-gradient(circle, rgba(0, 204, 255, 0.03) 0%, transparent 70%);
                            pointer-events: none;
                        }
                    `}</style>
                    <div className="container position-relative">
                        <div className="mission-bg-accent" />
                        <div className="row">
                            <div className="col-lg-10">
                                <span className="mission-pill wow fadeInUp" data-wow-delay=".2s">Our Commitment</span>
                                <h2 className="impact-mission wow fadeInUp" data-wow-delay=".4s">
                                    Redefining facility management through <span style={{ color: 'var(--primary-cyan)' }}>clinical precision</span> and national scale.
                                </h2>
                                <p className="mission-desc wow fadeInUp" data-wow-delay=".6s">
                                    At Icon Facility Services, we don't just clean; we manage environments. Our approach combines rigorous Australian industry standards with bespoke maintenance strategies, ensuring that every square metre we touch reflects the prestige of your brand.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Scale & Impact Stats Bar */}
                <section className="stats-bar-area pb-120">
                    <style jsx>{`
                        .stats-container {
                            background: #0d1b33;
                            padding: 80px 40px;
                            border-radius: 40px;
                            box-shadow: 0 30px 60px rgba(0,0,0,0.15);
                            display: grid;
                            grid-template-columns: repeat(4, 1fr);
                            gap: 40px;
                        }
                        .stat-item text-center {
                            border-right: 1px solid rgba(255,255,255,0.1);
                        }
                        .stat-item:last-child { border-right: none; }
                        .stat-value {
                            font-size: 3.5rem;
                            font-weight: 900;
                            color: #fff;
                            display: block;
                            line-height: 1;
                            margin-bottom: 10px;
                        }
                        .stat-label {
                            font-size: 0.9rem;
                            font-weight: 700;
                            color: #94a3b8;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                        }
                        @media (max-width: 991px) {
                            .stats-container {
                                grid-template-columns: repeat(2, 1fr);
                            }
                        }
                        @media (max-width: 575px) {
                            .stats-container {
                                grid-template-columns: 1fr;
                                padding: 60px 30px;
                            }
                        }
                    `}</style>
                    <div className="container">
                        <div className="stats-container wow fadeInUp" data-wow-delay=".2s">
                            <div className="stat-item text-center">
                                <span className="stat-value">National</span>
                                <span className="stat-label">Coverage Across Australia</span>
                            </div>
                            <div className="stat-item text-center">
                                <span className="stat-value">500+</span>
                                <span className="stat-label">Professional Staff</span>
                            </div>
                            <div className="stat-item text-center">
                                <span className="stat-value">WHS</span>
                                <span className="stat-label">Full Compliance Certified</span>
                            </div>
                            <div className="stat-item text-center">
                                <span className="stat-value">24/7</span>
                                <span className="stat-label">Facility Support</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. The IFS Story - Asymmetrical Narrative */}
                <section className="about-story-area pb-120">
                    <style jsx>{`
                        .story-row {
                            display: flex;
                            align-items: center;
                            gap: 80px;
                            margin-bottom: 120px;
                        }
                        .story-row:last-child { margin-bottom: 0; }
                        .story-row.reverse { flex-direction: row-reverse; }
                        .story-image-wrap {
                            flex: 1;
                            position: relative;
                        }
                        .story-image {
                            width: 100%;
                            height: 600px;
                            object-fit: cover;
                            border-radius: 40px;
                            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                        }
                        .story-content {
                            flex: 1;
                        }
                        .story-number {
                            font-size: 6rem;
                            font-weight: 900;
                            color: rgba(0, 204, 255, 0.05);
                            position: absolute;
                            top: -40px;
                            left: -40px;
                            z-index: -1;
                        }
                        .story-title {
                            font-size: 2.5rem;
                            font-weight: 800;
                            color: #0d1b33;
                            margin-bottom: 25px;
                            line-height: 1.2;
                        }
                        .story-text {
                            font-size: 1.1rem;
                            color: #475569;
                            line-height: 1.9;
                            margin-bottom: 30px;
                        }
                        @media (max-width: 991px) {
                            .story-row, .story-row.reverse {
                                flex-direction: column;
                                gap: 40px;
                                margin-bottom: 80px;
                            }
                            .story-image { height: 400px; }
                        }
                    `}</style>
                    <div className="container">
                        <div className="story-row">
                            <div className="story-image-wrap wow fadeInLeft" data-wow-delay=".2s">
                                <span className="story-number">01</span>
                                <img src="/assets/img/services/about_story_main.jpg" alt="Our Heritage" className="story-image" />
                            </div>
                            <div className="story-content wow fadeInRight" data-wow-delay=".4s">
                                <h3 className="story-title">A Heritage of Excellence in Facility Management.</h3>
                                <p className="story-text">
                                    Founded on the principles of integrity and high-performance maintenance, Icon Facility Services has grown from a specialized cleaning team into a comprehensive facility partner for Australia's leading commercial developers. Our journey is defined by a relentless pursuit of quality—ensuring that every site we manage is maintained to the highest clinical and aesthetic standards.
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div>
                                        <h5 style={{ fontSize: '1rem', fontWeight: '800', color: '#0d1b33' }}>National Presence</h5>
                                        <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Operating in major hubs across the country with local expertise.</p>
                                    </div>
                                    <div>
                                        <h5 style={{ fontSize: '1rem', fontWeight: '800', color: '#0d1b33' }}>Bespoke Strategy</h5>
                                        <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Tailored programs built around your specific facility requirements.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="story-row reverse">
                            <div className="story-image-wrap wow fadeInRight" data-wow-delay=".2s">
                                <span className="story-number">02</span>
                                <img src="/assets/img/services/about_specialized_main_v2.jpg" alt="Our Specialization" className="story-image" />
                            </div>
                            <div className="story-content wow fadeInLeft" data-wow-delay=".4s">
                                <h3 className="story-title">Specialized Services for High-Compliance Sectors.</h3>
                                <p className="story-text">
                                    We specialize in the complex. From healthcare hygiene following strict TGA protocols to high-rise window detailing and industrial facility management, our teams are trained and equipped for the most demanding environments. We provide the peace of mind that comes with knowing your compliance is managed by experts.
                                </p>
                                <ul className="list-wrap" style={{ listStyle: 'none', padding: 0 }}>
                                    {['WHS & ISO Compliant Protocols', 'Advanced Pure-Water Technology', 'Certified Clinical Sanitation', 'High-Reach Asset Maintenance'].map(item => (
                                        <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px', fontSize: '1rem', fontWeight: '700', color: '#0d1b33' }}>
                                            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0, 204, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-cyan)', fontSize: '10px' }}>
                                                <i className="fas fa-check"></i>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Core Values & Principles - Minimalist Layout */}
                <section className="about-values-area pt-120 pb-120" style={{ background: '#fff' }}>
                    <style jsx>{`
                        .value-item-minimal {
                            padding: 20px 0;
                            border-bottom: 1px solid #f1f5f9;
                            display: flex;
                            align-items: flex-start;
                            gap: 30px;
                        }
                        .value-item-minimal:last-child { border-bottom: none; }
                        .value-icon-circle {
                            width: 60px;
                            height: 60px;
                            background: rgba(0, 204, 255, 0.05);
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 20px;
                            color: var(--primary-cyan);
                            flex-shrink: 0;
                        }
                        .value-title-minimal {
                            font-size: 1.25rem;
                            font-weight: 800;
                            color: #0d1b33;
                            margin: 0 0 10px;
                        }
                        .value-desc-minimal {
                            font-size: 1rem;
                            color: #64748b;
                            line-height: 1.7;
                            margin: 0;
                            max-width: 700px;
                        }
                    `}</style>
                    <div className="container">
                        <div className="row mb-60">
                            <div className="col-lg-8">
                                <span className="mission-pill">Our Core Pillars</span>
                                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', color: '#0d1b33', margin: '20px 0' }}>The Principles that <br />Drive Our Performance.</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                {[
                                    { icon: 'fas fa-shield-alt', title: 'Uncompromising Safety', desc: 'Safety is the foundation of our operations. We maintain rigorous WHS compliance and perform exhaustive risk assessments for every site.' },
                                    { icon: 'fas fa-chart-line', title: 'Quality at Scale', desc: 'Through standardized protocols and dedicated site leads, we deliver consistent, high-end results across national portfolios.' },
                                    { icon: 'fas fa-handshake', title: 'Partnership & Integrity', desc: 'We act as an extension of your management team, fostering long-term trust through transparent reporting and radical accountability.' }
                                ].map((val, idx) => (
                                    <div key={idx} className="value-item-minimal wow fadeInUp" data-wow-delay={`${idx * 0.1}s`}>
                                        <div className="value-icon-circle"><i className={val.icon}></i></div>
                                        <div>
                                            <h4 className="value-title-minimal">{val.title}</h4>
                                            <p className="value-desc-minimal">{val.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Professional Leadership removed as per user request */}

                {/* 7. Client Trust & Certifications */}
                <section className="about-trust-area pt-100 pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '80px' }}>
                                    <h4 className="text-center mb-50" style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '4px', color: '#94a3b8' }}>Trusted by Leading Developers & National Brands</h4>
                                    <Brand3 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Call to Action */}
                <section className="cta-area pt-120 pb-120" style={{ background: "#0d1b33", position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(0, 204, 255, 0.03))' }}></div>
                    <div className="container position-relative">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="cta-content text-center text-lg-start">
                                    <h2 className="title text-white mb-20" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '900', letterSpacing: '-2px' }}>Empower Your Facility with <br /><span style={{ color: 'var(--primary-cyan)' }}>Superior Maintenance.</span></h2>
                                    <p className="text-white" style={{ fontSize: '1.2rem', opacity: 0.7 }}>Secure your asset's future with Australia's premier facility partner.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cta-btn text-center text-lg-end">
                                    <Link href="/contact" className="btn btn-two" style={{ padding: '24px 50px', fontSize: '1.1rem', borderRadius: '15px' }}>Arrange a Consultation <i className="fas fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}