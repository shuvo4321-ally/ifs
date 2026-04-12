import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import Features1 from "@/components/sections/Features1"
import About1 from "@/components/sections/About1"
import Services1 from "@/components/sections/Services1"
import Project1 from "@/components/sections/Project1"
import Team1 from "@/components/sections/Team1"
import About2 from "@/components/sections/About2"
import ServicesCreative from "@/components/sections/ServicesCreative"
import React, { useState, useEffect, useRef } from 'react'

export default function PressureWashing() {
    const [activeAboutTab, setActiveAboutTab] = useState('Story')
    const tabs = ['Story', 'Specialized Services', 'Mission', 'Values']
    const autoPlayRef = useRef(null)
    const navRef = useRef(null)
    const tabRefs = useRef({})

    // Auto-loop tabs logic
    useEffect(() => {
        const startAutoPlay = () => {
            autoPlayRef.current = setInterval(() => {
                setActiveAboutTab((prev) => {
                    const currentIndex = tabs.indexOf(prev)
                    const nextIndex = (currentIndex + 1) % tabs.length
                    return tabs[nextIndex]
                })
            }, 5000)
        }

        startAutoPlay()
        return () => clearInterval(autoPlayRef.current)
    }, [])

    // Scroll active tab into view on mobile
    useEffect(() => {
        if (tabRefs.current[activeAboutTab] && navRef.current) {
            tabRefs.current[activeAboutTab].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            })
        }
    }, [activeAboutTab])

    const handleTabClick = (tab) => {
        setActiveAboutTab(tab)
        // Reset timer on manual click
        clearInterval(autoPlayRef.current)
        autoPlayRef.current = setInterval(() => {
            setActiveAboutTab((prev) => {
                const currentIndex = tabs.indexOf(prev)
                const nextIndex = (currentIndex + 1) % tabs.length
                return tabs[nextIndex]
            })
        }, 5000)
    }

    return (
        <>
            <Layout headerCls="transparent-header">
                <Banner1 />

                <section className="about-experience-hub pt-90 pb-90" style={{ background: '#f8fafc' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="about-bento-grid mb-40 mb-lg-0">
                                    <style jsx>{`
                                        .about-bento-grid {
                                            display: grid;
                                            grid-template-columns: repeat(2, 1fr);
                                            grid-template-rows: repeat(2, 180px);
                                            gap: 15px;
                                        }
                                        .bento-item {
                                            border-radius: 24px;
                                            overflow: hidden;
                                            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                                            position: relative;
                                        }
                                        .bento-item img {
                                            width: 100%;
                                            height: 100%;
                                            object-fit: cover;
                                        }
                                        .bento-tall { grid-row: span 2; }
                                        @media (min-width: 992px) {
                                            .about-bento-grid {
                                                grid-template-rows: repeat(2, 240px);
                                                gap: 25px;
                                            }
                                        }
                                    `}</style>
                                    <div className="bento-item bento-tall wow fadeInLeft" data-wow-delay=".2s">
                                        <img src="/assets/img/services/about_story_main.jpg" alt="IFS Professional Service" />
                                    </div>
                                    <div className="bento-item wow fadeInDown" data-wow-delay=".4s">
                                        <img src="/assets/img/services/about_story_2.jpg" alt="Quality Care" />
                                    </div>
                                    <div className="bento-item wow fadeInUp" data-wow-delay=".6s">
                                        <img src="/assets/img/services/about_story_3.jpg" alt="Expert Staff" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-hub-content pl-lg-50">
                                    <style jsx>{`
                                        .hub-nav {
                                            display: flex;
                                            gap: 10px;
                                            margin-bottom: 35px;
                                            background: #fff;
                                            padding: 8px;
                                            border-radius: 50px;
                                            box-shadow: 0 5px 15px rgba(0,0,0,0.03);
                                            overflow-x: auto;
                                            scrollbar-width: none;
                                            -ms-overflow-style: none;
                                        }
                                        .hub-nav::-webkit-scrollbar {
                                            display: none;
                                        }
                                        .hub-tab-btn {
                                            flex: 1;
                                            padding: 12px 15px;
                                            border-radius: 40px;
                                            border: none;
                                            background: transparent;
                                            font-size: 0.85rem;
                                            font-weight: 700;
                                            color: #64748b;
                                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                                            white-space: nowrap;
                                            flex: 0 0 auto;
                                        }
                                        @media (min-width: 768px) {
                                            .hub-tab-btn {
                                                flex: 1;
                                            }
                                        }
                                        .hub-tab-btn.active {
                                            background: #0f1437;
                                            color: #fff;
                                            box-shadow: 0 10px 20px rgba(15, 20, 55, 0.2);
                                        }
                                        .experience-card {
                                            animation: cardSlideUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
                                        }
                                        @keyframes cardSlideUp {
                                            from { opacity: 0; transform: translateY(20px); }
                                            to { opacity: 1; transform: translateY(0); }
                                        }
                                    `}</style>

                                    <div className="hub-nav" ref={navRef}>
                                        {tabs.map(tab => (
                                            <button 
                                                key={tab}
                                                ref={el => tabRefs.current[tab] = el}
                                                onClick={() => handleTabClick(tab)}
                                                className={`hub-tab-btn ${activeAboutTab === tab ? 'active' : ''}`}
                                            >
                                                {tab}
                                            </button>
                                        ))}
                                    </div>

                                    {activeAboutTab === 'Story' && (
                                        <div className="experience-card">
                                            <div className="section-title mb-25">
                                                <span className="sub-title" style={{ color: 'var(--primary-cyan)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>Who We Are</span>
                                                <h2 className="title" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: '900', color: '#0f1437', lineHeight: '1.2' }}>Professional Cleaning <br />Across Australia</h2>
                                            </div>
                                            <p style={{ fontSize: '1.05rem', color: '#44556b', marginBottom: '30px', lineHeight: '1.7' }}>
                                                Icon Facility Services (IFS) is an Australian-owned leader in specialized maintenance. From multi-storey window cleaning to clinical sanitation, we deliver high-performance solutions for commercial, strata, and industrial sectors nationwide.
                                            </p>
                                            <ul className="list-wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                                                {['Australian Owned', 'WHS Compliant', 'Trained Staff', 'Tailored Solutions'].map(item => (
                                                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: '700', color: '#0f1437' }}>
                                                        <i className="fas fa-check-circle text-cyan"></i> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {activeAboutTab === 'Specialized Services' && (
                                        <div className="experience-card">
                                            <div className="row align-items-center">
                                                <div className="col-md-7">
                                                    <div className="section-title mb-25">
                                                        <span className="sub-title" style={{ color: 'var(--primary-cyan)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>Tailored Solutions</span>
                                                        <h2 className="title" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: '900', color: '#0f1437', lineHeight: '1.2' }}>Expert Specialized <br />Cleaning Solutions</h2>
                                                    </div>
                                                    <p style={{ fontSize: '1.05rem', color: '#44556b', marginBottom: '30px', lineHeight: '1.7' }}>
                                                        Our specialized cleaning services address unique cleaning challenges with professional expertise. From high-reach window cleaning to delicate surface maintenance, we handle the tasks that require specific skills, equipment, and safety protocols.
                                                    </p>
                                                    <ul className="list-wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                                                        {[
                                                            { title: 'Window cleaning (up to 3 storeys)', icon: 'fas fa-check-circle' },
                                                            { title: 'Solar panel maintenance', icon: 'fas fa-check-circle' },
                                                            { title: 'Pressure & soft washing', icon: 'fas fa-check-circle' },
                                                            { title: 'End of lease bond cleaning', icon: 'fas fa-check-circle' }
                                                        ].map((item, idx) => (
                                                            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: '700', color: '#0f1437' }}>
                                                                <i className={`${item.icon} text-cyan`}></i> {item.title}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="col-md-5 mt-40 mt-md-0">
                                                    <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                                                        <img src="/assets/img/services/about_specialized_main_v2.jpg" alt="Specialized Cleaning" style={{ width: '100%', height: 'auto', display: 'block' }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeAboutTab === 'Mission' && (
                                        <div className="experience-card">
                                            <div className="section-title mb-25">
                                                <span className="sub-title" style={{ color: 'var(--primary-cyan)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>Our Goal</span>
                                                <h2 className="title" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: '900', color: '#0f1437', lineHeight: '1.2' }}>Excellence In Every <br />Environment</h2>
                                            </div>
                                            <p style={{ fontSize: '1.05rem', color: '#44556b', marginBottom: '30px', lineHeight: '1.7' }}>
                                                To deliver professional cleaning & exterior maintenance services that enhance environments, protect property value & exceed client expectations—every service, every time.
                                            </p>
                                            <div style={{ background: '#fff', padding: '20px', borderRadius: '20px', borderLeft: '4px solid var(--primary-cyan)' }}>
                                                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0f1437', marginBottom: '8px' }}>The Vision</h4>
                                                <p style={{ margin: 0, fontSize: '0.95rem', color: '#64748b' }}>To be a leading facility services provider in Australia, recognised for quality workmanship and long-term partnerships.</p>
                                            </div>
                                        </div>
                                    )}

                                    {activeAboutTab === 'Values' && (
                                        <div className="experience-card">
                                            <div className="section-title mb-25">
                                                <span className="sub-title" style={{ color: 'var(--primary-cyan)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>Our Ethos</span>
                                                <h2 className="title" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: '900', color: '#0f1437', lineHeight: '1.2' }}>The IFS Way</h2>
                                            </div>
                                            <div className="row g-3">
                                                {[
                                                    { title: 'Reliability', desc: 'Consistent, on-time service you can depend on.' },
                                                    { title: 'Safety', desc: 'Strict compliance with Australian safety standards.' },
                                                    { title: 'Quality', desc: 'Uncompromising attention to detail in every job.' }
                                                ].map((value, idx) => (
                                                    <div key={idx} className="col-12">
                                                        <div className="value-item" style={{ display: 'flex', gap: '15px' }}>
                                                            <div style={{ width: '40px', height: '40px', background: 'rgba(0, 229, 255, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-cyan)', flexShrink: 0 }}>
                                                                <i className="fas fa-shield-alt"></i>
                                                            </div>
                                                            <div>
                                                                <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#0f1437', margin: '0 0 4px' }}>{value.title}</h4>
                                                                <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>{value.desc}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ServicesCreative />
                <Project1 />
            </Layout>
        </>
    )
}
