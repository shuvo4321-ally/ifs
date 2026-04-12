import Link from "next/link"
import { useState } from "react"

export default function Sidebar() {
    const [isActive, setIsActive] = useState({
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
                        <li className="mobile-category" style={{ padding: '15px 25px 8px', fontSize: '0.75rem', fontWeight: '900', color: 'var(--primary-cyan)', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.9 }}>Commercial Solutions</li>
                        <li><Link href="/services/workplace-cleaning" style={{ padding: '14px 20px 14px 25px', display: 'flex', alignItems: 'center', gap: '15px', whiteSpace: 'normal', overflowWrap: 'break-word', lineHeight: '1.4', width: '100%' }}><i className="fas fa-briefcase" style={{ fontSize: '1rem', width: '20px', color: 'var(--primary-cyan)', flexShrink: '0' }}></i> <span style={{ flex: '1' }}>Workplace Cleaning</span></Link></li>
                        <li><Link href="/services/retail-care" style={{ padding: '14px 20px 14px 25px', display: 'flex', alignItems: 'center', gap: '15px', whiteSpace: 'normal', overflowWrap: 'break-word', lineHeight: '1.4', width: '100%' }}><i className="fas fa-shopping-basket" style={{ fontSize: '1rem', width: '20px', color: 'var(--primary-cyan)', flexShrink: '0' }}></i> <span style={{ flex: '1' }}>Retail Environment Care</span></Link></li>
                        <li><Link href="/services/industrial-cleaning" style={{ padding: '14px 20px 14px 25px', display: 'flex', alignItems: 'center', gap: '15px', whiteSpace: 'normal', overflowWrap: 'break-word', lineHeight: '1.4', width: '100%' }}><i className="fas fa-industry" style={{ fontSize: '1rem', width: '20px', color: 'var(--primary-cyan)', flexShrink: '0' }}></i> <span style={{ flex: '1' }}>Industrial Facility Cleaning</span></Link></li>
                        
                        <li className="mobile-category" style={{ padding: '20px 25px 8px', borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '10px', fontSize: '0.75rem', fontWeight: '900', color: 'var(--primary-cyan)', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.9 }}>Specialized Hygiene</li>
                        <li><Link href="/services/healthcare-hygiene" style={{ padding: '14px 20px 14px 25px', display: 'flex', alignItems: 'center', gap: '15px', whiteSpace: 'normal', overflowWrap: 'break-word', lineHeight: '1.4', width: '100%' }}><i className="fas fa-hospital" style={{ fontSize: '1rem', width: '20px', color: 'var(--primary-cyan)', flexShrink: '0' }}></i> <span style={{ flex: '1' }}>Healthcare Hygiene</span></Link></li>
                        <li><Link href="/services/educational-cleaning" style={{ padding: '14px 20px 14px 25px', display: 'flex', alignItems: 'center', gap: '15px', whiteSpace: 'normal', overflowWrap: 'break-word', lineHeight: '1.4', width: '100%' }}><i className="fas fa-graduation-cap" style={{ fontSize: '1rem', width: '20px', color: 'var(--primary-cyan)', flexShrink: '0' }}></i> <span style={{ flex: '1' }}>Educational Facility Cleaning</span></Link></li>
                        <li><Link href="/services/hospitality-cleaning" style={{ padding: '14px 20px 14px 25px', display: 'flex', alignItems: 'center', gap: '15px', whiteSpace: 'normal', overflowWrap: 'break-word', lineHeight: '1.4', width: '100%' }}><i className="fas fa-utensils" style={{ fontSize: '1rem', width: '20px', color: 'var(--primary-cyan)', flexShrink: '0' }}></i> <span style={{ flex: '1' }}>Hospitality Cleaning</span></Link></li>
                        
                        <li className="mobile-category" style={{ padding: '20px 25px 8px', borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '10px', fontSize: '0.75rem', fontWeight: '900', color: 'var(--primary-cyan)', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.9 }}>Property & Venue Care</li>
                        <li><Link href="/services/fitness-maintenance" style={{ padding: '14px 20px 14px 25px', display: 'flex', alignItems: 'center', gap: '15px', whiteSpace: 'normal', overflowWrap: 'break-word', lineHeight: '1.4', width: '100%' }}><i className="fas fa-dumbbell" style={{ fontSize: '1rem', width: '20px', color: 'var(--primary-cyan)', flexShrink: '0' }}></i> <span style={{ flex: '1' }}>Fitness Maintenance</span></Link></li>
                        <li><Link href="/services/residential-cleaning" style={{ padding: '14px 20px 14px 25px', display: 'flex', alignItems: 'center', gap: '15px', whiteSpace: 'normal', overflowWrap: 'break-word', lineHeight: '1.4', width: '100%' }}><i className="fas fa-building" style={{ fontSize: '1rem', width: '20px', color: 'var(--primary-cyan)', flexShrink: '0' }}></i> <span style={{ flex: '1' }}>Residential & Tower</span></Link></li>
                        <li><Link href="/services/event-preparation" style={{ padding: '14px 20px 14px 25px', display: 'flex', alignItems: 'center', gap: '15px', whiteSpace: 'normal', overflowWrap: 'break-word', lineHeight: '1.4', width: '100%' }}><i className="fas fa-calendar-alt" style={{ fontSize: '1rem', width: '20px', color: 'var(--primary-cyan)', flexShrink: '0' }}></i> <span style={{ flex: '1' }}>Event Preparation</span></Link></li>

                        <li className="mobile-category" style={{ padding: '20px 25px 8px', borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '10px', fontSize: '0.75rem', fontWeight: '900', color: 'var(--primary-cyan)', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.9 }}>Exterior & Specialty</li>
                        <li><Link href="/services/driveway-concrete-cleaning" style={{ padding: '14px 20px 14px 25px', display: 'flex', alignItems: 'center', gap: '15px', whiteSpace: 'normal', overflowWrap: 'break-word', lineHeight: '1.4', width: '100%' }}><i className="fas fa-car" style={{ fontSize: '1rem', width: '20px', color: 'var(--primary-cyan)', flexShrink: '0' }}></i> <span style={{ flex: '1' }}>Driveway & Concrete</span></Link></li>
                        <li><Link href="/services/exterior-house-washing" style={{ padding: '14px 20px 14px 25px', display: 'flex', alignItems: 'center', gap: '15px', whiteSpace: 'normal', overflowWrap: 'break-word', lineHeight: '1.4', width: '100%' }}><i className="fas fa-home" style={{ fontSize: '1rem', width: '20px', color: 'var(--primary-cyan)', flexShrink: '0' }}></i> <span style={{ flex: '1' }}>Exterior House Washing</span></Link></li>
                        <li><Link href="/services/gutter-maintenance-cleaning" style={{ padding: '14px 20px 14px 25px', display: 'flex', alignItems: 'center', gap: '15px', whiteSpace: 'normal', overflowWrap: 'break-word', lineHeight: '1.4', width: '100%' }}><i className="fas fa-water" style={{ fontSize: '1rem', width: '20px', color: 'var(--primary-cyan)', flexShrink: '0' }}></i> <span style={{ flex: '1' }}>Gutter Maintenance</span></Link></li>
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
