import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import Team3 from "@/components/sections/Team3"
import Services3 from "@/components/sections/Services3"
import Link from "next/link"
import Slider from "react-slick"

const settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
}

export default function About() {

    return (
        <>
            <Layout breadcrumbTitle="About Us">

                {/* Who We Are Section */}
                <section className="history-area pt-90 pb-90">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="history-img-wrap">
                                    <ul className="list-wrap">
                                        <li>
                                            <img src="/assets/img/images/history_img01.jpg" alt="Commercial Cleaning" />
                                        </li>
                                        <li>
                                            <img src="/assets/img/images/history_img02.jpg" alt="Window Cleaning" />

                                        </li>
                                        <li>
                                            <img src="/assets/img/images/history_img03.jpg" alt="Pressure Washing" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="history-content">
                                    <div className="section-title mb-20">
                                        <span className="sub-title">About Icon Facility Services</span>
                                        <h2 className="title">Setting the Standard for Professional Cleaning in Australia</h2>
                                    </div>
                                    <p>Icon Facility Services (IFS) is an Australian-based professional cleaning, window cleaning,
                                        and exterior maintenance company delivering high-quality services across commercial,
                                        industrial, strata, and residential sectors.</p>
                                    <div className="history-list">
                                        <ul className="list-wrap">
                                            <li><i className="fas fa-check-circle" />Australian-owned and operated</li>
                                            <li><i className="fas fa-check-circle" />Fully insured & WHS compliant</li>
                                            <li><i className="fas fa-check-circle" />Trained & experienced staff</li>
                                            <li><i className="fas fa-check-circle" />Tailored service solutions</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="pt-70 pb-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="section-title text-center mb-40">
                                    <span className="sub-title">Our Mission & Vision</span>
                                    <h2 className="title">Our Commitment to Excellence</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8 mb-4">
                                <div className="bg-white p-35 rounded shadow-sm h-100">
                                    <div className="text-center mb-15">
                                        <div className="d-inline-block p-2 rounded-circle bg-light">
                                            <img src="/assets/img/icon/features_icon01.svg" alt="Mission" width="40" />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="h5 mb-15">Our Mission</h3>
                                        <p className="mb-0">To deliver professional cleaning & exterior maintenance services that enhance environments, protect property value & exceed client expectations—every service, every time.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-8 mb-4">
                                <div className="bg-white p-35 rounded shadow-sm h-100">
                                    <div className="text-center mb-15">
                                        <div className="d-inline-block p-2 rounded-circle bg-light">
                                            <img src="/assets/img/icon/features_icon02.svg" alt="Vision" width="40" />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="h5 mb-15">Our Vision</h3>
                                        <p className="mb-0">To be a leading facility services provider in Australia, recognised for quality workmanship, safety, and long-term client partnerships.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Core Services Section */}
                <Services3 />

                {/* Why Choose Us Section */}
                <section className="support-area pt-70 pb-40">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center mb-40">
                                    <span className="sub-title">Why Choose Us</span>
                                    <h2 className="title">The IFS Difference</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-md-6 mb-4">
                                <div className="support-item">
                                    <div className="support-icon">
                                        <img src="/assets/img/icon/support_icon01.svg" alt="" />
                                    </div>
                                    <div className="support-content">
                                        <h4 className="title">Compliance & Safety</h4>
                                        <p>WHS compliant, fully insured with detailed SWMS for all high-risk tasks</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 mb-4">
                                <div className="support-item">
                                    <div className="support-icon">
                                        <img src="/assets/img/icon/support_icon02.svg" alt="" />
                                    </div>
                                    <div className="support-content">
                                        <h4 className="title">Modern Equipment</h4>
                                        <p>Industry-approved techniques and environmentally responsible products</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 mb-4">
                                <div className="support-item">
                                    <div className="support-icon">
                                        <img src="/assets/img/icon/support_icon03.svg" alt="" />
                                    </div>
                                    <div className="support-content">
                                        <h4 className="title">Professional Team</h4>
                                        <p>Trained, experienced staff with attention to detail and customer service</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="cta-area pt-60 pb-60" style={{ background: "linear-gradient(90deg, #0f1437 0%, #1a2250 100%)" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="cta-content">
                                    <h2 className="title text-white mb-10">Ready to Experience Professional Cleaning?</h2>
                                    <p className="text-white">Contact us today for a free consultation and quote</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cta-btn text-lg-end">
                                    <Link href="/contact" className="btn btn-light">Get Your Free Quote</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* services-details-area */}
               
                    <section className="services-details-area pt-90 pb-90">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="services-details-wrap">
                                        <div className="services-details-content">
                                            <h2 className="title">Our Approach & Values</h2>
                                            <p>At IFS, we take a structured and client-focused approach to facility services. Every site is assessed individually, allowing us to deliver tailored cleaning and window cleaning solutions that meet operational needs, safety requirements, and aesthetic expectations.</p>
                                            <div className="services-process-wrap">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-6 col-md-8">
                                                        <div className="services-process-img">
                                                            <img src="/assets/img/services/sp_img01.jpg" alt="" />
                                                            <img src="/assets/img/services/sp_img02.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="services-process-content">
                                                            <h2 className="title">Our Core Values</h2>
                                                            <ul className="list-wrap">
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/sp_icon01.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Professionalism</h4>
                                                                            <p>We uphold the highest standards in presentation, conduct, and service delivery</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/sp_icon02.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Reliability</h4>
                                                                            <p>We deliver consistent, on-time services our clients can depend on</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/sp_icon01.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Safety & Compliance</h4>
                                                                            <p>We follow Australian safety standards to protect people, property, and assets</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h2 className="title-two">What We Do</h2>
                                            <p>We provide a comprehensive range of professional services, including office, commercial, retail, and industrial cleaning, education and entertainment venue cleaning, professional window cleaning (including buildings up to 3 storeys), strata and building maintenance cleaning, end-of-lease and move-out cleaning, pressure washing and exterior surface cleaning, and driveway and concrete sealing.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6">
                                    <aside className="services-sidebar">
                                        <div className="services-widget">
                                            <h4 className="widget-title">Our All Service</h4>
                                            <div className="our-services-list">
                                                <ul className="list-wrap">
                                                    <li><Link href="#">Office Cleaning<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Commercial Cleaning<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Window Cleaning<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Pressure Washing<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">End of Lease Cleaning<i className="fas fa-arrow-right" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="services-widget">
                                            <h4 className="widget-title">Why Choose IFS</h4>
                                            <div className="history-list">
                                                <ul className="list-wrap">

                                                    <li><i className="fas fa-check-circle" />Specialists in commercial & strata cleaning</li>
                                                    <li><i className="fas fa-check-circle" />Equipped for multi-storey properties</li>
                                                    <li><i className="fas fa-check-circle" />WHS (Work Health & Safety) Compliance</li>
                                                    <li><i className="fas fa-check-circle" />SWMS (Safe Work Method Statements)</li>
                                                    <li><i className="fas fa-check-circle" />Working at Heights Compliance</li>
                                                    <li><i className="fas fa-check-circle" />Fully Insured Operations</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>
              

                {/* Brand Area */}
                {/* <Team3 /> */}
            </Layout>
        </>
    )
}