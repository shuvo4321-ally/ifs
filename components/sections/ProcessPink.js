import React, { useEffect, useRef } from 'react';

export default function ProcessPink() {
    const steps = [
        {
            id: "01",
            title: "Transparent Discovery",
            subtitle: "Strategic Audit",
            desc: "We analyze your facility's unique fingerprint to develop a tailored, high-efficiency maintenance protocol.",
            icon: "fas fa-fingerprint",
            color: "var(--primary-navy)"
        },
        {
            id: "02",
            title: "Precision Scheduling",
            subtitle: "Deployment",
            desc: "Expert teams are deployed during your optimal windows, ensuring zero disruption to your core operations.",
            icon: "fas fa-bullseye",
            color: "var(--primary-cyan)"
        },
        {
            id: "03",
            title: "Quality Excellence",
            subtitle: "Completion",
            desc: "Rigorous ISO-standard checks ensure your environment isn't just clean—it's performing at its peak.",
            icon: "fas fa-shield-alt",
            color: "var(--primary-navy)"
        }
    ];

    const nodeRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.6, // Trigger when 60% of the node is visible
            rootMargin: '0px 0px -10% 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active-node');
                } else {
                    entry.target.classList.remove('active-node');
                }
            });
        }, observerOptions);

        nodeRefs.current.forEach(node => {
            if (node) observer.observe(node);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="pf-process-journey" style={{ backgroundColor: '#ffffff', padding: '60px 0', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                {/* Header Section */}
                <div className="row justify-content-center mb-80">
                    <div className="col-lg-8 text-center wow fadeInUp">
                        <span className="pf-journey-tag">Operational Protocol</span>
                        <h2 className="pf-journey-title">The Path To <span>Excellence</span></h2>
                        <p className="pf-journey-desc">
                            A refined three-stage journey designed to integrate seamlessly into modern business environments.
                        </p>
                    </div>
                </div>

                {/* Timeline Journey */}
                <div className="pf-timeline-container">
                    {/* The Central Thread */}
                    <div className="pf-timeline-thread"></div>

                    {steps.map((step, index) => (
                        <div 
                            key={step.id} 
                            ref={el => nodeRefs.current[index] = el}
                            className={`pf-timeline-node ${index % 2 === 0 ? 'node-right' : 'node-left'} wow fadeInUp`} 
                            data-wow-delay={`${index * 0.2}s`}
                        >
                            <div className="pf-node-content">
                                <div className="pf-node-visual">
                                    <div className="pf-node-glass">
                                        <span className="pf-node-id">{step.id}</span>
                                        <i className={step.icon}></i>
                                    </div>
                                    <div className="pf-node-pulse" style={{ backgroundColor: step.color }}></div>
                                </div>
                                
                                <div className="pf-node-text">
                                    <span className="pf-node-subtitle" style={{ color: step.color }}>{step.subtitle}</span>
                                    <h3 className="pf-node-title">{step.title}</h3>
                                    <p className="pf-node-desc">{step.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .pf-process-journey {
                    --accent-cyan: #00d2ff;
                    --navy-deep: #0a162b;
                }

                .mb-80 { margin-bottom: 80px; }

                .pf-journey-tag {
                    display: inline-block;
                    padding: 8px 18px;
                    background: rgba(0, 210, 255, 0.08);
                    color: var(--accent-cyan);
                    font-size: 11px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    border-radius: 50px;
                    margin-bottom: 25px;
                }

                .pf-journey-title {
                    font-size: clamp(2.2rem, 4vw, 3.8rem);
                    font-weight: 800;
                    color: var(--navy-deep);
                    letter-spacing: -2px;
                    line-height: 1.1;
                    margin-bottom: 25px;
                }
                .pf-journey-title span {
                    color: var(--accent-cyan);
                }

                .pf-journey-desc {
                    font-size: 1.1rem;
                    color: #64748b;
                    max-width: 600px;
                    margin: 0 auto;
                }

                /* Timeline Container */
                .pf-timeline-container {
                    position: relative;
                    padding: 50px 0;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .pf-timeline-thread {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 2px;
                    height: 100%;
                    background: linear-gradient(to bottom, transparent, #e2e8f0 10%, #e2e8f0 90%, transparent);
                    z-index: 1;
                }

                .pf-timeline-node {
                    position: relative;
                    margin-bottom: 60px;
                    width: 100%;
                    display: flex;
                    z-index: 2;
                }
                .pf-timeline-node:last-child { margin-bottom: 0; }

                .pf-node-content {
                    width: 50%;
                    display: flex;
                    align-items: center;
                    gap: 40px;
                    transition: all 0.4s ease;
                }

                .node-right { justify-content: flex-end; padding-right: 50%; }
                .node-left { justify-content: flex-start; padding-left: 50%; flex-direction: row-reverse; }

                .pf-node-visual {
                    position: relative;
                    flex-shrink: 0;
                    z-index: 5;
                }

                .node-right .pf-node-visual { order: 2; margin-right: -40px; }
                .node-left .pf-node-visual { order: 2; margin-left: -40px; }

                .pf-node-glass {
                    width: 80px;
                    height: 80px;
                    background: white;
                    border: 1px solid #f1f5f9;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    z-index: 2;
                    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                .pf-node-id {
                    font-size: 0.7rem;
                    font-weight: 800;
                    color: #cbd5e1;
                    margin-bottom: 5px;
                }

                .pf-node-glass i {
                    font-size: 1.5rem;
                    color: var(--navy-deep);
                }

                .pf-node-pulse {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    z-index: 1;
                    opacity: 0.3;
                    filter: blur(8px);
                    transition: all 0.8s ease;
                }

                /* Text Styling */
                .pf-node-text {
                    flex-grow: 1;
                    max-width: 400px;
                }
                .node-right .pf-node-text { text-align: right; }
                .node-left .pf-node-text { text-align: left; }

                .pf-node-subtitle {
                    font-size: 0.75rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    display: block;
                    margin-bottom: 15px;
                }

                .pf-node-title {
                    font-size: 1.6rem;
                    font-weight: 800;
                    color: var(--navy-deep);
                    margin-bottom: 15px;
                    transition: color 0.4s ease;
                }

                .pf-node-desc {
                    color: #64748b;
                    line-height: 1.7;
                    font-size: 1rem;
                }

                /* Active Scroll State & Hover Styles */
                .pf-timeline-node:hover .pf-node-glass,
                .pf-timeline-node.active-node .pf-node-glass {
                    transform: scale(1.15) rotate(5deg);
                    border-color: var(--accent-cyan);
                    box-shadow: 0 20px 40px rgba(0, 210, 255, 0.15);
                }
                .pf-timeline-node:hover .pf-node-pulse,
                .pf-timeline-node.active-node .pf-node-pulse {
                    transform: translate(-50%, -50%) scale(4);
                    opacity: 0.6;
                }
                .pf-timeline-node:hover .pf-node-title,
                .pf-timeline-node.active-node .pf-node-title {
                    color: var(--accent-cyan);
                }

                @media (max-width: 991px) {
                    .pf-timeline-thread {
                        left: 40px;
                    }

                    .pf-timeline-node {
                        justify-content: flex-start !important;
                        padding-left: 0 !important;
                        padding-right: 0 !important;
                        margin-bottom: 70px;
                    }

                    .pf-node-content {
                        width: 100%;
                        padding-left: 100px !important;
                        padding-right: 20px !important;
                        flex-direction: row !important;
                        gap: 20px;
                        text-align: left !important;
                    }

                    .pf-node-visual {
                        position: absolute !important;
                        left: 0 !important;
                        top: 0 !important;
                        margin: 0 !important;
                        order: 1 !important;
                    }

                    .pf-node-glass {
                        width: 65px;
                        height: 65px;
                        border-radius: 15px;
                    }

                    .pf-node-text {
                        text-align: left !important;
                        max-width: 100%;
                    }

                    .pf-node-title {
                        font-size: 1.35rem;
                        margin-bottom: 10px;
                    }

                    .pf-node-desc {
                        font-size: 0.95rem;
                    }

                    .pf-journey-title {
                        font-size: 1.8rem !important;
                        margin-bottom: 15px;
                    }
                    .pf-journey-desc {
                        font-size: 0.9rem !important;
                    }
                    
                    .mb-80 { margin-bottom: 40px; }
                    .pf-process-journey { padding: 60px 0 !important; }
                }
            `}</style>
        </section>
    );
}
