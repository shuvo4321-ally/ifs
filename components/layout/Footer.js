import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer>
                <div className="footer-area pf-bg-navy" style={{ padding: '80px 0 0', backgroundColor: 'var(--primary-navy)' }}>
                    <style jsx>{`
                        .footer-brand-badge {
                            display: inline-flex;
                            align-items: center;
                            gap: 10px;
                            background: rgba(0, 204, 255, 0.1);
                            border: 1px solid rgba(0, 204, 255, 0.2);
                            border-radius: 10px;
                            padding: 8px 16px;
                            margin-bottom: 20px;
                        }
                        .footer-brand-badge span {
                            font-size: 0.75rem;
                            font-weight: 800;
                            color: var(--primary-cyan);
                            letter-spacing: 1.5px;
                            text-transform: uppercase;
                        }
                        .footer-brand-desc {
                            font-size: 0.88rem;
                            color: rgba(255,255,255,0.55);
                            line-height: 1.75;
                            margin-bottom: 28px;
                            max-width: 280px;
                        }
                        .footer-cta-btn {
                            display: inline-flex;
                            align-items: center;
                            gap: 8px;
                            background: var(--primary-cyan);
                            color: #0a162b;
                            font-size: 0.82rem;
                            font-weight: 800;
                            padding: 12px 22px;
                            border-radius: 8px;
                            text-decoration: none;
                            transition: all 0.2s;
                            letter-spacing: 0.3px;
                        }
                        .footer-cta-btn:hover {
                            background: #00b8e6;
                            color: #0a162b;
                            transform: translateY(-2px);
                        }
                        .fw-title {
                            font-size: 0.7rem;
                            font-weight: 800;
                            text-transform: uppercase;
                            letter-spacing: 2px;
                            color: rgba(255,255,255,0.4);
                            margin-bottom: 22px;
                        }
                        .footer-nav-link {
                            display: block;
                            font-size: 0.88rem;
                            color: rgba(255,255,255,0.65);
                            text-decoration: none;
                            padding: 5px 0;
                            transition: color 0.2s;
                            line-height: 1.5;
                        }
                        .footer-nav-link:hover {
                            color: var(--primary-cyan);
                        }
                        .footer-contact-row {
                            display: flex;
                            align-items: flex-start;
                            gap: 12px;
                            padding: 10px 0;
                            border-bottom: 1px solid rgba(255,255,255,0.07);
                        }
                        .footer-contact-row:last-child {
                            border-bottom: none;
                        }
                        .footer-contact-icon {
                            width: 32px;
                            height: 32px;
                            background: rgba(0,204,255,0.1);
                            border-radius: 8px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-shrink: 0;
                            margin-top: 2px;
                        }
                        .footer-contact-icon i {
                            font-size: 0.75rem;
                            color: var(--primary-cyan);
                        }
                        .footer-contact-label {
                            font-size: 0.65rem;
                            font-weight: 700;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            color: rgba(255,255,255,0.35);
                            margin-bottom: 2px;
                        }
                        .footer-contact-val {
                            font-size: 0.85rem;
                            color: rgba(255,255,255,0.75);
                            text-decoration: none;
                            transition: color 0.2s;
                            line-height: 1.4;
                        }
                        .footer-contact-val:hover {
                            color: var(--primary-cyan);
                        }
                        .footer-bottom-bar {
                            border-top: 1px solid rgba(255,255,255,0.08);
                            padding: 20px 0;
                            margin-top: 60px;
                        }
                        .footer-copy {
                            font-size: 0.78rem;
                            color: rgba(255,255,255,0.35);
                            margin: 0;
                        }
                        .footer-policy-links {
                            display: flex;
                            gap: 24px;
                            justify-content: flex-end;
                        }
                        .footer-policy-links a {
                            font-size: 0.78rem;
                            color: rgba(255,255,255,0.35);
                            text-decoration: none;
                            transition: color 0.2s;
                        }
                        .footer-policy-links a:hover {
                            color: var(--primary-cyan);
                        }
                        /* Floating call button */
                        .float-call-btn {
                            position: fixed;
                            bottom: 28px;
                            right: 28px;
                            z-index: 9999;
                            width: 56px;
                            height: 56px;
                            background: var(--primary-cyan);
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            box-shadow: 0 8px 24px rgba(0, 204, 255, 0.4);
                            text-decoration: none;
                            transition: all 0.25s ease;
                        }
                        .float-call-btn:hover {
                            background: #00b8e6;
                            transform: scale(1.1);
                            box-shadow: 0 12px 32px rgba(0, 204, 255, 0.5);
                        }
                        .float-call-btn i {
                            font-size: 1.2rem;
                            color: #0a162b;
                        }
                        .float-call-pulse {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                            background: rgba(0, 204, 255, 0.3);
                            animation: pulse-ring 2s ease-out infinite;
                        }
                        @keyframes pulse-ring {
                            0% { transform: scale(1); opacity: 0.7; }
                            100% { transform: scale(1.8); opacity: 0; }
                        }
                        @media (max-width: 991px) {
                            .footer-area { padding: 60px 0 0 !important; }
                            .footer-col { margin-bottom: 40px; }
                            .footer-policy-links { justify-content: flex-start; margin-top: 10px; }
                            .float-call-btn { width: 50px; height: 50px; bottom: 20px; right: 20px; }
                        }
                    `}</style>

                    <div className="container">
                        <div className="row g-5">

                            {/* Col 1 — Brand */}
                            <div className="col-lg-3 col-md-6 footer-col">
                                <div className="footer-brand-badge">
                                    <i className="fas fa-shield-alt" style={{ color: 'var(--primary-cyan)', fontSize: '0.75rem' }}></i>
                                    <span>IFS</span>
                                </div>
                                <p className="footer-brand-desc">
                                    Icon Facility Services — delivering world-class cleaning, sanitation, and facility management solutions across Australia since 2010.
                                </p>
                                <a href="tel:1800418411" className="footer-cta-btn">
                                    Get Free Quote <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>

                            {/* Col 2 — Quick Links */}
                            <div className="col-lg-2 col-md-6 footer-col" style={{ paddingLeft: 'clamp(12px, 3vw, 40px)' }}>
                                <h2 className="fw-title">Quick Links</h2>
                                <nav>
                                    <Link href="/" className="footer-nav-link">Home</Link>
                                    <Link href="/about" className="footer-nav-link">About Us</Link>
                                    <Link href="/services" className="footer-nav-link">All Services</Link>
                                    <Link href="/contact" className="footer-nav-link">Contact</Link>
                                    <Link href="/contact" className="footer-nav-link">Request a Proposal</Link>
                                    <Link href="/contact" className="footer-nav-link">Emergency Response</Link>
                                </nav>
                            </div>

                            {/* Col 3 — Our Services */}
                            <div className="col-lg-3 col-md-6 footer-col">
                                <h2 className="fw-title">Our Services</h2>
                                <nav>
                                    <Link href="/services/commercial-cleaning" className="footer-nav-link">Commercial Maintenance</Link>
                                    <Link href="/services/workplace-cleaning" className="footer-nav-link">Workplace Cleaning</Link>
                                    <Link href="/services/industrial-cleaning" className="footer-nav-link">Industrial Solutions</Link>
                                    <Link href="/services/clinical-sanitation" className="footer-nav-link">Clinical Sanitation</Link>
                                    <Link href="/services/retail-cleaning" className="footer-nav-link">Retail Environment Care</Link>
                                    <Link href="/services/healthcare-hygiene" className="footer-nav-link">Healthcare Hygiene</Link>
                                    <Link href="/services/educational-cleaning" className="footer-nav-link">Educational Cleaning</Link>
                                    <Link href="/services/hospitality-cleaning" className="footer-nav-link">Hospitality Cleaning</Link>
                                    <Link href="/services/specialized-pressure-washing" className="footer-nav-link">Pressure Washing</Link>
                                    <Link href="/services/post-construction" className="footer-nav-link">Post-Construction</Link>
                                </nav>
                            </div>

                            {/* Col 4 — Contact Info */}
                            <div className="col-lg-4 col-md-6 footer-col">
                                <h2 className="fw-title">Contact Info</h2>

                                <div className="footer-contact-row">
                                    <div className="footer-contact-icon">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div>
                                        <p className="footer-contact-label">Head Office</p>
                                        <a href="tel:1800418411" className="footer-contact-val">1800 418 411</a>
                                    </div>
                                </div>

                                <div className="footer-contact-row">
                                    <div className="footer-contact-icon">
                                        <i className="fab fa-whatsapp"></i>
                                    </div>
                                    <div>
                                        <p className="footer-contact-label">WhatsApp Support</p>
                                        <a href="https://wa.me/61483798622" target="_blank" rel="noopener noreferrer" className="footer-contact-val">0483 798 622</a>
                                    </div>
                                </div>

                                <div className="footer-contact-row">
                                    <div className="footer-contact-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <p className="footer-contact-label">General Inquiry</p>
                                        <a href="mailto:info@iconfacilitys.com.au" className="footer-contact-val">info@iconfacilitys.com.au</a>
                                    </div>
                                </div>

                                <div className="footer-contact-row">
                                    <div className="footer-contact-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <p className="footer-contact-label">Office Address</p>
                                        <span className="footer-contact-val" style={{ cursor: 'default' }}>2/38 Railway Parade,<br />Lakemba NSW 2195</span>
                                    </div>
                                </div>

                                <div className="footer-contact-row">
                                    <div className="footer-contact-icon">
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div>
                                        <p className="footer-contact-label">Availability</p>
                                        <span className="footer-contact-val" style={{ cursor: 'default' }}>24/7 Emergency Response</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="footer-bottom-bar">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <p className="footer-copy">© {new Date().getFullYear()} Icon Facility Services. All Rights Reserved.</p>
                                </div>
                                <div className="col-md-6">
                                    <div className="footer-policy-links">
                                        <Link href="/privacy-policy">Privacy Policy</Link>
                                        <Link href="/terms">Terms & Conditions</Link>
                                        <Link href="/sitemap">Sitemap</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>

            {/* Floating call button */}
            <a href="tel:1800418411" className="float-call-btn" aria-label="Call us now">
                <span className="float-call-pulse"></span>
                <i className="fas fa-phone-alt"></i>
            </a>
        </>
    )
}
