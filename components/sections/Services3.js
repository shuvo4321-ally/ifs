import Link from "next/link"
import { useState } from "react"

export default function Services3() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="services-area-three">
                <style jsx>{`
                    @media (max-width: 767px) {
                        .services-nav-wrap .nav-tabs {
                            display: flex !important;
                            flex-wrap: nowrap !important;
                            overflow-x: auto !important;
                            -webkit-overflow-scrolling: touch;
                            gap: 10px !important;
                            padding: 10px 5px 10px !important;
                            justify-content: flex-start !important;
                            border: none !important;
                            margin-bottom: 45px !important;
                        }
                        .services-nav-wrap .nav-tabs::-webkit-scrollbar {
                            display: none;
                        }
                        .services-nav-wrap .nav-item {
                            flex: 0 0 auto !important;
                            margin: 0 !important;
                        }
                        .services-nav-wrap .nav-link {
                            padding: 10px 20px !important;
                            font-size: 0.8rem !important;
                            white-space: nowrap !important;
                            border-radius: 50px !important;
                            border: 1px solid rgba(255,255,255,0.1) !important;
                            background: rgba(255,255,255,0.05) !important;
                            color: #fff !important;
                        }
                        .services-nav-wrap .nav-link.active {
                            background: var(--primary-cyan) !important;
                            color: #0f1437 !important;
                            border-color: var(--primary-cyan) !important;
                            font-weight: 800 !important;
                        }
                        .services-item-three {
                            flex-direction: column !important;
                            padding: 20px !important;
                            background: #fff;
                            border-radius: 30px;
                        }
                        .services-thumb-three {
                            margin-bottom: 25px !important;
                            border-radius: 20px !important;
                            overflow: hidden !important;
                        }
                        .services-thumb-three img {
                            width: 100% !important;
                            height: 100% !important;
                            object-fit: cover !important;
                            object-position: 10% 20% !important;
                        }
                        .services-content-three {
                            padding: 0 !important;
                            text-align: left;
                        }
                        .services-content-three h2.title {
                            font-size: 1.5rem !important;
                            text-align: center;
                            line-height: 1.2 !important;
                            margin-bottom: 20px !important;
                        }
                        .services-content-three p {
                            font-size: 0.95rem !important;
                            line-height: 1.6 !important;
                            color: #64748b !important;
                            margin-bottom: 25px !important;
                            display: -webkit-box;
                            -webkit-line-clamp: 3;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                        }
                        .services-list ul {
                            display: grid !important;
                            gap: 12px !important;
                            margin-bottom: 30px !important;
                        }
                        .services-list li {
                            font-size: 0.9rem !important;
                            background: #f8fafc;
                            padding: 10px 15px;
                            border-radius: 12px;
                            border: 1px solid rgba(0,0,0,0.03);
                        }
                    }
                `}</style>
                <div className="services-bg jarallax" data-background="/assets/img/bg/services_bg.jpg" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="section-title text-center white-title mb-60">
                                <span className="sub-title">Our Core Services</span>
                                <h2 className="title">Professional Cleaning Solutions for Every Need</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="services-nav-wrap">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" onClick={() => handleOnClick(1)}>
                                        <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}>Commercial Cleaning</button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(2)}>
                                        <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}>Specialized Services</button>
                                    </li>
                                    <li className="nav-item" onClick={() => handleOnClick(3)}>
                                        <button className={activeIndex === 3 ? "nav-link active" : "nav-link"}>Maintenance</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className={activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade"}>
                                        <div className="services-item-three">
                                            <div className="services-thumb-three">
                                                <img src="/assets/img/services/workplace_cleaning_ifs.jpg" alt="IFS Workplace Cleaning Team" />
                                            </div>
                                            <div className="services-content-three">
                                                <div className="section-title mb-30">
                                                    <h2 className="title">Professional Workplace Cleaning Solutions</h2>
                                                </div>
                                                <p>We provide comprehensive commercial cleaning solutions for businesses across Australia. Our professional team delivers consistent, high-quality results for offices, retail spaces, and commercial properties. We understand that a clean workspace enhances productivity, safety, and professional image.</p>
                                                <div className="services-list">
                                                    <ul className="list-wrap">
                                                        <li><i className="fas fa-check-circle" />Office & corporate cleaning</li>
                                                        <li><i className="fas fa-check-circle" />Retail store maintenance</li>
                                                        <li><i className="fas fa-check-circle" />Education facility cleaning</li>
                                                        <li><i className="fas fa-check-circle" />Entertainment venue services</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 2 ? "tab-pane fade show active" : "tab-pane fade"}>
                                        <div className="services-item-three">
                                            <div className="services-thumb-three">
                                                <img src="/assets/img/services/h4_services_img02.jpg" alt="Specialized Cleaning" />
                                            </div>
                                            <div className="services-content-three">
                                                <div className="section-title mb-30">
                                                    <h2 className="title">Expert Specialized Cleaning Solutions</h2>
                                                </div>
                                                <p>Our specialized cleaning services address unique cleaning challenges with professional expertise. From high-reach window cleaning to delicate surface maintenance, we handle the tasks that require specific skills, equipment, and safety protocols. Our team is trained to work safely and efficiently in various environments.</p>
                                                <div className="services-list">
                                                    <ul className="list-wrap">
                                                        <li><i className="fas fa-check-circle" />Window cleaning (up to 3 storeys)</li>
                                                        <li><i className="fas fa-check-circle" />Solar panel maintenance</li>
                                                        <li><i className="fas fa-check-circle" />Pressure & soft washing</li>
                                                        <li><i className="fas fa-check-circle" />End of lease bond cleaning</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 3 ? "tab-pane fade show active" : "tab-pane fade"}>
                                        <div className="services-item-three">
                                            <div className="services-thumb-three">
                                                <img src="/assets/img/services/h4_services_img03.jpg" alt="Maintenance Services" />
                                            </div>
                                            <div className="services-content-three">
                                                <div className="section-title mb-30">
                                                    <h2 className="title">Comprehensive Maintenance Solutions</h2>
                                                </div>
                                                <p>Regular maintenance is essential for preserving property value and ensuring safe, clean environments. Our maintenance services cover all aspects of property upkeep, from routine cleaning to specialized exterior maintenance. We work closely with property managers and business owners to develop customized maintenance plans.</p>
                                                <div className="services-list">
                                                    <ul className="list-wrap">
                                                        <li><i className="fas fa-check-circle" />Strata & building maintenance</li>
                                                        <li><i className="fas fa-check-circle" />Industrial facility cleaning</li>
                                                        <li><i className="fas fa-check-circle" />Driveway & concrete sealing</li>
                                                        <li><i className="fas fa-check-circle" />Exterior surface cleaning</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
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