import Link from "next/link"
import { useState } from 'react'

export default function Project1() {
    const projects = [
        {
            id: 1,
            tag: "Residential",
            title: "Driveway & Pathway Restoration",
            img: "/assets/img/project/project_img01.jpg",
            desc: "Full high-pressure scouring and chemical treatment for a luxury residential driveway, removing structural oil stains and organic buildup."
        },
        {
            id: 2,
            tag: "Restoration",
            title: "Heritage Brick Soft-Wash",
            img: "/assets/img/project/project_img02.jpg",
            desc: "Delicate low-pressure cleaning of a heritage render facade, preserving historical integrity while eliminating years of industrial soot."
        },
        {
            id: 3,
            tag: "Commercial",
            title: "Retail Complex Exterior",
            img: "/assets/img/project/project_img03.jpg",
            desc: "Comprehensive cleaning of a high-traffic shopping storefront, focusing on crystal-clear window detailing and pavement hygiene."
        },
        {
            id: 4,
            tag: "Care",
            title: "Gutter & Roof Safety Audit",
            img: "/assets/img/project/project_img04.jpg",
            desc: "Debris extraction and anti-fungal roof treatment for a strata complex, ensuring full water management compliance."
        }
    ];

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
                key: "",
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
            <section className="project-area project-bg" style={{ backgroundColor: '#0a162b', padding: '120px 0' }}>
                <div className="container">
                    <div className="row align-items-end mb-60">
                        <div className="col-lg-8">
                            <div className="section-title white-title tg-heading-subheading animation-style3">
                                <span className="pf-subtitle" style={{ color: 'var(--primary-cyan)', display: 'block', marginBottom: '15px' }}>Project Portfolio</span>
                                <h2 className="title tg-element-title" style={{ fontSize: '3.5rem', fontWeight: 900, color: '#fff' }}>Our Recent Conversions</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="view-all-btn text-end">
                                <Link href="/contact" className="pf-btn">Book Your Service <i className="fas fa-arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {projects.map((project) => (
                                <div 
                                    className="project-card-boxed wow fadeInUp" 
                                    key={project.id}
                                    data-wow-delay={`.${project.id + 1}s`}
                                    style={{ 
                                        background: '#131944', 
                                        borderRadius: '24px',
                                        padding: '40px 50px',
                                        marginBottom: '20px',
                                        transition: 'transform 0.3s ease, background 0.3s ease',
                                        position: 'relative'
                                    }}
                                >
                                    <div className="card-content">
                                        <span style={{ 
                                            color: 'var(--primary-cyan)', 
                                            fontWeight: '700', 
                                            textTransform: 'uppercase', 
                                            fontSize: '0.8rem',
                                            letterSpacing: '3px',
                                            display: 'block',
                                            marginBottom: '10px'
                                        }}>{project.tag}</span>
                                        <h2 className="title" style={{ 
                                            fontSize: '2.4rem', 
                                            fontWeight: '800', 
                                            color: '#fff', 
                                            lineHeight: '1.1', 
                                            margin: '0 0 15px 0',
                                            letterSpacing: '-1px'
                                        }}>
                                            <Link href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>{project.title}</Link>
                                        </h2>
                                        <p style={{ 
                                            color: 'rgba(255,255,255,0.6)',
                                            fontSize: '1.05rem',
                                            lineHeight: '1.6',
                                            maxWidth: '900px',
                                            margin: 0
                                        }}>{project.desc}</p>
                                    </div>
                                    
                                    <style jsx>{`
                                        .project-card-boxed:hover {
                                            transform: translateY(-5px) scale(1.01);
                                            background: #1a235a !important;
                                        }
                                        .project-card-boxed:hover .title {
                                            color: var(--primary-cyan) !important;
                                        }
                                        @media (max-width: 991px) {
                                            .project-area {
                                                padding: 60px 0 !important;
                                            }
                                            .section-title {
                                                text-align: center;
                                                margin-bottom: 30px;
                                            }
                                            .section-title h2 {
                                                font-size: 1.6rem !important; /* Smaller header for mobile */
                                            }
                                            .view-all-btn {
                                                text-align: center !important;
                                                margin-bottom: 40px;
                                            }
                                            .project-card-boxed {
                                                padding: 25px !important;
                                                margin-bottom: 15px !important;
                                            }
                                            .card-content .title {
                                                font-size: 1.6rem !important;
                                            }
                                            .card-content p {
                                                font-size: 0.95rem !important;
                                            }
                                        }
                                    `}</style>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
