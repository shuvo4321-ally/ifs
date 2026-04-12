import { useRouter } from 'next/router';
import Layout from "@/components/layout/Layout";
import Link from 'next/link';
import React, { useState } from 'react';

const serviceData = {
    // CATEGORY 1: COMMERCIAL SOLUTIONS
    'window-cleaning': {
        title: "Professional Window Cleaning",
        subtitle: "Crystal Clear Views",
        image: "/assets/img/services/window_clean_v3.png",
        breadcrumbImg: "/assets/img/services/window_clean_v3.png",
        description: "Streak-free, high-clarity cleaning for all residential and commercial glass surfaces.",
        heroChecklist: ["Pure Water Tech", "Internal & External", "Sill & Frame Wipedown", "High-Rise Ready"],
        whySections: [{ title: "Better Views", desc: "Don't let dirty windows spoil your view; let the light in.", img: "/assets/img/services/window_clean_v3.png", isReversed: false }],
        process: [{ title: "Scrub", icon: "fas fa-hand-sparkles", desc: "Removing organic buildup." }, { title: "Squeegee", icon: "fas fa-tint", desc: "Streak-free drying technique." }, { title: "Polish", icon: "fas fa-star", desc: "Microfiber finish for brilliance." }],
        faqs: [{ q: "Do you do frames?", a: "Yes, sills and frames are included." }]
    },
    'workplace-cleaning': {
        title: "Workplace Cleaning Solutions",
        subtitle: "Commercial Excellence",
        image: "/assets/img/services/workplace_cleaning_ifs.jpg",
        breadcrumbImg: "/assets/img/services/workplace_cleaning_ifs.jpg",
        description: "Bespoke cleaning strategies designed for modern corporate environments, focusing on productivity, health, and a premium professional atmosphere.",
        heroChecklist: ["Daily Office Sanitization", "High-Touch Point Disinfection", "Eco-Friendly Cleaning Suite", "After-Hours Execution"],
        whySections: [
            {
                title: "Elevate Your Corporate Image",
                desc: "A clean workspace is a reflection of your brand's standards. We provide detail-oriented cleaning that ensures your clients and employees experience a flawless environment every single day.",
                img: "/assets/img/services/workplace_cleaning_ifs.jpg",
                isReversed: false
            }
        ],
        process: [
            { title: "Site Audit", icon: "fas fa-clipboard-check", desc: "Detailed walkthrough to identify specific cleaning needs for your layout." },
            { title: "Deep Clean", icon: "fas fa-pump-soap", desc: "Initial high-intensity cleaning to establish our gold standard." },
            { title: "Maintenance", icon: "fas fa-sync-alt", desc: "Consistent, scheduled visits to keep standards peak at all times." }
        ],
        faqs: [
            { q: "Do you offer daily cleaning?", a: "Yes, we specialize in daily, weekly, and bespoke cleaning schedules." }
        ]
    },
    'retail-care': {
        title: "Retail Environment Care",
        subtitle: "Customer Experience",
        image: "/assets/img/services/retail_environment_ifs.jpg",
        breadcrumbImg: "/assets/img/services/retail_environment_ifs.jpg",
        description: "Maintain a pristine shopping environment that invites customers and protects your merchandise with our specialized retail cleaning services.",
        heroChecklist: ["Floor Polishing", "Glass & Mirror Detailing", "Display Case Sanitization", "Stock Room Organization"],
        whySections: [
            {
                title: "First Impressions Count",
                desc: "In retail, the visual condition of your store directly impacts sales. We ensure every surface sparkles, from the entrance glass to the checkout counter.",
                img: "/assets/img/services/retail_environment_ifs.jpg",
                isReversed: false
            }
        ],
        process: [
            { title: "Glass Focus", icon: "fas fa-window-restore", desc: "Ensuring all entrance and display glass is streak-free." },
            { title: "Floor Buffing", icon: "fas fa-broom", desc: "High-gloss floor maintenance for maximum visual impact." },
            { title: "Sanitization", icon: "fas fa-hands-wash", desc: "Frequent cleaning of high-traffic customer touchpoints." }
        ],
        faqs: [
            { q: "Can you clean during store hours?", a: "We recommend after-hours cleaning, but offer discreet 'day-porter' services." }
        ]
    },
    'industrial-cleaning': {
        title: "Industrial Facility Cleaning",
        subtitle: "Safety & Compliance",
        image: "/assets/img/services/industrial_facility_ifs.jpg",
        breadcrumbImg: "/assets/img/services/industrial_facility_ifs.jpg",
        description: "Heavy-duty cleaning solutions for warehouses, factories, and industrial sites, prioritizing safety, degreasing, and operational efficiency.",
        heroChecklist: ["Factory Floor Degreasing", "Machinery Dusting", "Hazardous Waste Handling", "Safety Line Repainting"],
        whySections: [
            {
                title: "Built for Heavy Duty",
                desc: "Industrial sites require more than just soap and water. Our teams are trained in heavy degreasing and safety protocols to keep your facility compliant.",
                img: "/assets/img/services/industrial_facility_ifs.jpg",
                isReversed: false
            }
        ],
        process: [
            { title: "Degreasing", icon: "fas fa-tools", desc: "Industrial-grade chemical application to remove oil and grime." },
            { title: "Pressure Scouring", icon: "fas fa-water", desc: "High-impact removal of embedded industrial contaminants." },
            { title: "Compliance Check", icon: "fas fa-check-shield", desc: "Ensuring all cleaning meets OHS and industry safety standards." }
        ],
        faqs: [
            { q: "Are you insured for factory work?", a: "Yes, we hold comprehensive liability insurance for all industrial environments." }
        ]
    },

    // CATEGORY 2: SPECIALIZED HYGIENE
    'healthcare-hygiene': {
        title: "Healthcare Hygiene Services",
        subtitle: "Sterile Environments",
        image: "/assets/img/services/healthcare_hygiene_ifs.jpg",
        breadcrumbImg: "/assets/img/services/healthcare_hygiene_ifs.jpg",
        description: "Medical-grade cleaning and disinfection services for clinics, hospitals, and pharmacies, ensuring absolute compliance with health standards.",
        heroChecklist: ["Pathogen Control", "Cross-Contamination Prevention", "EPA-Approved Disinfectants", "Medical Waste Management"],
        whySections: [
            {
                title: "Uncompromising Standards",
                desc: "In healthcare, cleaning is a matter of safety. We use hospital-grade protocols to eliminate 99.9% of bacteria and viruses in sensitive areas.",
                img: "/assets/img/services/healthcare_hygiene_ifs.jpg",
                isReversed: false
            }
        ],
        process: [
            { title: "Bio-Seal", icon: "fas fa-biohazard", desc: "Systematic disinfection of all surfaces using antimicrobial agents." },
            { title: "HEPA Filtration", icon: "fas fa-wind", desc: "Utilizing HEPA-filter vacuums to ensure air purity during cleaning." },
            { title: "Audit Trail", icon: "fas fa-file-medical", desc: "Detailed logs and reporting for health department compliance." }
        ],
        faqs: [
            { q: "Do you clean dentist clinics?", a: "Yes, we handle all types of private and public medical facilities." }
        ]
    },
    'educational-cleaning': {
        title: "Educational Facility Cleaning",
        subtitle: "Safe Learning Spaces",
        image: "/assets/img/services/educational_facility_ifs.jpg",
        breadcrumbImg: "/assets/img/services/educational_facility_ifs.jpg",
        description: "Creating healthy and clean environments for students and staff in schools, universities, and early learning centers.",
        heroChecklist: ["Child-Safe Agents", "Gym & Hall Sanitization", "Classroom Detailing", "Holiday Deep Cleans"],
        whySections: [
            {
                title: "Protecting the Future",
                desc: "Schools are high-transmission zones for illness. Our targeted disinfection reduces absenteeism by keeping common areas sterile and safe for children.",
                img: "/assets/img/services/educational_facility_ifs.jpg",
                isReversed: false
            }
        ],
        process: [
            { title: "Active Zone Clean", icon: "fas fa-child", desc: "Focusing on play areas, desks, and equipment with non-toxic agents." },
            { title: "Wet Area Sanitize", icon: "fas fa-toilet", desc: "Intensive cleaning of bathrooms and locker room facilities." },
            { title: "Periodic Stripping", icon: "fas fa-layer-group", desc: "Bulk floor stripping and waxing during term breaks." }
        ],
        faqs: [
            { q: "Are your cleaners police-checked?", a: "Yes, all staff working in schools have current Working With Children checks." }
        ]
    },
    'hospitality-cleaning': {
        title: "Hospitality Cleaning Services",
        subtitle: "Guest Excellence",
        image: "/assets/img/services/hospitality_cleaning_ifs.jpg",
        breadcrumbImg: "/assets/img/services/hospitality_cleaning_ifs.jpg",
        description: "Premium cleaning for hotels, restaurants, and event spaces where guest satisfaction and visual perfection are paramount.",
        heroChecklist: ["Kitchen Deep Cleans", "Lobby Floor Polishing", "Upholstery Steam Cleaning", "Rapid Turnaround Times"],
        whySections: [
            {
                title: "The Guest Experience",
                desc: "In hospitality, cleanliness is the foundation of your reputation. We provide five-star cleaning that ensures every guest feels at home.",
                img: "/assets/img/services/hospitality_cleaning_ifs.jpg",
                isReversed: false
            }
        ],
        process: [
            { title: "Deep Kitchen", icon: "fas fa-utensils", desc: "Full degreasing of extractors, ovens, and preparation surfaces." },
            { title: "Textile Care", icon: "fas fa-couch", desc: "Specialized cleaning for restaurant carpets and luxury seating." },
            { title: "Aroma Control", icon: "fas fa-air-freshener", desc: "Neutralizing odors to maintain a fresh, inviting atmosphere." }
        ],
        faqs: [
            { q: "Can you clean during store hours?", a: "We recommend after-hours cleaning, but offer discreet 'day-porter' services." }
        ]
    },

    // CATEGORY 3: PROPERTY & VENUE CARE
    'fitness-maintenance': {
        title: "Fitness Facility Maintenance",
        subtitle: "Odor & Germ Control",
        image: "/assets/img/services/fitness_facility_ifs.jpg",
        breadcrumbImg: "/assets/img/services/fitness_facility_ifs.jpg",
        description: "Specialized sanitization for gyms, yoga studios, and leisure centers, focusing on high-sweat areas and equipment hygiene.",
        heroChecklist: ["Equipment Sanitization", "Locker Room Detailing", "Odor Neutralization", "Anti-Fungal Treatments"],
        whySections: [
            {
                title: "Train in Purity",
                desc: "Gym-goers value hygiene above all else. We use specialized moisture-wicking and bacteria-killing agents to keep your studio smelling fresh and safe.",
                img: "/assets/img/services/fitness_facility_ifs.jpg",
                isReversed: false
            }
        ],
        process: [
            { title: "Machine Wipe", icon: "fas fa-dumbbell", desc: "Detailed sanitization of all weights and cardio equipment." },
            { title: "Steam Rinse", icon: "fas fa-hot-tub", desc: "Using steam to sterilize showers and sauna areas without harsh chemicals." },
            { title: "HVAC Fresh", icon: "fas fa-fan", desc: "Cleaning vents to ensure optimal air quality during high-intensity workouts." }
        ],
        faqs: [
            { q: "Can you provide daytime porters?", a: "Yes, we can provide staff to keep weights sanitized during peak hours." }
        ]
    },
    'residential-cleaning': {
        title: "Residential & Tower Cleaning",
        subtitle: "Luxury Living",
        image: "/assets/img/services/residential_cleaning_ifs.jpg",
        breadcrumbImg: "/assets/img/services/residential_cleaning_ifs.jpg",
        description: "High-end cleaning services for apartment towers, luxury estates, and common areas in strata developments.",
        heroChecklist: ["Common Area Buffing", "Penthouse Detailing", "Lift & Foyer Polishing", "Waste Management"],
        whySections: [
            {
                title: "Strata Excellence",
                desc: "We work with building managers to maintain shared spaces at a luxury standard, ensuring the value of your development is always climbing.",
                img: "/assets/img/services/residential_cleaning_ifs.jpg",
                isReversed: false
            }
        ],
        process: [
            { title: "Foyer Detailing", icon: "fas fa-hotel", desc: "Daily polishing of marble, glass, and entrance touchpoints." },
            { title: "Level Sweeps", icon: "fas fa-layer-group", desc: "Systematic vacuuming and dusting of all residential corridors." },
            { title: "Refuse Care", icon: "fas fa-trash", desc: "Monitoring and cleaning bin rooms to prevent odors and pests." }
        ],
        faqs: [
            { q: "Do you clean individual apartments?", a: "We primarily handle common areas but offer valet services for residents upon request." }
        ]
    },
    'event-preparation': {
        title: "Event Venue Preparation",
        subtitle: "Precision Resets",
        image: "/assets/img/services/event_cleaning_ifs.jpg",
        breadcrumbImg: "/assets/img/services/event_cleaning_ifs.jpg",
        description: "Pre-event detailing and post-event restoration for weddings, corporate gala dinners, and stadium-scale gatherings.",
        heroChecklist: ["Rapid Hall Resets", "Trash Extraction", "Floor Restoration", "Washroom Management"],
        whySections: [
            {
                title: "Ready for the Spotlight",
                desc: "Events move fast. Our teams excel at lightning-speed resets that prepare your venue for its next high-profile booking within hours.",
                img: "/assets/img/services/event_cleaning_ifs.jpg",
                isReversed: false
            }
        ],
        process: [
            { title: "Pre-Glow", icon: "fas fa-sparkles", desc: "Detailed detailing to make chandeliers, floors, and glass shine." },
            { title: "The Clean-Sweep", icon: "fas fa-trash-restore", desc: "Mass-scale waste removal immediately following event conclusion." },
            { title: "Reset", icon: "fas fa-undo", desc: "Re-configuring furniture and cleaning all traces of the previous event." }
        ],
        faqs: [
            { q: "Do you provide cleaners during the event?", a: "Yes, our 'Event Marshals' keep washrooms and walkways clean throughout the night." }
        ]
    },
    'post-construction': {
        title: "Post-Construction Cleaning",
        subtitle: "Site Handover Ready",
        image: "/assets/img/services/post_construction_ifs.jpg",
        breadcrumbImg: "/assets/img/services/post_construction_ifs.jpg",
        description: "Specialized builders cleans for residential and commercial properties, removing fine dust, paint splatters, and construction debris.",
        heroChecklist: ["Fine Dust Extraction", "Paint & Grout Removal", "Window Detailing", "Quick Handover Sprints"],
        whySections: [
            {
                title: "Ready for Handover",
                desc: "We understand construction timelines. Our teams provide rapid, high-detail cleaning that ensures your project is client-ready the moment we leave.",
                img: "/assets/img/services/post_construction_ifs.jpg",
                isReversed: false
            }
        ],
        process: [
            { title: "Debris Clear", icon: "fas fa-trash-alt", desc: "Systematic removal of bulk construction waste and materials." },
            { title: "Dust Scrub", icon: "fas fa-wind", desc: "Industrial-grade HEPA vacuuming to eliminate fine silica dust." },
            { title: "Detailing", icon: "fas fa-gem", desc: "Final polish of all glass, cabinetry, and hardware for handover." }
        ],
        faqs: [
            { q: "Do you handle industrial sites?", a: "Yes, we handle residential developments, commercial fits, and industrial sites." }
        ]
    },
    'luxury-display': {
        title: "Luxury Display Space Cleaning",
        subtitle: "Diamond Standards",
        image: "/assets/img/services/luxury_display_ifs.jpg",
        breadcrumbImg: "/assets/img/services/luxury_display_ifs.jpg",
        description: "Ultra-high-detail cleaning for car showrooms, art galleries, and designer boutiques where presentation is everything.",
        heroChecklist: ["Marble & Stone Polishing", "Art-Safe Dusting", "High-Gloss Floor Care", "Fingerprint Eradication"],
        whySections: [
            {
                title: "A Flawless Presentation",
                desc: "In luxury retail and exhibitions, a single fingerprint can break the spell. We provide meticulous detailing that ensures your display space remains a perfect sanctuary for your brand.",
                img: "/assets/img/services/luxury_display_ifs.jpg",
                isReversed: false
            }
        ],
        process: [
            { title: "Surface Audit", icon: "fas fa-search", desc: "Identifying sensitive materials requiring specialized pH-neutral care." },
            { title: "The Polish", icon: "fas fa-sparkles", desc: "Meticulous hand-polishing of all glass, stone, and luxury hardware." },
            { title: "Micro-Detail", icon: "fas fa-feather", desc: "Clearing dust from even the most intricate display elements." }
        ],
        faqs: [
            { q: "Do you clean delicate art?", a: "Yes, we use non-abrasive, art-safe tools for gallery environments." }
        ]
    },

    // CATEGORY 4: EXTERIOR & RESTORATION
    'driveway-concrete-cleaning': {
        title: "Driveway & Concrete Cleaning",
        subtitle: "Surface Restoration",
        image: "/assets/img/services/driveway_clean_v3.png",
        breadcrumbImg: "/assets/img/services/driveway_clean_v3.png",
        description: "Eliminate stubborn oil stains, dirt buildup, and grime from driveways, walkways, and concrete areas, restoring a fresh and polished appearance.",
        heroChecklist: ["Stubborn Oil Removal", "Tire Mark Elimination", "Non-Slip Finishing", "Eco-Friendly Agents"],
        whySections: [{ title: "Maximum Curb Appeal", desc: "Your driveway is the first thing visitors see.", img: "/assets/img/services/driveway_clean_v3.png", isReversed: false }],
        process: [{ title: "Scouring", icon: "fas fa-water", desc: "High-pressure removal of embedded stains." }, { title: "Bio-Treat", icon: "fas fa-leaf", desc: "Targeting organics at the root." }, { title: "Protect", icon: "fas fa-shield", desc: "Shielding against future wear." }],
        faqs: [{ q: "How long?", a: "Typically 2-4 hours." }]
    },
    'deck-patio-revitalization': {
        title: "Deck & Patio Revitalization",
        subtitle: "Outdoor Living",
        image: "/assets/img/services/deck_patio_v3.png",
        breadcrumbImg: "/assets/img/services/deck_patio_v3.png",
        description: "Professional cleaning and restoration for timber decks, stone patios, and paved areas.",
        heroChecklist: ["Deep Grime Removal", "Timber Safe", "Algae Prevention", "Joint Sand Protection"],
        whySections: [{ title: "Restore Your Space", desc: "Don't replace your deck; revitalize it with our expert service.", img: "/assets/img/services/deck_patio_v3.png", isReversed: false }],
        process: [{ title: "Prep", icon: "fas fa-broom", desc: "Clearing debris and furniture." }, { title: "Clean", icon: "fas fa-water", desc: "Symmetry pressure washing." }, { title: "Seal", icon: "fas fa-layer-group", desc: "Optional sealing to protect." }],
        faqs: [{ q: "Will it damage timber?", a: "No, we use specialized tips for wood." }]
    },
    'exterior-parking': {
        title: "Exterior & Parking Area Cleaning",
        subtitle: "Asset Maintenance",
        image: "/assets/img/services/exterior_parking_ifs.jpg",
        breadcrumbImg: "/assets/img/services/exterior_parking_ifs.jpg",
        description: "Complete outdoor cleaning services covering parking areas, walkways, and building exteriors, ensuring safety and visual excellence for your facility.",
        heroChecklist: ["High-Pressure Washing", "Oil & Stain Removal", "Walkway Sanitization", "Line Marking Prep"],
        whySections: [{ 
            title: "First Impressions Start Outside", 
            desc: "The exterior of your facility is the first thing clients see. We ensure every inch of your parking and walkways reflects your brand's commitment to quality.", 
            img: "/assets/img/services/exterior_parking_ifs.jpg", 
            isReversed: false 
        }],
        process: [
            { title: "Surface Audit", icon: "fas fa-search", desc: "Identifying heavy traffic zones and oil buildup." },
            { title: "Deep Scour", icon: "fas fa-water", desc: "High-power pressure washing to lift embedded grime." },
            { title: "Waste Clear", icon: "fas fa-trash-alt", desc: "Ensuring all debris is cleared from drains and walkways." }
        ],
        faqs: [{ q: "Do you clean multi-level parking?", a: "Yes, we handle residential, commercial, and multi-level parking facilities." }]
    },
    'exterior-house-washing': {
        title: "Exterior House Washing",
        subtitle: "Curb Appeal Experts",
        image: "/assets/img/services/house_washing_v3.png",
        breadcrumbImg: "/assets/img/services/house_washing_v3.png",
        description: "A safe and gentle soft-wash solution designed to clean render, brick, and cladding while preserving surface integrity.",
        heroChecklist: ["Gentle Soft-Wash", "Mold & Algae Kill", "Window Safe", "Detailed Eave Cleaning"],
        whySections: [{ title: "Protect Your Paint", desc: "Dirt and mold rot your exterior over time.", img: "/assets/img/services/house_washing_v3.png", isReversed: false }],
        process: [{ title: "Soak", icon: "fas fa-spray-can", desc: "Lifting grime with eco-detergents." }, { title: "Rinse", icon: "fas fa-shower", desc: "Low-pressure soft rinsing." }, { title: "Detail", icon: "fas fa-check", desc: "Wiping window sills and frames." }],
        faqs: [{ q: "Is it safe?", a: "Yes, uses lower pressure than a garden hose." }]
    },
    'roof-restoration-cleaning': {
        title: "Roof Restoration Cleaning",
        subtitle: "Asset Protection",
        image: "/assets/img/services/roof_wash_v3.png",
        breadcrumbImg: "/assets/img/services/roof_wash_v3.png",
        description: "Specialized pressure and soft-washing for all roof types, extending lifespan and improving aesthetics.",
        heroChecklist: ["Deep Grit Removal", "Moss & Lichen Kill", "Tile Safe Approach", "Full Gutter Flush After"],
        whySections: [{ title: "Extend Roof Life", desc: "Built-up organic matter traps moisture and causes rot.", img: "/assets/img/services/roof_wash_v3.png", isReversed: false }],
        process: [{ title: "Scouring", icon: "fas fa-water", desc: "High-pressure removal of embedded stains." }, { title: "Bio-Treat", icon: "fas fa-leaf", desc: "Targeting organics at the root." }, { title: "Protect", icon: "fas fa-shield", desc: "Shielding against future wear." }],
        faqs: [{ q: "How long?", a: "Typically 2-4 hours." }]
    },
    'gutter-maintenance-cleaning': {
        title: "Gutter Maintenance & Cleaning",
        subtitle: "Water Management",
        image: "/assets/img/services/gutter_clean_v4.png",
        breadcrumbImg: "/assets/img/services/gutter_clean_v4.png",
        description: "Ensure smooth water flow by clearing leaves and debris, preventing blockages and protecting your property.",
        heroChecklist: ["Sludge Extraction", "Downpipe Flushing", "Minor Leak Repair", "Full Waste Removal"],
        whySections: [{ title: "Safety First", desc: "Don't risk the ladder; let us handle the heights.", img: "/assets/img/services/gutter_clean_v4.png", isReversed: false }],
        process: [{ title: "Vac-Extract", icon: "fas fa-trash", desc: "Full extraction of all debris." }, { title: "Flush", icon: "fas fa-faucet", desc: "Ensuring downpipes are free-flowing." }, { title: "Report", icon: "fas fa-file-alt", desc: "Before and after photos provided." }],
        faqs: [{ q: "How often?", a: "Twice a year is recommended." }]
    },
    'retaining-wall-cleaning': {
        title: "Retaining Wall Cleaning",
        subtitle: "Stone & Masonry Care",
        image: "/assets/img/services/retaining_wall_v3.png",
        breadcrumbImg: "/assets/img/services/retaining_wall_v3.png",
        description: "Remove deep-seated dirt and organic buildup from brick, stone, and concrete retaining walls, restoring their original masonry beauty.",
        heroChecklist: ["Organic Growth Elimination", "Efflorescence Removal", "Masonry Safe Approach", "Precision Pressure Control"],
        whySections: [{ title: "Revitalize Your Landscape", desc: "A clean retaining wall transforms the entire look of your garden and outdoor tiers.", img: "/assets/img/services/retaining_wall_v3.png", isReversed: false }],
        process: [{ title: "Assess", icon: "fas fa-search", desc: "Identifying masonry type and growth level." }, { title: "Treat", icon: "fas fa-flask", desc: "Applying eco-safe surfactants to lift grime." }, { title: "Wash", icon: "fas fa-water", desc: "Gentle yet effective pressure scouring." }],
        faqs: [{ q: "Will it damage the mortar?", a: "We use low-to-medium pressure to ensure mortar integrity remains intact." }]
    },
    'concrete-sealing-solutions': {
        title: "Concrete Sealing Solutions",
        subtitle: "Surface Protection",
        image: "/assets/img/services/concrete_sealing_v3.png",
        breadcrumbImg: "/assets/img/services/concrete_sealing_v3.png",
        description: "Protect and enhance your concrete surfaces with high-performance sealers that repel moisture, stains, and UV damage.",
        heroChecklist: ["Deep Penetrating Seal", "Water & Oil Repellent", "Enhanced Color Finish", "Longevity Guaranteed"],
        whySections: [{ title: "Prevent Costly Damage", desc: "Sealing prevents water ingress that causes cracking and erosion over time.", img: "/assets/img/services/concrete_sealing_v3.png", isReversed: false }],
        process: [{ title: "Deep Clean", icon: "fas fa-broom", desc: "Removing all contaminants before sealing." }, { title: "Dry", icon: "fas fa-wind", desc: "Ensuring the surface is bone-dry for bonding." }, { title: "Apply", icon: "fas fa-brush", desc: "Professional application of high-grade sealers." }],
        faqs: [{ q: "How long does it last?", a: "Typically 2-5 years depending on traffic and product chosen." }]
    },
    'decorative-concrete-staining': {
        title: "Decorative Concrete Staining",
        subtitle: "Artistic Surfaces",
        image: "/assets/img/services/concrete_staining_v3.png",
        breadcrumbImg: "/assets/img/services/concrete_staining_v3.png",
        description: "Breathe new life into plain concrete with professional staining that adds rich, variegated color and artistic depth to your property.",
        heroChecklist: ["Variegated Color Depth", "UV Stable Pigments", "Internal & External", "Custom Finish Options"],
        whySections: [{ title: "Aesthetic Transformation", desc: "Turn gray concrete into a designer feature that enhances your property's overall value.", img: "/assets/img/services/concrete_staining_v3.png", isReversed: false }],
        process: [{ title: "Etch", icon: "fas fa-flask", desc: "Opening concrete pores for maximum stain absorption." }, { title: "Infuse", icon: "fas fa-fill-drip", desc: "Careful application of artisanal pigments." }, { title: "Seal", icon: "fas fa-shield-alt", desc: "Locking in the color with a high-gloss or matte shield." }],
        faqs: [{ q: "Can old concrete be stained?", a: "Yes, provided the surface is porous and free of existing sealers." }]
    }
};

const ServiceDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    const service = serviceData[slug];
    
    // State for the delivery selection
    const [showDelivery, setShowDelivery] = useState(false);
    const [inquiryData, setInquiryData] = useState(null);

    if (!service) {
        return <Layout breadcrumbTitle="Service Not Found">
            <div className="container py-120 text-center">
                <h2>Service Not Found</h2>
                <Link href="/" className="pf-btn mt-30">Back to Services</Link>
            </div>
        </Layout>;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        
        const data = {
            from_name: formData.get('Name'),
            reply_to: formData.get('Email'),
            site_address: formData.get('Address'),
            service_type: service.title,
            subject: `New Service Inquiry: ${service.title} - ${formData.get('Name')}`,
            body: `Hello Icon Facility Management Team,

You have received a new service inquiry from your website.

===================================
INQUIRY DETAILS
===================================
Service: ${service.title}
Client Name: ${formData.get('Name')}
Client Email: ${formData.get('Email')}
Site Address: ${formData.get('Address')}
===================================

Please respond to this request within 24 hours.

Sent from Icon Facility Services - Digital Gateway`
        };

        setInquiryData(data);
        setShowDelivery(true);
        form.reset();
    };

    const handleDelivery = (type) => {
        const to = "info@iconfacilitys.com.au";
        const subject = encodeURIComponent(inquiryData.subject);
        const body = encodeURIComponent(inquiryData.body);

        let url = "";
        if (type === 'gmail') {
            url = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
        } else if (type === 'outlook') {
            url = `https://outlook.office.com/mail/deeplink/compose?to=${to}&subject=${subject}&body=${body}`;
        } else {
            url = `mailto:${to}?subject=${subject}&body=${body}`;
        }

        window.open(url, '_blank');
        setShowDelivery(false);
    };

    return (
        <Layout headTitle={service.title} headerCls="transparent-header">
             <style jsx>{`
                .hero-light {
                    background-color: #fcfcfd !important;
                    background-image: radial-gradient(#e2e8f0 0.5px, transparent 0.5px);
                    background-size: 24px 24px;
                }
                .text-navy {
                    color: #0d1b33 !important;
                }
                .text-slate {
                    color: #64748b !important;
                }
                .pf-glass-white {
                    background: rgba(255, 255, 255, 0.8) !important;
                    backdrop-filter: blur(12px) !important;
                    border: 1px solid rgba(255, 255, 255, 0.3) !important;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08) !important;
                }
                .pf-delivery-card {
                    background: white;
                    padding: 20px;
                    border-radius: 16px;
                    border: 1px solid #e2e8f0;
                    margin-top: 20px;
                    text-align: center;
                    animation: fadeIn 0.3s ease;
                }
                .delivery-btn {
                    width: 100%;
                    padding: 12px;
                    margin-bottom: 10px;
                    border-radius: 10px;
                    border: 1px solid #e2e8f0;
                    background: #f8fafc;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    font-weight: 600;
                    transition: all 0.2s ease;
                }
                .delivery-btn:hover {
                    background: #f1f5f9;
                    transform: translateY(-2px);
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @media (max-width: 991px) {
                    .pf-service-hero { 
                        padding: 0 !important; 
                        min-height: 220px !important; 
                        display: block !important;
                        position: relative;
                        background-attachment: scroll !important;
                        border-bottom: 4px solid var(--primary-cyan);
                    }
                    .pf-subtitle { 
                        font-size: 10px !important; 
                        letter-spacing: 4px !important; 
                        opacity: 0.8;
                        margin-bottom: 25px !important;
                        display: block !important;
                    }
                    .hero-title { 
                        position: absolute;
                        top: 60%;
                        left: 20px;
                        transform: translateY(-50%);
                        z-index: 1;
                        font-size: 2.2rem !important; 
                        line-height: 1 !important;
                        letter-spacing: -1px !important;
                        text-align: left !important;
                        padding-left: 20px;
                        border-left: 3px solid var(--primary-cyan);
                        display: inline-block;
                        width: auto;
                        max-width: 90%;
                        background: none !important;
                        backdrop-filter: none !important;
                        box-shadow: none !important;
                    }
                    .hero-title span { display: block !important; }
                    .hero-desc { display: none !important; }
                    .pf-hero-checklist-wrap { display: none !important; }
                    
                    .pf-editorial-section:first-of-type {
                        padding-top: 40px !important;
                    }
                    
                    .pf-editorial-section { padding: 40px 0 !important; }
                    .pf-editorial-section h2 { font-size: 1.6rem !important; margin-bottom: 15px !important; }
                    .pf-editorial-section p { font-size: 0.9rem !important; }
                    .pf-editorial-section img { height: 280px !important; }
                    
                    .pf-process-grid-area { padding: 40px 0 !important; }
                    .pf-process-grid-area h2 { font-size: 1.6rem !important; }
                    .pf-process-grid-area .mb-80 { margin-bottom: 30px !important; }
                    
                    .pf-cta-box { padding: 40px 20px !important; border-radius: 20px !important; }
                    .pf-cta-box h2 { font-size: 1.6rem !important; margin-bottom: 15px !important; }
                    .pf-cta-box p { font-size: 0.95rem !important; margin-bottom: 25px !important; }
                    .pf-cta-btns { flex-direction: column !important; gap: 12px 0 !important; max-width: 100% !important; margin: 0 auto !important; }
                    .pf-cta-btns .pf-btn, .pf-cta-btns .pf-btn-outline { 
                        width: 100% !important; 
                        max-width: 100% !important;
                        margin: 0 !important; 
                        padding: 18px 20px !important; 
                        justify-content: center !important; 
                        display: flex !important;
                        flex: 1 1 100% !important;
                    }
                }
                
                /* Hero Specific Compact Styles */
                .hero-light {
                    position: relative;
                    min-height: 350px;
                    display: flex;
                    align-items: center;
                }
                .text-white { color: #fff !important; }
                .pf-subtitle { color: var(--primary-cyan) !important; font-weight: 800; text-transform: uppercase; letter-spacing: 3px; display: block; margin-bottom: 10px; font-size: 11px; }
                .hero-title { font-size: clamp(2rem, 5vw, 3.8rem) !important; font-weight: 900 !important; line-height: 1.1; margin-bottom: 15px; letter-spacing: -2px; text-transform: uppercase; }
                .hero-desc { font-size: 1.05rem !important; line-height: 1.5; margin-bottom: 25px !important; opacity: 0.9; }
            `}</style>

            <section className="pf-service-hero pt-140 pb-60 hero-light" style={{ 
                overflow: 'hidden',
                backgroundImage: `linear-gradient(rgba(13, 27, 51, 0.85), rgba(13, 27, 51, 0.85)), url(${service.breadcrumbImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 text-center text-lg-center wow fadeInUp">
                            <h1 className="text-white hero-title">
                                {service.title.split(' ').map((word, i) => (
                                    <span key={i}>{word} </span>
                                ))}
                            </h1>
                            <p className="text-white hero-desc" style={{ maxWidth: '800px', margin: '0 auto 30px' }}>{service.description}</p>
                            
                            <div className="pf-hero-checklist-wrap" style={{ display: 'flex', justifyContent: 'center' }}>
                                <ul className="pf-hero-checklist" style={{ listStyle: 'none', padding: 0, display: 'inline-grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px 30px', textAlign: 'left', width: '100%', maxWidth: '900px' }}>
                                    {service.heroChecklist && service.heroChecklist.map((item, index) => (
                                        <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem', fontWeight: '600', color: '#fff' }}>
                                            <div style={{ width: '20px', height: '20px', background: 'var(--primary-cyan)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#0d1b33' }}>
                                                <i className="fas fa-check"></i>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {service.whySections && service.whySections.map((section, index) => (
                <section key={index} className="pf-editorial-section pt-60 pb-60" style={{ background: index % 2 !== 0 ? '#fcfcfd' : 'white' }}>
                    <div className="container">
                        <div className={`row align-items-center ${section.isReversed ? 'flex-row-reverse' : ''}`}>
                            <div className="col-lg-6 mb-25 mb-lg-0 wow fadeInUp">
                                <img src={section.img} alt={section.title} style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }} />
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                                <div style={{ padding: section.isReversed ? '0 30px 0 0' : '0 0 0 30px' }}>
                                    <h2 className="text-navy" style={{ fontSize: '2.1rem', fontWeight: '800', marginBottom: '15px', letterSpacing: '-1px' }}>{section.title}</h2>
                                    <p className="text-slate" style={{ fontSize: '1.05rem', lineHeight: '1.6', marginBottom: 0 }}>{section.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            <section className="pf-process-grid-area pt-80 pb-80" style={{ background: '#fff' }}>
                <div className="container">
                    <div className="text-center mb-50 wow fadeInUp">
                        <h2 className="text-navy" style={{ fontSize: '2.4rem', fontWeight: '800', letterSpacing: '-1px' }}>Operational Flow</h2>
                    </div>
                    <div className="row">
                        {service.process.map((step, index) => (
                            <div className="col-lg-4 mb-25 mb-lg-0 wow fadeInUp" key={index} data-wow-delay={`.${index+1}s`}>
                                <div style={{ textAlign: 'center', padding: '25px 20px', background: '#fcfcfd', borderRadius: '20px', height: '100%' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'white', color: 'var(--primary-cyan)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', margin: '0 auto 15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                                        <i className={step.icon}></i>
                                    </div>
                                    <h3 className="text-navy" style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '8px' }}>{step.title}</h3>
                                    <p className="text-slate" style={{ fontSize: '0.9rem', lineHeight: '1.4', marginBottom: 0 }}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pf-final-cta-area pt-80 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="pf-cta-box text-center" style={{ 
                                background: '#0d1b33', 
                                padding: '100px 60px', 
                                borderRadius: '48px', 
                                color: 'white',
                                boxShadow: '0 40px 80px rgba(0,0,0,0.2)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '400px', height: '400px', background: 'var(--primary-cyan)', opacity: 0.03, borderRadius: '50%', pointerEvents: 'none' }}></div>
                                <h2 style={{ fontSize: '3.4rem', fontWeight: '800', marginBottom: '30px', letterSpacing: '-2px', color: 'white' }}>Exceptional service is just a click away.</h2>
                                <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.7)', marginBottom: '50px', maxWidth: '750px', margin: '0 auto 50px' }}>Contact our specialists today to tailor a facility solution that exceeds your expectations.</p>
                                <div className="pf-cta-btns" style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 5 }}>
                                    <Link href="/contact" className="pf-btn" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '18px 20px', fontSize: '1rem', background: 'var(--primary-cyan)', color: '#fff !important', borderRadius: '12px', border: 'none', cursor: 'pointer' }}>Consult Now <i className="fas fa-calendar-alt" style={{ marginLeft: '10px' }} /></Link>
                                    <a href="tel:61483798622" className="pf-btn-outline" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '18px 20px', fontSize: '1rem', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '12px', cursor: 'pointer' }}>Call Expert <i className="fas fa-phone" style={{ marginLeft: '10px' }} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ServiceDetail;
