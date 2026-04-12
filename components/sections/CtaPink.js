import React from 'react';

export default function CtaPink() {
    return (
        <section className="cta-area pf-bg-navy" style={{ padding: '100px 0', borderTop: '4px solid var(--primary-cyan)' }}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-8 text-center">
                        <style jsx>{`
                            .cta-title {
                                color: #ffffff;
                                font-size: 3.5rem;
                                font-weight: 800;
                                margin-bottom: 20px;
                                line-height: 1.1;
                            }
                            .cta-p {
                                font-size: 1.2rem;
                                color: #e2e8f0;
                                margin-bottom: 40px;
                                max-width: 600px;
                                margin: 0 auto 40px;
                                line-height: 1.6;
                            }
                            @media (max-width: 991px) {
                                .cta-title { font-size: 2rem !important; }
                                .cta-p { font-size: 1rem !important; margin-bottom: 30px !important; }
                                .cta-btn { padding: 12px 30px !important; font-size: 1rem !important; }
                            }
                        `}</style>
                        <h2 className="cta-title wow fadeInUp" data-wow-delay=".2s">
                            Ready to Transform <br /> Your Property?
                        </h2>
                        <p className="cta-p wow fadeInUp" data-wow-delay=".4s">
                            Don't wait another day. Increase your curb appeal, property value, and pride of ownership with our expert commercial and residential pressure washing solutions.
                        </p>
                        <div className="wow fadeInUp" data-wow-delay=".6s">
                            <a href="tel:1800418411" className="pf-btn cta-btn">
                                Get Your Free Quote Now <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
