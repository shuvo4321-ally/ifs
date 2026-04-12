import { useState } from 'react'
export default function Faq1() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
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
            <section className="faq-area faq-bg" data-background="/assets/img/bg/faq_bg.jpg" style={{ padding: '60px 0' }}>
                <style jsx global>{`
                    .faq-wrap .accordion-button {
                        padding: 15px 25px !important;
                        font-size: 1.1rem !important;
                    }
                    .faq-wrap .accordion-body {
                        padding: 15px 25px !important;
                    }
                    .faq-wrap .accordion-body p {
                        font-size: 0.95rem !important;
                        line-height: 1.6 !important;
                    }
                    .faq-wrap .accordion-item {
                        margin-bottom: 12px !important;
                    }
                `}</style>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title text-center mb-40">
                                <span className="pf-subtitle">Expert Knowledge</span>
                                <h2 className="title">Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-6 col-lg-10 order-0 order-xl-2">
                            <div className="faq-img-wrap">
                                <img src="/assets/img/services/office_cleaning_premium.jpg" alt="" className="wow fadeInRight" data-wow-delay=".4s" style={{ height: '450px', objectFit: 'cover', borderRadius: '20px' }} />
                                <div className="overlay-text wow fadeInUp" data-wow-delay=".6s" style={{ bottom: '30px', padding: '15px', width: '200px' }}>
                                    <h2 className="title" style={{ fontSize: '40px' }}>FAQ</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="faq-wrap">
                                <div className="accordion">
                                    <div className="accordion-item shadow-sm" style={{ border: 'none', borderRadius: '15px', overflow: 'hidden' }}>
                                        <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                                            <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed "} style={{ border: 'none', background: '#fff' }}>
                                                Are your cleaning protocols ISO compliant?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 1 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body" style={{ background: '#fff' }}>
                                                <p>Yes, all Icon Facility Services protocols adhere to strict ISO-9001 quality management standards, ensuring consistent, high-grade sanitation for every client.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item shadow-sm" style={{ border: 'none', borderRadius: '15px', overflow: 'hidden' }}>
                                        <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                                            <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed "} style={{ border: 'none', background: '#fff' }}>
                                                Do you offer 24/7 facility support?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 2 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body" style={{ background: '#fff' }}>
                                                <p>We provide around-the-clock maintenance and emergency response services to ensure your business operations never face disruption.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item shadow-sm" style={{ border: 'none', borderRadius: '15px', overflow: 'hidden' }}>
                                        <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                                            <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed "} style={{ border: 'none', background: '#fff' }}>
                                                What sectors do you specialize in?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 3 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body" style={{ background: '#fff' }}>
                                                <p>Our expertise spans high-traffic commercial offices, industrial plants, clinical healthcare settings, and premium retail environments across Australia.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item shadow-sm" style={{ border: 'none', borderRadius: '15px', overflow: 'hidden' }}>
                                        <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                                            <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed "} style={{ border: 'none', background: '#fff' }}>
                                                Are your products environmentally friendly?
                                            </button>
                                        </h2>
                                        <div className={isActive.key == 4 ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body" style={{ background: '#fff' }}>
                                                <p>We prioritize GECA-certified, eco-friendly cleaning agents that provide maximum sanitation while minimizing the environmental footprint of your facility.</p>
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
