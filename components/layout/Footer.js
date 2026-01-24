import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer>
                <div className="footer-area footer-bg" data-background="/assets/img/bg/footer_bg.jpg">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-7">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">About Us</h2>
                                        <div className="footer-content">
                                            <p>Icon Facility Services is Professional cleaning company specializing in residential and commercial services. We use eco-friendly products and advanced equipment to deliver exceptional cleaning results for homes and businesses.</p>
                                            <div className="footer-newsletter">
                                                <h4 className="title">Get Cleaning Tips</h4>
                                                <form action="#">
                                                    <input type="text" placeholder="Enter your email" />
                                                    <button type="submit" className="btn btn-two">Subscribe</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Our Services</h2>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/services"><i className="fas fa-angle-double-right" />House Washing</Link></li>
                                                <li><Link href="/services"><i className="fas fa-angle-double-right" />Driveway Cleaning</Link></li>
                                                <li><Link href="/services"><i className="fas fa-angle-double-right" />Solar Panel Cleaning</Link></li>
                                                <li><Link href="/services"><i className="fas fa-angle-double-right" />Office Cleaning</Link></li>
                                                <li><Link href="/services"><i className="fas fa-angle-double-right" />Pressure Washing</Link></li>
                                                <li><Link href="/services"><i className="fas fa-angle-double-right" />Exterior Cleaning</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer-widget">
                                        <h2 className="fw-title">Quick Links</h2>
                                        <div className="footer-link">
                                            <ul className="list-wrap">
                                                <li><Link href="/about"><i className="fas fa-angle-double-right" />About Us</Link></li>
                                                <li><Link href="/services"><i className="fas fa-angle-double-right" />Services</Link></li>
                                                <li><Link href="/project"><i className="fas fa-angle-double-right" />Our Work</Link></li>
                                                <li><Link href="/team"><i className="fas fa-angle-double-right" />Our Team</Link></li>
                                                <li><Link href="/contact"><i className="fas fa-angle-double-right" />Get Quote</Link></li>
                                                <li><Link href="/contact"><i className="fas fa-angle-double-right" />Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5 col-sm-6">
                                    <div className="footer-social">
                                        <h2 className="title">Follow Us:</h2>
                                        <ul className="list-wrap">
                                            <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="/#"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link href="/#"><i className="fab fa-youtube" /></Link></li>
                                            <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
                                        </ul>
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