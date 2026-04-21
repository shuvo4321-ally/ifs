import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/router"

export default function Contact() {
    const router = useRouter()
    const { from } = router.query  // 'pressure-washing' | 'services' | undefined (all)

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
    const dropdownRef = useRef(null)

    // ── 12 Cleaning / Facility Services ───────────────────────────
    const cleaningServices = [
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

    // ── 9 Pressure Washing Services ───────────────────────────────
    const pressureWashingServices = [
        { value: "Driveway", label: "Driveway & Pathway", icon: "fas fa-road" },
        { value: "Roof", label: "Roof & Tile Cleaning", icon: "fas fa-home" },
        { value: "Facade", label: "Building Facade Wash", icon: "fas fa-building" },
        { value: "Graffiti", label: "Graffiti Removal", icon: "fas fa-spray-can" },
        { value: "CarPark", label: "Car Park Cleaning", icon: "fas fa-parking" },
        { value: "Concrete", label: "Concrete & Paving", icon: "fas fa-th-large" },
        { value: "Deck", label: "Decks & Pool Surrounds", icon: "fas fa-swimmer" },
        { value: "Fleet", label: "Commercial Fleet Wash", icon: "fas fa-truck" },
        { value: "Industrial", label: "Industrial Equipment", icon: "fas fa-cogs" },
    ]

    // ── Context-aware list ─────────────────────────────────────────
    const othersOption = { value: "Others", label: "Other Services", icon: "fas fa-ellipsis-h" }

    const services = from === "pressure-washing"
        ? [...pressureWashingServices, othersOption]
        : from === "services"
            ? [...cleaningServices, othersOption]
            : [...cleaningServices, ...pressureWashingServices, othersOption]

    // ── Section label shown above dropdown ─────────────────────────
    const serviceContext = from === "pressure-washing"
        ? "Pressure Washing Services"
        : from === "services"
            ? "Facility Cleaning Services"
            : "All Services"

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false)
            }
        }
        function handleScroll() {
            setDropdownOpen(false)
        }
        document.addEventListener("mousedown", handleClickOutside)
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const selectService = (svc) => {
        setFormData({ ...formData, service: svc.value, serviceLabel: svc.label })
        setDropdownOpen(false)
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
                   CONTACT PAGE — REFINED PREMIUM
                   ═══════════════════════════════════════════════ */

                /* ─── GLOBAL OVERFLOW FIX ────────────────────── */
                body { overflow-x: hidden !important; }
                .ct-hero, .ct-reach-bar, .ct-split-section,
                .ct-map-section {
                    width: 100%;
                }
                .ct-reach-inner, .ct-split-left, .ct-split-right,
                .ct-form-grid, .ct-form-group, .ct-form-input,
                .ct-svc-trigger, .ct-svc-panel {
                    box-sizing: border-box;
                    min-width: 0;
                }

                /* ─── HERO ────────────────────────────────────── */
                .ct-hero {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    min-height: 600px;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    background: #0a162b;
                }
                .ct-hero-bg {
                    position: absolute;
                    inset: 0;
                    background-image: url('/assets/img/contact_hero.png');
                    background-size: cover;
                    background-position: center center;
                    transform: scale(1.05);
                    animation: ctKenBurns 10s ease-out forwards;
                    z-index: 0;
                }
                @keyframes ctKenBurns {
                    from { transform: scale(1.05); }
                    to   { transform: scale(1); }
                }
                .ct-hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(90deg, rgba(6,15,30,0.92) 0%, rgba(6,15,30,0.65) 40%, rgba(6,15,30,0.15) 80%, transparent 100%);
                    z-index: 1;
                }
                .ct-hero-vignette {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(0deg, rgba(6,15,30,0.5) 0%, transparent 30%, transparent 70%, rgba(6,15,30,0.3) 100%);
                    z-index: 1;
                }
                .ct-hero-content {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    height: 100%;
                    padding-top: 120px;
                }
                .ct-hero-inner {
                    max-width: 700px;
                }
                .ct-hero-title {
                    font-size: clamp(3.2rem, 7vw, 6rem);
                    font-weight: 900;
                    color: #ffffff;
                    line-height: 1.0;
                    letter-spacing: -2px;
                    margin: 0;
                    opacity: 0;
                    animation: ctFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
                }
                .ct-hero-accent {
                    color: var(--primary-cyan, #00CCFF);
                    font-style: italic;
                }
                .ct-hero-sub {
                    font-size: clamp(0.95rem, 1.4vw, 1.15rem);
                    color: rgba(255,255,255,0.55);
                    line-height: 1.65;
                    margin: 18px 0 0;
                    max-width: 480px;
                    font-weight: 400;
                    opacity: 0;
                    animation: ctFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.55s forwards;
                    -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0.05) 100%);
                    mask-image: linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0.05) 100%);
                }
                @keyframes ctFadeUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @media (max-width: 768px) {
                    .ct-hero { height: auto; min-height: 520px; padding: 80px 0 60px; }
                    .ct-hero-content { padding-top: 90px; }
                    .ct-hero-title { font-size: 3rem; letter-spacing: -1px; }
                    .ct-hero-overlay {
                        background: linear-gradient(95deg, rgba(6,15,30,0.92) 0%, rgba(6,15,30,0.85) 60%, rgba(6,15,30,0.2) 100%);
                    }
                }

                /* ─── REACH US BAR ────────────────────────────── */

                .ct-reach-bar {
                    background: #0a162b;
                    border-bottom: 1px solid rgba(255,255,255,0.06);
                }
                .ct-reach-inner {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                    display: flex;
                    align-items: stretch;
                }
                .ct-reach-item {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    gap: 18px;
                    padding: 32px 28px;
                    text-decoration: none;
                    border-right: 1px solid rgba(255,255,255,0.06);
                    transition: background 0.3s ease;
                    cursor: pointer;
                }
                .ct-reach-item:last-child {
                    border-right: none;
                }
                .ct-reach-item:hover {
                    background: rgba(255,255,255,0.03);
                }
                .ct-reach-icon {
                    width: 46px;
                    height: 46px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(14,165,233,0.1);
                    color: var(--primary-cyan);
                    font-size: 1.05rem;
                    transition: all 0.3s ease;
                }
                .ct-reach-item:hover .ct-reach-icon {
                    background: var(--primary-cyan);
                    color: #0a162b;
                }
                .ct-reach-icon.wa-icon {
                    background: rgba(37,211,102,0.1);
                    color: #25D366;
                }
                .ct-reach-item:hover .wa-icon {
                    background: #25D366;
                    color: #fff;
                }
                .ct-reach-text-label {
                    display: block;
                    font-size: 0.58rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.8px;
                    color: rgba(255,255,255,0.3);
                    margin-bottom: 3px;
                }
                .ct-reach-text-value {
                    display: block;
                    font-size: 0.92rem;
                    font-weight: 700;
                    color: #ffffff;
                    letter-spacing: -0.2px;
                }

                /* ─── SPLIT CONTACT SECTION ────────────────────── */
                .ct-split-section {
                    display: flex;
                    min-height: 720px;
                }

                /* Left panel — Dark */
                .ct-split-left {
                    flex: 0 0 38%;
                    background: #060f1e;
                    padding: clamp(56px, 6vw, 88px) clamp(40px, 4vw, 72px);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: relative;
                    overflow: hidden;
                }
                .ct-split-left::before {
                    content: '';
                    position: absolute;
                    top: -120px;
                    right: -120px;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 65%);
                    pointer-events: none;
                }
                .ct-split-left::after {
                    content: '';
                    position: absolute;
                    bottom: -60px;
                    left: -60px;
                    width: 280px;
                    height: 280px;
                    background: radial-gradient(circle, rgba(14,165,233,0.04) 0%, transparent 65%);
                    pointer-events: none;
                }
                .ct-split-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 0.6rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: var(--primary-cyan);
                    margin-bottom: 20px;
                }
                .ct-split-eyebrow::before {
                    content: '';
                    width: 24px;
                    height: 1.5px;
                    background: var(--primary-cyan);
                    flex-shrink: 0;
                }
                .ct-split-heading {
                    font-size: clamp(2rem, 3vw, 2.8rem);
                    font-weight: 900;
                    color: #ffffff;
                    letter-spacing: -1.5px;
                    line-height: 1.1;
                    margin: 0 0 12px;
                }
                .ct-split-heading span {
                    color: var(--primary-cyan);
                    font-style: italic;
                }
                .ct-split-sub {
                    font-size: 0.88rem;
                    color: rgba(255,255,255,0.4);
                    line-height: 1.7;
                    margin: 0 0 48px;
                    max-width: 340px;
                }

                .ct-detail-list {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }
                .ct-detail-row {
                    display: flex;
                    align-items: flex-start;
                    gap: 16px;
                    padding: 20px 0;
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                    text-decoration: none;
                }
                .ct-detail-row:first-child {
                    border-top: 1px solid rgba(255,255,255,0.05);
                }
                .ct-detail-row-icon {
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    background: rgba(14,165,233,0.08);
                    color: var(--primary-cyan);
                    font-size: 0.78rem;
                    transition: all 0.25s ease;
                    margin-top: 2px;
                }
                .ct-detail-row:hover .ct-detail-row-icon {
                    background: var(--primary-cyan);
                    color: #0a162b;
                }
                .ct-detail-row-label {
                    display: block;
                    font-size: 0.55rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: rgba(255,255,255,0.25);
                    margin-bottom: 4px;
                }
                .ct-detail-row-value {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #ffffff;
                    line-height: 1.55;
                }

                .ct-split-hours {
                    margin-top: 36px;
                    padding: 20px 24px;
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.06);
                }
                .ct-split-hours-label {
                    font-size: 0.58rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: rgba(255,255,255,0.25);
                    display: block;
                    margin-bottom: 10px;
                }
                .ct-split-hours-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 5px 0;
                }
                .ct-split-hours-day {
                    font-size: 0.78rem;
                    color: rgba(255,255,255,0.5);
                }
                .ct-split-hours-time {
                    font-size: 0.78rem;
                    font-weight: 600;
                    color: #ffffff;
                }

                /* Right panel — Form */
                .ct-split-right {
                    flex: 1;
                    background: #ffffff;
                    padding: clamp(56px, 6vw, 88px) clamp(40px, 5vw, 80px);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .ct-form-head {
                    margin-bottom: 40px;
                }
                .ct-form-tag {
                    display: inline-block;
                    font-size: 0.58rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 2.5px;
                    color: var(--primary-cyan);
                    margin-bottom: 12px;
                }
                .ct-form-title {
                    font-size: clamp(1.6rem, 2.5vw, 2.4rem);
                    font-weight: 900;
                    color: #060f1e;
                    letter-spacing: -1px;
                    line-height: 1.1;
                    margin: 0 0 8px;
                }
                .ct-form-desc {
                    font-size: 0.87rem;
                    color: #64748b;
                    line-height: 1.65;
                    margin: 0;
                    max-width: 480px;
                }

                /* Form Fields */
                .ct-form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 20px;
                }
                .ct-form-group {
                    position: relative;
                }
                .ct-form-group.full {
                    grid-column: 1 / -1;
                }
                .ct-form-label {
                    display: block;
                    font-size: 0.62rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.2px;
                    color: #94a3b8;
                    margin-bottom: 7px;
                    transition: color 0.2s ease;
                }
                .ct-form-group.is-focused .ct-form-label {
                    color: #0ea5e9;
                }
                .ct-form-input {
                    width: 100%;
                    border: 1.5px solid #e2e8f0;
                    border-bottom: 2px solid #cbd5e1;
                    background: #f8fafc;
                    padding: 13px 14px;
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: #0f172a;
                    font-family: 'Inter', sans-serif;
                    outline: none;
                    transition: all 0.2s ease;
                    border-radius: 0;
                }
                .ct-form-input:focus {
                    border-color: #0ea5e9;
                    background: #fff;
                    box-shadow: 0 2px 0 0 #0ea5e9;
                }
                .ct-form-input::placeholder {
                    color: #cbd5e1;
                    font-weight: 400;
                }
                textarea.ct-form-input {
                    min-height: 110px;
                    resize: vertical;
                }

                /* Dropdown */
                .ct-svc-dropdown { position: relative; }
                .ct-svc-trigger {
                    width: 100%;
                    border: 1.5px solid #e2e8f0;
                    border-bottom: 2px solid #cbd5e1;
                    background: #f8fafc;
                    padding: 13px 14px;
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: #0f172a;
                    font-family: 'Inter', sans-serif;
                    text-align: left;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    transition: all 0.2s ease;
                    border-radius: 0;
                    outline: none;
                }
                .ct-svc-trigger.open {
                    border-color: #0ea5e9;
                    background: #fff;
                    box-shadow: 0 2px 0 0 #0ea5e9;
                }
                .ct-svc-trigger .placeholder { color: #cbd5e1; font-weight: 400; }
                .ct-svc-trigger i {
                    font-size: 0.55rem;
                    color: #94a3b8;
                    transition: transform 0.25s ease;
                }
                .ct-svc-trigger.open i {
                    transform: rotate(180deg);
                    color: #0ea5e9;
                }
                .ct-svc-panel {
                    position: absolute;
                    top: calc(100% + 4px);
                    left: 0; right: 0;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 16px 40px rgba(10,22,43,0.1);
                    z-index: 200;
                    padding: 6px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2px;
                    opacity: 0;
                    transform: translateY(-6px);
                    pointer-events: none;
                    transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1);
                    max-height: 360px;
                    overflow-y: auto;
                    overflow-x: hidden;
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
                    padding: 10px 12px;
                    cursor: pointer;
                    transition: background 0.15s ease;
                    border-left: 2px solid transparent;
                }
                .ct-svc-option:hover,
                .ct-svc-option.selected {
                    background: #f0f9ff;
                    border-left-color: #0ea5e9;
                }
                .ct-svc-option-icon {
                    width: 26px;
                    height: 26px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f1f5f9;
                    color: #94a3b8;
                    font-size: 0.65rem;
                    flex-shrink: 0;
                }
                .ct-svc-option:hover .ct-svc-option-icon,
                .ct-svc-option.selected .ct-svc-option-icon {
                    background: #e0f2fe;
                    color: #0ea5e9;
                }
                .ct-svc-option-text {
                    font-size: 0.78rem;
                    font-weight: 600;
                    color: #334155;
                }
                .ct-svc-option:hover .ct-svc-option-text,
                .ct-svc-option.selected .ct-svc-option-text {
                    color: #0ea5e9;
                }

                /* Submit */
                .ct-form-footer {
                    display: flex;
                    align-items: center;
                    gap: 24px;
                    flex-wrap: wrap;
                }
                .ct-submit-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    background: #060f1e;
                    color: #fff;
                    border: none;
                    padding: 16px 44px;
                    font-size: 0.78rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
                    font-family: 'Inter', sans-serif;
                    border-radius: 0;
                }
                .ct-submit-btn:hover {
                    background: #0ea5e9;
                    color: #060f1e;
                    transform: translateY(-2px);
                    box-shadow: 0 12px 32px rgba(14,165,233,0.25);
                }
                .ct-submit-btn i {
                    font-size: 0.72rem;
                    transition: transform 0.3s ease;
                }
                .ct-submit-btn:hover i {
                    transform: translateX(4px);
                }
                .ct-wa-note {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.72rem;
                    color: #94a3b8;
                }
                .ct-wa-note i { color: #25D366; font-size: 0.88rem; }

                /* ─── MAP SECTION ─────────────────────────────── */
                .ct-map-section {
                    display: flex;
                    min-height: 480px;
                }
                .ct-map-panel {
                    flex: 0 0 38%;
                    background: #0a162b;
                    padding: clamp(48px, 5vw, 72px) clamp(32px, 4vw, 60px);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                }
                .ct-map-panel::after {
                    content: '';
                    position: absolute;
                    bottom: -80px; right: -80px;
                    width: 300px; height: 300px;
                    background: radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%);
                }
                .ct-map-eyebrow {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.58rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: rgba(255,255,255,0.25);
                    margin-bottom: 14px;
                }
                .ct-map-eyebrow::before {
                    content: '';
                    width: 18px;
                    height: 1.5px;
                    background: var(--primary-cyan);
                    flex-shrink: 0;
                }
                .ct-map-title {
                    font-size: clamp(1.6rem, 2.5vw, 2.1rem);
                    font-weight: 900;
                    color: #ffffff;
                    letter-spacing: -1px;
                    line-height: 1.15;
                    margin: 0 0 32px;
                }
                .ct-map-detail {
                    padding: 14px 0;
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                }
                .ct-map-detail:first-of-type { border-top: 1px solid rgba(255,255,255,0.05); }
                .ct-map-detail-label {
                    display: block;
                    font-size: 0.52rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: rgba(255,255,255,0.22);
                    margin-bottom: 4px;
                }
                .ct-map-detail-value {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #ffffff;
                    line-height: 1.5;
                }
                .ct-map-dir-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 28px;
                    padding: 13px 30px;
                    background: transparent;
                    border: 1px solid rgba(255,255,255,0.12);
                    color: #ffffff;
                    font-size: 0.72rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .ct-map-dir-btn:hover {
                    background: var(--primary-cyan);
                    border-color: var(--primary-cyan);
                    color: #060f1e;
                    transform: translateY(-2px);
                }
                .ct-map-dir-btn i { font-size: 0.65rem; transition: transform 0.3s ease; }
                .ct-map-dir-btn:hover i { transform: translateX(4px); }
                .ct-map-frame {
                    flex: 1;
                    position: relative;
                    min-height: 480px;
                }
                .ct-map-frame iframe {
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    border: 0;
                    filter: saturate(0.8) contrast(1.05);
                    transition: filter 0.4s ease;
                }
                .ct-map-frame:hover iframe {
                    filter: saturate(1) contrast(1);
                }

                /* ─── RESPONSIVE ──────────────────────────────── */
                @media (max-width: 1024px) {
                    .ct-split-section,
                    .ct-map-section {
                        flex-direction: column;
                    }
                    .ct-split-left,
                    .ct-map-panel {
                        flex: none;
                    }
                    .ct-split-left {
                        flex: none;
                        padding: 48px 32px;
                    }
                    .ct-split-right {
                        padding: 48px 32px;
                    }
                    .ct-reach-inner {
                        flex-wrap: wrap;
                    }
                    .ct-reach-item {
                        flex: 1 1 45%;
                        border-right: none;
                        border-bottom: 1px solid rgba(255,255,255,0.06);
                    }
                    .ct-reach-item:nth-child(even) {
                        border-left: 1px solid rgba(255,255,255,0.06);
                    }
                }
                @media (max-width: 768px) {
                    .ct-reach-bar {
                        display: none;
                    }
                    .ct-form-grid {
                        grid-template-columns: 1fr;
                    }
                    .ct-form-group.full {
                        grid-column: 1;
                    }
                    .ct-svc-dropdown {
                        overflow: visible;
                    }
                    .ct-svc-panel {
                        grid-template-columns: 1fr;
                        left: 0;
                        right: 0;
                        width: 100%;
                        max-height: 320px;
                        overflow-y: auto;
                        overflow-x: hidden;
                    }
                    .ct-map-section {
                        flex-direction: column;
                    }
                    .ct-map-panel {
                        flex: none;
                        padding: 48px 24px;
                    }
                    .ct-map-frame {
                        min-height: 320px;
                    }
                    .ct-form-footer {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .ct-reach-item {
                        flex: 1 1 100%;
                        border-left: none !important;
                        min-width: 0;
                        padding: 20px 16px;
                    }
                    .ct-split-right {
                        padding: 40px 20px;
                    }
                    .ct-split-left {
                        padding: 40px 20px;
                    }
                }
                @media (max-width: 480px) {
                    .ct-reach-inner {
                        flex-direction: column;
                        padding: 0;
                    }
                    .ct-reach-item {
                        width: 100%;
                        flex: none;
                        border-right: none !important;
                        border-left: none !important;
                        padding: 18px 20px;
                    }
                    .ct-split-right {
                        padding: 32px 16px;
                    }
                    .ct-split-left {
                        padding: 32px 16px;
                    }
                    .ct-hero-title { letter-spacing: -1px; }
                }
            `}</style>

            {/* ── HERO — Custom full-screen with contact_hero.png ── */}
            <section className="ct-hero">
                <div className="ct-hero-bg" />
                <div className="ct-hero-overlay" />
                <div className="ct-hero-vignette" />
                <div className="container ct-hero-content">
                    <div className="ct-hero-inner">
                        <h1 className="ct-hero-title">
                            Contact <span className="ct-hero-accent">Us.</span>
                        </h1>
                        <p className="ct-hero-sub">
                            We respond within 24 hours — let's find the right solution for your facility.
                        </p>
                    </div>
                </div>
            </section>



            {/* ── SPLIT SECTION — Dark info panel + White form ── */}
            <section className="ct-split-section">

                {/* LEFT — Contact Details */}
                <div className="ct-split-left">
                    <div>
                        <div className="ct-split-eyebrow">Get in Touch</div>
                        <h2 className="ct-split-heading">Request a<br /><span>Custom Quote</span></h2>
                        <p className="ct-split-sub">Tell us about your facility and we'll prepare a tailored proposal. No obligation, just clarity.</p>
                    </div>

                    <div className="ct-detail-list">
                        <a href="tel:1800418411" className="ct-detail-row">
                            <div className="ct-detail-row-icon"><i className="fas fa-phone-alt" /></div>
                            <div>
                                <span className="ct-detail-row-label">Phone</span>
                                <span className="ct-detail-row-value">1800 418 411</span>
                            </div>
                        </a>
                        <a href="mailto:info@iconfacilitys.com.au" className="ct-detail-row">
                            <div className="ct-detail-row-icon"><i className="fas fa-envelope" /></div>
                            <div>
                                <span className="ct-detail-row-label">Email</span>
                                <span className="ct-detail-row-value">info@iconfacilitys.com.au</span>
                            </div>
                        </a>
                        <a href="https://wa.me/61483798622" target="_blank" rel="noopener noreferrer" className="ct-detail-row">
                            <div className="ct-detail-row-icon" style={{ background: 'rgba(37,211,102,0.1)', color: '#25D366' }}><i className="fab fa-whatsapp" /></div>
                            <div>
                                <span className="ct-detail-row-label">WhatsApp</span>
                                <span className="ct-detail-row-value">0483 798 622</span>
                            </div>
                        </a>
                        <div className="ct-detail-row" style={{ cursor: 'default' }}>
                            <div className="ct-detail-row-icon"><i className="fas fa-map-marker-alt" /></div>
                            <div>
                                <span className="ct-detail-row-label">Address</span>
                                <span className="ct-detail-row-value">2/38 Railway Parade<br />Lakemba NSW 2195</span>
                            </div>
                        </div>
                    </div>

                    <div className="ct-split-hours">
                        <span className="ct-split-hours-label">Office Hours</span>
                        <div className="ct-split-hours-row">
                            <span className="ct-split-hours-day">Monday – Friday</span>
                            <span className="ct-split-hours-time">7:00am – 6:00pm</span>
                        </div>
                        <div className="ct-split-hours-row">
                            <span className="ct-split-hours-day">Saturday</span>
                            <span className="ct-split-hours-time">8:00am – 2:00pm</span>
                        </div>
                        <div className="ct-split-hours-row">
                            <span className="ct-split-hours-day">Sunday</span>
                            <span className="ct-split-hours-time">Closed</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT — Form */}
                <div className="ct-split-right">
                    <div className="ct-form-head">
                        <span className="ct-form-tag">Quote Request</span>
                        <h2 className="ct-form-title">Tell Us About<br />Your Facility</h2>
                        <p className="ct-form-desc">Fill in the form and our team will prepare a tailored proposal — typically within one business day.</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="ct-form-grid">
                            <div className={`ct-form-group ${focusedField === 'name' ? 'is-focused' : ''}`}>
                                <label className="ct-form-label">Full Name</label>
                                <input
                                    className="ct-form-input"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    placeholder="John Smith"
                                />
                            </div>
                            <div className={`ct-form-group ${focusedField === 'email' ? 'is-focused' : ''}`}>
                                <label className="ct-form-label">Email Address</label>
                                <input
                                    className="ct-form-input"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    placeholder="john@company.com"
                                />
                            </div>
                            <div className={`ct-form-group ${focusedField === 'phone' ? 'is-focused' : ''}`}>
                                <label className="ct-form-label">Phone Number</label>
                                <input
                                    className="ct-form-input"
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('phone')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    placeholder="04xx xxx xxx"
                                />
                            </div>
                            <div className={`ct-form-group ${focusedField === 'company' ? 'is-focused' : ''}`}>
                                <label className="ct-form-label">Company Name</label>
                                <input
                                    className="ct-form-input"
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('company')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Your business name"
                                />
                            </div>

                            {/* Service Dropdown */}
                            <div className="ct-form-group full" ref={dropdownRef}>
                                <label className="ct-form-label">Service Required — <span style={{ textTransform: 'none', fontWeight: 400, letterSpacing: 0 }}>{serviceContext}</span></label>
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

                            <div className={`ct-form-group full ${focusedField === 'message' ? 'is-focused' : ''}`}>
                                <label className="ct-form-label">Project Details</label>
                                <textarea
                                    className="ct-form-input"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Tell us about your facility, size, frequency needed, and any specific requirements..."
                                />
                            </div>
                        </div>

                        <div className="ct-form-footer">
                            <button type="submit" className="ct-submit-btn">
                                Send Enquiry <i className="fas fa-arrow-right" />
                            </button>
                            <span className="ct-wa-note">
                                <i className="fab fa-whatsapp" /> Sent via WhatsApp for fastest response
                            </span>
                        </div>
                    </form>
                </div>
            </section>

            {/* ── MAP — Split panel ── */}
            <section className="ct-map-section">
                <div className="ct-map-panel">
                    <div className="ct-map-eyebrow">Visit Us</div>
                    <h3 className="ct-map-title">Our Sydney<br />Headquarters</h3>
                    <div className="ct-map-detail">
                        <span className="ct-map-detail-label">Address</span>
                        <span className="ct-map-detail-value">2/38 Railway Parade<br />Lakemba NSW 2195</span>
                    </div>
                    <div className="ct-map-detail">
                        <span className="ct-map-detail-label">Service Area</span>
                        <span className="ct-map-detail-value">Greater Sydney & NSW</span>
                    </div>
                    <a
                        href="https://maps.google.com/?q=2/38+Railway+Parade+Lakemba+NSW+2195"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ct-map-dir-btn"
                    >
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
