import Link from "next/link"
import { useState } from "react"

export default function Sidebar() {
    const [servicesOpen, setServicesOpen] = useState(false)
    const [openGroup, setOpenGroup] = useState(null)

    const toggleServices = () => setServicesOpen((v) => !v)
    const toggleGroup = (key) => setOpenGroup((g) => (g === key ? null : key))

    const groups = [
        {
            key: "commercial",
            label: "Commercial",
            items: [
                ["/services/workplace-cleaning", "Workplace Cleaning"],
                ["/services/retail-care", "Retail Environment"],
                ["/services/industrial-cleaning", "Industrial Facility"],
            ],
        },
        {
            key: "hygiene",
            label: "Specialized Hygiene",
            items: [
                ["/services/healthcare-hygiene", "Healthcare"],
                ["/services/educational-cleaning", "Educational"],
                ["/services/hospitality-cleaning", "Hospitality"],
            ],
        },
        {
            key: "property",
            label: "Property & Venue",
            items: [
                ["/services/fitness-maintenance", "Fitness Facility"],
                ["/services/residential-cleaning", "Residential & Tower"],
                ["/services/event-preparation", "Event Preparation"],
            ],
        },
        {
            key: "exterior",
            label: "Exterior & Specialty",
            items: [
                ["/services/driveway-concrete-cleaning", "Driveway & Concrete"],
                ["/services/exterior-house-washing", "Exterior House"],
                ["/services/gutter-maintenance-cleaning", "Gutter Maintenance"],
            ],
        },
    ]

    return (
        <>
            <style jsx>{`
                :global(.mobile-menu .m-services-panel) {
                    background: rgba(0, 0, 0, 0.18);
                    border-top: 1px solid rgba(255, 255, 255, 0.04);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
                }
                :global(.mobile-menu .m-group) {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
                }
                :global(.mobile-menu .m-group:last-child) {
                    border-bottom: none;
                }
                :global(.mobile-menu .m-group-head) {
                    display: flex !important;
                    align-items: center;
                    justify-content: space-between;
                    padding: 14px 24px 14px 28px;
                    color: rgba(255, 255, 255, 0.82);
                    font-size: 0.86rem;
                    font-weight: 600;
                    letter-spacing: 0.2px;
                    cursor: pointer;
                    user-select: none;
                    transition: color 0.2s ease, background 0.2s ease;
                }
                :global(.mobile-menu .m-group-head.open) {
                    color: var(--primary-cyan);
                    background: rgba(0, 204, 255, 0.05);
                }
                :global(.mobile-menu .m-group-head .m-chev) {
                    font-size: 10px;
                    transition: transform 0.25s ease;
                    opacity: 0.7;
                }
                :global(.mobile-menu .m-group-head.open .m-chev) {
                    transform: rotate(180deg);
                    opacity: 1;
                }
                :global(.mobile-menu .m-group-items) {
                    list-style: none;
                    padding: 4px 0 10px 28px;
                    margin: 0;
                }
                :global(.mobile-menu .m-group-items li a) {
                    display: block !important;
                    padding: 9px 18px !important;
                    font-size: 0.85rem !important;
                    font-weight: 400 !important;
                    color: rgba(255, 255, 255, 0.6) !important;
                    border-bottom: none !important;
                    letter-spacing: 0.1px !important;
                }
                :global(.mobile-menu .m-group-items li a:hover) {
                    color: var(--primary-cyan) !important;
                    background: transparent !important;
                    padding-left: 22px !important;
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
                            {groups.map((g) => (
                                <div key={g.key} className="m-group">
                                    <div
                                        className={`m-group-head ${openGroup === g.key ? "open" : ""}`}
                                        onClick={() => toggleGroup(g.key)}
                                    >
                                        <span>{g.label}</span>
                                        <i className="fas fa-chevron-down m-chev" />
                                    </div>
                                    {openGroup === g.key && (
                                        <ul className="m-group-items">
                                            {g.items.map(([href, label]) => (
                                                <li key={href}><Link href={href}>{label}</Link></li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </li>

                <li><Link href="/pressure-washing">Pressure Washing</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
