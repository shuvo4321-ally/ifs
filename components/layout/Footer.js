import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="ifs-foot">
                <style jsx>{`
                    .ifs-foot {
                        background: #0a162b;
                        color: #fff;
                        padding: clamp(80px, 12vh, 120px) 0 0;
                        font-family: 'DM Sans', sans-serif;
                    }

                    /* ── Top band: big editorial signoff ──────────── */
                    .ifs-foot__signoff {
                        padding: 0 clamp(32px, 6vw, 96px);
                        display: grid;
                        grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
                        gap: clamp(32px, 6vw, 80px);
                        align-items: end;
                        padding-bottom: clamp(60px, 10vh, 100px);
                        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    }
                    .ifs-foot__eyebrow {
                        font-family: 'Inter', sans-serif;
                        font-size: 0.72rem;
                        color: rgba(255,255,255,0.55);
                        letter-spacing: 2px;
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        margin-bottom: 22px;
                    }
                    .ifs-foot__eyebrow::before {
                        content: '';
                        width: 22px; height: 1px;
                        background: var(--primary-cyan, #00CCFF);
                    }
                    .ifs-foot__title {
                        font-family: 'DM Sans', sans-serif;
                        font-size: clamp(2.4rem, 5.5vw, 5rem);
                        font-weight: 700;
                        color: #fff;
                        letter-spacing: -0.04em;
                        line-height: 0.98;
                        margin: 0;
                    }
                    .ifs-foot__title em {
                        font-style: normal;
                        color: var(--primary-cyan, #00CCFF);
                    }
                    .ifs-foot__cta {
                        display: inline-flex;
                        align-items: center;
                        gap: 14px;
                        padding: 18px 28px;
                        background: var(--primary-cyan, #00CCFF);
                        color: #0a162b !important;
                        text-decoration: none;
                        font-weight: 700;
                        font-size: 0.9375rem;
                        border-radius: 4px;
                        transition: background 0.25s ease, transform 0.25s ease;
                        white-space: nowrap;
                        margin-top: 24px;
                    }
                    .ifs-foot__cta:hover {
                        background: #ffffff;
                        color: #0a162b !important;
                        transform: translateY(-2px);
                    }
                    .ifs-foot__cta svg { transition: transform 0.3s ease; }
                    .ifs-foot__cta:hover svg { transform: translateX(4px); }

                    /* ── Main nav columns ─────────────────────────── */
                    .ifs-foot__main {
                        padding: clamp(60px, 8vh, 80px) clamp(32px, 6vw, 96px);
                        display: grid;
                        grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
                        gap: clamp(32px, 5vw, 72px);
                        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    }

                    .ifs-foot__col-title {
                        font-family: 'DM Sans', sans-serif;
                        font-size: 1.1rem;
                        color: #ffffff;
                        font-weight: 700;
                        margin: 0 0 22px;
                        padding-bottom: 16px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    }

                    .ifs-foot__brand-desc {
                        font-size: 0.9375rem;
                        color: rgba(255,255,255,0.6);
                        line-height: 1.7;
                        margin: 0 0 24px;
                        max-width: 320px;
                    }
                    .ifs-foot__brand-meta {
                        font-family: 'Inter', sans-serif;
                        font-size: 0.72rem;
                        color: rgba(255,255,255,0.4);
                        line-height: 1.6;
                        padding-top: 20px;
                        border-top: 1px solid rgba(255, 255, 255, 0.08);
                        margin-top: 8px;
                    }

                    .ifs-foot__links {
                        display: flex;
                        flex-direction: column;
                    }
                    .ifs-foot__link {
                        font-size: 0.9375rem;
                        color: rgba(255,255,255,0.7);
                        text-decoration: none;
                        padding: 8px 0;
                        transition: color 0.2s ease, transform 0.25s ease;
                        line-height: 1.5;
                        display: block;
                    }
                    .ifs-foot__link:hover {
                        color: var(--primary-cyan, #00CCFF);
                        transform: translateX(4px);
                    }

                    /* Contact column */
                    .ifs-foot__contact-row {
                        display: grid;
                        grid-template-columns: 80px minmax(0, 1fr);
                        gap: 14px;
                        padding: 14px 0;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                        align-items: center;
                    }
                    .ifs-foot__contact-row:first-of-type { padding-top: 0; }
                    .ifs-foot__contact-row:last-of-type { border-bottom: none; }
                    .ifs-foot__contact-label {
                        font-family: 'Inter', sans-serif;
                        font-size: 0.75rem;
                        color: rgba(255,255,255,0.4);
                        letter-spacing: 0.05em;
                        text-transform: uppercase;
                    }
                    .ifs-foot__contact-val {
                        font-size: 0.9rem;
                        color: #fff;
                        text-decoration: none;
                        line-height: 1.5;
                        font-weight: 500;
                        transition: color 0.2s ease;
                    }
                    .ifs-foot__contact-val:hover { color: var(--primary-cyan, #00CCFF); }

                    /* ── Bottom bar ───────────────────────────────── */
                    .ifs-foot__bottom {
                        padding: 24px clamp(32px, 6vw, 96px);
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 20px;
                        font-family: 'Inter', sans-serif;
                        font-size: 0.75rem;
                        color: rgba(255,255,255,0.4);
                        border-top: 1px solid rgba(255, 255, 255, 0.08);
                    }
                    .ifs-foot__bottom-links {
                        display: flex;
                        gap: 24px;
                    }
                    .ifs-foot__bottom-links a {
                        color: rgba(255,255,255,0.4);
                        text-decoration: none;
                        transition: color 0.2s var(--ease);
                    }
                    .ifs-foot__bottom-links a:hover { color: var(--water); }

                    /* ── Floating WhatsApp ─────────────────────────── */
                    .ifs-float {
                        position: fixed;
                        bottom: 24px;
                        right: 24px;
                        z-index: 998;
                        width: 52px;
                        height: 52px;
                        background: #0d1b33;
                        border: 1px solid rgba(255, 255, 255, 0.08);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-decoration: none;
                        transition: all 0.3s ease;
                    }
                    .ifs-float:hover {
                        background: #25D366;
                        border-color: #25D366;
                        transform: translateY(-4px);
                    }
                    .ifs-float i {
                        font-size: 1.15rem;
                        color: #fff;
                    }

                    /* ── Tablet ───────────────────────────────────── */
                    @media (max-width: 1100px) {
                        .ifs-foot__main { grid-template-columns: 1fr 1fr; }
                    }

                    /* ── Mobile ───────────────────────────────────── */
                    @media (max-width: 767px) {
                        .ifs-foot { padding: 64px 0 0; }
                        .ifs-foot__signoff {
                            grid-template-columns: 1fr;
                            gap: 24px;
                            padding: 0 24px 48px;
                        }
                        .ifs-foot__title {
                            font-size: 2.2rem !important;
                            line-height: 1.02 !important;
                        }
                        .ifs-foot__cta {
                            width: 100%;
                            justify-content: center;
                            padding: 17px 22px;
                            margin-top: 0;
                        }
                        .ifs-foot__main {
                            grid-template-columns: 1fr;
                            padding: 48px 24px;
                            gap: 40px;
                        }
                        .ifs-foot__brand-desc { max-width: 100%; }
                        .ifs-foot__bottom {
                            flex-direction: column;
                            align-items: flex-start;
                            padding: 20px 24px;
                            gap: 12px;
                        }
                        .ifs-foot__bottom-links { gap: 18px; flex-wrap: wrap; }
                        .ifs-float { width: 48px; height: 48px; bottom: 20px; right: 20px; }
                    }
                `}</style>

                {/* ── Top signoff band ────────────────────────── */}
                <div className="ifs-foot__signoff">
                    <div>
                        <div className="ifs-foot__eyebrow">Let&apos;s talk / 05</div>
                        <h2 className="ifs-foot__title">
                            Ready to upgrade your<br/>cleaning contract? <em>Let&apos;s start.</em>
                        </h2>
                    </div>
                    <div>
                        <a href="tel:1800418411" className="ifs-foot__cta">
                            Call 1800 418 411
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M1 6H15M15 6L10 1M15 6L10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/></svg>
                        </a>
                    </div>
                </div>

                {/* ── Main columns ────────────────────────────── */}
                <div className="ifs-foot__main">
                    {/* Brand */}
                    <div>
                        <h3 className="ifs-foot__col-title">Icon Facility Services</h3>
                        <p className="ifs-foot__brand-desc">
                            Sydney-based commercial cleaning and facility management operating across New South Wales since 2010.
                        </p>
                        <div className="ifs-foot__brand-meta">
                            2/38 Railway Parade<br/>
                            Lakemba NSW 2195<br/>
                            ABN XX XXX XXX XXX
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="ifs-foot__col-title">Company</h3>
                        <div className="ifs-foot__links">
                            <Link href="/" className="ifs-foot__link">Home</Link>
                            <Link href="/about" className="ifs-foot__link">About</Link>
                            <Link href="/services" className="ifs-foot__link">All services</Link>
                            <Link href="/pressure-washing" className="ifs-foot__link">Pressure washing</Link>
                            <Link href="/contact" className="ifs-foot__link">Contact</Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="ifs-foot__col-title">Services</h3>
                        <div className="ifs-foot__links">
                            <Link href="/services/workplace-cleaning" className="ifs-foot__link">Workplace</Link>
                            <Link href="/services/industrial-cleaning" className="ifs-foot__link">Industrial</Link>
                            <Link href="/services/healthcare-hygiene" className="ifs-foot__link">Healthcare</Link>
                            <Link href="/services/retail-care" className="ifs-foot__link">Retail</Link>
                            <Link href="/services/hospitality-cleaning" className="ifs-foot__link">Hospitality</Link>
                            <Link href="/services/post-construction" className="ifs-foot__link">Post-construction</Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="ifs-foot__col-title">Contact</h3>

                        <div className="ifs-foot__contact-row">
                            <span className="ifs-foot__contact-label">Phone</span>
                            <a href="tel:1800418411" className="ifs-foot__contact-val">1800 418 411</a>
                        </div>
                        <div className="ifs-foot__contact-row">
                            <span className="ifs-foot__contact-label">WhatsApp</span>
                            <a href="https://wa.me/61483798622" target="_blank" rel="noopener noreferrer" className="ifs-foot__contact-val">0483 798 622</a>
                        </div>
                        <div className="ifs-foot__contact-row">
                            <span className="ifs-foot__contact-label">Email</span>
                            <a href="mailto:info@iconfacilitys.com.au" className="ifs-foot__contact-val">info@iconfacilitys.com.au</a>
                        </div>
                        <div className="ifs-foot__contact-row">
                            <span className="ifs-foot__contact-label">Hours</span>
                            <span className="ifs-foot__contact-val">24 / 7 emergency response</span>
                        </div>
                    </div>
                </div>

                {/* ── Bottom bar ──────────────────────────────── */}
                <div className="ifs-foot__bottom">
                    <span>© {new Date().getFullYear()} Icon Facility Services — All rights reserved.</span>
                    <div className="ifs-foot__bottom-links">
                        <Link href="/privacy-policy">Privacy</Link>
                        <Link href="/terms">Terms</Link>
                        <Link href="/sitemap">Sitemap</Link>
                    </div>
                </div>
            </footer>

            {/* Floating WhatsApp — restrained, no pulsing cyan glow */}
            <a
                href="https://wa.me/61483798622"
                target="_blank"
                rel="noopener noreferrer"
                className="ifs-float"
                aria-label="Chat on WhatsApp"
            >
                <i className="fab fa-whatsapp" />
            </a>
        </>
    )
}
