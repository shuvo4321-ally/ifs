import Link from "next/link"
import { useState } from "react"

export default function Sidebar() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })
    const [isSubActive, setIsSubActive] = useState({
        status: false,
        key: "",
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

    const handleSubToggle = (key) => {
        if (isSubActive.key === key) {
            setIsSubActive({
                status: false,
            })
        } else {
            setIsSubActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="navigation">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li className={`menu-item-has-children ${isActive.key === "services" ? "active" : ""}`}>
                    <Link href="/services/workplace-cleaning" onClick={(e) => { 
                        e.preventDefault(); 
                        handleToggle("services"); 
                    }}>Our Services</Link>
                    <ul className="sub-menu" style={{ 
                        display: isActive.key === "services" ? "block" : "none",
                        padding: '10px 0',
                        background: 'rgba(255, 255, 255, 0.03)'
                    }}>
                        {/* Commercial Solutions */}
                        <li className={`menu-item-has-children ${isSubActive?.key === "commercial" ? "active" : ""}`}>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleSubToggle("commercial"); }} style={{ padding: '12px 20px', position: 'relative', background: isSubActive?.key === "commercial" ? 'rgba(255, 255, 255, 0.03)' : 'transparent', borderBottom: '1px solid rgba(255,255,255,0.02)', display: 'block' }}>
                                <span style={{ fontSize: '0.95rem', fontWeight: isSubActive?.key === "commercial" ? '700' : '500', color: isSubActive?.key === "commercial" ? 'var(--primary-cyan)' : '#ffffff', display: 'block', paddingRight: '40px' }}>
                                    Commercial Solutions
                                </span>
                                <span style={{ position: 'absolute', right: '15px', top: '50%', marginTop: '-14px', width: '28px', height: '28px', borderRadius: '50%', background: isSubActive?.key === "commercial" ? 'var(--primary-cyan)' : 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isSubActive?.key === "commercial" ? '#0a162b' : '#fff', transition: 'all 0.3s ease' }}>
                                    <i className={isSubActive?.key === "commercial" ? "fas fa-minus" : "fas fa-plus"} style={{ fontSize: '10px' }}></i>
                                </span>
                            </a>
                            <ul className="sub-menu" style={{ display: isSubActive?.key === "commercial" ? "block" : "none", background: 'rgba(0,0,0,0.5)', padding: '10px 0', borderLeft: '2px solid rgba(255,255,255,0.05)', marginLeft: '10px' }}>
                                <li><Link href="/services/workplace-cleaning" style={{ padding: '8px 20px 8px 30px', display: 'block', borderBottom: 'none' }}><span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: '400' }}>Workplace Cleaning</span></Link></li>
                                <li><Link href="/services/retail-care" style={{ padding: '8px 20px 8px 30px', display: 'block', borderBottom: 'none' }}><span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: '400' }}>Retail Environment Care</span></Link></li>
                                <li><Link href="/services/industrial-cleaning" style={{ padding: '8px 20px 8px 30px', display: 'block', borderBottom: 'none' }}><span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: '400' }}>Industrial Facility Cleaning</span></Link></li>
                            </ul>
                        </li>

                        {/* Specialized Hygiene */}
                        <li className={`menu-item-has-children ${isSubActive?.key === "hygiene" ? "active" : ""}`}>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleSubToggle("hygiene"); }} style={{ padding: '12px 20px', position: 'relative', background: isSubActive?.key === "hygiene" ? 'rgba(255, 255, 255, 0.03)' : 'transparent', borderBottom: '1px solid rgba(255,255,255,0.02)', display: 'block' }}>
                                <span style={{ fontSize: '0.95rem', fontWeight: isSubActive?.key === "hygiene" ? '700' : '500', color: isSubActive?.key === "hygiene" ? 'var(--primary-cyan)' : '#ffffff', display: 'block', paddingRight: '40px' }}>
                                    Specialized Hygiene
                                </span>
                                <span style={{ position: 'absolute', right: '15px', top: '50%', marginTop: '-14px', width: '28px', height: '28px', borderRadius: '50%', background: isSubActive?.key === "hygiene" ? 'var(--primary-cyan)' : 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isSubActive?.key === "hygiene" ? '#0a162b' : '#fff', transition: 'all 0.3s ease' }}>
                                    <i className={isSubActive?.key === "hygiene" ? "fas fa-minus" : "fas fa-plus"} style={{ fontSize: '10px' }}></i>
                                </span>
                            </a>
                            <ul className="sub-menu" style={{ display: isSubActive?.key === "hygiene" ? "block" : "none", background: 'rgba(0,0,0,0.5)', padding: '10px 0', borderLeft: '2px solid rgba(255,255,255,0.05)', marginLeft: '10px' }}>
                                <li><Link href="/services/healthcare-hygiene" style={{ padding: '8px 20px 8px 30px', display: 'block', borderBottom: 'none' }}><span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: '400' }}>Healthcare Hygiene</span></Link></li>
                                <li><Link href="/services/educational-cleaning" style={{ padding: '8px 20px 8px 30px', display: 'block', borderBottom: 'none' }}><span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: '400' }}>Educational Facility</span></Link></li>
                                <li><Link href="/services/hospitality-cleaning" style={{ padding: '8px 20px 8px 30px', display: 'block', borderBottom: 'none' }}><span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: '400' }}>Hospitality Cleaning</span></Link></li>
                            </ul>
                        </li>

                        {/* Property & Venue Care */}
                        <li className={`menu-item-has-children ${isSubActive?.key === "property" ? "active" : ""}`}>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleSubToggle("property"); }} style={{ padding: '12px 20px', position: 'relative', background: isSubActive?.key === "property" ? 'rgba(255, 255, 255, 0.03)' : 'transparent', borderBottom: '1px solid rgba(255,255,255,0.02)', display: 'block' }}>
                                <span style={{ fontSize: '0.95rem', fontWeight: isSubActive?.key === "property" ? '700' : '500', color: isSubActive?.key === "property" ? 'var(--primary-cyan)' : '#ffffff', display: 'block', paddingRight: '40px' }}>
                                    Property & Venue Care
                                </span>
                                <span style={{ position: 'absolute', right: '15px', top: '50%', marginTop: '-14px', width: '28px', height: '28px', borderRadius: '50%', background: isSubActive?.key === "property" ? 'var(--primary-cyan)' : 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isSubActive?.key === "property" ? '#0a162b' : '#fff', transition: 'all 0.3s ease' }}>
                                    <i className={isSubActive?.key === "property" ? "fas fa-minus" : "fas fa-plus"} style={{ fontSize: '10px' }}></i>
                                </span>
                            </a>
                            <ul className="sub-menu" style={{ display: isSubActive?.key === "property" ? "block" : "none", background: 'rgba(0,0,0,0.5)', padding: '10px 0', borderLeft: '2px solid rgba(255,255,255,0.05)', marginLeft: '10px' }}>
                                <li><Link href="/services/fitness-maintenance" style={{ padding: '8px 20px 8px 30px', display: 'block', borderBottom: 'none' }}><span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: '400' }}>Fitness Maintenance</span></Link></li>
                                <li><Link href="/services/residential-cleaning" style={{ padding: '8px 20px 8px 30px', display: 'block', borderBottom: 'none' }}><span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: '400' }}>Residential & Tower</span></Link></li>
                                <li><Link href="/services/event-preparation" style={{ padding: '8px 20px 8px 30px', display: 'block', borderBottom: 'none' }}><span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: '400' }}>Event Preparation</span></Link></li>
                            </ul>
                        </li>

                        {/* Exterior & Specialty */}
                        <li className={`menu-item-has-children ${isSubActive?.key === "exterior" ? "active" : ""}`}>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleSubToggle("exterior"); }} style={{ padding: '12px 20px', position: 'relative', background: isSubActive?.key === "exterior" ? 'rgba(255, 255, 255, 0.03)' : 'transparent', borderBottom: '1px solid rgba(255,255,255,0.02)', display: 'block' }}>
                                <span style={{ fontSize: '0.95rem', fontWeight: isSubActive?.key === "exterior" ? '700' : '500', color: isSubActive?.key === "exterior" ? 'var(--primary-cyan)' : '#ffffff', display: 'block', paddingRight: '40px' }}>
                                    Exterior & Specialty
                                </span>
                                <span style={{ position: 'absolute', right: '15px', top: '50%', marginTop: '-14px', width: '28px', height: '28px', borderRadius: '50%', background: isSubActive?.key === "exterior" ? 'var(--primary-cyan)' : 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isSubActive?.key === "exterior" ? '#0a162b' : '#fff', transition: 'all 0.3s ease' }}>
                                    <i className={isSubActive?.key === "exterior" ? "fas fa-minus" : "fas fa-plus"} style={{ fontSize: '10px' }}></i>
                                </span>
                            </a>
                            <ul className="sub-menu" style={{ display: isSubActive?.key === "exterior" ? "block" : "none", background: 'rgba(0,0,0,0.5)', padding: '10px 0', borderLeft: '2px solid rgba(255,255,255,0.05)', marginLeft: '10px' }}>
                                <li><Link href="/services/driveway-concrete-cleaning" style={{ padding: '8px 20px 8px 30px', display: 'block', borderBottom: 'none' }}><span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: '400' }}>Driveway & Concrete</span></Link></li>
                                <li><Link href="/services/exterior-house-washing" style={{ padding: '8px 20px 8px 30px', display: 'block', borderBottom: 'none' }}><span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: '400' }}>Exterior House Washing</span></Link></li>
                                <li><Link href="/services/gutter-maintenance-cleaning" style={{ padding: '8px 20px 8px 30px', display: 'block', borderBottom: 'none' }}><span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: '400' }}>Gutter Maintenance</span></Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><Link href="/pressure-washing">Pressure Washing</Link></li>
                <li className={`menu-item-has-children ${isActive.key === "contact" ? "active" : ""}`}>
                    <Link href="/contact" onClick={(e) => { e.preventDefault(); handleToggle("contact"); }}>Contact</Link>
                    <ul className="sub-menu" style={{ display: isActive.key === "contact" ? "block" : "none" }}>
                        <li><Link href="tel:1800418411">Call Us: 1800 418 411</Link></li>
                        <li><Link href="mailto:info@iconfacilitys.com.au">Email: info@iconfacilitys.com.au</Link></li>
                        <li><Link href="https://wa.me/61483798622" target="_blank">WhatsApp: 0483 798 622</Link></li>
                        <li><Link href="/contact">Visit Our Office</Link></li>
                    </ul>
                </li>
            </ul>

        </>
    )
}
