import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import Sidebar from "./Sidebar"

export default function Header({ headerCls, headerTop }) {
    const [scroll, setScroll] = useState(0)

    const [isToggled, setToggled] = useState(false)
    const handleToggled = () => {
        setToggled(!isToggled)
        !isToggled ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100
            setScroll(scrollCheck)
        }
        document.addEventListener("scroll", handleScroll)

        // Close menu on route change
        const handleRouteChange = () => {
            setToggled(false)
            document.body.classList.remove("mobile-menu-visible")
        }

        router.events.on('routeChangeStart', handleRouteChange)

        return () => {
            document.removeEventListener("scroll", handleScroll)
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router])

    return (
        <>
            <style jsx global>{`
    .sticky-menu {
        background-color: rgba(10, 22, 43, 0.98) !important;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    html, body {
        overflow-x: hidden !important;
        position: relative;
        width: 100%;
    }
    .menu-area:not(.sticky-menu) {
        background-color: transparent !important;
    }
    .navigation li a, 
    .mobile-nav-toggler, 
    .close-btn,
    .navigation,
    .sub-menu li a {
        color: white !important;
        font-weight: 700 !important;
    }
    .navigation li a:hover,
    .sub-menu li a:hover {
        color: var(--primary-cyan) !important;
    }
    .header-action .btn {
        background-color: #0a162b !important;
        border: 1px solid rgba(255,255,255,0.2) !important;
        color: white !important;
        border-radius: 6px;
        transition: all 0.3s ease;
    }
    .header-action .btn:hover {
        background-color: var(--primary-hover) !important;
        box-shadow: 0px 5px 15px rgba(58, 176, 255, 0.4) !important;
    }
    .sub-menu {
        background-color: rgba(10, 22, 43, 0.75) !important;
        backdrop-filter: blur(25px) saturate(180%);
        border: 1px solid rgba(255, 255, 255, 0.12) !important;
        border-radius: 20px !important;
        padding: 20px 0 !important;
        box-shadow: 0 20px 50px rgba(0,0,0,0.5) !important;
        overflow-y: auto !important;
        overflow-x: hidden !important;
        max-height: 75vh !important;
        min-width: 300px !important;
        width: max-content !important;
    }
    
    /* Custom Scrollbar for Dropdown to maintain premium look */
    .sub-menu::-webkit-scrollbar {
        width: 8px;
    }
    .sub-menu::-webkit-scrollbar-track {
        background: transparent;
        margin: 15px 0; /* Keeps scrollbar away from rounded edges */
    }
    .sub-menu::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.15);
        border-radius: 10px;
    }
    .sub-menu::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 204, 255, 0.5); /* Primary cyan */
    }
    .sub-menu li {
        white-space: nowrap;
    }
    .sub-menu li a {
        padding: 12px 28px !important;
        font-size: 0.9rem !important;
        font-weight: 500 !important;
        transition: all 0.3s ease !important;
        letter-spacing: 0.02em;
    }
    .sub-menu li a:hover {
        background-color: rgba(255, 255, 255, 0.05) !important;
        color: var(--primary-cyan) !important;
    }
    .social-hover:hover {
        opacity: 1 !important;
        transform: translateY(-2px);
        color: var(--primary-cyan) !important;
    }
    .menu-backdrop {
        background-color: rgba(10, 22, 43, 0.4) !important;
        backdrop-filter: blur(5px);
        z-index: 1000 !important;
    }
    body.mobile-menu-visible .pf-hero-slider .slick-dots {
        display: none !important;
    }
    .mobile-menu .menu-box {
        background: linear-gradient(180deg, #0a162b 0%, #0d1f3d 100%) !important;
        border-left: 1px solid rgba(255, 255, 255, 0.04) !important;
        box-shadow: -20px 0 60px rgba(0,0,0,0.4) !important;
        z-index: 1001 !important;
        overflow-y: auto !important;
        overflow-x: hidden !important;
        padding-bottom: 40px !important;
        width: 100% !important;
        height: 100vh !important;
    }
    .mobile-menu {
        z-index: 1002 !important;
        padding-right: 0px !important;
        width: min(340px, 86vw) !important;
        max-width: 86vw !important;
        visibility: hidden;
        transition: visibility 0.3s ease, transform 0.3s ease !important;
    }
    body.mobile-menu-visible .mobile-menu {
        visibility: visible;
    }
    @media (max-width: 420px) {
        .mobile-menu {
            width: 88vw !important;
            max-width: 88vw !important;
        }
    }
    .mobile-nav-toggler {
        font-size: 22px !important;
        padding: 10px !important;
        line-height: 1 !important;
    }
    /* Close button — refined */
    .mobile-menu .close-btn {
        position: absolute !important;
        top: 18px !important;
        right: 18px !important;
        font-size: 16px !important;
        width: 38px !important;
        height: 38px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        background: rgba(255,255,255,0.06) !important;
        border: 1px solid rgba(255,255,255,0.1) !important;
        border-radius: 50% !important;
        transition: all 0.3s ease !important;
        color: rgba(255,255,255,0.9) !important;
        z-index: 10 !important;
    }
    .mobile-menu .close-btn:hover {
        background: rgba(0,204,255,0.15) !important;
        border-color: rgba(0,204,255,0.4) !important;
        color: var(--primary-cyan) !important;
    }
    .mobile-menu .navigation {
        width: 100% !important;
        padding: 8px 0 0 !important;
        list-style: none !important;
    }
    .mobile-menu .navigation > li {
        position: relative !important;
    }
    .mobile-menu .navigation > li > a {
        color: rgba(255,255,255,0.92) !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
        white-space: normal !important;
        overflow-wrap: break-word !important;
        word-break: normal !important;
        line-height: 1.3 !important;
        display: block !important;
        padding: 18px 22px !important;
        font-size: 0.98rem !important;
        font-weight: 600 !important;
        letter-spacing: 0.15px !important;
        transition: all 0.25s ease !important;
        position: relative !important;
    }
    .mobile-menu .navigation > li > a::before {
        content: '' !important;
        position: absolute !important;
        left: 0 !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
        width: 3px !important;
        height: 0 !important;
        background: var(--primary-cyan) !important;
        transition: height 0.3s ease !important;
    }
    .mobile-menu .navigation > li.active > a::before,
    .mobile-menu .navigation > li > a:hover::before {
        height: 22px !important;
    }
    .mobile-menu .navigation > li.active > a,
    .mobile-menu .navigation > li > a:hover {
        color: var(--primary-cyan) !important;
        background: rgba(0,204,255,0.04) !important;
        padding-left: 26px !important;
    }
    .mobile-menu .navigation .sub-menu {
        list-style: none !important;
        padding: 0 !important;
        margin: 0 !important;
    }
    .mobile-menu .navigation .sub-menu li a {
        padding: 14px 22px !important;
        font-size: 0.92rem !important;
        font-weight: 500 !important;
    }
    /* Social links */
    .mobile-menu .social-links {
        padding: 28px 22px !important;
        border-top: 1px solid rgba(255,255,255,0.06) !important;
        margin-top: 14px !important;
    }
    .mobile-menu .social-links .list-wrap {
        display: flex !important;
        gap: 12px !important;
        list-style: none !important;
        padding: 0 !important;
        margin: 0 !important;
    }
    .mobile-menu .social-links li a {
        background: rgba(255, 255, 255, 0.04) !important;
        border: 1px solid rgba(255, 255, 255, 0.08) !important;
        color: white !important;
        width: 40px !important;
        height: 40px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        border-radius: 50% !important;
        font-size: 0.85rem !important;
        transition: all 0.25s ease !important;
    }
    .mobile-menu .social-links li a:hover {
        background: var(--primary-cyan) !important;
        color: #0a162b !important;
        border-color: var(--primary-cyan) !important;
        transform: translateY(-2px) !important;
    }
    /* Mobile nav logo */
    .mobile-menu .nav-logo {
        padding: 24px 22px 22px !important;
        border-bottom: 1px solid rgba(255,255,255,0.06) !important;
        margin-bottom: 0 !important;
        text-align: left !important;
    }
    .mobile-menu .nav-logo img {
        width: auto !important;
        height: auto !important;
        max-height: 40px !important;
        max-width: 160px !important;
        object-fit: contain !important;
        display: block !important;
    }
    /* Mobile menu quote CTA */
    .mobile-menu-cta {
        padding: 20px 22px 6px !important;
    }
    .mobile-menu-cta a {
        display: block !important;
        background: var(--primary-cyan) !important;
        color: #0a162b !important;
        font-family: 'DM Sans', sans-serif !important;
        font-weight: 700 !important;
        font-size: 0.9rem !important;
        text-align: center !important;
        padding: 13px 20px !important;
        border-radius: 4px !important;
        text-decoration: none !important;
        letter-spacing: 0.3px !important;
        transition: all 0.25s ease !important;
        box-shadow: 0 4px 14px rgba(0, 204, 255, 0.25) !important;
    }
    .mobile-menu-cta a:hover {
        background: #ffffff !important;
        transform: translateY(-1px) !important;
    }
    .mobile-menu-phone {
        padding: 14px 22px 6px !important;
    }
    .mobile-menu-phone a {
        display: flex !important;
        align-items: center !important;
        gap: 10px !important;
        color: rgba(255,255,255,0.8) !important;
        font-family: 'DM Sans', sans-serif !important;
        font-size: 0.88rem !important;
        font-weight: 500 !important;
        text-decoration: none !important;
    }
    .mobile-menu-phone a i {
        color: var(--primary-cyan) !important;
        font-size: 0.8rem !important;
    }
    .header-action {
        display: flex;
        align-items: center;
        gap: 24px;
        margin-left: auto;
    }
    .header-phone {
        display: flex;
        align-items: center;
        gap: 8px;
        color: white;
        font-family: 'DM Sans', sans-serif;
        font-weight: 600;
        font-size: 0.95rem;
        text-decoration: none;
        transition: all 0.3s ease;
        text-shadow: 0px 2px 4px rgba(0,0,0,0.5);
    }
    .header-phone i {
        color: var(--primary-cyan, #00CCFF);
        font-size: 0.9rem;
    }
    .header-phone:hover {
        color: var(--primary-cyan, #00CCFF);
    }
    .header-quote-btn {
        background-color: var(--primary-cyan, #00CCFF);
        border: 1px solid var(--primary-cyan, #00CCFF);
        color: #0a162b !important;
        font-family: 'DM Sans', sans-serif;
        font-weight: 700;
        font-size: 0.93rem;
        padding: 10px 24px;
        border-radius: 4px;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 4px 10px rgba(0, 204, 255, 0.2);
    }
    .header-quote-btn:hover {
        background-color: #ffffff;
        border-color: #ffffff;
        transform: translateY(-2px);
        box-shadow: 0 6px 15px rgba(255, 255, 255, 0.3);
        color: #0a162b !important;
    }
`}</style>

            <header>
                <div id="sticky-header" className={`menu-area  ${scroll ? "sticky-menu" : ""} ${headerCls ? headerCls : ""}`}>
                    <div className="container-fluid">
                        <div className="row" >
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleToggled}><i className="fas fa-bars" /></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo different-logo" style={{ maxWidth: '100px', height: 'auto' }}>
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" style={{ maxHeight: '45px' }} /></Link>
                                        </div>
                                        <div className="logo d-none">
                                            <Link href="/"><img src="/assets/img/logo/logo_02.png" alt="Logo" style={{ maxHeight: '45px' }} /></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li><Link href="/">Home</Link></li>
                                                <li><Link href="/about">About</Link></li>
                                                 <li className="menu-item-has-children">
                                                     <Link href="/services/workplace-cleaning">Our Services</Link>
                                                     <ul className="sub-menu shadow-lg">
                                                         {/* Category 1: Commercial Solutions */}
                                                         <li style={{ padding: '8px 28px 5px', fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary-cyan)', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.9 }}>Commercial Solutions</li>
                                                         <li><Link href="/services/workplace-cleaning">Workplace Cleaning Solutions</Link></li>
                                                         <li><Link href="/services/retail-care">Retail Environment Care</Link></li>
                                                         <li><Link href="/services/industrial-cleaning">Industrial Facility Cleaning</Link></li>
                                                         
                                                         {/* Category 2: Specialized Hygiene */}
                                                         <li style={{ padding: '15px 28px 5px', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '8px', fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary-cyan)', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.9 }}>Specialized Hygiene</li>
                                                         <li><Link href="/services/healthcare-hygiene">Healthcare Hygiene Services</Link></li>
                                                         <li><Link href="/services/educational-cleaning">Educational Facility Cleaning</Link></li>
                                                         <li><Link href="/services/hospitality-cleaning">Hospitality Cleaning Services</Link></li>
                                                         
                                                         {/* Category 3: Property & Venue Care */}
                                                         <li style={{ padding: '15px 28px 5px', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '8px', fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary-cyan)', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.9 }}>Property & Venue Care</li>
                                                         <li><Link href="/services/fitness-maintenance">Fitness Facility Maintenance</Link></li>
                                                         <li><Link href="/services/residential-cleaning">Residential & Tower Cleaning</Link></li>
                                                         <li><Link href="/services/event-preparation">Event Venue Preparation</Link></li>
 
                                                         {/* Category 4: Exterior & Specialty */}
                                                         <li style={{ padding: '15px 28px 5px', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '8px', fontSize: '0.75rem', fontWeight: '800', color: 'var(--primary-cyan)', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.9 }}>Exterior & Specialty</li>
                                                         <li><Link href="/services/exterior-parking">Exterior & Parking Area Cleaning</Link></li>
                                                         <li><Link href="/services/post-construction">Post-Construction Cleaning</Link></li>
                                                         <li><Link href="/services/luxury-display">Luxury Display Space Cleaning</Link></li>
                                                     </ul>
                                                 </li>
                                                <li><Link href="/pressure-washing">Pressure Washing</Link></li>
                                            </ul>
                                        </div>
                                        <div className="header-action d-none d-lg-flex align-items-center">
                                            <a href="tel:1800418411" className="header-phone">
                                                <i className="fas fa-phone-alt" /> 1800 418 411
                                            </a>
                                            <Link href="/contact" className="header-quote-btn">
                                                Get Free Quote
                                            </Link>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleToggled}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo_02.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="menu-outer">
                                            <Sidebar />
                                        </div>
                                        <div className="mobile-menu-cta">
                                            <Link href="/contact">Get Free Quote</Link>
                                        </div>
                                        <div className="mobile-menu-phone">
                                            <a href="tel:1800418411"><i className="fas fa-phone-alt" /> 1800 418 411</a>
                                        </div>
                                        <div className="social-links">
                                            <ul className="clearfix list-wrap">
                                                <li><a href="https://www.facebook.com/share/1G6kQXhC9v/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a></li>
                                                <li><a href="https://www.instagram.com/ifs_au?igsh=MXZtZnkza2J4cnBkOQ==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a></li>
                                                <li><a href="https://wa.me/61483798622" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" /></a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="menu-backdrop" onClick={handleToggled} />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}