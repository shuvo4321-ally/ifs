import { useRouter } from 'next/router';
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Link from 'next/link';
import React, { useState } from 'react';

const serviceData = {
    'window-cleaning': {
        title: "High-Clarity Glass & Window Detailing",
        subtitle: "Precision cleaning for residential and commercial facades, utilizing advanced pure-water technology for a streak-free, crystal finish.",
        image: "/assets/img/services/window_clean_v3.png",
        breadcrumbImg: "/assets/img/services/window_clean_v3.png",
        description: "Streak-free, high-clarity cleaning for all residential and commercial glass surfaces. We use pure water technology and professional squeegee techniques to deliver flawless results on windows of any height.",
        heroChecklist: ["Pure Water Tech", "Internal & External", "Sill & Frame Wipedown", "High-Rise Ready"],
        specializedAreas: ["Office Buildings", "Shopfronts & Retail", "Residential Homes", "High-Rise Towers", "Strata Developments", "Schools & Hospitals"],
        detailedServices: [
            { title: "Internal Glass Cleaning", icon: "fas fa-home" },
            { title: "External Window Washing", icon: "fas fa-building" },
            { title: "Sill & Frame Wipedown", icon: "fas fa-border-all" },
            { title: "Skylight & Atrium Cleaning", icon: "fas fa-sun" },
            { title: "Screen Removal & Clean", icon: "fas fa-th-large" },
            { title: "High-Rise Rope Access", icon: "fas fa-mountain" }
        ],
        benefits: [
            "Crystal-clear results with zero streaks or water marks.",
            "Pure water technology that leaves no chemical residue.",
            "Fully insured rope-access teams for buildings of any height.",
            "Regular scheduling options for ongoing maintenance."
        ],
        whySections: [{ title: "Better Views, Better Impressions", desc: "Don't let dirty windows spoil your view or your brand. Clean windows flood your space with natural light and present a polished, professional image to every visitor." }],
        packages: [
            { title: "Residential Window Clean", desc: "Full internal and external window cleaning for homes, including sills, frames, and screen removal." },
            { title: "Commercial Glass Service", desc: "Scheduled window maintenance for offices, shopfronts, and commercial buildings with minimal disruption." },
            { title: "High-Rise Specialist", desc: "Rope-access and elevated work platform window cleaning for towers and multi-story buildings." },
            { title: "Strata & Body Corporate", desc: "Common area glass cleaning for apartment buildings including lobbies, stairwells, and balustrades." }
        ],
        process: [{ title: "Scrub", icon: "fas fa-hand-sparkles", desc: "Removing organic buildup and surface grime." }, { title: "Squeegee", icon: "fas fa-tint", desc: "Streak-free drying technique for flawless clarity." }, { title: "Polish", icon: "fas fa-star", desc: "Microfiber finish for brilliance on every pane." }],
        faqs: [
            { q: "Do you do frames and sills?", a: "Yes, sills, frames, and tracks are included as standard in every window clean." },
            { q: "Can you clean high-rise windows?", a: "Yes, our rope-access certified teams handle buildings of any height, fully insured and compliant." },
            { q: "Do you use chemicals on the glass?", a: "We primarily use pure water technology which leaves zero chemical residue. For stubborn stains, we use eco-safe, biodegradable solutions." },
            { q: "How often should windows be cleaned?", a: "We recommend monthly for commercial properties and quarterly for residential to maintain optimal clarity." },
            { q: "Do you clean skylights and atriums?", a: "Yes, we have specialized equipment for overhead glass including skylights, atriums, and glass roofs." }
        ]
    },
    'workplace-cleaning': {
        title: "Premium Workplace & Corporate Sanitation",
        subtitle: "Bespoke facility management for high-performance offices. We create healthier, more productive environments through hospital-grade precision.",
        image: "/assets/img/services/workplace_cleaning_ifs.jpg",
        breadcrumbImg: "/assets/img/services/workplace_cleaning_ifs.jpg",
        description: "Bespoke cleaning strategies designed for modern corporate environments. We focus on business continuity and creating a productive, healthy atmosphere for your teams.",
        heroChecklist: ["After-Hours Service", "ISO 9001 Standards", "Police Checked Staff", "Flexible Scheduling"],
        specializedAreas: ["Corporate Head Offices", "Co-working & Shared Spaces", "Financial & Legal Firms", "Tech Hubs", "Creative Studios", "Call Centres"],
        detailedServices: [
            { title: "Desk & Workstation Disinfection", icon: "fas fa-desktop" },
            { title: "Boardroom & Meeting Space Detailing", icon: "fas fa-briefcase" },
            { title: "IT/Server Room Anti-Static Cleaning", icon: "fas fa-server" },
            { title: "Breakroom & Kitchen Sanitization", icon: "fas fa-coffee" },
            { title: "Premium Restroom Management", icon: "fas fa-bath" },
            { title: "Waste & Recycling Segregation", icon: "fas fa-recycle" }
        ],
        benefits: [
            "After-hours cleaning with zero disruption to your business operations.",
            "ISO 9001 quality management protocols on every visit.",
            "Police-checked, uniformed staff with full public liability insurance.",
            "Dedicated account manager and real-time quality reporting."
        ],
        whySections: [{ title: "A Clean Office Is a Productive Office", desc: "Studies show employees in clean, well-maintained workplaces are up to 15% more productive. Our workplace cleaning programs are designed to create environments where your team can do their best work." }],
        packages: [
            { title: "Daily Maintenance", desc: "Focuses on high-traffic areas, waste removal, desk sanitization, and restroom upkeep to keep your office fresh every day." },
            { title: "Deep Corporate Clean", desc: "Intensive weekly or bi-weekly care targeting carpets, upholstery, kitchen appliances, and high-touch surfaces." },
            { title: "After-Hours Service", desc: "Full office clean completed outside business hours so your team arrives to a spotless workspace every morning." },
            { title: "Periodic Specialist Services", desc: "Quarterly or annual services including carpet extraction, window cleaning, and hard floor restoration." }
        ],
        process: [{ title: "Audit", icon: "fas fa-clipboard-check", desc: "We assess your workspace and identify priority zones." }, { title: "Schedule", icon: "fas fa-calendar-alt", desc: "A custom cleaning program is built around your hours." }, { title: "Deliver", icon: "fas fa-star", desc: "Consistent, quality-checked service on every visit." }],
        faqs: [
            { q: "Do you offer daily cleaning?", a: "Yes, we specialize in daily, weekly, and bespoke cleaning schedules designed around your exact operating hours." },
            { q: "Are your staff police checked?", a: "Absolutely. All Icon Facility Services staff undergo thorough police checks and identity verification before deployment." },
            { q: "How do you handle secure areas?", a: "We work with building management to obtain appropriate access credentials and always respect confidentiality protocols." },
            { q: "Do you provide cleaning supplies?", a: "Yes, all equipment, chemicals, and consumables are supplied by us. We use GECA-certified, eco-friendly products." },
            { q: "What is your quality control process?", a: "We conduct regular site inspections and provide clients with digital quality reports. Any issues are resolved within 24 hours." }
        ]
    },
    'retail-care': {
        title: "Elite Retail & Brand Experience Care",
        subtitle: "Maintaining immaculate shopping environments that reinforce your brand's prestige. Tailored daily maintenance for luxury showrooms and high-traffic retail.",
        image: "/assets/img/services/retail_environment_ifs.jpg",
        breadcrumbImg: "/assets/img/services/retail_environment_ifs.jpg",
        description: "A clean retail environment directly impacts sales and customer loyalty. Our retail cleaning specialists maintain immaculate, welcoming spaces that reinforce your brand's premium positioning.",
        heroChecklist: ["Before-Hours Setup", "High-Traffic Areas", "Display Case Care", "Brand Consistent"],
        specializedAreas: ["Fashion Boutiques", "Shopping Centres", "Supermarkets", "Pharmacies", "Electronics Stores", "Luxury Retail"],
        detailedServices: [
            { title: "Shopfront & Window Display Cleaning", icon: "fas fa-store" },
            { title: "Floor Maintenance & Polishing", icon: "fas fa-broom" },
            { title: "Fitting Room Sanitization", icon: "fas fa-door-open" },
            { title: "Display Case & Shelf Dusting", icon: "fas fa-box-open" },
            { title: "Customer Restroom Upkeep", icon: "fas fa-bath" },
            { title: "Back-of-House & Stockroom Cleaning", icon: "fas fa-warehouse" }
        ],
        benefits: [
            "Scheduled cleaning around trading hours for zero disruption to sales.",
            "Enhanced customer experience through consistently pristine environments.",
            "Brand-aligned presentation maintained across all touchpoints.",
            "Flexible call-out services for spills and high-traffic events."
        ],
        whySections: [{ title: "First Impressions Drive Revenue", desc: "Your retail environment is your brand made physical. A spotless, well-presented store communicates quality and trust before a customer even picks up a product." }],
        packages: [
            { title: "Pre-Opening Clean", desc: "Daily before-hours service ensuring your store is immaculate before the first customer arrives." },
            { title: "Throughout-Day Touch-Ups", desc: "Scheduled mid-day checks for high-traffic zones, restrooms, and entrances during trading hours." },
            { title: "Post-Close Deep Clean", desc: "Thorough end-of-day service covering all floor areas, displays, and back-of-house spaces." },
            { title: "Seasonal Refresh", desc: "Intensive periodic cleans aligned with new season changeovers and major promotional events." }
        ],
        process: [{ title: "Plan", icon: "fas fa-map", desc: "Mapping your store layout and identifying priority zones." }, { title: "Schedule", icon: "fas fa-clock", desc: "Deploying around your trading hours seamlessly." }, { title: "Polish", icon: "fas fa-star", desc: "Delivering a presentation-ready environment daily." }],
        faqs: [
            { q: "Can you clean before the store opens?", a: "Yes, pre-opening cleans are our specialty. We work overnight or in the early morning to ensure your store is pristine before doors open." },
            { q: "Do you handle spills during trading hours?", a: "We offer responsive call-out services for spills and incidents during trading hours to maintain your store's presentation." },
            { q: "Can you service multiple locations?", a: "Yes, we manage cleaning programs across retail chains and multiple-location operations with consistent standards at every site." },
            { q: "What products do you use near merchandise?", a: "All products used near displays and merchandise are fragrance-free and safe for use around sensitive goods and electronics." },
            { q: "Do you clean window displays?", a: "Yes, shopfront windows and internal display cases are included in our retail cleaning programs." }
        ]
    },
    'industrial-cleaning': {
        title: "Industrial Facility & Warehouse Detailing",
        subtitle: "Heavy-duty cleaning engineered for high-compliance operational spaces. WHS-certified solutions for complex manufacturing and distribution environments.",
        image: "/assets/img/services/industrial_facility_ifs.jpg",
        breadcrumbImg: "/assets/img/services/industrial_facility_ifs.jpg",
        description: "Heavy-duty cleaning engineered for warehouses, factories, and large operational spaces with demanding safety and compliance requirements.",
        heroChecklist: ["WHS Compliant", "Specialised Equipment", "Hazardous Waste Handling", "Minimal Downtime"],
        specializedAreas: ["Manufacturing Plants", "Warehouses & Distribution", "Food Processing Facilities", "Chemical Plants", "Mining Facilities", "Automotive Workshops"],
        detailedServices: [
            { title: "Industrial Floor Scrubbing & Degreasing", icon: "fas fa-industry" },
            { title: "Machinery & Equipment Wipedown", icon: "fas fa-cogs" },
            { title: "High-Bay & Racking Cleaning", icon: "fas fa-warehouse" },
            { title: "Loading Dock & Hardstand Cleaning", icon: "fas fa-truck" },
            { title: "Hazardous Waste & Chemical Handling", icon: "fas fa-biohazard" },
            { title: "Washroom & Amenities Block Service", icon: "fas fa-bath" }
        ],
        benefits: [
            "Full WHS compliance and site-specific safety inductions for all operators.",
            "Specialized industrial-grade equipment for deep degreasing and extraction.",
            "Flexible scheduling to minimize impact on production schedules.",
            "Fully insured teams with experience in high-risk environments."
        ],
        whySections: [{ title: "Safety Starts With Cleanliness", desc: "In industrial environments, cleanliness is a safety requirement. Our teams understand the unique hazards of manufacturing and warehouse settings and operate to the highest safety standards." }],
        packages: [
            { title: "Routine Facility Maintenance", desc: "Regular scheduled cleaning of common areas, amenities, and general floor areas to maintain a safe working environment." },
            { title: "Deep Industrial Clean", desc: "Intensive degreasing and scrubbing of machinery surrounds, drains, and hard floors using industrial equipment." },
            { title: "Shutdown Clean", desc: "Comprehensive facility clean during planned shutdowns, including high-bay areas, racking, and equipment surfaces." },
            { title: "Hazmat & Spill Response", desc: "Certified hazardous material clean-up services compliant with EPA and WHS regulations." }
        ],
        process: [{ title: "Induct", icon: "fas fa-hard-hat", desc: "Site-specific safety inductions for all personnel." }, { title: "Deploy", icon: "fas fa-cogs", desc: "Industrial-grade equipment mobilized to your facility." }, { title: "Certify", icon: "fas fa-certificate", desc: "Post-clean compliance sign-off and documentation." }],
        faqs: [
            { q: "Are your staff trained for industrial sites?", a: "Yes, all industrial cleaning operators hold relevant WHS certifications and complete site-specific inductions before work begins." },
            { q: "Can you clean during production hours?", a: "We can schedule cleaning around production windows to minimize downtime. We also specialize in shutdown cleans for more intensive work." },
            { q: "Do you handle chemical spills?", a: "Yes, our hazmat-certified teams handle chemical spills and contaminated waste in accordance with EPA and WHS guidelines." },
            { q: "What equipment do you use?", a: "We deploy ride-on scrubbers, high-pressure washers, industrial vacuums, and specialist degreasing systems suited to your facility type." },
            { q: "Do you provide cleaning documentation?", a: "Yes, we provide full cleaning records and compliance documentation for audit purposes after every service." }
        ]
    },
    'healthcare-hygiene': {
        title: "Clinical Hygiene & Healthcare Sanitation",
        subtitle: "Specialized infection control for medical environments. Following strict TGA protocols to ensure patient safety and uncompromising clinical standards.",
        image: "/assets/img/services/healthcare_hygiene_ifs.jpg",
        breadcrumbImg: "/assets/img/services/healthcare_hygiene_ifs.jpg",
        description: "Precision cleaning for medical environments, following strict infection control protocols to ensure patient safety and regulatory compliance.",
        heroChecklist: ["Infection Control Protocols", "TGA-Approved Products", "Clinical Staff Trained", "24/7 Response"],
        specializedAreas: ["Hospitals & Day Surgeries", "GP & Medical Clinics", "Dental Practices", "Pathology Labs", "Aged Care Facilities", "Allied Health Centres"],
        detailedServices: [
            { title: "Terminal & Isolation Room Cleaning", icon: "fas fa-hospital" },
            { title: "Operating Theatre Decontamination", icon: "fas fa-user-md" },
            { title: "Clinical Waste Handling", icon: "fas fa-biohazard" },
            { title: "High-Touch Surface Disinfection", icon: "fas fa-hands-wash" },
            { title: "Waiting Room & Reception Sanitization", icon: "fas fa-chair" },
            { title: "Bathroom & Sluice Room Service", icon: "fas fa-bath" }
        ],
        benefits: [
            "Infection control protocols aligned with Australian healthcare standards.",
            "TGA-approved hospital-grade disinfectants used throughout.",
            "Clinical cleaning staff trained in PPE use and bio-hazard handling.",
            "Detailed cleaning records and audit trails for accreditation compliance."
        ],
        whySections: [{ title: "Zero Tolerance for Contamination", desc: "Healthcare environments require a level of precision that goes far beyond standard cleaning. Our clinical hygiene teams are trained to hospital-grade infection control standards, protecting both patients and staff." }],
        packages: [
            { title: "Daily Clinical Clean", desc: "Comprehensive daily cleaning of all patient areas, clinical zones, and high-touch surfaces using hospital-grade disinfectants." },
            { title: "Terminal Room Clean", desc: "Deep decontamination of patient rooms following discharge, following strict infection prevention protocols." },
            { title: "Periodic Deep Clean", desc: "Intensive periodic cleaning of clinical equipment surrounds, ceiling fixtures, and hard-to-reach areas." },
            { title: "Emergency Response Clean", desc: "Rapid-response cleaning and decontamination for spillages, outbreaks, or infection control incidents." }
        ],
        process: [{ title: "Assess", icon: "fas fa-clipboard-check", desc: "Risk assessment and zone classification before each clean." }, { title: "Disinfect", icon: "fas fa-spray-can", desc: "TGA-approved products applied to clinical standards." }, { title: "Verify", icon: "fas fa-certificate", desc: "ATP testing and signed completion records provided." }],
        faqs: [
            { q: "Are your staff infection control trained?", a: "Yes, all healthcare cleaning staff hold infection control certifications and are trained in the correct use of PPE and clinical cleaning procedures." },
            { q: "What disinfectants do you use?", a: "We use TGA-approved hospital-grade disinfectants with proven efficacy against bacteria, viruses, and fungi, including MRSA and COVID-19." },
            { q: "Do you provide cleaning documentation?", a: "Yes, we maintain detailed cleaning logs, product data sheets, and audit-ready records for every service." },
            { q: "Can you respond to infection outbreaks?", a: "Yes, we provide rapid-response decontamination services for suspected or confirmed infection incidents, available 24/7." },
            { q: "Do you service aged care facilities?", a: "Yes, we have extensive experience in residential aged care and understand the specific cleaning and infection control requirements of these environments." }
        ]
    },
    'educational-cleaning': {
        title: "Educational Facility & Campus Care",
        subtitle: "Safe, child-friendly cleaning for schools and universities. Promoting healthy learning environments through non-toxic, allergen-aware protocols.",
        image: "/assets/img/services/educational_facility_ifs.jpg",
        breadcrumbImg: "/assets/img/services/educational_facility_ifs.jpg",
        description: "Safe, child-friendly cleaning for schools, universities, and educational institutions, promoting healthy learning environments for students and staff.",
        heroChecklist: ["Child-Safe Products", "After-Hours Service", "Holiday Deep Cleans", "Allergy Aware"],
        specializedAreas: ["Primary & Secondary Schools", "Universities & TAFE", "Childcare Centres", "Special Education Facilities", "Libraries", "Sporting & Hall Facilities"],
        detailedServices: [
            { title: "Classroom & Learning Space Cleaning", icon: "fas fa-chalkboard-teacher" },
            { title: "Canteen & Food Area Sanitization", icon: "fas fa-utensils" },
            { title: "Toilet Block & Changeroom Service", icon: "fas fa-bath" },
            { title: "Library & Resource Room Care", icon: "fas fa-book" },
            { title: "Hall, Gymnasium & Sports Surface Cleaning", icon: "fas fa-running" },
            { title: "Science Lab Decontamination", icon: "fas fa-flask" }
        ],
        benefits: [
            "Non-toxic, child-safe cleaning products used throughout all learning spaces.",
            "After-hours and holiday cleaning schedules to minimize student disruption.",
            "Allergy-aware protocols with fragrance-free product options.",
            "Specialized holiday and term-break deep cleaning programs."
        ],
        whySections: [{ title: "Healthy Environments, Better Outcomes", desc: "Clean, well-maintained schools reduce absenteeism and create conditions where students and staff can thrive. Our education cleaning teams understand the unique requirements of high-occupancy learning facilities." }],
        packages: [
            { title: "Daily School Clean", desc: "After-hours daily cleaning of classrooms, corridors, toilets, and common areas in preparation for the next school day." },
            { title: "Term Break Deep Clean", desc: "Intensive cleaning during school holidays including carpet cleaning, hard floor stripping, and detailed furniture wipedown." },
            { title: "Specialist Area Service", desc: "Targeted cleaning for canteens, science labs, art rooms, and gymnasiums requiring specialist products or procedures." },
            { title: "Event & Sports Facility Clean", desc: "Pre and post-event cleaning for school halls, sporting courts, and assembly areas." }
        ],
        process: [{ title: "Plan", icon: "fas fa-calendar-alt", desc: "Scheduling around the school timetable and term dates." }, { title: "Clean", icon: "fas fa-broom", desc: "Child-safe products applied by trained education cleaning staff." }, { title: "Report", icon: "fas fa-clipboard", desc: "Regular condition reports shared with facility management." }],
        faqs: [
            { q: "Are your products safe for children?", a: "Yes, all products used in educational settings are non-toxic, allergen-aware, and safe for use in environments occupied by children." },
            { q: "Do you clean during school hours?", a: "Our standard service is after hours. However, we can arrange day-porter services for canteens, toilets, and high-traffic areas during school hours if required." },
            { q: "Do you offer holiday deep cleans?", a: "Yes, we offer comprehensive term-break and holiday cleaning programs including carpet cleaning, hard floor restoration, and full facility deep cleans." },
            { q: "Can you clean science labs?", a: "Yes, we have staff trained in science lab decontamination protocols, handling chemical residue and specialized equipment safely." },
            { q: "How do you handle allergy concerns?", a: "We offer fragrance-free and hypoallergenic product options and can customize our cleaning program to address specific allergy requirements." }
        ]
    },
    'hospitality-cleaning': {
        title: "High-End Hospitality & Venue Management",
        subtitle: "Guest-ready standards for restaurants and luxury hotels. Aligned with food safety regulations and the highest expectations of the guest experience.",
        image: "/assets/img/services/hospitality_cleaning_ifs.jpg",
        breadcrumbImg: "/assets/img/services/hospitality_cleaning_ifs.jpg",
        description: "Professional cleaning solutions for restaurants, hotels, and hospitality venues, aligned with food safety standards and guest experience expectations.",
        heroChecklist: ["Food Safety Compliant", "7-Day Service", "Kitchen Deep Cleans", "Guest Area Focus"],
        specializedAreas: ["Restaurants & Cafes", "Hotels & Motels", "Function & Event Venues", "Bars & Nightclubs", "Food Courts", "Accommodation Providers"],
        detailedServices: [
            { title: "Commercial Kitchen & Exhaust Cleaning", icon: "fas fa-fire" },
            { title: "Dining Area & Table Setting Preparation", icon: "fas fa-utensils" },
            { title: "Guest Room & Suite Servicing", icon: "fas fa-bed" },
            { title: "Bathroom & Amenity Deep Clean", icon: "fas fa-bath" },
            { title: "Bar & Cellar Sanitization", icon: "fas fa-glass-martini-alt" },
            { title: "Function Room Setup & Clean", icon: "fas fa-calendar-check" }
        ],
        benefits: [
            "Food safety compliant cleaning aligned with HACCP and health authority standards.",
            "Seven-day service availability to match hospitality operating hours.",
            "Dedicated kitchen exhaust and grease trap cleaning programs.",
            "Discreet, uniformed staff trained to work around guests."
        ],
        whySections: [{ title: "Your Guests Notice Everything", desc: "In hospitality, cleanliness is a core part of the guest experience. A spotless venue communicates professionalism and care — and keeps health inspectors satisfied." }],
        packages: [
            { title: "Daily Venue Clean", desc: "Pre-opening and post-close cleaning of dining areas, bathrooms, entrances, and guest-facing spaces." },
            { title: "Kitchen Deep Clean", desc: "Intensive degreasing of cooking equipment, exhaust canopies, filters, and kitchen surfaces to food safety standards." },
            { title: "Room Servicing", desc: "Accommodation room cleaning and linen management to hotel-grade standards." },
            { title: "Function & Event Clean", desc: "Pre-event setup and post-event cleaning for function rooms and event spaces." }
        ],
        process: [{ title: "Assess", icon: "fas fa-clipboard-list", desc: "Understanding your venue layout and guest flow." }, { title: "Deploy", icon: "fas fa-user-tie", desc: "Trained hospitality cleaning staff on your schedule." }, { title: "Report", icon: "fas fa-star", desc: "Quality checks and reporting after every service." }],
        faqs: [
            { q: "Do you clean commercial kitchens?", a: "Yes, commercial kitchen cleaning including exhaust hoods, filters, cooking equipment, and grease traps is one of our core services." },
            { q: "Are you available 7 days a week?", a: "Yes, we provide 7-day service to accommodate hospitality venues that operate outside standard business hours." },
            { q: "Are you food safety compliant?", a: "Absolutely. Our hospitality cleaning programs align with HACCP principles and local health authority food safety requirements." },
            { q: "Can you work around guests?", a: "Yes, our uniformed staff are trained to operate discreetly in guest-facing environments without disrupting the customer experience." },
            { q: "Do you offer linen management?", a: "Yes, we can incorporate linen collection, laundering, and restocking into accommodation cleaning programs on request." }
        ]
    },
    'fitness-maintenance': {
        title: "Fitness & Wellness Facility Maintenance",
        subtitle: "Dedicated hygiene solutions for health clubs and studios. Anti-microbial treatments and locker room care for a germ-free fitness environment.",
        image: "/assets/img/services/fitness_facility_ifs.jpg",
        breadcrumbImg: "/assets/img/services/fitness_facility_ifs.jpg",
        description: "Dedicated cleaning for gyms, health clubs, and wellness centres, including equipment sanitization, locker room care, and court surface maintenance.",
        heroChecklist: ["Anti-Microbial Products", "Equipment Wipedown", "Locker Room Care", "Daily Service"],
        specializedAreas: ["Commercial Gyms", "Boutique Studios", "Health Clubs", "Swimming Pools", "Yoga & Pilates Studios", "Sporting Clubs"],
        detailedServices: [
            { title: "Gym Equipment Disinfection", icon: "fas fa-dumbbell" },
            { title: "Locker Room & Change Room Cleaning", icon: "fas fa-door-open" },
            { title: "Court & Studio Floor Maintenance", icon: "fas fa-running" },
            { title: "Sauna, Steam Room & Spa Cleaning", icon: "fas fa-hot-tub" },
            { title: "Reception & Common Area Care", icon: "fas fa-concierge-bell" },
            { title: "Pool Surround & Wet Area Cleaning", icon: "fas fa-swimmer" }
        ],
        benefits: [
            "Anti-microbial products that eliminate bacteria, fungi, and odour effectively.",
            "Daily cleaning schedules to maintain hygiene between member visits.",
            "Specialist wet area and pool surround cleaning protocols.",
            "Member-safe, fragrance-controlled product selection."
        ],
        whySections: [{ title: "Members Demand Hygiene", desc: "Gym hygiene is one of the top factors members consider when choosing or renewing at a fitness facility. Our specialist gym cleaning programs ensure your equipment, floors, and change rooms meet the highest standards." }],
        packages: [
            { title: "Daily Facility Clean", desc: "Before-open and after-close cleaning of all gym floors, equipment surrounds, reception, and change rooms." },
            { title: "Equipment Disinfection Program", desc: "Regular wipedown of all gym equipment, touchpoints, and surfaces using anti-microbial products." },
            { title: "Locker Room Deep Clean", desc: "Intensive cleaning of change rooms, showers, toilets, and lockers with anti-fungal treatments." },
            { title: "Periodic Deep Clean", desc: "Quarterly intensive clean of all areas including under equipment, mats, and specialist surface restoration." }
        ],
        process: [{ title: "Sanitize", icon: "fas fa-spray-can", desc: "Anti-microbial treatment of all contact surfaces." }, { title: "Restore", icon: "fas fa-broom", desc: "Floor and mat cleaning to pristine condition." }, { title: "Maintain", icon: "fas fa-shield-alt", desc: "Ongoing daily programs to sustain hygiene standards." }],
        faqs: [
            { q: "Do you clean all types of gym equipment?", a: "Yes, we clean free weights, cardio machines, resistance equipment, mats, and all contact surfaces using anti-microbial, gym-safe products." },
            { q: "How often should a gym be cleaned?", a: "High-traffic gyms should be cleaned daily, with periodic deep cleans quarterly. We'll recommend the right schedule for your facility size." },
            { q: "Can you clean during opening hours?", a: "We can provide daytime touch-up and restroom services during open hours, with full cleans scheduled around your trading hours." },
            { q: "What products do you use?", a: "We use anti-microbial, fragrance-controlled products that are effective against common gym pathogens including ringworm, staph, and athlete's foot fungi." },
            { q: "Do you service pool areas?", a: "Yes, pool surrounds, wet areas, and aquatic centre change rooms are part of our fitness facility cleaning offer." }
        ]
    },
    'residential-cleaning': {
        title: "Premium Residential & High-Rise Care",
        subtitle: "Comprehensive maintenance for prestige apartment towers. Focus on lobby presentation, lift hygiene, and common area excellence for modern residents.",
        image: "/assets/img/services/residential_cleaning_ifs.jpg",
        breadcrumbImg: "/assets/img/services/residential_cleaning_ifs.jpg",
        description: "Comprehensive maintenance for apartment complexes and high-rise buildings, ensuring pristine common areas, lobbies, and shared spaces for residents.",
        heroChecklist: ["Common Area Focus", "Lobby & Lift Care", "Strata Compliance", "Regular Scheduling"],
        specializedAreas: ["High-Rise Apartments", "Strata Complexes", "Serviced Apartments", "Student Accommodation", "Retirement Villages", "Mixed-Use Towers"],
        detailedServices: [
            { title: "Lobby & Entry Presentation", icon: "fas fa-door-open" },
            { title: "Lift & Stairwell Cleaning", icon: "fas fa-building" },
            { title: "Corridor & Common Area Maintenance", icon: "fas fa-ruler-horizontal" },
            { title: "Rubbish Room & Bin Bay Management", icon: "fas fa-trash" },
            { title: "Car Park & Basement Cleaning", icon: "fas fa-car" },
            { title: "Rooftop & Terrace Area Service", icon: "fas fa-city" }
        ],
        benefits: [
            "Consistent presentation that protects property values and resident satisfaction.",
            "Strata-compliant cleaning schedules with full reporting to building managers.",
            "Specialist lobby and high-gloss surface care for prestige buildings.",
            "Flexible programs for everything from budget strata to luxury towers."
        ],
        whySections: [{ title: "The Common Areas Define the Building", desc: "In residential towers, the lobby, lifts, and corridors are the first thing residents and visitors experience. Immaculate common areas signal quality management and protect your asset's reputation." }],
        packages: [
            { title: "Common Area Program", desc: "Regular scheduled cleaning of all lobbies, lifts, corridors, and stairwells to maintain a premium first impression." },
            { title: "Car Park & Basement Clean", desc: "Periodic scrubbing of basement car parks, line marking maintenance, and rubbish bay management." },
            { title: "Strata Compliance Package", desc: "Full building cleaning program structured to meet strata management reporting and compliance requirements." },
            { title: "Prestige Tower Service", desc: "White-glove daily lobby and amenity service for luxury residential towers with exacting presentation standards." }
        ],
        process: [{ title: "Plan", icon: "fas fa-building", desc: "Mapping all common areas and establishing priority zones." }, { title: "Clean", icon: "fas fa-broom", desc: "Consistent, scheduled service by dedicated site teams." }, { title: "Report", icon: "fas fa-clipboard-check", desc: "Regular inspection reports delivered to building management." }],
        faqs: [
            { q: "Do you work with strata managers?", a: "Yes, we regularly work with strata managers and body corporates, providing detailed reporting and flexible programs to meet strata requirements." },
            { q: "Can you clean high-rise window exteriors?", a: "Yes, our rope-access certified teams can clean external glass on towers of any height." },
            { q: "How often should common areas be cleaned?", a: "High-traffic towers benefit from daily cleaning of lobbies and lifts, with weekly attention to corridors and bi-weekly car park services." },
            { q: "Do you handle rubbish rooms?", a: "Yes, rubbish room cleaning and management including bin bay hosing and odour control is included in our residential programs." },
            { q: "Can you service the whole building?", a: "Yes, we offer full-building management including all common areas, car parks, pool areas, rooftops, and external facades." }
        ]
    },
    'event-preparation': {
        title: "Signature Event Preparation & Support",
        subtitle: "End-to-end cleaning for corporate events and private venues. Rapid turnarounds and pre-event detailing for an immaculate occasion.",
        image: "/assets/img/services/event_cleaning_ifs.jpg",
        breadcrumbImg: "/assets/img/services/event_cleaning_ifs.jpg",
        description: "Reliable cleaning services for events, handling both pre-event setup and post-event cleanup efficiently to ensure your venue is ready on time, every time.",
        heroChecklist: ["Pre-Event Setup", "Post-Event Cleanup", "Fast Turnaround", "Large Venue Capable"],
        specializedAreas: ["Conference Centres", "Wedding Venues", "Concert & Exhibition Halls", "Corporate Event Spaces", "Outdoor Event Sites", "Sporting Arenas"],
        detailedServices: [
            { title: "Pre-Event Deep Clean & Setup", icon: "fas fa-calendar-check" },
            { title: "Bathroom & Amenity Preparation", icon: "fas fa-bath" },
            { title: "Floor Polishing & Presentation", icon: "fas fa-star" },
            { title: "During-Event Touch-Up Service", icon: "fas fa-hands-helping" },
            { title: "Post-Event Waste Removal & Cleanup", icon: "fas fa-trash" },
            { title: "Rapid Venue Reset for Back-to-Back Events", icon: "fas fa-bolt" }
        ],
        benefits: [
            "Fast pre-event turnarounds ensuring venue readiness to deadline.",
            "Discreet during-event services that keep spaces pristine throughout.",
            "Large-scale post-event cleanup with rapid waste removal.",
            "Experienced teams familiar with high-pressure event environments."
        ],
        whySections: [{ title: "Every Event Deserves a Perfect Setting", desc: "Whether it's an intimate corporate lunch or a 5,000-person conference, the cleanliness of your venue shapes every guest's experience. Our event cleaning teams deliver speed, precision, and reliability." }],
        packages: [
            { title: "Pre-Event Preparation", desc: "Comprehensive pre-event clean including floor polishing, bathroom preparation, and full venue presentation." },
            { title: "During-Event Service", desc: "Discreet cleaning attendants maintaining restrooms, removing waste, and refreshing common areas throughout your event." },
            { title: "Post-Event Cleanup", desc: "Full venue cleanup including waste removal, floor cleaning, and reset to base condition after your event concludes." },
            { title: "Rapid Turnaround Reset", desc: "High-speed venue reset for back-to-back events, ensuring the space is spotless and ready for the next group." }
        ],
        process: [{ title: "Brief", icon: "fas fa-calendar-alt", desc: "Understanding your event timeline and venue requirements." }, { title: "Prepare", icon: "fas fa-broom", desc: "Pre-event clean delivered to your exact deadline." }, { title: "Restore", icon: "fas fa-star", desc: "Rapid post-event cleanup and venue reset." }],
        faqs: [
            { q: "Can you work to a tight pre-event deadline?", a: "Yes, we specialize in deadline-driven pre-event cleans and will mobilize as many staff as needed to meet your setup time." },
            { q: "Do you provide staff during the event?", a: "Yes, we offer cleaning attendants who manage restrooms, remove waste, and keep public areas presentable throughout your event." },
            { q: "Can you handle very large venues?", a: "Yes, we regularly service large conference centres, arenas, and exhibition halls with teams scaled to the size of your venue." },
            { q: "How quickly can you turn around a venue?", a: "For standard events, we can complete a full reset within 2-4 hours. For very large events, we recommend discussing your specific timeline." },
            { q: "Do you handle outdoor event sites?", a: "Yes, we provide outdoor event cleanup including waste removal, furniture cleaning, and ground maintenance for outdoor sites." }
        ]
    },
    'post-construction': {
        title: "Post-Construction & Handover Detailing",
        subtitle: "Transforming raw sites into move-in ready masterpieces. Specialist builders' cleans for residential developments and commercial fit-outs.",
        image: "/assets/img/services/post_construction_ifs.jpg",
        breadcrumbImg: "/assets/img/services/post_construction_ifs.jpg",
        description: "Thorough cleanup services for construction and renovation sites, removing builder's dust, debris, and residue to prepare spaces for handover or occupation.",
        heroChecklist: ["Builder's Dust Removal", "Sticker & Adhesive Removal", "Window Polish", "Handover Ready"],
        specializedAreas: ["New Residential Builds", "Commercial Fit-Outs", "Renovation Projects", "Office Refurbishments", "Retail Fit-Outs", "Industrial Construction"],
        detailedServices: [
            { title: "Builder's Dust & Debris Removal", icon: "fas fa-hard-hat" },
            { title: "Window & Glass Polish", icon: "fas fa-wind" },
            { title: "Sticker & Construction Adhesive Removal", icon: "fas fa-spray-can" },
            { title: "Hard Floor Scrubbing & First Polish", icon: "fas fa-broom" },
            { title: "Fixture & Fitting Wipedown", icon: "fas fa-tools" },
            { title: "Handover Inspection Clean", icon: "fas fa-clipboard-check" }
        ],
        benefits: [
            "Specialist equipment for fine dust extraction and surface preparation.",
            "Safe adhesive and sticker removal without damage to surfaces.",
            "Handover-ready presentation that satisfies developer and client expectations.",
            "Experience across residential, commercial, and industrial construction sites."
        ],
        whySections: [{ title: "First Impressions at Handover", desc: "A builder's clean is the final step before your project makes its impression. We transform raw construction into a presentation-ready space that reflects the quality of your build." }],
        packages: [
            { title: "Initial Builder's Clean", desc: "Removal of bulk construction waste, dust, and debris from all surfaces in preparation for the final clean." },
            { title: "Final Handover Clean", desc: "Detailed cleaning of all surfaces, windows, fixtures, and fittings to presentation standard ready for handover." },
            { title: "Sparkle Clean", desc: "Premium final polish including window detailing, mirror polishing, and fixture brightening for luxury or prestige properties." },
            { title: "Defect & Touch-Up Clean", desc: "Targeted cleaning between defect inspections to maintain presentation standard during the defects liability period." }
        ],
        process: [{ title: "Clear", icon: "fas fa-trash", desc: "Bulk debris and construction waste removed first." }, { title: "Clean", icon: "fas fa-broom", desc: "Detailed cleaning of all surfaces and fixtures." }, { title: "Polish", icon: "fas fa-star", desc: "Final presentation polish to handover standard." }],
        faqs: [
            { q: "What does a post-construction clean include?", a: "Our standard post-construction clean covers dust removal from all surfaces, window cleaning, adhesive removal, floor scrubbing, and fixture wipedown." },
            { q: "How many stages are there?", a: "Most projects have two stages: an initial rough clean removing bulk debris, followed by a final handover clean for presentation. Large projects may also include a sparkle clean." },
            { q: "Can you clean before the builder has finished?", a: "We can perform stage cleans during construction with appropriate coordination, though our primary service is post-completion cleaning." },
            { q: "How long does a post-construction clean take?", a: "Timing depends on the size and condition of the site. We'll provide a time estimate during our pre-clean assessment." },
            { q: "Do you handle new apartment buildings?", a: "Yes, we have experience managing multi-unit residential building cleans including individual apartment preparation and common area cleans." }
        ]
    },
    'luxury-display': {
        title: "Luxury Display & Showroom Management",
        subtitle: "Flawless presentation for high-value retail and showrooms. White-glove service standard to enhance brand presence and product appeal.",
        image: "/assets/img/services/luxury_display_ifs.jpg",
        breadcrumbImg: "/assets/img/services/luxury_display_ifs.jpg",
        description: "Specialized cleaning for showrooms, galleries, and luxury display environments, delivering a flawless, polished presentation that enhances your brand and products.",
        heroChecklist: ["White-Glove Service", "Display Case Care", "Anti-Static Treatments", "Scheduled Visits"],
        specializedAreas: ["Automotive Showrooms", "Art Galleries", "Luxury Retail", "Jewellery Displays", "Property Displays", "Brand Experience Spaces"],
        detailedServices: [
            { title: "Display Case & Cabinet Polishing", icon: "fas fa-gem" },
            { title: "Showroom Floor Maintenance", icon: "fas fa-star" },
            { title: "Anti-Static Equipment Treatment", icon: "fas fa-bolt" },
            { title: "Mirror & Glass Surface Detailing", icon: "fas fa-expand" },
            { title: "Artwork & Display Piece Dusting", icon: "fas fa-palette" },
            { title: "Entrance & Facade Presentation", icon: "fas fa-door-open" }
        ],
        benefits: [
            "White-glove service standards for environments where presentation is paramount.",
            "Anti-static treatments protecting sensitive electronics and delicate displays.",
            "Streak-free glass and mirror polishing for flawless reflective surfaces.",
            "Discreet, scheduled visits to maintain perfection around your trading hours."
        ],
        whySections: [{ title: "When Product Presentation is Everything", desc: "In luxury retail and showroom environments, the cleanliness of your space is inseparable from the value of your products. A single smudge on a display case undermines thousands of dollars of merchandising." }],
        packages: [
            { title: "Daily Showroom Service", desc: "Before-hours cleaning of all display surfaces, floors, and entrance areas to ensure perfect presentation at opening." },
            { title: "Display Case Programme", desc: "Specialist cleaning of all glass cases, cabinets, and display units using streak-free, anti-static products." },
            { title: "Gallery & Art Space Clean", desc: "Careful dusting and cleaning around artwork and installations, following conservator-approved methods." },
            { title: "Automotive Showroom Service", desc: "Floor polishing, window cleaning, and vehicle display surround maintenance for car and luxury vehicle showrooms." }
        ],
        process: [{ title: "Assess", icon: "fas fa-search", desc: "Understanding your display layout and material sensitivities." }, { title: "Detail", icon: "fas fa-gem", desc: "White-glove cleaning of every surface and case." }, { title: "Present", icon: "fas fa-star", desc: "Flawless, inspection-ready finish on every visit." }],
        faqs: [
            { q: "Do you clean inside display cases?", a: "Yes, interior display case cleaning is a core part of our luxury display service, using appropriate non-abrasive, anti-static products." },
            { q: "Can you clean around artwork?", a: "Yes, we work carefully around artwork and installations using approved methods. We can coordinate with your curator or gallery manager on specific requirements." },
            { q: "What products do you use on luxury surfaces?", a: "We use specialist, surface-appropriate products for marble, glass, high-gloss finishes, and delicate materials. No generic all-purpose cleaners." },
            { q: "Can you work outside trading hours?", a: "Yes, our luxury display cleaning is typically scheduled before opening to ensure your space is perfect at the start of each day." },
            { q: "Do you clean automotive showrooms?", a: "Yes, we provide specialist automotive showroom cleaning including polished concrete floors, glass facades, and vehicle display surround maintenance." }
        ]
    },
    'exterior-parking': {
        title: "Exterior Asset & Parking Area Care",
        subtitle: "Industrial-grade maintenance for car parks and facades. Restoring kerb appeal and protecting outdoor assets through high-pressure technology.",
        image: "/assets/img/services/exterior_parking_ifs.jpg",
        breadcrumbImg: "/assets/img/services/exterior_parking_ifs.jpg",
        description: "Complete outdoor cleaning services covering parking areas, walkways, building exteriors, and hardstand surfaces using industrial pressure washing and sweeping equipment.",
        heroChecklist: ["High-Pressure Washing", "Graffiti Removal", "Line Marking Care", "Drain Management"],
        specializedAreas: ["Shopping Centre Car Parks", "Commercial Building Exteriors", "Industrial Hardstands", "Body Corporate Car Parks", "Council Facilities", "Airport & Transport Hubs"],
        detailedServices: [
            { title: "Car Park Pressure Washing & Scrubbing", icon: "fas fa-car" },
            { title: "Building Facade & Cladding Cleaning", icon: "fas fa-building" },
            { title: "Walkway & Footpath Cleaning", icon: "fas fa-walking" },
            { title: "Graffiti Removal & Prevention", icon: "fas fa-spray-can" },
            { title: "Drain & Pit Cleaning", icon: "fas fa-water" },
            { title: "Line Marking Maintenance & Preparation", icon: "fas fa-road" }
        ],
        benefits: [
            "Industrial-grade pressure washing equipment removing years of accumulated grime.",
            "Graffiti removal using appropriate solvents that protect the underlying surface.",
            "Drain and pit cleaning to prevent blockages and flooding.",
            "Scheduled programs that maintain kerb appeal and protect asset values."
        ],
        whySections: [{ title: "Your Exterior Defines Your Brand", desc: "The exterior and car park are the first and last things every customer sees. Stained pavement, dirty facades, and unkept walkways undermine the impression your business works to create." }],
        packages: [
            { title: "Car Park Wash Program", desc: "Regular pressure washing of car park surfaces, removal of oil stains, and drain maintenance to prevent blockages." },
            { title: "Building Facade Clean", desc: "Exterior wall, cladding, and facade cleaning using appropriate pressure and chemical treatments for your building's materials." },
            { title: "Graffiti Removal Service", desc: "Rapid-response graffiti removal using surface-appropriate solvents to restore your building's appearance." },
            { title: "Full Exterior Maintenance Package", desc: "Comprehensive exterior program covering car parks, walkways, facades, drains, and hardstand areas on a regular schedule." }
        ],
        process: [{ title: "Assess", icon: "fas fa-search", desc: "Surface inspection and selection of appropriate methods." }, { title: "Pressure Wash", icon: "fas fa-water", desc: "Industrial equipment deployed to remove grime and staining." }, { title: "Restore", icon: "fas fa-star", desc: "Clean, bright exterior presentation delivered on schedule." }],
        faqs: [
            { q: "Can you remove oil stains from car parks?", a: "Yes, we use specialist degreasers and pressure washing techniques specifically designed to lift oil and fuel stains from concrete and bitumen." },
            { q: "Do you remove graffiti?", a: "Yes, rapid-response graffiti removal is one of our exterior services. We use surface-appropriate solvents to remove graffiti without damaging the underlying material." },
            { q: "How often should a car park be cleaned?", a: "We recommend quarterly cleaning for standard commercial car parks, with monthly service for high-traffic or food-adjacent car parks." },
            { q: "Can you clean brick and stone facades?", a: "Yes, we clean brick, render, stone, and cladding using appropriate pressure levels and chemical treatments to avoid surface damage." },
            { q: "Do you clear blocked drains?", a: "We provide drain clearing and pit cleaning as part of our exterior maintenance programs to prevent water pooling and flooding." }
        ]
    },
    'driveway-concrete-cleaning': {
        title: "Driveway & Concrete Restoration",
        subtitle: "Deep extraction of oil, tyre marks, and organic buildup. Restoring the structural integrity and aesthetic of your property's entryways.",
        image: "/assets/img/services/driveway_clean_v3.png",
        breadcrumbImg: "/assets/img/services/driveway_clean_v3.png",
        description: "Industrial-grade high-pressure cleaning for all concrete surfaces. We use specialized surfactants and surface cleaners to lift deep-seated oil, tyre tracks, and stubborn organic staining without etching the substrate.",
        heroChecklist: ["Oil Stain Extraction", "Tyre Mark Removal", "Surface Sealing Ready", "Non-Toxic Surfactants"],
        specializedAreas: ["Exposed Aggregate", "Stamped Concrete", "Bitumen & Asphalt", "Pavers & Cobblestones", "Commercial Loading Docks", "Residential Driveways"],
        detailedServices: [
            { title: "High-Pressure Surface Scrubbing", icon: "fas fa-water" },
            { title: "Oil & Chemical Stain Treatment", icon: "fas fa-flask" },
            { title: "Mould & Algae Eradication", icon: "fas fa-leaf" },
            { title: "Joint Sanding & Top-Up", icon: "fas fa-border-none" },
            { title: "Expansion Joint Cleaning", icon: "fas fa-ruler-combined" },
            { title: "Post-Clean protective Rinse", icon: "fas fa-star" }
        ],
        benefits: [
            "Immediate enhancement of kerb appeal and property value.",
            "Removal of slippery organic growth for improved safety.",
            "Prepares surfaces for sealing or decorative staining.",
            "Environmentally responsible wastewater management."
        ],
        whySections: [{ title: "The Foundation of First Impressions", desc: "Your driveway is the first thing visitors see. Beyond aesthetics, regular pressure cleaning prevents the breakdown of concrete caused by oil penetration and organic roots." }],
        packages: [
            { title: "Standard Surface Wash", desc: "High-pressure clean to remove surface dirt, dust, and light organic growth from driveways and paths." },
            { title: "Deep Stain Extraction", desc: "Targeted treatment for oil, fuel, and grease stains combined with heavy-duty pressure cleaning." },
            { title: "The Full Restoration", desc: "Deep extraction followed by specialized treatment for mould and a final protective rinse." },
            { title: "Commercial Hardstand Care", desc: "Scheduled maintenance for large-scale parking and loading areas with industrial equipment." }
        ],
        process: [{ title: "Treat", icon: "fas fa-flask", desc: "Applying biodegradable degreasers to stubborn stains." }, { title: "Scrub", icon: "fas fa-redo", desc: "Mechanical scrubbing with industrial surface cleaners." }, { title: "Rinse", icon: "fas fa-water", desc: "Final high-volume rinse for a pristine, uniform finish." }],
        faqs: [
            { q: "Can you remove old oil stains?", a: "While we can significantly fade and often remove oil stains, success depends on how long the oil has been present. We use industrial degreasers for the best possible results." },
            { q: "Will pressure washing damage my concrete?", a: "No. We use professional surface cleaners that distribute pressure evenly, preventing the 'striping' or etching often seen with DIY equipment." },
            { q: "How long does it take to dry?", a: "Typically, the surface is ready for foot traffic within 1-2 hours, depending on weather and sunlight exposure." },
            { q: "Do you use chemicals?", a: "We use biodegradable, eco-friendly surfactants that are safe for your garden and local waterways." },
            { q: "Should I seal my driveway after cleaning?", a: "Yes, we highly recommend sealing to prevent future staining and protect the surface from the elements." }
        ]
    },
    'exterior-house-washing': {
        title: "Premium Soft-Wash House Exterior",
        subtitle: "Gentle yet effective removal of mould and grime from delicate facades. Protecting your home's envelope with low-pressure, high-chemical-action technology.",
        image: "/assets/img/services/house_washing_v3.png",
        breadcrumbImg: "/assets/img/services/house_washing_v3.png",
        description: "Our soft-wash system uses high-volume, low-pressure water combined with specialized detergents to kill mould, algae, and moss at the root, ensuring a longer-lasting clean without damaging paint or render.",
        heroChecklist: ["Low-Pressure Tech", "Mould Root Eradication", "Plant Safe Solvents", "Cladding Specialist"],
        specializedAreas: ["Rendered Walls", "Weatherboard & Cladding", "Brick & Stone Facades", "Eaves & Fascias", "Multi-Story Residences", "Heritage Properties"],
        detailedServices: [
            { title: "Soft-Wash Facade Sterilization", icon: "fas fa-spray-can" },
            { title: "Eave & Soffit Detailing", icon: "fas fa-home" },
            { title: "Window Surround & Frame Rinse", icon: "fas fa-border-all" },
            { title: "Spider Web & Nest Removal", icon: "fas fa-bug" },
            { title: "Gutter Exterior Whitening", icon: "fas fa-star" },
            { title: "External Door & Entryway Clean", icon: "fas fa-door-open" }
        ],
        benefits: [
            "Extends the life of your exterior paint and render assets.",
            "Healthier living environment through mould spore elimination.",
            "Safer for delicate surfaces like timber and heritage stone.",
            "Uniform, streak-free results across all building materials."
        ],
        whySections: [{ title: "Protect Your Largest Investment", desc: "Dirt and mould don't just look bad—ils hold moisture against your home's facade, leading to rot and paint failure. Our soft-wash system treats the cause, not just the symptoms." }],
        packages: [
            { title: "Essential Facade Wash", desc: "Soft-wash treatment of all external walls and windows to remove dust and light organic growth." },
            { title: "Full Exterior Sterilization", desc: "Comprehensive wash including eaves, gutters, and downpipes with mould-inhibiting detergents." },
            { title: "The Heritage Clean", desc: "Ultra-gentle cleaning for older properties or delicate rendered surfaces using specialized neutral cleaners." },
            { title: "Seasonal Maintenance", desc: "Annual wash to prevent the buildup of salt spray, dust, and organic matter." }
        ],
        process: [{ title: "Prep", icon: "fas fa-shield-alt", desc: "Protecting plants and delicate fixtures before starting." }, { title: "Detergent", icon: "fas fa-spray-can", desc: "Applying specialized foam to kill organic growth." }, { title: "Rinse", icon: "fas fa-tint", desc: "Low-pressure volume rinse to reveal a pristine finish." }],
        faqs: [
            { q: "Will the pressure damage my paint?", a: "No. Unlike traditional pressure washing, our soft-washing uses pressure similar to a garden hose, relying on specialized detergents to do the work." },
            { q: "Is it safe for my garden?", a: "Yes. We pre-wet all landscaping and use a final rinse to ensure detergents are diluted and neutralized, making it safe for your plants." },
            { q: "How long does a house wash last?", a: "Our chemical treatment kills mould at the root, typically keeping your home cleaner for 2-3 times longer than pressure washing alone." },
            { q: "Do you clean the windows too?", a: "A house wash includes a rinse of the windows, but for a streak-free finish, we recommend adding our specialized window cleaning service." },
            { q: "Can you wash multi-story homes?", a: "Yes, we use high-reach telescopic equipment to safely clean up to 3 stories from the ground." }
        ]
    },
    'roof-restoration-cleaning': {
        title: "Specialized Roof Hygiene & Restoration",
        subtitle: "Expert moss and lichen removal for tiled and metal roofing. Protecting your roof's integrity while restoring its original appearance.",
        image: "/assets/img/services/roof_wash_v3.png",
        breadcrumbImg: "/assets/img/services/roof_wash_v3.png",
        description: "Your roof is your home's first line of defense. Our specialized roof cleaning service safely removes moss, lichen, and algae that can crack tiles and block gutters, all while restoring the color and beauty of your property.",
        heroChecklist: ["Bio-Cide Treatment", "Safety Harness Certified", "Tile & Metal Specialist", "Gutter Protection"],
        specializedAreas: ["Terracotta Tiles", "Concrete Tiles", "Colorbond® Roofing", "Slate & Shingles", "Commercial Warehouses", "Residential Homes"],
        detailedServices: [
            { title: "Bio-Cide Moss Treatment", icon: "fas fa-biohazard" },
            { title: "Low-Pressure Tile Rinsing", icon: "fas fa-water" },
            { title: "Solar Panel Hygiene", icon: "fas fa-sun" },
            { title: "Skylight & Vent Cleaning", icon: "fas fa-wind" },
            { title: "Debris & Leaf Removal", icon: "fas fa-leaf" },
            { title: "Post-Clean Gutter Flush", icon: "fas fa-tint" }
        ],
        benefits: [
            "Prevents premature roof failure caused by invasive organic roots.",
            "Increases solar panel efficiency by up to 30%.",
            "Restores the aesthetic value and street appeal of your home.",
            "Reduces fire risk by removing dry organic debris."
        ],
        whySections: [{ title: "A Clean Roof Lasts Longer", desc: "Moss and lichen hold moisture against your roof and can grow into the joints of tiles, leading to cracks and leaks. Professional cleaning is an investment in your home's longevity." }],
        packages: [
            { title: "The Bio-Shield Treatment", desc: "Application of specialized bio-cide to kill moss and lichen over time, with zero pressure used." },
            { title: "Full Roof Restoration Wash", desc: "Comprehensive low-pressure wash and chemical treatment for immediate results and long-term protection." },
            { title: "Solar & Gutters Combo", desc: "Focuses on maximizing the efficiency of your solar panels and ensuring your gutters are clear." },
            { title: "Commercial Roof Maintenance", desc: "Large-scale cleaning for industrial and commercial buildings to maintain asset value." }
        ],
        process: [{ title: "Inspect", icon: "fas fa-search", desc: "Assess roof condition and identify potential leak points." }, { title: "Treat", icon: "fas fa-spray-can", desc: "Applying moss-killing solution to every surface." }, { title: "Flush", icon: "fas fa-water", desc: "Gentle rinse and thorough gutter flush to remove all residue." }],
        faqs: [
            { q: "Will walking on the roof damage my tiles?", a: "We use specialized safety equipment and walk only on the strongest points of the roof to prevent any damage to your tiles." },
            { q: "Does the moss come back?", a: "Our chemical treatment kills the spores at the root. We recommend a preventative treatment every 2-3 years to keep your roof moss-free." },
            { q: "Can you clean Colorbond roofs?", a: "Yes, we use specific soft-wash techniques for metal roofs to avoid scratching or damaging the protective coating." },
            { q: "Is the rinse water safe for my tanks?", a: "If you have rainwater tanks, we will disconnect them before the clean and reconnect them only once the roof is thoroughly flushed." },
            { q: "How long does it take?", a: "Most residential roofs take between 4-8 hours depending on the size and amount of organic growth." }
        ]
    },
    'gutter-maintenance-cleaning': {
        title: "Precision Gutter Clearance & Flow Management",
        subtitle: "Clearing debris and verifying drainage integrity for high-value properties. Preventing water damage through proactive maintenance.",
        image: "/assets/img/services/gutter_clean_v4.png",
        breadcrumbImg: "/assets/img/services/gutter_clean_v4.png",
        description: "Blocked gutters are a leading cause of water damage and fire risk in Australia. Our professional service ensures your gutters and downpipes are completely clear and functioning exactly as they should.",
        heroChecklist: ["Downpipe Flush", "Debris Removal", "Safety Harness Used", "Before/After Photos"],
        specializedAreas: ["Multi-Story Homes", "Commercial Warehouses", "Schools & Institutions", "Aged Care Facilities", "Strata Developments", "Industrial Sites"],
        detailedServices: [
            { title: "Manual Debris Removal", icon: "fas fa-hand-paper" },
            { title: "Downpipe Flow Testing", icon: "fas fa-water" },
            { title: "Gutter Guard Cleaning", icon: "fas fa-shield-alt" },
            { title: "Valley & Box Gutter Clearance", icon: "fas fa-ruler-combined" },
            { title: "Sky-Light & Solar Rinse", icon: "fas fa-sun" },
            { title: "Minor Leak Identification", icon: "fas fa-search" }
        ],
        benefits: [
            "Eliminates the risk of internal water damage from overflowing gutters.",
            "Reduces fire risk by removing combustible organic material.",
            "Prevents the breeding of mosquitoes and other pests in stagnant water.",
            "Preserves the structural integrity of your eaves and foundations."
        ],
        whySections: [{ title: "The Silent Protector of Your Home", desc: "You rarely think about your gutters until they fail. Proactive maintenance is a fraction of the cost of repairing water damage to ceilings, walls, and foundations." }],
        packages: [
            { title: "Annual Gutter Flush", desc: "Full removal of debris and a high-flow downpipe flush to ensure complete drainage integrity." },
            { title: "Pre-Summer Fire Prep", desc: "Specialized service focusing on complete dry debris removal from all roof areas and gutters." },
            { title: "High-Rise & Commercial", desc: "Safety-harness-based clearing for multi-story buildings and large-scale industrial sites." },
            { title: "Strata Program", desc: "Ongoing scheduled maintenance for complexes, including full reporting for property managers." }
        ],
        process: [{ title: "Clear", icon: "fas fa-broom", desc: "Removing all solid debris and bagging it for disposal." }, { title: "Flush", icon: "fas fa-water", desc: "Testing all downpipes with high-volume water flow." }, { title: "Verify", icon: "fas fa-check-circle", desc: "Final inspection and before/after photo documentation." }],
        faqs: [
            { q: "How often should I have my gutters cleaned?", a: "We recommend at least twice a year—once before the winter rains and once before the summer fire season." },
            { q: "Do you clean the outside of the gutters too?", a: "Our standard service is internal clearance. Exterior 'whitening' can be added as a specialized soft-wash service." },
            { q: "What if my downpipes are blocked underground?", a: "We will identify and clear any blockages within the accessible downpipes. If there's an underground issue, we'll document it for your plumber." },
            { q: "Are you insured for high-reach work?", a: "Yes, we are fully insured and our teams are certified for elevated work and harness use." },
            { q: "Do you take the waste with you?", a: "Yes, all gutter debris is bagged and removed from the site, leaving your property clean and tidy." }
        ]
    },
    'deck-patio-revitalization': {
        title: "Outdoor Living Space Revitalization",
        subtitle: "Restoring timber and stone patios to showroom condition. Professional deep-cleaning for the heart of your outdoor entertaining area.",
        image: "/assets/img/services/deck_patio_v3.png",
        breadcrumbImg: "/assets/img/services/deck_patio_v3.png",
        description: "Outdoor entertaining areas are an extension of your home. We use specialized cleaning agents and professional equipment to restore timber decks, stone patios, and tiled courtyards to their original beauty.",
        heroChecklist: ["Timber Safe Wash", "Stone & Tile Specialist", "Mould Eradication", "Ready for Oil/Seal"],
        specializedAreas: ["Timber Decks (Jarrah, Merbau)", "Paving & Sandstone", "Travertine & Marble", "Concrete Patios", "Pool Surrounds", "Glass Balustrades"],
        detailedServices: [
            { title: "Timber Tannin & Grime Extraction", icon: "fas fa-tree" },
            { title: "Stone & Paver Deep Cleaning", icon: "fas fa-th-large" },
            { title: "Mould & Algae Treatment", icon: "fas fa-leaf" },
            { title: "Furniture & Decor Wipedown", icon: "fas fa-chair" },
            { title: "Balustrade & Glass Cleaning", icon: "fas fa-window-maximize" },
            { title: "Pool Area Sanitization", icon: "fas fa-swimmer" }
        ],
        benefits: [
            "Restores the natural color and beauty of timber and stone.",
            "Removes slippery growth, making outdoor areas safer for guests.",
            "Prepares timber for oiling or staining with optimal absorption.",
            "Extends the life of your expensive outdoor investments."
        ],
        whySections: [{ title: "Enjoy Your Outdoor Lifestyle", desc: "A weathered, grey deck or a stained patio and doesn't just look tired—it can be a safety hazard. Our revitalization service brings the 'wow' factor back to your backyard." }],
        packages: [
            { title: "The Patio Refresh", desc: "Soft-wash cleaning of stone or tiled areas to remove dust, cobwebs, and light organic growth." },
            { title: "Timber Deck Restoration", desc: "Specialized chemical treatment to lift aged oil and tannins, followed by a gentle pressure wash." },
            { title: "The Entertainer's Package", desc: "Full cleaning of patio, deck, glass balustrades, and outdoor furniture surrounds." },
            { title: "Pool Zone Hygiene", desc: "Safe cleaning of pool surrounds using non-toxic products that won't affect water chemistry." }
        ],
        process: [{ title: "Cleanse", icon: "fas fa-spray-can", desc: "Applying surface-specific agents to lift deep-seated dirt." }, { title: "Detail", icon: "fas fa-hand-sparkles", desc: "Careful pressure washing or scrubbing of every corner." }, { title: "Condition", icon: "fas fa-star", desc: "Adding protective rinses to inhibit future organic growth." }],
        faqs: [
            { q: "Will pressure washing damage my timber deck?", a: "We use a 'soft-wash' approach for timber, relying on chemical action to lift dirt and then a low-pressure rinse to avoid splintering the wood." },
            { q: "Can you remove stains from sandstone?", a: "Yes, we use specialized stone cleaners that penetrate the pores of sandstone to lift organic staining and black-spot." },
            { q: "Should I oil my deck after you clean it?", a: "Yes. Our cleaning process opens the pores of the timber, making it the perfect time to apply a high-quality oil for protection." },
            { q: "Is it safe around my pool?", a: "We use biodegradable, phosphate-free cleaners and ensure zero runoff enters your pool wherever possible." },
            { q: "How long until I can use the area?", a: "The area is usually dry and ready for use within 2-4 hours after we finish." }
        ]
    },
    'retaining-wall-cleaning': {
        title: "Industrial Retaining Wall Detailing",
        subtitle: "High-pressure removal of stubborn organic staining from vertical surfaces. Restoring the clean lines of your landscaping assets.",
        image: "/assets/img/services/retaining_wall_v3.png",
        breadcrumbImg: "/assets/img/services/retaining_wall_v3.png",
        description: "Retaining walls are often subject to constant moisture and soil contact, leading to heavy black-spot and algae buildup. We restore brick, stone, and concrete walls using industrial-grade pressure washing and chemical treatments.",
        heroChecklist: ["Black-Spot Removal", "High-Psi Equipment", "Vertical Surface Specialist", "Efflorescence Treatment"],
        specializedAreas: ["Brick & Block Walls", "Concrete Retaining Walls", "Natural Stone Walls", "Limestone & Sandstone", "Commercial Perimeter Walls", "Residential Landscaping"],
        detailedServices: [
            { title: "High-Pressure Algae Removal", icon: "fas fa-water" },
            { title: "Black-Spot Mould Treatment", icon: "fas fa-skull-crossbones" },
            { title: "Efflorescence (Salt) Removal", icon: "fas fa-snowflake" },
            { title: "Weed & Moss Eradication", icon: "fas fa-leaf" },
            { title: "Protective Surface Sealing", icon: "fas fa-shield-alt" },
            { title: "Drainage Point Clearing", icon: "fas fa-tint" }
        ],
        benefits: [
            "Instantly improves the visual appeal of your landscaping.",
            "Prevents the structural degradation of wall joints and materials.",
            "Removes 'slippery wall' hazards in garden areas.",
            "Increases the resale value and overall kerb appeal of the property."
        ],
        whySections: [{ title: "Revitalize Your Garden's Framework", desc: "A clean retaining wall provides a crisp, professional backdrop for your plants and lawn. It's often the single most effective way to modernize an older garden." }],
        packages: [
            { title: "Standard Wall Wash", desc: "High-pressure wash to remove dirt and loose organic matter from common block walls." },
            { title: "Mould & Black-Spot Eradication", desc: "Intensive chemical treatment and pressure cleaning targeting deep-seated organic staining." },
            { title: "Stone Asset Restoration", desc: "Gentle yet effective cleaning for natural stone or limestone walls using pH-neutral agents." },
            { title: "The Perimeter Clean", desc: "Comprehensive cleaning of all retaining and perimeter walls across the whole property." }
        ],
        process: [{ title: "Analyze", icon: "fas fa-search", desc: "Identifying the type of growth and safest pressure level." }, { title: "Blast", icon: "fas fa-fan", desc: "Removing solid organic matter with precision jet technology." }, { title: "Seal", icon: "fas fa-lock", desc: "Optional sealing to prevent moisture ingress and future staining." }],
        faqs: [
            { q: "Why are there black spots on my stone wall?", a: "This is usually a type of lichen or mould known as 'black-spot' that grows into the pores of the stone. It requires chemical treatment to fully remove." },
            { q: "Will the pressure damage the mortar?", a: "We inspect the integrity of the wall beforehand and adjust our pressure to ensure we remove the dirt without damaging the joints." },
            { q: "Can you remove the white crusty salt?", a: "Yes, this is called efflorescence. We use specialized mild acids to dissolve the salt buildup and restore the wall's appearance." },
            { q: "Is the cleaning safe for my plants?", a: "We take great care to protect your garden, pre-wetting foliage and using targeted application methods to minimize exposure." },
            { q: "How long does a wall clean take?", a: "Most residential walls can be restored within 2-4 hours, depending on the height and total length." }
        ]
    },
    'concrete-sealing-solutions': {
        title: "Advanced Concrete Sealing & Protection",
        subtitle: "Long-term barrier protection against stains, moisture, and wear. Locking in the 'new look' of your concrete while extending its lifespan.",
        image: "/assets/img/services/concrete_sealing_v3.png",
        breadcrumbImg: "/assets/img/services/concrete_sealing_v3.png",
        description: "Raw concrete is highly porous and absorbs oil, dirt, and water easily. Our professional sealing solutions create an invisible or decorative barrier that makes your surfaces incredibly easy to maintain and virtually stain-proof.",
        heroChecklist: ["Deep-Penetrating Sealers", "High-Gloss or Matte", "Anti-Slip Additives", "Oil & Stain Resistant"],
        specializedAreas: ["Exposed Aggregate Driveways", "Plain & Coloured Concrete", "Commercial Loading Docks", "Factory & Warehouse Floors", "Pool Surrounds & Patios", "Retail Flooring"],
        detailedServices: [
            { title: "Penetrating Invisible Sealing", icon: "fas fa-shield-alt" },
            { title: "High-Gloss Topical Coatings", icon: "fas fa-tint" },
            { title: "Slip-Resistant Texture Application", icon: "fas fa-shoe-prints" },
            { title: "Colour-Enhancing Wet-Look Sealers", icon: "fas fa-magic" },
            { title: "Oil & Chemical Defense Barrier", icon: "fas fa-flask" },
            { title: "Dust-Proofing & Surface Hardening", icon: "fas fa-hammer" }
        ],
        benefits: [
            "Significantly reduces maintenance time and cleaning costs.",
            "Prevents oil, fuel, and food stains from penetrating the surface.",
            "Stops the growth of mould and weeds within the concrete pores.",
            "Provides a professional, uniform finish that looks brand new."
        ],
        whySections: [{ title: "Protect Your Surface Asset", desc: "Concrete is a significant investment. Without sealing, Australian weather and everyday use will cause it to stain and degrade. Sealing is the only way to lock in quality and durability." }],
        packages: [
            { title: "The Invisible Guard", desc: "Deep-penetrating sealer that provides maximum protection without changing the look of the concrete." },
            { title: "The Wet-Look Enhance", desc: "High-quality gloss sealer that darkens and enriches the natural color of your concrete or aggregate." },
            { title: "Industrial Hardener", desc: "Specialized lithium-based sealers for high-traffic warehouses and commercial spaces." },
            { title: "Residential Driveway Shield", desc: "Full clean and seal package designed for high-traffic family driveways." }
        ],
        process: [{ title: "Prepare", icon: "fas fa-broom", desc: "Intensive deep clean to ensure the surface is perfectly clear." }, { title: "Dry", icon: "fas fa-sun", desc: "Ensuring 100% moisture removal for optimal sealer adhesion." }, { title: "Apply", icon: "fas fa-paint-roller", desc: "Uniform application of premium-grade sealing chemicals." }],
        faqs: [
            { q: "Does sealing make the concrete slippery?", a: "We can include anti-slip glass beads or grit in the sealer to maintain or even improve traction, especially in wet areas." },
            { q: "How long does a sealer last?", a: "Topical gloss sealers typically last 2-4 years, while deep-penetrating invisible sealers can last up to 5-10 years depending on traffic." },
            { q: "Can you seal old concrete?", a: "Yes. Once we've performed a deep pressure clean and stain extraction, old concrete can be sealed to look drastically better and stay cleaner." },
            { q: "How long until I can drive on it?", a: "Usually 24 hours for foot traffic and 48-72 hours before driving a vehicle onto the newly sealed surface." },
            { q: "What is the difference between gloss and invisible?", a: "Gloss creates a film on top that shines, while invisible sealers soak deep into the pores and don't change the appearance at all." }
        ]
    },
    'decorative-concrete-staining': {
        title: "Artisan Concrete Staining & Finishing",
        subtitle: "Transforming raw concrete with deep-penetrating pigments and high-gloss finishes. A high-end alternative to floor coverings for modern environments.",
        image: "/assets/img/services/concrete_staining_v3.png",
        breadcrumbImg: "/assets/img/services/concrete_staining_v3.png",
        description: "Don't settle for boring grey concrete. Our staining services use specialized pigments to add depth, color, and character to your floors, creating a unique, durable finish that's perfect for both residential and commercial spaces.",
        heroChecklist: ["Deep Earth Tones", "UV Resistant Pigments", "High-Durability Finish", "Custom Colour Blending"],
        specializedAreas: ["Commercial Showrooms", "Modern Residential Living", "Alfresco & Entertaining", "Retail Boutique Floors", "Cafe & Restaurant Spaces", "Garage Conversions"],
        detailedServices: [
            { title: "Acid-Based Chemical Staining", icon: "fas fa-flask" },
            { title: "Water-Based Pigment Infusion", icon: "fas fa-palette" },
            { title: "Semi-Transparent Color Blending", icon: "fas fa-layer-group" },
            { title: "High-Gloss Protective Top-Coat", icon: "fas fa-star" },
            { title: "Industrial Diamond Grinding", icon: "fas fa-gem" },
            { title: "Concrete Dye & Polish System", icon: "fas fa-magic" }
        ],
        benefits: [
            "Creates a bespoke, designer look for a fraction of the cost of stone.",
            "Permanent color that won't chip, peel, or fade like paint.",
            "Extremely low maintenance—perfect for high-traffic retail.",
            "Unique marbled or mottled appearance for every floor."
        ],
        whySections: [{ title: "Elevate Your Floors to Art", desc: "Concrete staining isn't a coating; it's a chemical reaction that changes the color of the concrete forever. The result is a vibrant, translucent finish that looks like natural stone or aged leather." }],
        packages: [
            { title: "The Earth-Tone System", desc: "Warm browns, tans, and terracotta stains finished with a durable semi-gloss sealer." },
            { title: "Modern Industrial Grey", desc: "Enhanced grey detailing with graphite stains and a high-performance matte finish." },
            { title: "The Showroom Polish", desc: "Multi-stage diamond grinding followed by deep pigment infusion and high-gloss buffing." },
            { title: "Custom Color Design", desc: "Bespoke color matching and blending for unique architectural projects." }
        ],
        process: [{ title: "Grind", icon: "fas fa-tools", desc: "Opening the surface pores for even stain penetration." }, { title: "Stain", icon: "fas fa-palette", desc: "Apply pigments to achieve the desired depth and character." }, { title: "Polish", icon: "fas fa-magic", desc: "Applying protective top-coats to lock in color and shine." }],
        faqs: [
            { q: "Is staining like paint?", a: "No. Staining penetrates the concrete surface and reacts with the minerals, meaning the color is part of the stone and won't flake off." },
            { q: "Can you stain outdoor concrete?", a: "Yes, we use UV-stable stains specifically designed to withstand the harsh Australian sun without fading." },
            { q: "What colors are available?", a: "We primarily work with earth tones—browns, ambers, tans, and greys—as these produce the most natural and attractive results." },
            { q: "Will it cover existing cracks?", a: "Staining is translucent and will often highlight the natural character of the concrete, including fine cracks. We can repair larger cracks before staining." },
            { q: "Is it easy to clean?", a: "Yes! High-gloss stained floors only require simple mopping with a neutral cleaner to stay looking perfect for years." }
        ]
    }
};

const ServiceDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    const service = serviceData[slug];

    const [showDelivery, setShowDelivery] = useState(false);
    const [inquiryData, setInquiryData] = useState(null);
    const [activeFaq, setActiveFaq] = useState(0);

    if (!service) {
        return (
            <Layout breadcrumbTitle="Service Not Found">
                <div className="container py-120 text-center">
                    <h2>Service Not Found</h2>
                    <Link href="/" className="pf-btn mt-30">Back to Services</Link>
                </div>
            </Layout>
        );
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
            body: `Hello Icon Facility Management Team,\n\nNew inquiry for: ${service.title}\nName: ${formData.get('Name')}\nEmail: ${formData.get('Email')}\nAddress: ${formData.get('Address')}\n\nSent from Icon Facility Services`
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
        if (type === 'gmail') url = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
        else if (type === 'outlook') url = `https://outlook.office.com/mail/deeplink/compose?to=${to}&subject=${subject}&body=${body}`;
        else url = `mailto:${to}?subject=${subject}&body=${body}`;
        window.open(url, '_blank');
        setShowDelivery(false);
    };

    return (
        <Layout headTitle={service.title} headerCls="transparent-header">
            <style jsx>{`
                /* ==============================
                   EDITORIAL SERVICE DETAIL
                   Sharp, professional, zero AI-vibe
                ============================== */

                /* --- Layout --- */
                .sd-main { padding: 100px 0 0; background: #fff; }
                .sd-grid { display: grid; grid-template-columns: 1fr 340px; gap: 80px; align-items: start; }

                /* --- Opening Statement --- */
                .sd-lede { font-size: 1.2rem; color: #334155; line-height: 1.85; margin: 0 0 60px; max-width: 680px; }

                /* --- Sector Tags --- */
                .sd-sectors { display: flex; flex-wrap: wrap; gap: 0; margin-bottom: 60px; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; }
                .sd-sector-tag { padding: 10px 20px; font-size: 0.78rem; font-weight: 600; color: #475569; letter-spacing: 0.3px; border-right: 1px solid #e2e8f0; transition: color 0.2s ease, background 0.2s ease; }
                .sd-sector-tag:last-child { border-right: none; }
                .sd-sector-tag:hover { color: #0a0f1a; background: #f8fafc; }

                /* --- Section Headers --- */
                .sd-overline { font-size: 0.6rem; font-weight: 700; text-transform: uppercase; letter-spacing: 4px; color: #94a3b8; margin-bottom: 16px; display: block; }
                .sd-heading { font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 800; color: #0a0f1a; letter-spacing: -1px; line-height: 1.2; margin: 0 0 40px; }

                /* --- Service List (no icons, no circles) --- */
                .sd-service-list { margin: 0 0 80px; padding: 0; list-style: none; }
                .sd-service-item { display: flex; align-items: baseline; gap: 20px; padding: 18px 0; border-bottom: 1px solid #f1f5f9; transition: padding-left 0.2s ease; }
                .sd-service-item:first-child { border-top: 1px solid #f1f5f9; }
                .sd-service-item:hover { padding-left: 12px; }
                .sd-service-idx { font-size: 0.7rem; font-weight: 800; color: #cbd5e1; min-width: 24px; font-variant-numeric: tabular-nums; }
                .sd-service-name { font-size: 1rem; font-weight: 700; color: #0a0f1a; }

                /* --- Narrative Block --- */
                .sd-narrative { margin-bottom: 80px; }
                .sd-narrative-title { font-size: 1.5rem; font-weight: 800; color: #0a0f1a; letter-spacing: -0.5px; margin: 0 0 20px; line-height: 1.25; }
                .sd-narrative-body { font-size: 1rem; color: #475569; line-height: 1.85; margin: 0 0 30px; }

                /* --- Stats Row (flat) --- */
                .sd-stats { display: flex; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; margin-bottom: 80px; }
                .sd-stat { flex: 1; padding: 32px 0; text-align: center; border-right: 1px solid #e2e8f0; }
                .sd-stat:last-child { border-right: none; }
                .sd-stat-val { font-size: clamp(1.8rem, 3vw, 2.4rem); font-weight: 900; color: #0a0f1a; letter-spacing: -1.5px; line-height: 1; display: block; }
                .sd-stat-lbl { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #94a3b8; margin-top: 8px; display: block; }

                /* --- Packages (clean rows) --- */
                .sd-packages { margin-bottom: 80px; }
                .sd-pkg-list { margin: 0; padding: 0; list-style: none; }
                .sd-pkg-item { display: flex; align-items: flex-start; gap: 24px; padding: 28px 0; border-bottom: 1px solid #f1f5f9; transition: padding-left 0.2s ease; }
                .sd-pkg-item:first-child { border-top: 1px solid #f1f5f9; }
                .sd-pkg-item:hover { padding-left: 12px; }
                .sd-pkg-idx { font-size: 1.1rem; font-weight: 900; color: #e2e8f0; min-width: 32px; line-height: 1.3; font-variant-numeric: tabular-nums; }
                .sd-pkg-info { flex: 1; }
                .sd-pkg-name { font-size: 1rem; font-weight: 800; color: #0a0f1a; margin: 0 0 6px; }
                .sd-pkg-desc { font-size: 0.88rem; color: #64748b; line-height: 1.7; margin: 0; }

                /* --- Sidebar --- */
                .sd-sidebar { position: sticky; top: 120px; }
                .sd-sidebar-cta { background: #0a0f1a; padding: 40px 32px; margin-bottom: 2px; }
                .sd-sidebar-cta h3 { font-size: 1.15rem; font-weight: 800; color: #fff; margin: 0 0 12px; line-height: 1.3; }
                .sd-sidebar-cta p { font-size: 0.82rem; color: #64748b; line-height: 1.6; margin: 0 0 28px; }
                .sd-sidebar-phone { display: flex; align-items: center; justify-content: center; gap: 10px; padding: 14px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); color: #fff; text-decoration: none; font-weight: 700; font-size: 0.95rem; margin-bottom: 10px; transition: background 0.2s ease; }
                .sd-sidebar-phone:hover { background: rgba(255,255,255,0.08); }
                .sd-sidebar-phone i { color: #0ea5e9; }
                .sd-sidebar-quote { display: flex; align-items: center; justify-content: center; padding: 14px; background: #0ea5e9; color: #0a0f1a; text-decoration: none; font-weight: 800; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px; transition: background 0.2s ease; }
                .sd-sidebar-quote:hover { background: #38bdf8; }
                .sd-sidebar-wa { text-align: center; padding: 16px; background: rgba(255,255,255,0.02); border-top: 1px solid rgba(255,255,255,0.05); }
                .sd-sidebar-wa a { color: #25D366; text-decoration: none; font-size: 0.82rem; font-weight: 600; display: inline-flex; align-items: center; gap: 8px; }

                .sd-sidebar-block { padding: 28px 32px; background: #f8fafc; border-bottom: 1px solid #f1f5f9; }
                .sd-sidebar-block:last-child { border-bottom: none; }
                .sd-sidebar-block h4 { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #94a3b8; margin: 0 0 20px; }
                .sd-commit-item { display: flex; align-items: center; gap: 14px; padding: 8px 0; }
                .sd-commit-dash { width: 16px; height: 1px; background: #0ea5e9; flex-shrink: 0; }
                .sd-commit-text { font-size: 0.82rem; font-weight: 600; color: #334155; }

                .sd-process-item { display: flex; gap: 16px; padding: 12px 0; }
                .sd-process-num { font-size: 0.65rem; font-weight: 800; color: #cbd5e1; min-width: 20px; padding-top: 2px; }
                .sd-process-info h5 { font-size: 0.88rem; font-weight: 800; color: #0a0f1a; margin: 0 0 4px; }
                .sd-process-info p { font-size: 0.78rem; color: #64748b; line-height: 1.5; margin: 0; }

                /* --- Benefits (dark panel) --- */
                .sd-benefits { padding: 120px 0; background: #0a0f1a; }
                .sd-benefits-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
                .sd-benefits-title { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 800; color: #fff; letter-spacing: -1.5px; line-height: 1.15; margin: 0; }
                .sd-benefit-row { display: flex; align-items: flex-start; gap: 20px; padding: 24px 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
                .sd-benefit-row:last-child { border-bottom: none; }
                .sd-benefit-idx { font-size: 0.65rem; font-weight: 800; color: rgba(255,255,255,0.2); min-width: 24px; padding-top: 3px; font-variant-numeric: tabular-nums; }
                .sd-benefit-text { font-size: 0.95rem; color: rgba(255,255,255,0.65); line-height: 1.7; margin: 0; }
                .sd-benefit-text strong { color: #0ea5e9; font-weight: 700; }

                /* --- FAQ (clean split) --- */
                .sd-faq { padding: 120px 0; background: #fff; }
                .sd-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
                .sd-faq-q { display: block; width: 100%; text-align: left; background: none; border: none; outline: none; padding: 14px 0; font-size: 0.88rem; font-weight: 600; color: #94a3b8; cursor: pointer; transition: all 0.15s ease; border-bottom: 1px solid #f1f5f9; font-family: inherit; border-left: 2px solid transparent; padding-left: 16px; }
                .sd-faq-q.active { color: #0a0f1a; font-weight: 800; border-left-color: #0ea5e9; }
                .sd-faq-q:hover:not(.active) { color: #475569; }
                .sd-faq-answer { background: #f8fafc; padding: 40px; position: relative; }
                .sd-faq-answer p { font-size: 0.95rem; color: #475569; line-height: 1.8; margin: 0; }
                .sd-faq-footer { margin-top: 32px; display: flex; align-items: center; gap: 14px; }
                .sd-faq-footer span { font-size: 0.8rem; color: #94a3b8; }
                .sd-faq-footer a { font-size: 0.8rem; font-weight: 700; color: #0ea5e9; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }

                /* --- Responsive --- */
                @media (max-width: 991px) {
                    .sd-grid { grid-template-columns: 1fr; gap: 60px; }
                    .sd-sidebar { position: static; }
                    .sd-sectors { flex-wrap: wrap; }
                    .sd-sector-tag { border-bottom: 1px solid #e2e8f0; }
                    .sd-benefits-grid { grid-template-columns: 1fr; gap: 40px; }
                    .sd-faq-grid { grid-template-columns: 1fr; gap: 30px; }
                    .sd-benefits { padding: 80px 0; }
                    .sd-faq { padding: 80px 0; }
                }
                @media (max-width: 575px) {
                    .sd-main { padding: 60px 0 0; }
                    .sd-stats { flex-direction: column; }
                    .sd-stat { border-right: none; border-bottom: 1px solid #e2e8f0; padding: 24px 0; }
                    .sd-stat:last-child { border-bottom: none; }
                    .sd-sectors { flex-direction: column; }
                    .sd-sector-tag { border-right: none; }
                    .sd-sidebar-cta { padding: 32px 24px; }
                    .sd-sidebar-block { padding: 24px; }
                    .sd-faq-answer { padding: 28px; }
                }
            `}</style>

            <Breadcrumb breadcrumbTitle={service.title} breadcrumbSubtitle={service.subtitle} breadcrumbBg={service.breadcrumbImg} />

            {/* ===== MAIN CONTENT ===== */}
            <section className="sd-main">
                <div className="container">
                    <div className="sd-grid">

                        {/* --- LEFT COLUMN --- */}
                        <div>

                            {/* Lede */}
                            <p className="sd-lede wow fadeInUp" data-wow-delay=".1s">{service.description}</p>

                            {/* Sectors */}
                            {service.specializedAreas && service.specializedAreas.length > 0 && (
                                <div className="sd-sectors wow fadeInUp" data-wow-delay=".15s">
                                    {service.specializedAreas.map((area, idx) => (
                                        <span key={idx} className="sd-sector-tag">{area}</span>
                                    ))}
                                </div>
                            )}

                            {/* What We Cover */}
                            {service.detailedServices && service.detailedServices.length > 0 && (
                                <div className="wow fadeInUp" data-wow-delay=".2s">
                                    <span className="sd-overline">Scope of Work</span>
                                    <h2 className="sd-heading">What we cover.</h2>
                                    <ul className="sd-service-list">
                                        {service.detailedServices.map((item, idx) => (
                                            <li key={idx} className="sd-service-item">
                                                <span className="sd-service-idx">{String(idx + 1).padStart(2, '0')}</span>
                                                <span className="sd-service-name">{item.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Narrative */}
                            {service.whySections && service.whySections.map((section, index) => (
                                <div key={index} className="sd-narrative wow fadeInUp" data-wow-delay=".2s">
                                    <h3 className="sd-narrative-title">{section.title}</h3>
                                    <p className="sd-narrative-body">{section.desc}</p>
                                </div>
                            ))}

                            {/* Stats */}
                            <div className="sd-stats wow fadeInUp" data-wow-delay=".2s">
                                {[{ num: "500+", label: "Clients Served" }, { num: "98%", label: "Retention Rate" }, { num: "24/7", label: "Support" }].map((stat, si) => (
                                    <div className="sd-stat" key={si}>
                                        <span className="sd-stat-val">{stat.num}</span>
                                        <span className="sd-stat-lbl">{stat.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Packages */}
                            {service.packages && service.packages.length > 0 && (
                                <div className="sd-packages wow fadeInUp" data-wow-delay=".2s">
                                    <span className="sd-overline">Service Options</span>
                                    <h2 className="sd-heading">Available packages.</h2>
                                    <ul className="sd-pkg-list">
                                        {service.packages.map((pkg, idx) => (
                                            <li key={idx} className="sd-pkg-item">
                                                <span className="sd-pkg-idx">{String(idx + 1).padStart(2, '0')}</span>
                                                <div className="sd-pkg-info">
                                                    <p className="sd-pkg-name">{pkg.title}</p>
                                                    <p className="sd-pkg-desc">{pkg.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* --- RIGHT COLUMN (Sidebar) --- */}
                        <div>
                            <div className="sd-sidebar">

                                {/* CTA */}
                                <div className="sd-sidebar-cta">
                                    <h3>Get a quote for {service.title.toLowerCase()}.</h3>
                                    <p>Priority scheduling. Transparent pricing. No obligation.</p>
                                    <a href="tel:1800418411" className="sd-sidebar-phone">
                                        <i className="fas fa-phone-alt"></i> 1800 418 411
                                    </a>
                                    <Link href="/contact" className="sd-sidebar-quote">
                                        Request Free Quote <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                                    </Link>
                                    <div className="sd-sidebar-wa">
                                        <a href="https://wa.me/61483798622" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-whatsapp" style={{ fontSize: '1.1rem' }}></i> WhatsApp us
                                        </a>
                                    </div>
                                </div>

                                {/* Commitment */}
                                <div className="sd-sidebar-block">
                                    <h4>Our Commitment</h4>
                                    {["Fully Insured & Bonded", "Police Checked Staff", "ISO 9001 Standards", "Eco-Friendly Products"].map((text, i) => (
                                        <div key={i} className="sd-commit-item">
                                            <span className="sd-commit-dash"></span>
                                            <span className="sd-commit-text">{text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Process */}
                                {service.process && service.process.length > 0 && (
                                    <div className="sd-sidebar-block">
                                        <h4>How We Work</h4>
                                        {service.process.map((step, index) => (
                                            <div key={index} className="sd-process-item">
                                                <span className="sd-process-num">{String(index + 1).padStart(2, '0')}</span>
                                                <div className="sd-process-info">
                                                    <h5>{step.title}</h5>
                                                    <p>{step.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== BENEFITS (Dark) ===== */}
            {service.benefits && service.benefits.length > 0 && (
                <section className="sd-benefits">
                    <div className="container">
                        <div className="sd-benefits-grid">
                            <div>
                                <span className="sd-overline" style={{ color: '#475569' }}>Why It Matters</span>
                                <h2 className="sd-benefits-title wow fadeInUp" data-wow-delay=".2s">
                                    Why partnering with<br />Icon <span style={{ color: '#0ea5e9' }}>works.</span>
                                </h2>
                            </div>
                            <div>
                                {service.benefits.map((benefit, idx) => {
                                    const words = benefit.split(' ');
                                    const lead = words.slice(0, 3).join(' ');
                                    const rest = words.slice(3).join(' ');
                                    return (
                                        <div key={idx} className="sd-benefit-row wow fadeInUp" data-wow-delay={`${idx * 0.05}s`}>
                                            <span className="sd-benefit-idx">{String(idx + 1).padStart(2, '0')}</span>
                                            <p className="sd-benefit-text">
                                                <strong>{lead}</strong>{rest ? ` ${rest}` : ''}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ===== FAQ ===== */}
            {service.faqs && service.faqs.length > 0 && (
                <section className="sd-faq">
                    <div className="container">
                        <div style={{ marginBottom: '60px' }}>
                            <span className="sd-overline wow fadeInUp" data-wow-delay=".1s">Questions</span>
                            <h2 className="sd-heading wow fadeInUp" data-wow-delay=".15s">Frequently asked.</h2>
                        </div>
                        <div className="sd-faq-grid wow fadeInUp" data-wow-delay=".2s">
                            <div>
                                {service.faqs.map((faq, index) => (
                                    <button key={index} className={`sd-faq-q${activeFaq === index ? ' active' : ''}`} onClick={() => setActiveFaq(index)} type="button">
                                        {faq.q}
                                    </button>
                                ))}
                            </div>
                            <div>
                                <div className="sd-faq-answer">
                                    <p>{service.faqs[activeFaq].a}</p>
                                </div>
                                <div className="sd-faq-footer">
                                    <span>Still need help?</span>
                                    <Link href="/contact">
                                        Talk to a specialist <i className="fas fa-arrow-right" style={{ fontSize: '0.7rem' }}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

        </Layout>
    );
};

export default ServiceDetail;
