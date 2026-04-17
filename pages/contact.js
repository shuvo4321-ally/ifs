import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        serviceLabel: "",
        message: ""
    })
    const [focusedField, setFocusedField] = useState(null)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [selectedPath, setSelectedPath] = useState(null)
    const dropdownRef = useRef(null)
    const formRef = useRef(null)

    const services = [
        { value: "Workplace", label: "Workplace Cleaning", icon: "fas fa-briefcase" },
        { value: "Retail", label: "Retail Environment Care", icon: "fas fa-shopping-basket" },
        { value: "Industrial", label: "Industrial Facility", icon: "fas fa-industry" },
        { value: "Healthcare", label: "Healthcare Hygiene", icon: "fas fa-hospital" },
        { value: "Educational", label: "Educational Facility", icon: "fas fa-graduation-cap" },
        { value: "Hospitality", label: "Hospitality Services", icon: "fas fa-utensils" },
        { value: "Fitness", label: "Fitness Facility", icon: "fas fa-dumbbell" },
        { value: "Residential", label: "Residential & Tower", icon: "fas fa-building" },
        { value: "Event", label: "Event Preparation", icon: "fas fa-calendar-alt" },
        { value: "Exterior", label: "Exterior & Parking", icon: "fas fa-car" },
        { value: "PostConstruction", label: "Post-Construction", icon: "fas fa-hard-hat" },
        { value: "LuxuryDisplay", label: "Luxury Display Space", icon: "fas fa-palette" },
    ]

    const contactPaths = [
        {
            id: "quote",
            icon: "fas fa-file-invoice",
            title: "Request a Quote",
            desc: "Get a custom proposal tailored to your facility requirements and budget.",
            cta: "Get a Quote"
        },
        {
            id: "call",
            icon: "fas fa-phone-alt",
            title: "Speak with Our Team",
            desc: "Talk directly with a facility solutions specialist about your needs.",
            cta: "Call 1800 418 411",
            link: "tel:1800418411"
        },
        {
            id: "whatsapp",
            icon: "fab fa-whatsapp",
            title: "WhatsApp Us",
            desc: "Send us a message for an instant response via WhatsApp.",
            cta: "Open WhatsApp",
            link: "https://wa.me/61483798622"
        }
    ]

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const selectService = (svc) => {
        setFormData({ ...formData, service: svc.value, serviceLabel: svc.label })
        setDropdownOpen(false)
    }

    const handlePathClick = (path) => {
        if (path.link) {
            window.open(path.link, path.link.startsWith('tel') ? '_self' : '_blank')
            return
        }
        setSelectedPath(path.id)
        setTimeout(() => {
            formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const whatsappNumber = "61483798622"
        const message = `*New Quote Request from Website*\n--------------------------------\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Company:* ${formData.company || 'Not provided'}\n*Service:* ${formData.serviceLabel || 'Not Selected'}\n\n*Requirements:*\n${formData.message || 'No additional requirements provided.'}`
        const encodedMessage = encodeURIComponent(message)
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
    }

    return (
        <Layout headerCls="transparent-header">
            <style jsx global>{`
                /* ═══════════════════════════════════════════════
                   CONTACT PAGE — ENTERPRISE PREMIUM
                   Inspired by Stripe, Linear, HubSpot
                   ═══════════════════════════════════════════════ */

                /* ─── HERO SECTION ────────────────────────────── */
                .ct-hero-section {
                    background: #0a162b;
                    padding: 180px 0 100px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                .ct-hero-section::before {
                    content: '';
                    position: absolute;
                    top: -200px; left: 50%;
                    transform: translateX(-50%);
                    width: 900px; height: 900px;
                    background: radial-gradient(circle, rgba(58, 176, 255, 0.08) 0%, transparent 60%);
                    pointer-events: none;
                }
                .ct-hero-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.62rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: var(--primary-cyan);
                    margin-bottom: 24px;
                }
                .ct-hero-eyebrow::before,
                .ct-hero-eyebrow::after {
                    content: '';
                    width: 24px;
                    height: 1px;
                    background: rgba(58, 176, 255, 0.4);
                }
                .ct-hero-h1 {
                    font-size: clamp(2.6rem, 5vw, 4rem);
                    font-weight: 900;
                    color: #ffffff;
                    letter-spacing: -2px;
                    line-height: 1.08;
                    margin: 0 auto 20px;
                    max-width: 680px;
                }
                .ct-hero-sub {
                    font-size: 1.05rem;
                    color: rgba(255, 255, 255, 0.5);
                    max-width: 520px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                /* ─── PICK YOUR PATH — Cards ─────────────────── */
                .ct-paths-section {
                    background: #0d1b33;
                    padding: 0;
                    position: relative;
                }
                .ct-paths-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 0;
                    max-width: 1200px;
                    margin: 0 auto;
                    transform: translateY(-60px);
                }
                .ct-path-card {
                    background: #ffffff;
                    padding: 44px 36px 40px;
                    border: 1px solid #eef2f6;
                    cursor: pointer;
                    transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
                    position: relative;
                    overflow: hidden;
                    text-align: left;
                }
                .ct-path-card::after {
                    content: '';
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    height: 3px;
                    background: var(--primary-cyan);
                    transform: scaleX(0);
                    transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .ct-path-card:hover {
                    box-shadow: 0 20px 48px rgba(10, 22, 43, 0.15);
                    transform: translateY(-4px);
                    border-color: transparent;
                }
                .ct-path-card:hover::after,
                .ct-path-card.active::after {
                    transform: scaleX(1);
                }
                .ct-path-card.active {
                    border-color: transparent;
                    box-shadow: 0 20px 48px rgba(10, 22, 43, 0.08);
                }
                .ct-path-icon {
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f0f7ff;
                    color: var(--primary-cyan);
                    font-size: 1.1rem;
                    margin-bottom: 24px;
                    transition: all 0.3s ease;
                }
                .ct-path-card:hover .ct-path-icon,
                .ct-path-card.active .ct-path-icon {
                    background: var(--primary-cyan);
                    color: #ffffff;
                }
                .ct-path-card .fa-whatsapp {
                    color: #25D366;
                }
                .ct-path-card:hover .fa-whatsapp,
                .ct-path-card.active .fa-whatsapp {
                    color: #ffffff;
                }
                .ct-path-title {
                    font-size: 1.2rem;
                    font-weight: 800;
                    color: #0d1b33;
                    margin: 0 0 10px;
                    letter-spacing: -0.3px;
                }
                .ct-path-desc {
                    font-size: 0.88rem;
                    color: #64748b;
                    line-height: 1.6;
                    margin: 0 0 24px;
                }
                .ct-path-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.78rem;
                    font-weight: 700;
                    color: var(--primary-cyan);
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    transition: gap 0.3s ease;
                }
                .ct-path-card:hover .ct-path-cta {
                    gap: 12px;
                }
                .ct-path-cta i {
                    font-size: 0.65rem;
                }

                /* ─── FORM SECTION ────────────────────────────── */
                .ct-form-section {
                    background: #f0f4f8;
                    padding: 60px 0 100px;
                }
                .ct-form-container {
                    max-width: 860px;
                    margin: 0 auto;
                    padding: 0 24px;
                }
                .ct-form-card {
                    background: #ffffff;
                    border: 1px solid #d1d5db;
                    padding: clamp(36px, 5vw, 64px);
                    box-shadow: 0 4px 24px rgba(10, 22, 43, 0.06);
                }
                .ct-form-header {
                    margin-bottom: 40px;
                    padding-bottom: 32px;
                    border-bottom: 2px solid #e2e8f0;
                }
                .ct-form-title {
                    font-size: clamp(1.6rem, 3vw, 2rem);
                    font-weight: 900;
                    color: #0d1b33;
                    letter-spacing: -1px;
                    margin: 0 0 8px;
                }
                .ct-form-subtitle {
                    font-size: 0.9rem;
                    color: #64748b;
                    margin: 0;
                    line-height: 1.6;
                }

                /* Form grid */
                .ct-form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 28px 24px;
                }
                .ct-form-group {
                    position: relative;
                }
                .ct-form-group.full {
                    grid-column: 1 / -1;
                }
                .ct-form-label {
                    display: block;
                    font-size: 0.68rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: #64748b;
                    margin-bottom: 8px;
                    transition: color 0.2s ease;
                }
                .ct-form-group.focused .ct-form-label {
                    color: var(--primary-cyan);
                }
                .ct-form-input {
                    width: 100%;
                    background: #f8fafb;
                    border: 2px solid #cbd5e1;
                    padding: 14px 16px;
                    font-size: 0.92rem;
                    font-weight: 500;
                    color: #0d1b33;
                    font-family: 'Inter', sans-serif;
                    outline: none;
                    transition: all 0.2s ease;
                }
                .ct-form-input:focus {
                    border-color: var(--primary-cyan);
                    background: #ffffff;
                    box-shadow: 0 0 0 3px rgba(58, 176, 255, 0.08);
                }
                .ct-form-input::placeholder {
                    color: #94a3b8;
                }
                textarea.ct-form-input {
                    min-height: 120px;
                    resize: vertical;
                }

                /* Custom Dropdown */
                .ct-svc-dropdown {
                    position: relative;
                }
                .ct-svc-trigger {
                    width: 100%;
                    background: #f8fafb;
                    border: 2px solid #cbd5e1;
                    padding: 14px 16px;
                    font-size: 0.92rem;
                    font-weight: 500;
                    color: #0d1b33;
                    font-family: 'Inter', sans-serif;
                    text-align: left;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    transition: all 0.2s ease;
                }
                .ct-svc-trigger:focus,
                .ct-svc-trigger.open {
                    border-color: var(--primary-cyan);
                    background: #ffffff;
                    box-shadow: 0 0 0 3px rgba(58, 176, 255, 0.08);
                }
                .ct-svc-trigger .placeholder {
                    color: #94a3b8;
                }
                .ct-svc-trigger i {
                    font-size: 0.58rem;
                    color: #94a3b8;
                    transition: transform 0.25s ease;
                }
                .ct-svc-trigger.open i {
                    transform: rotate(180deg);
                    color: var(--primary-cyan);
                }

                /* Dropdown Panel */
                .ct-svc-panel {
                    position: absolute;
                    top: calc(100% + 6px);
                    left: 0; right: 0;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 20px 48px rgba(10, 22, 43, 0.1), 0 2px 8px rgba(10, 22, 43, 0.04);
                    z-index: 100;
                    padding: 8px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2px;
                    opacity: 0;
                    transform: translateY(-6px);
                    pointer-events: none;
                    transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .ct-svc-panel.open {
                    opacity: 1;
                    transform: translateY(0);
                    pointer-events: auto;
                }
                .ct-svc-option {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 12px 14px;
                    cursor: pointer;
                    transition: all 0.15s ease;
                    border-left: 2px solid transparent;
                }
                .ct-svc-option:hover {
                    background: #f0f7ff;
                    border-left-color: var(--primary-cyan);
                }
                .ct-svc-option.selected {
                    background: rgba(58, 176, 255, 0.06);
                    border-left-color: var(--primary-cyan);
                }
                .ct-svc-option-icon {
                    width: 28px;
                    height: 28px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f1f5f9;
                    color: #94a3b8;
                    font-size: 0.7rem;
                    flex-shrink: 0;
                    transition: all 0.15s ease;
                }
                .ct-svc-option:hover .ct-svc-option-icon,
                .ct-svc-option.selected .ct-svc-option-icon {
                    background: rgba(58, 176, 255, 0.1);
                    color: var(--primary-cyan);
                }
                .ct-svc-option-text {
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: #0d1b33;
                }
                .ct-svc-option:hover .ct-svc-option-text,
                .ct-svc-option.selected .ct-svc-option-text {
                    color: var(--primary-cyan);
                }

                /* Submit */
                .ct-form-actions {
                    padding-top: 12px;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    flex-wrap: wrap;
                }
                .ct-form-submit {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    background: #0d1b33;
                    color: #ffffff;
                    border: none;
                    padding: 16px 40px;
                    font-size: 0.85rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
                    font-family: 'Inter', sans-serif;
                }
                .ct-form-submit:hover {
                    background: var(--primary-cyan);
                    color: #0a162b;
                    transform: translateY(-2px);
                    box-shadow: 0 12px 28px rgba(58, 176, 255, 0.2);
                }
                .ct-form-submit i {
                    transition: transform 0.3s ease;
                    font-size: 0.8rem;
                }
                .ct-form-submit:hover i {
                    transform: translateX(4px);
                }
                .ct-form-wa-note {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.72rem;
                    color: #94a3b8;
                }
                .ct-form-wa-note i {
                    color: #25D366;
                    font-size: 0.85rem;
                }

                /* ─── CONTACT INFO BAR ───────────────────────── */
                .ct-info-bar {
                    background: #0d1b33;
                    padding: 56px 0;
                }
                .ct-info-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 0;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                }
                .ct-info-item {
                    text-align: center;
                    padding: 0 24px;
                    text-decoration: none;
                    display: block;
                    transition: transform 0.2s ease;
                }
                .ct-info-item + .ct-info-item {
                    border-left: 1px solid rgba(255,255,255,0.08);
                }
                .ct-info-item:hover {
                    transform: translateY(-2px);
                }
                .ct-info-item-icon {
                    width: 44px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 14px;
                    font-size: 1rem;
                    color: #0ea5e9;
                    background: rgba(14,165,233,0.1);
                    transition: all 0.2s ease;
                }
                .ct-info-item:hover .ct-info-item-icon {
                    background: #0ea5e9;
                    color: #ffffff;
                }
                .ct-info-item-label {
                    display: block;
                    font-size: 0.58rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: rgba(255,255,255,0.4);
                    margin-bottom: 4px;
                }
                .ct-info-item-value {
                    font-size: 0.92rem;
                    font-weight: 700;
                    color: #ffffff;
                    display: block;
                }

                /* ─── MAP SECTION — Premium Split ────────────── */
                .ct-map-section {
                    display: flex;
                    min-height: 520px;
                }
                .ct-map-info {
                    flex: 0 0 38%;
                    background: #0a162b;
                    padding: clamp(48px, 6vw, 80px) clamp(32px, 4vw, 64px);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                }
                .ct-map-info::after {
                    content: '';
                    position: absolute;
                    bottom: 0; right: 0;
                    width: 300px; height: 300px;
                    background: radial-gradient(circle, rgba(58, 176, 255, 0.05) 0%, transparent 70%);
                    pointer-events: none;
                }
                .ct-map-info-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.58rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: rgba(255, 255, 255, 0.3);
                    margin-bottom: 16px;
                }
                .ct-map-info-eyebrow::before {
                    content: '';
                    width: 20px;
                    height: 1.5px;
                    background: var(--primary-cyan);
                    flex-shrink: 0;
                }
                .ct-map-info-title {
                    font-size: clamp(1.6rem, 2.5vw, 2.2rem);
                    font-weight: 900;
                    color: #ffffff;
                    letter-spacing: -1px;
                    line-height: 1.15;
                    margin: 0 0 36px;
                }
                .ct-map-info-detail {
                    padding: 16px 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                }
                .ct-map-info-detail:first-of-type {
                    border-top: 1px solid rgba(255, 255, 255, 0.06);
                }
                .ct-map-info-detail-label {
                    display: block;
                    font-size: 0.55rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: rgba(255, 255, 255, 0.25);
                    margin-bottom: 4px;
                }
                .ct-map-info-detail-value {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #ffffff;
                    line-height: 1.5;
                }
                .ct-map-directions {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 32px;
                    padding: 14px 32px;
                    background: transparent;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    color: #ffffff;
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .ct-map-directions:hover {
                    background: var(--primary-cyan);
                    border-color: var(--primary-cyan);
                    color: #0a162b;
                    transform: translateY(-2px);
                }
                .ct-map-directions i {
                    font-size: 0.7rem;
                    transition: transform 0.3s ease;
                }
                .ct-map-directions:hover i {
                    transform: translateX(4px);
                }
                .ct-map-frame {
                    flex: 1;
                    position: relative;
                    min-height: 520px;
                }
                .ct-map-frame iframe {
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%;
                    height: 100%;
                    border: 0;
                    filter: saturate(0.85) contrast(1.05);
                    transition: filter 0.5s ease;
                }
                .ct-map-frame:hover iframe {
                    filter: saturate(1) contrast(1);
                }

                /* ─── RESPONSIVE ──────────────────────────────── */
                @media (max-width: 991px) {
                    .ct-hero-section {
                        padding: 160px 24px 80px;
                    }
                    .ct-hero-h1 {
                        font-size: 2.4rem !important;
                        letter-spacing: -1px;
                    }
                    .ct-paths-grid {
                        grid-template-columns: 1fr;
                        gap: 0;
                        padding: 0 24px;
                        transform: translateY(-40px);
                    }
                    .ct-form-grid {
                        grid-template-columns: 1fr;
                    }
                    .ct-svc-panel {
                        grid-template-columns: 1fr;
                    }
                    .ct-info-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 32px 0;
                    }
                    .ct-info-item + .ct-info-item {
                        border-left: none;
                    }
                    .ct-info-item:nth-child(even) {
                        border-left: 1px solid rgba(255,255,255,0.08);
                    }
                    .ct-map-section {
                        flex-direction: column;
                    }
                    .ct-map-info {
                        flex: none;
                        padding: 48px 24px;
                    }
                    .ct-map-frame {
                        min-height: 350px;
                    }
                    .ct-form-actions {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                }
                @media (max-width: 575px) {
                    .ct-info-grid {
                        grid-template-columns: 1fr;
                    }
                    .ct-info-item + .ct-info-item {
                        border-left: none;
                        border-top: 1px solid rgba(255,255,255,0.08);
                        padding-top: 20px;
                    }
                }
            `}</style>

            {/* ═══════════════════════════════════════════════
                HERO — Centered, premium dark
               ═══════════════════════════════════════════════ */}
            <section className="ct-hero-section">
                <div className="container">
                    <div className="ct-hero-eyebrow wow fadeInUp" data-wow-delay=".1s">Contact Us</div>
                    <h1 className="ct-hero-h1 wow fadeInUp" data-wow-delay=".2s">
                        How Can We Help<br/>Your Business?
                    </h1>
                    <p className="ct-hero-sub wow fadeInUp" data-wow-delay=".3s">
                        Choose how you'd like to connect. Our team responds within 24 hours.
                    </p>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                PICK YOUR PATH — 3 Contact Options
               ═══════════════════════════════════════════════ */}
            <section className="ct-paths-section">
                <div className="ct-paths-grid wow fadeInUp" data-wow-delay=".4s">
                    {contactPaths.map((path) => (
                        <div
                            key={path.id}
                            className={`ct-path-card ${selectedPath === path.id ? 'active' : ''}`}
                            onClick={() => handlePathClick(path)}
                        >
                            <div className="ct-path-icon">
                                <i className={path.icon} />
                            </div>
                            <h3 className="ct-path-title">{path.title}</h3>
                            <p className="ct-path-desc">{path.desc}</p>
                            <span className="ct-path-cta">
                                {path.cta} <i className="fas fa-arrow-right" />
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                QUOTE FORM — Clean white card
               ═══════════════════════════════════════════════ */}
            <section className="ct-form-section" ref={formRef}>
                <div className="ct-form-container">
                    <div className="ct-form-card wow fadeInUp">
                        <div className="ct-form-header">
                            <h2 className="ct-form-title">Request a Service Quote</h2>
                            <p className="ct-form-subtitle">Fill in the details below and we'll prepare a tailored proposal for your facility.</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="ct-form-grid">
                                <div className={`ct-form-group ${focusedField === 'name' ? 'focused' : ''}`}>
                                    <label className="ct-form-label">Full Name</label>
                                    <input className="ct-form-input" type="text" name="name" value={formData.name} onChange={handleChange} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} required placeholder="John Smith" />
                                </div>
                                <div className={`ct-form-group ${focusedField === 'email' ? 'focused' : ''}`}>
                                    <label className="ct-form-label">Email Address</label>
                                    <input className="ct-form-input" type="email" name="email" value={formData.email} onChange={handleChange} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} required placeholder="john@company.com" />
                                </div>
                                <div className={`ct-form-group ${focusedField === 'phone' ? 'focused' : ''}`}>
                                    <label className="ct-form-label">Phone Number</label>
                                    <input className="ct-form-input" type="text" name="phone" value={formData.phone} onChange={handleChange} onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)} required placeholder="04xx xxx xxx" />
                                </div>
                                <div className={`ct-form-group ${focusedField === 'company' ? 'focused' : ''}`}>
                                    <label className="ct-form-label">Company Name</label>
                                    <input className="ct-form-input" type="text" name="company" value={formData.company} onChange={handleChange} onFocus={() => setFocusedField('company')} onBlur={() => setFocusedField(null)} placeholder="Your business name" />
                                </div>

                                {/* Custom Service Dropdown */}
                                <div className="ct-form-group full" ref={dropdownRef}>
                                    <label className="ct-form-label">Service Required</label>
                                    <div className="ct-svc-dropdown">
                                        <button
                                            type="button"
                                            className={`ct-svc-trigger ${dropdownOpen ? 'open' : ''}`}
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                        >
                                            <span className={!formData.serviceLabel ? 'placeholder' : ''}>
                                                {formData.serviceLabel || "Select a service..."}
                                            </span>
                                            <i className="fas fa-chevron-down" />
                                        </button>
                                        <div className={`ct-svc-panel ${dropdownOpen ? 'open' : ''}`}>
                                            {services.map((svc) => (
                                                <div
                                                    key={svc.value}
                                                    className={`ct-svc-option ${formData.service === svc.value ? 'selected' : ''}`}
                                                    onClick={() => selectService(svc)}
                                                >
                                                    <div className="ct-svc-option-icon">
                                                        <i className={svc.icon} />
                                                    </div>
                                                    <span className="ct-svc-option-text">{svc.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className={`ct-form-group full ${focusedField === 'message' ? 'focused' : ''}`}>
                                    <label className="ct-form-label">Project Details</label>
                                    <textarea className="ct-form-input" name="message" value={formData.message} onChange={handleChange} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} placeholder="Tell us about your facility, size, frequency needed, and any specific requirements..." />
                                </div>
                            </div>

                            <div className="ct-form-actions">
                                <button type="submit" className="ct-form-submit">
                                    Submit Enquiry <i className="fas fa-arrow-right" />
                                </button>
                                <span className="ct-form-wa-note">
                                    <i className="fab fa-whatsapp" /> Sent via WhatsApp for fastest response
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                CONTACT INFO BAR — 4-column
               ═══════════════════════════════════════════════ */}
            <section className="ct-info-bar">
                <div className="ct-info-grid wow fadeInUp">
                    <a href="tel:1800418411" className="ct-info-item">
                        <div className="ct-info-item-icon"><i className="fas fa-phone-alt" /></div>
                        <span className="ct-info-item-label">Phone</span>
                        <span className="ct-info-item-value">1800 418 411</span>
                    </a>
                    <a href="mailto:info@iconfacilitys.com.au" className="ct-info-item">
                        <div className="ct-info-item-icon"><i className="fas fa-envelope" /></div>
                        <span className="ct-info-item-label">Email</span>
                        <span className="ct-info-item-value">info@iconfacilitys.com.au</span>
                    </a>
                    <a href="https://wa.me/61483798622" target="_blank" rel="noopener noreferrer" className="ct-info-item">
                        <div className="ct-info-item-icon" style={{ color: '#25D366', background: 'rgba(37,211,102,0.08)' }}><i className="fab fa-whatsapp" /></div>
                        <span className="ct-info-item-label">WhatsApp</span>
                        <span className="ct-info-item-value">0483 798 622</span>
                    </a>
                    <div className="ct-info-item" style={{ cursor: 'default' }}>
                        <div className="ct-info-item-icon"><i className="fas fa-map-marker-alt" /></div>
                        <span className="ct-info-item-label">Head Office</span>
                        <span className="ct-info-item-value">Lakemba NSW 2195</span>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                MAP — Premium Split (kept from previous)
               ═══════════════════════════════════════════════ */}
            <section className="ct-map-section">
                <div className="ct-map-info">
                    <div className="ct-map-info-eyebrow wow fadeInUp">Visit Us</div>
                    <h3 className="ct-map-info-title wow fadeInUp">Our Sydney<br/>Headquarters</h3>
                    <div className="wow fadeInUp" data-wow-delay=".1s">
                        <div className="ct-map-info-detail">
                            <span className="ct-map-info-detail-label">Address</span>
                            <span className="ct-map-info-detail-value">2/38 Railway Parade<br/>Lakemba NSW 2195</span>
                        </div>
                        <div className="ct-map-info-detail">
                            <span className="ct-map-info-detail-label">Office Hours</span>
                            <span className="ct-map-info-detail-value">Mon – Fri: 7:00am – 6:00pm<br/>Sat: 8:00am – 2:00pm</span>
                        </div>
                        <div className="ct-map-info-detail">
                            <span className="ct-map-info-detail-label">Service Area</span>
                            <span className="ct-map-info-detail-value">Greater Sydney & NSW</span>
                        </div>
                    </div>
                    <a href="https://maps.google.com/?q=2/38+Railway+Parade+Lakemba+NSW+2195" target="_blank" rel="noopener noreferrer" className="ct-map-directions wow fadeInUp" data-wow-delay=".2s">
                        Get Directions <i className="fas fa-arrow-right" />
                    </a>
                </div>
                <div className="ct-map-frame">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.821422896584!2d151.0772422!3d-33.9197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ba765275e3d7%3A0xf017d7dc2fd2f7b8!2s2%2F38%20Railway%20Parade%2C%20Lakemba%20NSW%202195%2C%20Australia!5e0!3m2!1sen!2sus!4v1712720000000!5m2!1sen!2sus"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>

        </Layout>
    )
}
