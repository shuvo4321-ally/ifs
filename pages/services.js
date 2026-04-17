import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import Counter2 from "@/components/sections/Counter2"
import Services1 from "@/components/sections/Services1"

export default function Service() {
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
            <Layout breadcrumbTitle="Services" headerCls="transparent-header">
                <div>
  <Services1 />
                    {/* services-area-end */}
                    {/* support-area */}
                    <section style={{
                        background: '#0a0f1a',
                        padding: '100px 0',
                    }}>
                        <div className="container">
                            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                                <span style={{
                                    fontSize: '0.6rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '4px',
                                    color: '#0ea5e9',
                                    display: 'block',
                                    marginBottom: '16px'
                                }}>Why Choose Icon</span>
                                <h2 style={{
                                    fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                                    fontWeight: 900,
                                    color: '#ffffff',
                                    letterSpacing: '-1.5px',
                                    margin: 0,
                                }}>Our commitment to excellence.</h2>
                            </div>
                            <div className="row justify-content-center" style={{ gap: '30px 0' }}>
                                {[
                                    { icon: 'fas fa-bolt', title: 'Rapid Response', desc: 'A dedicated team available around the clock to address your urgent facility needs within hours, not days.' },
                                    { icon: 'fas fa-shield-alt', title: 'Fully Insured & Certified', desc: 'Police-checked, uniformed staff with full public liability insurance and ISO 9001 quality management.' },
                                    { icon: 'fas fa-leaf', title: 'Eco-Friendly Solutions', desc: 'GECA-certified, biodegradable products that are safe for your environment, staff, and visitors.' },
                                ].map((item, idx) => (
                                    <div className="col-xl-4 col-md-6" key={idx}>
                                        <div style={{
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.06)',
                                            padding: '40px 32px',
                                            transition: 'all 0.3s ease',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'rgba(14,165,233,0.06)';
                                            e.currentTarget.style.borderColor = 'rgba(14,165,233,0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                                        }}
                                        >
                                            <div style={{
                                                width: '48px',
                                                height: '48px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                background: 'rgba(14, 165, 233, 0.1)',
                                                color: '#0ea5e9',
                                                fontSize: '1.1rem',
                                                marginBottom: '24px',
                                            }}>
                                                <i className={item.icon}></i>
                                            </div>
                                            <h4 style={{
                                                fontSize: '1.15rem',
                                                fontWeight: 800,
                                                color: '#ffffff',
                                                marginBottom: '12px',
                                                letterSpacing: '-0.3px',
                                            }}>{item.title}</h4>
                                            <p style={{
                                                fontSize: '0.88rem',
                                                color: 'rgba(255,255,255,0.5)',
                                                lineHeight: 1.7,
                                                margin: 0,
                                            }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}