import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import Link from "next/link"
import React, { useEffect, useRef } from "react"
import Breadcrumb from "@/components/layout/Breadcrumb"

export default function About() {


    return (
        <>
            <Layout headerCls="transparent-header">
                <Breadcrumb
                    breadcrumbTitle="Company Profile"
                    breadcrumbSubtitle="Icon Facility Services is a premier Australian maintenance firm, delivering clinical precision and industrial-grade reliability to the nation's most critical infrastructures."
                    breadcrumbBg="/assets/img/services/about_story_main.jpg"
                />

                <style jsx>{`
                    /* ==============================
                       EDITORIAL ABOUT PAGE
                       Inspired by Apple, McKinsey, Tesla
                    ============================== */
                    
                    /* --- Section 1: The Thesis --- */
                    .ifs-thesis {
                        padding: 140px 0 100px;
                        background: #fff;
                    }
                    .ifs-thesis-inner {
                        max-width: 900px;
                    }
                    .ifs-overline {
                        font-size: 0.65rem;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 5px;
                        color: #94a3b8;
                        margin-bottom: 40px;
                        display: block;
                    }
                    .ifs-thesis-heading {
                        font-size: clamp(2.2rem, 4.5vw, 3.8rem);
                        font-weight: 800;
                        color: #0a0f1a;
                        line-height: 1.12;
                        letter-spacing: -1.5px;
                        margin: 0 0 50px;
                    }
                    .ifs-thesis-heading em {
                        font-style: normal;
                        color: #0ea5e9;
                    }
                    .ifs-thesis-body {
                        font-size: 1.15rem;
                        color: #475569;
                        line-height: 1.85;
                        max-width: 680px;
                        margin: 0;
                    }


                    /* --- Section 4: Two-Column Narrative --- */
                    .ifs-narrative {
                        padding: 140px 0;
                        background: #fff;
                    }
                    .ifs-narrative-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 100px;
                        align-items: start;
                    }
                    .ifs-narrative-left .ifs-overline {
                        margin-bottom: 30px;
                    }
                    .ifs-narrative-title {
                        font-size: clamp(1.8rem, 3.5vw, 2.8rem);
                        font-weight: 800;
                        color: #0a0f1a;
                        line-height: 1.15;
                        letter-spacing: -1px;
                        margin: 0;
                        position: sticky;
                        top: 120px;
                    }
                    .ifs-narrative-right p {
                        font-size: 1.05rem;
                        color: #475569;
                        line-height: 1.9;
                        margin: 0 0 30px;
                    }
                    .ifs-narrative-right p:last-child { margin-bottom: 0; }

                    /* --- Section 5: Capabilities Accordion --- */
                    .ifs-capabilities {
                        padding: 140px 0;
                        background: #0a0f1a;
                    }
                    .ifs-cap-header {
                        margin-bottom: 80px;
                    }
                    .ifs-cap-overline {
                        font-size: 0.65rem;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 5px;
                        color: #475569;
                        margin-bottom: 30px;
                        display: block;
                    }
                    .ifs-cap-title {
                        font-size: clamp(2rem, 4vw, 3.2rem);
                        font-weight: 800;
                        color: #fff;
                        line-height: 1.15;
                        letter-spacing: -1.5px;
                        margin: 0;
                        max-width: 700px;
                    }
                    .ifs-cap-list {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }
                    .ifs-cap-item {
                        padding: 40px 0;
                        border-top: 1px solid rgba(255,255,255,0.08);
                        display: grid;
                        grid-template-columns: 60px 1fr 1fr;
                        gap: 40px;
                        align-items: start;
                        transition: all 0.3s ease;
                    }
                    .ifs-cap-item:last-child {
                        border-bottom: 1px solid rgba(255,255,255,0.08);
                    }
                    .ifs-cap-item:hover {
                        padding-left: 20px;
                    }
                    .ifs-cap-index {
                        font-size: 0.75rem;
                        font-weight: 700;
                        color: #334155;
                        font-variant-numeric: tabular-nums;
                        padding-top: 4px;
                    }
                    .ifs-cap-name {
                        font-size: 1.4rem;
                        font-weight: 700;
                        color: #fff;
                        margin: 0;
                        line-height: 1.3;
                    }
                    .ifs-cap-desc {
                        font-size: 0.95rem;
                        color: #64748b;
                        line-height: 1.7;
                        margin: 0;
                    }

                    /* --- Section 6: Image + Quote --- */
                    .ifs-quote-section {
                        padding: 140px 0;
                        background: #f8fafc;
                    }
                    .ifs-quote-grid {
                        display: grid;
                        grid-template-columns: 1.2fr 1fr;
                        gap: 80px;
                        align-items: center;
                    }
                    .ifs-quote-image-wrap {
                        position: relative;
                        overflow: hidden;
                        border-radius: 6px;
                    }
                    .ifs-quote-image-wrap img {
                        width: 100%;
                        height: 550px;
                        object-fit: cover;
                        display: block;
                    }
                    .ifs-quote-content blockquote {
                        font-size: clamp(1.3rem, 2.5vw, 1.7rem);
                        font-weight: 600;
                        color: #0a0f1a;
                        line-height: 1.5;
                        margin: 0 0 40px;
                        padding: 0;
                        border: none;
                        letter-spacing: -0.5px;
                    }
                    .ifs-quote-content blockquote::before {
                        content: '"';
                        display: block;
                        font-size: 4rem;
                        color: #0ea5e9;
                        line-height: 1;
                        margin-bottom: 10px;
                        font-weight: 800;
                    }
                    .ifs-quote-attribution {
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                    }
                    .ifs-quote-name {
                        font-size: 1rem;
                        font-weight: 800;
                        color: #0a0f1a;
                    }
                    .ifs-quote-role {
                        font-size: 0.85rem;
                        color: #94a3b8;
                        font-weight: 500;
                    }

                    /* --- Section 7: Principles --- */
                    .ifs-principles {
                        padding: 140px 0;
                        background: #fff;
                    }
                    .ifs-principles-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 0;
                    }
                    .ifs-principle-card {
                        padding: 60px 50px;
                        border-right: 1px solid #e2e8f0;
                        transition: background 0.3s ease;
                    }
                    .ifs-principle-card:last-child { border-right: none; }
                    .ifs-principle-card:hover { background: #f8fafc; }
                    .ifs-principle-num {
                        font-size: 0.7rem;
                        font-weight: 700;
                        color: #cbd5e1;
                        letter-spacing: 2px;
                        margin-bottom: 30px;
                        display: block;
                    }
                    .ifs-principle-name {
                        font-size: 1.4rem;
                        font-weight: 800;
                        color: #0a0f1a;
                        margin: 0 0 20px;
                        line-height: 1.3;
                    }
                    .ifs-principle-desc {
                        font-size: 0.95rem;
                        color: #64748b;
                        line-height: 1.8;
                        margin: 0;
                    }

                    /* --- Section 8: Trust Logos --- */
                    .ifs-trust {
                        padding: 100px 0;
                        background: #fff;
                    }
                    .ifs-trust-label {
                        font-size: 0.7rem;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 5px;
                        color: #94a3b8;
                        text-align: center;
                        margin-bottom: 50px;
                    }

                    /* --- Section 9: CTA --- */
                    .ifs-cta-final {
                        padding: 160px 0;
                        background: #0a0f1a;
                        text-align: center;
                        position: relative;
                        overflow: hidden;
                    }
                    .ifs-cta-final::before {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 800px;
                        height: 800px;
                        background: radial-gradient(circle, rgba(14, 165, 233, 0.06) 0%, transparent 70%);
                        pointer-events: none;
                    }
                    .ifs-cta-heading {
                        font-size: clamp(2.5rem, 5vw, 4rem);
                        font-weight: 900;
                        color: #fff;
                        letter-spacing: -2px;
                        line-height: 1.1;
                        margin: 0 0 30px;
                        position: relative;
                    }
                    .ifs-cta-sub {
                        font-size: 1.1rem;
                        color: #64748b;
                        margin: 0 0 50px;
                        position: relative;
                    }
                    .ifs-cta-btn {
                        display: inline-flex;
                        align-items: center;
                        gap: 14px;
                        padding: 20px 48px;
                        background: #fff;
                        color: #0a0f1a;
                        font-size: 0.95rem;
                        font-weight: 800;
                        text-decoration: none;
                        border-radius: 6px;
                        transition: all 0.3s ease;
                        position: relative;
                        letter-spacing: 0.3px;
                    }
                    .ifs-cta-btn:hover {
                        background: #0ea5e9;
                        color: #fff;
                        transform: translateY(-2px);
                        box-shadow: 0 20px 40px rgba(14, 165, 233, 0.2);
                    }

                    /* --- RESPONSIVE --- */
                    @media (max-width: 991px) {
                        .ifs-thesis { padding: 100px 0 80px; }

                        .ifs-narrative { padding: 100px 0; }
                        .ifs-narrative-grid {
                            grid-template-columns: 1fr;
                            gap: 40px;
                        }
                        .ifs-narrative-title { position: static; }
                        .ifs-capabilities { padding: 100px 0; }
                        .ifs-cap-item {
                            grid-template-columns: 40px 1fr;
                            gap: 20px;
                        }
                        .ifs-cap-desc {
                            grid-column: 2;
                        }
                        .ifs-quote-section { padding: 100px 0; }
                        .ifs-quote-grid {
                            grid-template-columns: 1fr;
                            gap: 40px;
                        }
                        .ifs-principles { padding: 100px 0; }
                        .ifs-principles-grid {
                            grid-template-columns: 1fr;
                            gap: 0;
                        }
                        .ifs-principle-card {
                            border-right: none;
                            border-bottom: 1px solid #e2e8f0;
                            padding: 40px 0;
                        }
                        .ifs-principle-card:last-child { border-bottom: none; }
                        .ifs-cta-final { padding: 100px 0; }
                    }
                    @media (max-width: 575px) {

                        .ifs-cap-item { padding-left: 0 !important; }
                        .ifs-quote-image-wrap img { height: 350px; }
                    }
                `}</style>

                {/* ===== 1. THE THESIS ===== */}
                <section className="ifs-thesis">
                    <div className="container">
                        <div className="ifs-thesis-inner">
                            <span className="ifs-overline wow fadeInUp" data-wow-delay=".1s">Who We Are</span>
                            <h2 className="ifs-thesis-heading wow fadeInUp" data-wow-delay=".2s">
                                We don't maintain buildings.<br />
                                We protect <em>reputations</em>.
                            </h2>
                            <p className="ifs-thesis-body wow fadeInUp" data-wow-delay=".3s">
                                Icon Facility Services was founded on one premise: the environments people work in
                                should never be an afterthought. We combine industrial-grade operations with clinical
                                attention to detail — delivering facility solutions that meet the standard your brand demands.
                            </p>
                        </div>
                    </div>
                </section>


                {/* ===== 4. TWO-COLUMN NARRATIVE ===== */}
                <section className="ifs-narrative">
                    <div className="container">
                        <div className="ifs-narrative-grid">
                            <div className="ifs-narrative-left">
                                <span className="ifs-overline">Our Approach</span>
                                <h3 className="ifs-narrative-title wow fadeInUp" data-wow-delay=".2s">
                                    Built for the complex.<br />
                                    Scaled for the national.
                                </h3>
                            </div>
                            <div className="ifs-narrative-right wow fadeInUp" data-wow-delay=".3s">
                                <p>
                                    From TGA-compliant healthcare hygiene to high-rise window detailing and
                                    industrial asset maintenance, our teams are trained and equipped for
                                    environments where precision isn't optional — it's regulatory.
                                </p>
                                <p>
                                    We partner with Australia's leading commercial developers and facility
                                    managers to deliver maintenance programs that are tailored to each site's
                                    unique compliance, aesthetic, and operational requirements. Every square
                                    metre we manage reflects the prestige of your brand.
                                </p>
                                <p>
                                    Our protocols are built on ISO 9001 quality management and AS 4801
                                    safety standards. We don't cut corners. We set them.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== 5. CAPABILITIES ===== */}
                <section className="ifs-capabilities">
                    <div className="container">
                        <div className="ifs-cap-header">
                            <span className="ifs-cap-overline wow fadeInUp" data-wow-delay=".1s">What We Do</span>
                            <h3 className="ifs-cap-title wow fadeInUp" data-wow-delay=".2s">
                                Comprehensive facility services,<br />
                                delivered with precision.
                            </h3>
                        </div>
                        <ul className="ifs-cap-list">
                            {[
                                {
                                    name: 'Commercial Cleaning',
                                    desc: 'Daily, weekly, and periodic cleaning programs for offices, retail spaces, and mixed-use developments. Tailored schedules. Consistent results.'
                                },
                                {
                                    name: 'Healthcare & Clinical Sanitation',
                                    desc: 'TGA-compliant infection control protocols for hospitals, aged care, and clinical environments. Our teams hold current clinical cleaning certifications.'
                                },
                                {
                                    name: 'Industrial & High-Risk Maintenance',
                                    desc: 'Heavy-duty cleaning, washdowns, and asset protection for warehouses, manufacturing floors, and logistics centres. Full WHS compliance, always.'
                                },
                                {
                                    name: 'External & Height Services',
                                    desc: 'Window cleaning, pressure washing, façade maintenance, and rope-access services for multi-storey commercial and residential buildings.'
                                },
                                {
                                    name: 'Specialised Services',
                                    desc: 'End-of-lease, post-construction, strata maintenance, and event cleaning — handled by dedicated project teams with site-specific SOPs.'
                                }
                            ].map((cap, idx) => (
                                <li key={idx} className="ifs-cap-item wow fadeInUp" data-wow-delay={`${idx * 0.08}s`}>
                                    <span className="ifs-cap-index">{String(idx + 1).padStart(2, '0')}</span>
                                    <h4 className="ifs-cap-name">{cap.name}</h4>
                                    <p className="ifs-cap-desc">{cap.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>



                {/* ===== 7. PRINCIPLES ===== */}
                <section className="ifs-principles">
                    <div className="container">
                        <div className="row mb-80">
                            <div className="col-lg-8">
                                <span className="ifs-overline wow fadeInUp" data-wow-delay=".1s">Our Principles</span>
                                <h3 className="ifs-thesis-heading wow fadeInUp" data-wow-delay=".2s" style={{ marginBottom: 0 }}>
                                    What drives every decision.
                                </h3>
                            </div>
                        </div>
                        <div className="ifs-principles-grid">
                            {[
                                {
                                    num: '01',
                                    name: 'Safety First. Always.',
                                    desc: 'Every site, every task, every team member. We maintain rigorous WHS compliance and perform exhaustive risk assessments — because there is no shortcut to safety.'
                                },
                                {
                                    num: '02',
                                    name: 'Quality at Scale.',
                                    desc: 'Through standardized protocols and dedicated site leads, we deliver consistent, high-end results across national portfolios — from a single office to 200 locations.'
                                },
                                {
                                    num: '03',
                                    name: 'Radical Accountability.',
                                    desc: 'We act as an extension of your management team. Transparent reporting, real-time issue resolution, and partnership built on trust — not just contracts.'
                                }
                            ].map((principle, idx) => (
                                <div key={idx} className="ifs-principle-card wow fadeInUp" data-wow-delay={`${idx * 0.1}s`}>
                                    <span className="ifs-principle-num">{principle.num}</span>
                                    <h4 className="ifs-principle-name">{principle.name}</h4>
                                    <p className="ifs-principle-desc">{principle.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== 8. TRUST LOGOS ===== */}
                <section className="ifs-trust">
                    <div className="container">
                        <p className="ifs-trust-label">Trusted by Leading Developers & National Brands</p>
                        <Brand3 />
                    </div>
                </section>

                {/* ===== 9. CTA ===== */}
                <section className="ifs-cta-final">
                    <div className="container position-relative">
                        <h2 className="ifs-cta-heading wow fadeInUp" data-wow-delay=".2s">
                            Ready to elevate<br />your facility standard?
                        </h2>
                        <p className="ifs-cta-sub wow fadeInUp" data-wow-delay=".3s">
                            Let's discuss how Icon can protect your most valuable assets.
                        </p>
                        <div className="wow fadeInUp" data-wow-delay=".4s">
                            <Link href="/contact" className="ifs-cta-btn" style={{ gap: '14px', display: 'inline-flex', alignItems: 'center' }}>
                                Arrange a Consultation
                                <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                            </Link>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}