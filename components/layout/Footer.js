import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer>
                <div className="footer-area pf-bg-navy" style={{ padding: '80px 0 0', backgroundColor: 'var(--primary-navy)' }}>
                    <div className="footer-top pb-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Our Expertise</h2>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/services/commercial-cleaning"><i className="fas fa-angle-double-right" />Commercial Maintenance</Link></li>
                                                <li><Link href="/services/industrial-cleaning"><i className="fas fa-angle-double-right" />Industrial Solutions</Link></li>
                                                <li><Link href="/services/clinical-sanitation"><i className="fas fa-angle-double-right" />Clinical Sanitation</Link></li>
                                                <li><Link href="/services/retail-cleaning"><i className="fas fa-angle-double-right" />Retail Environment Care</Link></li>
                                                <li><Link href="/services/specialized-pressure-washing"><i className="fas fa-angle-double-right" />Specialized Pressure Washing</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 mb-50">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Quick Access</h2>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/about"><i className="fas fa-angle-double-right" />About Our Mission</Link></li>
                                                <li><Link href="/services"><i className="fas fa-angle-double-right" />Service Directory</Link></li>
                                                <li><Link href="/contact"><i className="fas fa-angle-double-right" />Request a Proposal</Link></li>
                                                <li><Link href="/contact"><i className="fas fa-angle-double-right" />Emergency Response</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-12">
                                    <div className="footer-widget" style={{ paddingLeft: 'clamp(0px, 5vw, 40px)' }}>
                                        <h2 className="fw-title">Connect With Us</h2>
                                        <div className="footer-info">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <ul className="list-wrap">
                                                        <li className="mb-20">
                                                            <div className="icon" style={{ backgroundColor: 'rgba(0, 210, 255, 0.1)' }}><i className="fas fa-phone-alt" style={{ color: 'var(--primary-cyan)' }} /></div>
                                                            <div className="content">
                                                                <p className="mb-0" style={{ fontSize: '14px', opacity: 0.6 }}>Head Office</p>
                                                                <p><Link href="tel:1800418411">1800 418 411</Link></p>
                                                            </div>
                                                        </li>
                                                        <li className="mb-20">
                                                            <div className="icon" style={{ backgroundColor: 'rgba(0, 210, 255, 0.1)' }}><i className="fab fa-whatsapp" style={{ color: 'var(--primary-cyan)' }} /></div>
                                                            <div className="content">
                                                                <p className="mb-0" style={{ fontSize: '14px', opacity: 0.6 }}>Direct Support</p>
                                                                <p><Link href="https://wa.me/61483798622" target="_blank">0483 798 622</Link></p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6">
                                                    <ul className="list-wrap">
                                                        <li className="mb-20">
                                                            <div className="icon" style={{ backgroundColor: 'rgba(0, 210, 255, 0.1)' }}><i className="fas fa-envelope" style={{ color: 'var(--primary-cyan)' }} /></div>
                                                            <div className="content">
                                                                <p className="mb-0" style={{ fontSize: '14px', opacity: 0.6 }}>General Inquiry</p>
                                                                <p><Link href="mailto:info@iconfacilitys.com.au">info@iconfacilitys.com.au</Link></p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="icon" style={{ backgroundColor: 'rgba(0, 210, 255, 0.1)' }}><i className="fas fa-map-marker-alt" style={{ color: 'var(--primary-cyan)' }} /></div>
                                                            <div className="content">
                                                                <p className="mb-0" style={{ fontSize: '14px', opacity: 0.6 }}>Location</p>
                                                                <p>2/38 Railway Parade,<br /> Lakemba NSW 2195</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="copyright-text">
                                        <p>© {new Date().getFullYear()} Icon Facility Services All Rights Reserved</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="footer-bootom-menu">
                                        <ul className="list-wrap">
                                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                            <li><Link href="/terms">Terms & Conditions</Link></li>
                                            <li><Link href="/sitemap">Sitemap</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}