import Link from "next/link"

export default function About1() {
    return (
        <>
            <style jsx>{`
                .about-img-wrap img:nth-child(1) {
                    width: 369px;
                    height: 550px;
                    object-fit: cover;
                }
                .about-img-wrap img:nth-child(2) {
                    width: 223px;
                    height: 473px;
                    object-fit: cover;
                }
            `}</style>
            
            <section className="about-area pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                            <div className="about-img-wrap">
                                <img src="/assets/img/images/cleaning_team.jpg" alt="Professional cleaning team" className="wow fadeInRight" data-wow-delay=".4s" />
                                <img src="/assets/img/images/Cleaning-Equipments.jpg" alt="Cleaning equipment" className="wow fadeInRight" data-wow-delay=".2s" />
                                <div className="about-experiences-wrap">
                                    <div className="experiences-item">
                                        <div className="icon">
                                           @
                                        </div>
                                        <div className="content">
                                            <h6 className="title">We have more than 5 years of cleaning experience</h6>
                                        </div>
                                    </div>
                                    <div className="experiences-item">
                                        <div className="icon">
                                            @
                                        </div>
                                        <div className="content">
                                            <h6 className="title">Professional and certified cleaning specialists</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-content">
                                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">About Our Company</span>
                                    <h2 className="title tg-element-title">We're Committed to Cleaning Excellence</h2>
                                </div>
                                <p>At our cleaning company, we provide professional cleaning solutions for both residential and commercial properties. Our team of certified specialists uses eco-friendly products and advanced equipment to deliver exceptional results that exceed expectations.</p>
                                <div className="about-list">
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-check" />Over 500 satisfied customers served</li>
                                        <li><i className="fas fa-check" />Professional and insured cleaning team</li>
                                        <li><i className="fas fa-check" />Eco-friendly cleaning solutions used</li>
                                    </ul>
                                </div>
                                <Link href="/about" className="btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}