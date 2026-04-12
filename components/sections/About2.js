import Link from "next/link"

export default function About2() {
    return (
        <>
            <section className="about-area-two pb-60" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-0 order-lg-2">
                            <div className="about-img-wrap-two">
                                <ul className="list-wrap">
                                    <li>
                                        <div className="year-experience-wrap wow fadeInDown" data-wow-delay=".2s">
                                            <div className="icon"><img src="/assets/img/icon/h2_about_icon03.svg" alt="" /></div>
                                            <h2 className="title">07 Years <span>Experience</span></h2>
                                        </div>
                                    </li>
                                    <li><img src="/assets/img/services/office_cleaning_premium.jpg" alt="Commercial Cleaning" className="wow fadeInLeft" data-wow-delay=".4s" style={{ borderRadius: '20px' }} /></li>
                                </ul>
                                <ul className="list-wrap">
                                    <li><img src="/assets/img/services/industrial_cleaning_premium.jpg" alt="Industrial Cleaning" className="wow fadeInRight" data-wow-delay=".2s" style={{ borderRadius: '20px' }} /></li>
                                    <li><img src="/assets/img/services/retail_cleaning_premium.jpg" alt="Retail Cleaning" className="wow fadeInUp" data-wow-delay=".4s" style={{ borderRadius: '20px' }} /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content-two">
                                <div className="section-title mb-30">
                                    <span className="sub-title">What We Do</span>
                                    <h2 className="title">Our Cleaning Services</h2>
                                </div>
                                <p>Icon Facility Services (IFS) is an Australian-based professional cleaning, window cleaning, and exterior maintenance
                                    company delivering high-quality services across commercial, industrial, strata, and residential sectors.</p>
                                <div className="about-list-two">
                                    <ul className="list-wrap">
                                        <li className="list-item">
                                            <div className="icon">
                                                <img src="/assets/img/icon/h2_about_icon01.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5 className="title">Trained & experienced staff</h5>
                                            </div>
                                        </li>
                                        <li className="list-item">
                                            <div className="icon">
                                                <img src="/assets/img/icon/h2_about_icon02.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h5 className="title">Tailored service solutions</h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
