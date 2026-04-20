import { useState } from 'react'
import Link from 'next/link'

export default function Faq1({ customFaqs }) {
    const [isActive, setIsActive] = useState({
        status: true,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({ status: false, key: null })
        } else {
            setIsActive({ status: true, key })
        }
    }

    const defaultFaqs = [
        {
            key: 1,
            question: "Are your cleaning protocols ISO compliant?",
            answer: "Yes, all Icon Facility Services protocols adhere to strict ISO-9001 quality management standards, ensuring consistent, high-grade sanitation for every client."
        },
        {
            key: 2,
            question: "Do you offer 24/7 facility support?",
            answer: "We provide around-the-clock maintenance and emergency response services to ensure your business operations never face disruption."
        },
        {
            key: 3,
            question: "What sectors do you specialize in?",
            answer: "Our expertise spans high-traffic commercial offices, industrial plants, clinical healthcare settings, and premium retail environments across Australia."
        },
        {
            key: 4,
            question: "Are your products environmentally friendly?",
            answer: "We prioritize GECA-certified, eco-friendly cleaning agents that provide maximum sanitation while minimizing the environmental footprint of your facility."
        }
    ];

    const faqs = customFaqs ? customFaqs.map((f, i) => ({
        key: i + 1,
        question: f.q || f.question,
        answer: f.a || f.answer
    })) : defaultFaqs;

    return (
        <section className="faq-editorial" style={{ padding: '100px 0', background: '#ffffff' }}>
            <style jsx>{`
                .faq-wrap-ed {
                    padding: 0 max(5vw, 140px);
                }

                /* ─── HEADER — editorial left-align ──────────── */
                .faq-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.65rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: #94a3b8;
                    margin-bottom: 20px;
                }
                .faq-eyebrow::before {
                    content: '';
                    display: block;
                    width: 28px;
                    height: 1.5px;
                    background: var(--primary-cyan);
                    flex-shrink: 0;
                }
                .faq-headline {
                    font-size: clamp(2.2rem, 3.5vw, 3.2rem);
                    font-weight: 900;
                    color: #0d1b33;
                    line-height: 1.08;
                    letter-spacing: -0.04em;
                    margin: 0 0 60px;
                }

                /* ─── LAYOUT — two-column ────────────────────── */
                .faq-layout {
                    display: flex;
                    gap: 80px;
                    align-items: flex-start;
                }
                .faq-main {
                    flex: 1;
                    min-width: 0;
                }

                /* ─── ACCORDION — clean borders, zero radius ─── */
                .faq-item {
                    border-bottom: 1px solid #e8edf2;
                }
                .faq-item:first-child {
                    border-top: 1px solid #e8edf2;
                }
                .faq-question-btn {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 26px 0;
                    cursor: pointer;
                    gap: 24px;
                    background: none;
                    border: none;
                    width: 100%;
                    text-align: left;
                    transition: all 0.2s ease;
                }
                .faq-question-btn:hover {
                    padding-left: 4px;
                }
                .faq-q-text {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: #0d1b33;
                    letter-spacing: -0.01em;
                    line-height: 1.4;
                    transition: color 0.2s ease;
                }
                .faq-question-btn:hover .faq-q-text {
                    color: var(--primary-cyan);
                }
                .faq-q-text.active {
                    color: var(--primary-cyan);
                }
                .faq-toggle-icon {
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    font-size: 1.1rem;
                    font-weight: 300;
                    color: #94a3b8;
                    transition: all 0.3s ease;
                }
                .faq-toggle-icon.active {
                    color: var(--primary-cyan);
                    transform: rotate(45deg);
                }
                .faq-answer {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.4s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .faq-answer.open {
                    max-height: 300px;
                }
                .faq-answer-inner {
                    padding: 0 0 26px;
                }
                .faq-answer-inner p {
                    font-size: 0.95rem;
                    color: #64748b;
                    line-height: 1.85;
                    margin: 0;
                    max-width: 580px;
                }

                /* ─── CTA SIDEBAR ────────────────────────────── */
                .faq-aside {
                    flex: 0 0 300px;
                    background: #f8fafc;
                    padding: 44px 36px;
                    border-left: 3px solid var(--primary-cyan);
                }
                .faq-aside-title {
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: #0d1b33;
                    margin: 0 0 14px;
                    letter-spacing: -0.02em;
                    line-height: 1.3;
                }
                .faq-aside-desc {
                    font-size: 0.88rem;
                    color: #64748b;
                    line-height: 1.75;
                    margin: 0 0 28px;
                }
                .faq-aside-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.8rem;
                    font-weight: 800;
                    color: #0d1b33;
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    border-bottom: 1.5px solid #0d1b33;
                    padding-bottom: 3px;
                    transition: color 0.2s, border-color 0.2s;
                }
                .faq-aside-cta:hover {
                    color: var(--primary-cyan);
                    border-color: var(--primary-cyan);
                }
                .faq-aside-cta i {
                    font-size: 0.7rem;
                    transition: transform 0.2s;
                }
                .faq-aside-cta:hover i {
                    transform: translateX(4px);
                }

                /* ─── MOBILE ─────────────────────────────────── */
                @media (max-width: 991px) {
                    .faq-wrap-ed {
                        padding: 0 24px !important;
                    }
                    .faq-layout {
                        flex-direction: column;
                        gap: 48px;
                    }
                    .faq-aside {
                        display: none !important;
                    }
                    .faq-headline {
                        font-size: 2rem !important;
                        letter-spacing: -1px !important;
                        margin-bottom: 40px !important;
                    }
                    .faq-q-text {
                        font-size: 1rem !important;
                    }
                }

                /* ─── Mobile layout values (White Theme Inherited) ────── */
                @media (max-width: 767px) {
                    .faq-editorial {
                        padding: 70px 0 !important;
                    }
                    .faq-headline {
                        font-size: 1.75rem !important;
                        margin-bottom: 32px !important;
                    }
                    .faq-question-btn {
                        padding: 22px 0 !important;
                    }
                    .faq-question-btn:hover {
                        padding-left: 0 !important;
                    }
                    .faq-q-text {
                        font-size: 0.95rem !important;
                        line-height: 1.35 !important;
                    }
                    .faq-answer-inner p {
                        font-size: 0.88rem !important;
                        line-height: 1.7 !important;
                    }
                    .faq-aside {
                        padding: 36px 28px !important;
                        background: #f8fafc !important; /* Keep it light like desktop */
                    }
                    .faq-aside-title {
                        font-size: 1.15rem !important;
                    }
                    .faq-aside-desc {
                        font-size: 0.85rem !important;
                        margin-bottom: 24px !important;
                    }
                    /* Convert solid mobile button back to light-theme friendly or keep it */
                    .faq-aside-cta {
                        color: #ffffff !important;
                        background: var(--primary-navy, #0a162b) !important;
                        border: none !important;
                        border-bottom: none !important;
                        padding: 14px 24px !important;
                        border-radius: 6px !important;
                        width: 100% !important;
                        justify-content: center !important;
                        font-size: 0.78rem !important;
                        letter-spacing: 1.5px !important;
                        display: flex !important;
                    }
                    .faq-aside-cta:hover {
                        background: var(--primary-cyan) !important;
                        color: #0a162b !important;
                    }
                }
            `}</style>

            <div className="faq-wrap-ed">
                {/* ── Editorial header ── */}
                <h2 className="faq-headline wow fadeInUp">Frequently Asked<br/>Questions</h2>

                {/* ── Two-column layout ── */}
                <div className="faq-layout">

                    {/* Left: accordion */}
                    <div className="faq-main wow fadeInUp">
                        {faqs.map(faq => (
                            <div key={faq.key} className="faq-item">
                                <button className="faq-question-btn" onClick={() => handleToggle(faq.key)}>
                                    <span className={`faq-q-text ${isActive.key === faq.key ? 'active' : ''}`}>
                                        {faq.question}
                                    </span>
                                    <span className={`faq-toggle-icon ${isActive.key === faq.key ? 'active' : ''}`}>
                                        +
                                    </span>
                                </button>
                                <div className={`faq-answer ${isActive.key === faq.key ? 'open' : ''}`}>
                                    <div className="faq-answer-inner">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: CTA sidebar */}
                    <div className="faq-aside wow fadeInRight" data-wow-delay=".2s">
                        <h3 className="faq-aside-title">Still have questions?</h3>
                        <p className="faq-aside-desc">
                            Our team is ready to discuss your facility's specific requirements and provide a tailored solution.
                        </p>
                        <Link href="/contact" className="faq-aside-cta">
                            Contact Us <i className="fas fa-arrow-right" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}
