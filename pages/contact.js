import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"
import Link from "next/link"
import { useState } from "react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const whatsappNumber = "61483798622"
        const message = `*New Quote Request from Website*\n--------------------------------\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service || 'Not Selected'}\n\n*Requirements:*\n${formData.message || 'No additional requirements provided.'}`
        const encodedMessage = encodeURIComponent(message)
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
    }

    return (
        <Layout headerCls="transparent-header">
            <style jsx global>{`
                .contact-input {
                    width: 100%;
                    border: 1.5px solid #e2e8f0;
                    border-radius: 10px;
                    padding: 13px 16px;
                    font-size: 0.92rem;
                    color: #0d1b33;
                    background: #fff;
                    outline: none;
                    transition: border-color 0.2s ease;
                    font-family: 'Poppins', sans-serif;
                }
                .contact-input:focus {
                    border-color: var(--primary-cyan);
                }
                .contact-input::placeholder { color: #94a3b8; }
                .contact-label {
                    display: block;
                    font-size: 0.78rem;
                    font-weight: 700;
                    color: #64748b;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    margin-bottom: 7px;
                }
                .contact-info-row {
                    padding: 20px 0;
                    border-bottom: 1px solid #f1f5f9;
                    display: flex;
                    align-items: flex-start;
                    gap: 16px;
                }
                .contact-info-row:last-child { border-bottom: none; }
                .contact-info-icon {
                    width: 36px;
                    height: 36px;
                    background: rgba(0,204,255,0.08);
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--primary-cyan);
                    font-size: 14px;
                    flex-shrink: 0;
                    margin-top: 2px;
                }
                .contact-info-label {
                    font-size: 0.68rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: #94a3b8;
                    display: block;
                    margin-bottom: 3px;
                }
                .contact-info-value {
                    font-size: 0.92rem;
                    font-weight: 700;
                    color: #0d1b33;
                    text-decoration: none;
                    display: block;
                    line-height: 1.4;
                }
                .contact-info-value:hover { color: var(--primary-cyan); }

                /* Strip */
                .contact-strip-item {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    flex: 1;
                    min-width: 0;
                }
                .contact-strip-item + .contact-strip-item {
                    border-left: 1px solid rgba(255,255,255,0.1);
                    padding-left: 32px;
                    margin-left: 32px;
                }
                @media (max-width: 767px) {
                    .contact-strip { flex-wrap: wrap !important; }
                    .contact-strip-item + .contact-strip-item {
                        border-left: none;
                        border-top: 1px solid rgba(255,255,255,0.1);
                        padding-left: 0;
                        margin-left: 0;
                        padding-top: 20px;
                        margin-top: 20px;
                    }
                    .contact-strip-item { flex: 0 0 100%; }
                }
            `}</style>

            <Breadcrumb breadcrumbTitle="Contact Us" breadcrumbSubtitle="Reach out to discuss your facility needs. Our team responds within 24 hours." />

            {/* Form + Sidebar */}
            <section style={{ background: '#f8fafc', padding: '80px 0' }}>
                <div className="container">
                    <div className="row g-5 align-items-start">

                        {/* LEFT — Form */}
                        <div className="col-lg-7 wow fadeInLeft" data-wow-delay=".2s">
                            <div style={{ background: '#fff', borderRadius: '24px', padding: '48px 44px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', border: '1px solid #f0f4f8' }}>
                                <span style={{ fontSize: '0.68rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary-cyan)', display: 'block', marginBottom: '8px' }}>Get in Touch</span>
                                <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: '900', color: '#0d1b33', letterSpacing: '-1px', marginBottom: '8px' }}>Request a Service Quote</h2>
                                <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '36px', lineHeight: '1.6' }}>Fill in the form and our team will respond within 24 hours.</p>

                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="contact-label">Full Name</label>
                                            <input className="contact-input" type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Smith" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="contact-label">Email Address</label>
                                            <input className="contact-input" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="contact-label">Phone Number</label>
                                            <input className="contact-input" type="text" name="phone" value={formData.phone} onChange={handleChange} required placeholder="04xx xxx xxx" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="contact-label">Service Required</label>
                                            <select className="contact-input" name="service" value={formData.service} onChange={handleChange} required>
                                                <option value="">Select service...</option>
                                                <option value="Workplace">Workplace Cleaning</option>
                                                <option value="Retail">Retail Environment</option>
                                                <option value="Industrial">Industrial Facility</option>
                                                <option value="Healthcare">Healthcare Hygiene</option>
                                                <option value="Educational">Educational Facility</option>
                                                <option value="Hospitality">Hospitality Cleaning</option>
                                                <option value="Fitness">Fitness Facility</option>
                                                <option value="Residential">Residential & Tower</option>
                                                <option value="Event">Event Preparation</option>
                                                <option value="PostConstruction">Post-Construction</option>
                                                <option value="Exterior">Exterior & Parking</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label className="contact-label">Requirements</label>
                                            <textarea className="contact-input" name="message" value={formData.message} onChange={handleChange} placeholder="Brief description of your facility and cleaning needs..." style={{ minHeight: '130px', resize: 'vertical' }}></textarea>
                                        </div>
                                        <div className="col-12" style={{ marginTop: '8px' }}>
                                            <button type="submit" style={{ width: '100%', background: '#0d1b33', color: '#fff', border: 'none', borderRadius: '12px', padding: '16px', fontSize: '0.95rem', fontWeight: '800', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', transition: 'background 0.2s' }}>
                                                Send via WhatsApp <i className="fab fa-whatsapp" style={{ fontSize: '1.1rem', color: '#25D366' }}></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* RIGHT — Sidebar info (no cards) */}
                        <div className="col-lg-5 wow fadeInRight" data-wow-delay=".3s">
                            <div style={{ paddingLeft: 'clamp(0px, 3vw, 32px)' }}>
                                <span style={{ fontSize: '0.68rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary-cyan)', display: 'block', marginBottom: '8px' }}>Contact Details</span>
                                <h3 style={{ fontSize: '1.6rem', fontWeight: '900', color: '#0d1b33', letterSpacing: '-0.5px', marginBottom: '32px' }}>Let's Start a Conversation</h3>

                                <div>
                                    <a href="tel:1800418411" className="contact-info-row" style={{ textDecoration: 'none' }}>
                                        <div className="contact-info-icon"><i className="fas fa-phone-alt"></i></div>
                                        <div>
                                            <span className="contact-info-label">Phone</span>
                                            <span className="contact-info-value">1800 418 411</span>
                                        </div>
                                    </a>
                                    <a href="mailto:info@iconfacilitys.com.au" className="contact-info-row" style={{ textDecoration: 'none' }}>
                                        <div className="contact-info-icon"><i className="fas fa-envelope"></i></div>
                                        <div>
                                            <span className="contact-info-label">Email</span>
                                            <span className="contact-info-value">info@iconfacilitys.com.au</span>
                                        </div>
                                    </a>
                                    <a href="https://wa.me/61483798622" target="_blank" rel="noopener noreferrer" className="contact-info-row" style={{ textDecoration: 'none' }}>
                                        <div className="contact-info-icon" style={{ background: 'rgba(37,211,102,0.08)', color: '#25D366' }}><i className="fab fa-whatsapp"></i></div>
                                        <div>
                                            <span className="contact-info-label">WhatsApp</span>
                                            <span className="contact-info-value">0483 798 622</span>
                                        </div>
                                    </a>
                                    <div className="contact-info-row">
                                        <div className="contact-info-icon"><i className="fas fa-map-marker-alt"></i></div>
                                        <div>
                                            <span className="contact-info-label">Head Office</span>
                                            <span className="contact-info-value">2/38 Railway Parade<br />Lakemba NSW 2195</span>
                                        </div>
                                    </div>
                                    <div className="contact-info-row">
                                        <div className="contact-info-icon"><i className="fas fa-clock"></i></div>
                                        <div>
                                            <span className="contact-info-label">Response Time</span>
                                            <span className="contact-info-value">Within 24 hours<br /><span style={{ fontSize: '0.8rem', fontWeight: '500', color: '#94a3b8' }}>Emergency support available 24/7</span></span>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginTop: '32px', paddingTop: '28px', borderTop: '1px solid #f1f5f9' }}>
                                    <span style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#94a3b8', display: 'block', marginBottom: '14px' }}>Follow Us</span>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        {[
                                            { icon: 'fab fa-facebook-f', bg: '#1877F2', url: '#' },
                                            { icon: 'fab fa-instagram', bg: '#E4405F', url: '#' },
                                            { icon: 'fab fa-linkedin-in', bg: '#0A66C2', url: '#' },
                                            { icon: 'fab fa-whatsapp', bg: '#25D366', url: 'https://wa.me/61483798622' }
                                        ].map((s, i) => (
                                            <a key={i} href={s.url} target={s.url.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '10px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '16px', textDecoration: 'none' }}>
                                                <i className={s.icon}></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Contact Info Strip — dark navy band */}
            <section style={{ background: '#0d1b33', padding: '40px 0' }}>
                <div className="container">
                    <div className="contact-strip" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="contact-strip-item">
                            <div style={{ width: '44px', height: '44px', background: 'rgba(0,204,255,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-cyan)', fontSize: '18px', flexShrink: 0 }}>
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div>
                                <span style={{ fontSize: '0.62rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.4)', display: 'block' }}>Call Us</span>
                                <a href="tel:1800418411" style={{ color: '#fff', fontWeight: '700', fontSize: '0.95rem', textDecoration: 'none' }}>1800 418 411</a>
                            </div>
                        </div>
                        <div className="contact-strip-item">
                            <div style={{ width: '44px', height: '44px', background: 'rgba(0,204,255,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-cyan)', fontSize: '18px', flexShrink: 0 }}>
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <span style={{ fontSize: '0.62rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.4)', display: 'block' }}>Email</span>
                                <a href="mailto:info@iconfacilitys.com.au" style={{ color: '#fff', fontWeight: '700', fontSize: '0.95rem', textDecoration: 'none' }}>info@iconfacilitys.com.au</a>
                            </div>
                        </div>
                        <div className="contact-strip-item">
                            <div style={{ width: '44px', height: '44px', background: 'rgba(37,211,102,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366', fontSize: '18px', flexShrink: 0 }}>
                                <i className="fab fa-whatsapp"></i>
                            </div>
                            <div>
                                <span style={{ fontSize: '0.62rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.4)', display: 'block' }}>WhatsApp</span>
                                <a href="https://wa.me/61483798622" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: '700', fontSize: '0.95rem', textDecoration: 'none' }}>0483 798 622</a>
                            </div>
                        </div>
                        <div className="contact-strip-item">
                            <div style={{ width: '44px', height: '44px', background: 'rgba(0,204,255,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-cyan)', fontSize: '18px', flexShrink: 0 }}>
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <span style={{ fontSize: '0.62rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,0.4)', display: 'block' }}>Office</span>
                                <span style={{ color: '#fff', fontWeight: '700', fontSize: '0.95rem' }}>Lakemba NSW 2195</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section style={{ background: '#f8fafc', padding: '60px 0 80px' }}>
                <div className="container">
                    <span style={{ fontSize: '0.68rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary-cyan)', display: 'block', marginBottom: '8px' }}>Find Us</span>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: '900', color: '#0d1b33', letterSpacing: '-0.5px', marginBottom: '28px' }}>Our Location</h3>
                    <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0', height: '420px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.821422896584!2d151.0772422!3d-33.9197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ba765275e3d7%3A0xf017d7dc2fd2f7b8!2s2%2F38%20Railway%20Parade%2C%20Lakemba%20NSW%202195%2C%20Australia!5e0!3m2!1sen!2sus!4v1712720000000!5m2!1sen!2sus"
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </section>

        </Layout>
    )
}
