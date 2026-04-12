import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

export default function Contact() {
    const [activeTab, setActiveTab] = useState('call')
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
        
        // Format the WhatsApp message
        const whatsappNumber = "61483798622"
        const message = `*New Quote Request from Website*
--------------------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.service || 'Not Selected'}

*Requirements:*
${formData.message || 'No additional requirements provided.'}`

        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
        
        window.open(whatsappUrl, '_blank')
    }

    return (
        <>
            <Layout headerCls="transparent-header">
                {/* Hero Section */}
                <section className="pf-hero pf-bg-navy" style={{ padding: '150px 0 100px', position: 'relative', overflow: 'hidden' }}>
                    <style jsx>{`
                        @media (max-width: 767px) {
                            .pf-hero { 
                                padding: 120px 0 80px !important; 
                                min-height: 50vh; 
                                display: flex; 
                                align-items: center; 
                                justify-content: center;
                            }
                            .hero-title-mobile { 
                                font-size: 2.4rem !important; 
                                line-height: 1.1 !important; 
                                letter-spacing: -1px !important; 
                                margin-bottom: 20px !important; 
                            }
                            .hero-desc-mobile { 
                                font-size: 1rem !important; 
                                line-height: 1.6 !important; 
                                opacity: 0.9; 
                                max-width: 90% !important;
                                margin: 0 auto !important;
                            }
                            
                            /* Simple High-Contrast Info - Mobile Only */
                            .editorial-info-stack {
                                display: flex;
                                flex-direction: column;
                                gap: 40px;
                                text-align: center;
                                padding: 20px 0;
                            }
                            .editorial-info-row {
                                text-decoration: none !important;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                gap: 8px;
                            }
                            .editorial-icon-box {
                                font-size: 2rem;
                                color: #000 !important;
                                margin-bottom: 2px;
                            }
                            .editorial-value {
                                font-size: 1.8rem;
                                font-weight: 900;
                                color: #000 !important; /* Force solid black for readability */
                                line-height: 1;
                                letter-spacing: -1px;
                            }
                        }
                        @media (min-width: 768px) {
                            .editorial-info-stack { display: none !important; }
                        }
                    `}</style>

                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 text-center">
                                <h1 className="title hero-title-mobile wow fadeInUp" data-wow-delay=".2s" style={{ color: '#fff', fontSize: '4rem', fontWeight: '800', marginBottom: '20px' }}>
                                    Get a <span style={{ color: 'var(--primary-cyan)' }}>Professional</span> Quote
                                </h1>
                                <p className="hero-desc-mobile wow fadeInUp" data-wow-delay=".4s" style={{ color: '#e2e8f0', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
                                    Whether it's a commercial office, a retail space, or a specialized industrial facility, Icon Facility Services delivers excellence every time.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Decorative Background Elements */}
                    <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, transparent 70%)', borderRadius: '50%' }}></div>
                    <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0, 229, 255, 0.05) 0%, transparent 70%)', borderRadius: '50%' }}></div>
                </section>

                <section className="contact-area pt-100 pb-100" style={{ background: '#f8fafc' }}>
                    <div className="container">
                        <div className="row g-5">
                            {/* Contact Information Column */}
                            <div className="col-lg-5 d-none d-md-block">
                                <div className="contact-info-content">
                                    <div className="section-title mb-40">
                                        <span className="sub-title" style={{ color: 'var(--primary-cyan)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>Contact Info</span>
                                        <h2 className="title" style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f1437' }}>Let's Start a <br />Conversation</h2>
                                    </div>
                                    
                                    <div className="contact-info-list" style={{ flexDirection: 'column', gap: '30px', display: 'flex' }}>
                                        {/* Phone Item */}
                                        <a href="tel:1800418411" className="info-item d-flex align-items-center" style={{ background: '#fff', padding: '25px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textDecoration: 'none', transition: 'transform 0.3s' }}>
                                            <div className="icon" style={{ width: '60px', height: '60px', background: 'rgba(0, 204, 255, 0.1)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px', color: 'var(--primary-cyan)', fontSize: '24px' }}>
                                                <i className="fas fa-phone-alt"></i>
                                            </div>
                                            <div className="content">
                                                <h4 style={{ margin: '0 0 5px', fontSize: '1.1rem', fontWeight: '700', color: '#0f1437' }}>Phone Number</h4>
                                                <span style={{ fontSize: '1.25rem', color: '#64748b', fontWeight: '600' }}>1800 418 411</span>
                                            </div>
                                        </a>

                                        {/* Email Item */}
                                        <a href="mailto:info@iconfacilitys.com.au" className="info-item d-flex align-items-center" style={{ background: '#fff', padding: '25px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textDecoration: 'none' }}>
                                            <div className="icon" style={{ width: '60px', height: '60px', background: 'rgba(0, 204, 255, 0.1)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px', color: 'var(--primary-cyan)', fontSize: '24px' }}>
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                            <div className="content">
                                                <h4 style={{ margin: '0 0 5px', fontSize: '1.1rem', fontWeight: '700', color: '#0f1437' }}>Email Address</h4>
                                                <span style={{ fontSize: '1.1rem', color: '#64748b', fontWeight: '600', wordBreak: 'break-all' }}>info@iconfacilitys.com.au</span>
                                            </div>
                                        </a>

                                        {/* WhatsApp Item */}
                                        <a href="https://wa.me/61483798622" target="_blank" rel="noopener noreferrer" className="info-item d-flex align-items-center" style={{ background: '#fff', padding: '25px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textDecoration: 'none', transition: 'transform 0.3s' }}>
                                            <div className="icon" style={{ width: '60px', height: '60px', background: 'rgba(37, 211, 102, 0.1)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px', color: '#25D366', fontSize: '28px' }}>
                                                <i className="fab fa-whatsapp"></i>
                                            </div>
                                            <div className="content">
                                                <h4 style={{ margin: '0 0 5px', fontSize: '1.1rem', fontWeight: '700', color: '#0f1437' }}>WhatsApp Support</h4>
                                                <span style={{ fontSize: '1.25rem', color: '#64748b', fontWeight: '600' }}>0483 798 622</span>
                                            </div>
                                        </a>

                                        {/* Office Location */}
                                        <div className="info-item d-flex align-items-center" style={{ background: '#fff', padding: '25px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                            <div className="icon" style={{ width: '60px', height: '60px', background: 'rgba(0, 204, 255, 0.1)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px', color: 'var(--primary-cyan)', fontSize: '24px' }}>
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="content">
                                                <h4 style={{ margin: '0 0 5px', fontSize: '1.1rem', fontWeight: '700' }}>Head Office</h4>
                                                <p style={{ margin: 0, fontSize: '1.1rem', color: '#64748b', fontWeight: '500' }}>2/38 Railway Parade, <br /> Lakemba NSW 2195</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="social-links mt-40">
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '20px', color: '#0f1437' }}>Follow Our Impact</h4>
                                        <div className="d-flex gap-3">
                                            {[
                                                { icon: 'fab fa-facebook-f', color: '#1877F2', url: '#' },
                                                { icon: 'fab fa-instagram', color: '#E4405F', url: '#' },
                                                { icon: 'fab fa-linkedin-in', color: '#0A66C2', url: '#' },
                                                { icon: 'fab fa-whatsapp', color: '#25D366', url: 'https://wa.me/61483798622' }
                                            ].map((social, idx) => (
                                                <Link key={idx} href={social.url} target={social.url?.startsWith('http') ? '_blank' : '_self'} style={{ width: '50px', height: '50px', borderRadius: '12px', background: social.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '20px', transition: 'transform 0.3s' }}>
                                                    <i className={social.icon}></i>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quote Form Column */}
                            <div className="col-lg-7">
                                <div className="contact-form-container" style={{ background: '#0f1437', padding: '50px', borderRadius: '30px', boxShadow: '0 20px 50px rgba(15, 20, 55, 0.2)', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.05) 0%, transparent 100%)', pointerEvents: 'none' }}></div>
                                    
                                    <h2 style={{ color: '#fff', fontSize: '2rem', fontWeight: '800', marginBottom: '10px' }}>Request a Service</h2>
                                    <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Connect with our facility management team within 24 hours.</p>
                                    
                                    <form className="contact-form" onSubmit={handleSubmit}>
                                        <div className="row g-3 compact-grid">
                                            <div className="col-md-6">
                                                <div className="form-grp-custom">
                                                    <label style={{ color: '#cbd5e1', display: 'block', marginBottom: '8px', fontSize: '0.85rem', fontWeight: '600' }}>Full Name</label>
                                                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Name" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px 15px', color: '#fff', outline: 'none', fontSize: '0.95rem' }} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp-custom">
                                                    <label style={{ color: '#cbd5e1', display: 'block', marginBottom: '8px', fontSize: '0.85rem', fontWeight: '600' }}>Email Address</label>
                                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px 15px', color: '#fff', outline: 'none', fontSize: '0.95rem' }} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 compact-full">
                                                <div className="form-grp-custom">
                                                    <label style={{ color: '#cbd5e1', display: 'block', marginBottom: '8px', fontSize: '0.85rem', fontWeight: '600' }}>Phone Number</label>
                                                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px 15px', color: '#fff', outline: 'none', fontSize: '0.95rem' }} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 compact-full">
                                                <div className="form-grp-custom">
                                                    <label style={{ color: '#cbd5e1', display: 'block', marginBottom: '8px', fontSize: '0.85rem', fontWeight: '600' }}>Service Required</label>
                                                    <select name="service" value={formData.service} onChange={handleChange} required style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '15px 20px', color: '#fff', outline: 'none', appearance: 'none', fontSize: '0.95rem' }}>
                                                        <option value="" style={{ background: '#0f1437' }}>Select service...</option>
                                                        <option value="Workplace" style={{ background: '#0f1437' }}>Workplace Cleaning</option>
                                                        <option value="Retail" style={{ background: '#0f1437' }}>Retail Environment</option>
                                                        <option value="Industrial" style={{ background: '#0f1437' }}>Industrial Facility</option>
                                                        <option value="Pressure Washing" style={{ background: '#0f1437' }}>Pressure Washing</option>
                                                        <option value="Specialized" style={{ background: '#0f1437' }}>Other Specialists</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 compact-full">
                                                <div className="form-grp-custom">
                                                    <label style={{ color: '#cbd5e1', display: 'block', marginBottom: '8px', fontSize: '0.85rem', fontWeight: '600' }}>Requirements</label>
                                                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Quick summary of needs..." style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '15px 20px', color: '#fff', outline: 'none', minHeight: '120px', fontSize: '0.95rem' }}></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12 mt-10 compact-full">
                                                <button type="submit" className="btn btn-two" style={{ width: '100%', padding: '18px', fontSize: '1rem', fontWeight: '700', borderRadius: '15px' }}>
                                                    Get My Quote <i className="fas fa-paper-plane" style={{ marginLeft: '10px' }}></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="contact-map-area">
                    <div className="container">
                        <div style={{ 
                            height: '450px', 
                            width: '100%', 
                            borderRadius: '30px', 
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            border: '1px solid rgba(0,0,0,0.05)'
                        }}>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.821422896584!2d151.0772422!3d-33.9197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ba765275e3d7%3A0xf017d7dc2fd2f7b8!2s2%2F38%20Railway%20Parade%2C%20Lakemba%20NSW%202195%2C%20Australia!5e0!3m2!1sen!2sus!4v1712720000000!5m2!1sen!2sus" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </section>

                {/* Mobile Info Context - Repositioned Below Map */}
                <section className="mobile-contact-details d-md-none pt-60 pb-80" style={{ background: '#f8fafc' }}>
                    <div className="container text-center">
                        <div className="section-title mb-40">
                            <span className="sub-title" style={{ color: 'var(--primary-cyan)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>Contact Info</span>
                            <h2 className="title" style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f1437' }}>Let's Start a <br />Conversation</h2>
                        </div>

                        <div className="editorial-info-stack">
                            {/* Phone Row */}
                            <a href="tel:1800418411" className="editorial-info-row">
                                <div className="editorial-icon-box">
                                    <i className="fas fa-phone-alt" style={{ color: '#000 !important' }}></i>
                                </div>
                                <span className="editorial-value" style={{ color: '#000 !important' }}>1800 418 411</span>
                            </a>

                            {/* Email Row */}
                            <a href="mailto:info@iconfacilitys.com.au" className="editorial-info-row">
                                <div className="editorial-icon-box">
                                    <i className="fas fa-envelope" style={{ color: '#000 !important' }}></i>
                                </div>
                                <span className="editorial-value" style={{ fontSize: '1.25rem', color: '#000 !important' }}>info@iconfacilitys.com.au</span>
                            </a>
                        </div>

                        <div className="social-links mt-60 text-center">
                            <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '20px', color: '#0f1437' }}>Follow Our Impact</h4>
                            <div className="d-flex gap-3 justify-content-center">
                                {[
                                    { icon: 'fab fa-facebook-f', color: '#1877F2', url: '#' },
                                    { icon: 'fab fa-instagram', color: '#E4405F', url: '#' },
                                    { icon: 'fab fa-linkedin-in', color: '#0A66C2', url: '#' },
                                    { icon: 'fab fa-whatsapp', color: '#25D366', url: 'https://wa.me/61483798622' }
                                ].map((social, idx) => (
                                    <Link key={idx} href={social.url} target={social.url?.startsWith('http') ? '_blank' : '_self'} style={{ width: '50px', height: '50px', borderRadius: '12px', background: social.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '20px', transition: 'transform 0.3s' }}>
                                        <i className={social.icon}></i>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}