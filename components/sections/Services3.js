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
                                                <img src="/assets/img/services/h4_services_img01.jpg" alt="Commercial Cleaning" />
                                            </div>
                                            <div className="services-content-three">
                                                <div className="section-title mb-30">
                                                    <h2 className="title">Professional Commercial Cleaning Services</h2>
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
                                                <Link href="/services-details" className="btn">Get Commercial Quote</Link>
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
                                                <Link href="/services-details" className="btn">Book Specialized Service</Link>
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
                                                <Link href="/services-details" className="btn">Schedule Maintenance</Link>
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