import Link from "next/link"
import { useState } from "react"

export default function Sidebar() {
    const [servicesOpen, setServicesOpen] = useState(false)

    const toggleServices = () => setServicesOpen((v) => !v)

    const services = [
        ["/services/workplace-cleaning", "Workplace Cleaning"],
        ["/services/retail-care", "Retail Environment"],
        ["/services/industrial-cleaning", "Industrial Facility"],
        ["/services/healthcare-hygiene", "Healthcare"],
        ["/services/educational-cleaning", "Educational"],
        ["/services/hospitality-cleaning", "Hospitality"],
        ["/services/fitness-maintenance", "Fitness Facility"],
        ["/services/residential-cleaning", "Residential & Tower"],
        ["/services/event-preparation", "Event Preparation"],
        ["/services/exterior-parking", "Exterior & Parking"],
        ["/services/post-construction", "Post-Construction"],
        ["/services/luxury-display", "Luxury Display Space"],
    ]

    return (
        <>
            <style jsx>{`
                :global(.mobile-menu .m-services-panel) {
                    background: rgba(0, 0, 0, 0.18);
                    border-top: 1px solid rgba(255, 255, 255, 0.04);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
                    padding: 10px 0 6px;
                }
                :global(.mobile-menu .m-svc-grid) {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 8px;
                    padding: 4px 16px 10px;
                }
                :global(.mobile-menu .m-svc-card) {
                    display: flex !important;
                    align-items: center;
                    padding: 12px 12px !important;
                    background: linear-gradient(135deg, rgba(0, 204, 255, 0.10) 0%, rgba(255, 255, 255, 0.06) 100%);
                    border: 1px solid rgba(0, 204, 255, 0.22);
                    border-radius: 10px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.92) !important;
                    font-size: 0.78rem !important;
                    font-weight: 500 !important;
                    line-height: 1.25 !important;
                    min-height: 56px;
                    border-bottom: 1px solid rgba(0, 204, 255, 0.22) !important;
                    transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
                }
                :global(.mobile-menu .m-svc-card:hover) {
                    background: linear-gradient(135deg, rgba(0, 204, 255, 0.22) 0%, rgba(0, 204, 255, 0.10) 100%);
                    border-color: var(--primary-cyan) !important;
                    color: #ffffff !important;
                    transform: translateY(-1px);
                    box-shadow: 0 6px 16px rgba(0, 204, 255, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.08);
                    padding-left: 12px !important;
                }
                :global(.mobile-menu .navigation > li.m-services-root > a) {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
                }
                :global(.mobile-menu .navigation > li.m-services-root > a .m-chev-main) {
                    float: right;
                    font-size: 12px;
                    margin-top: 4px;
                    opacity: 0.55;
                    transition: transform 0.25s ease, opacity 0.2s ease;
                }
                :global(.mobile-menu .navigation > li.m-services-root.open > a .m-chev-main) {
                    transform: rotate(180deg);
                    opacity: 1;
                    color: var(--primary-cyan);
                }
            `}</style>

            <ul className="navigation">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>

                <li className={`m-services-root ${servicesOpen ? "open active" : ""}`}>
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleServices() }}>
                        Our Services
                        <i className="fas fa-chevron-down m-chev-main" />
                    </a>
                    {servicesOpen && (
                        <div className="m-services-panel">
                            <div className="m-svc-grid">
                                {services.map(([href, label]) => (
                                    <Link key={href} href={href} className="m-svc-card">
                                        <span>{label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </li>

                <li><Link href="/pressure-washing">Pressure Washing</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
