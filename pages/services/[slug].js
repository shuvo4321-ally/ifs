import { useRouter } from 'next/router';
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Link from 'next/link';
import React, { useState } from 'react';

const serviceData = {
    'window-cleaning': {
        title: "Professional Window Cleaning",
        subtitle: "Crystal Clear Views",
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
        title: "Workplace Cleaning Solutions",
        subtitle: "Commercial Excellence",
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
        title: "Retail Environment Care",
        subtitle: "Spotless Shopping Spaces",
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
        title: "Industrial Facility Cleaning",
        subtitle: "Heavy-Duty Precision",
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
        title: "Healthcare Hygiene Services",
        subtitle: "Clinical-Grade Sanitation",
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
        title: "Educational Facility Cleaning",
        subtitle: "Safe Learning Environments",
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
        title: "Hospitality Cleaning Services",
        subtitle: "Guest-Ready Standards",
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
        title: "Fitness Facility Maintenance",
        subtitle: "Sweat-Free, Germ-Free",
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
        title: "Residential & Tower Cleaning",
        subtitle: "Premium Building Care",
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
        title: "Event Venue Preparation",
        subtitle: "Ready For Every Occasion",
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
        title: "Post-Construction Cleaning",
        subtitle: "From Builder's Finish to Move-In Ready",
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
        title: "Luxury Display Space Cleaning",
        subtitle: "Flawless Presentation",
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
        title: "Exterior & Parking Area Cleaning",
        subtitle: "Pristine First Impressions",
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
                .text-navy { color: #0d1b33 !important; }
                .text-slate { color: #64748b !important; }
                .pf-delivery-card { background: white; padding: 20px; border-radius: 16px; border: 1px solid #e2e8f0; margin-top: 20px; text-align: center; animation: fadeIn 0.3s ease; }
                .delivery-btn { width: 100%; padding: 12px; margin-bottom: 10px; border-radius: 10px; border: 1px solid #e2e8f0; background: #f8fafc; display: flex; align-items: center; justify-content: center; gap: 10px; font-weight: 600; transition: all 0.2s ease; }
                .delivery-btn:hover { background: #f1f5f9; transform: translateY(-2px); }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

                @media (max-width: 991px) {
                    .service-details-area { padding-top: 30px !important; padding-bottom: 40px !important; }
                    .service-details-area .col-lg-8 p { font-size: 0.88rem !important; line-height: 1.7 !important; }
                    .col-lg-4.d-none.d-lg-block { display: block !important; margin-top: 30px; }
                    .service-sidebar-sticky { position: static !important; }
                    .benefits-section { padding-bottom: 40px !important; }
                    .benefits-section h2 { font-size: 1.5rem !important; }
                    .faq-section { padding-bottom: 40px !important; }
                    .faq-section h2 { font-size: 1.5rem !important; }
                    .svc-faq-split { flex-direction: column !important; gap: 0 !important; }
                    .svc-faq-qlist { width: 100% !important; border-bottom: 1px solid #e2e8f0; margin-bottom: 20px; }
                    .svc-faq-apanel { width: 100% !important; }
                    .svc-pkg-num { font-size: 1.3rem !important; min-width: 36px !important; }
                    .svc-stat-num { font-size: 1.7rem !important; }
                    .svc-pkg-row { gap: 16px !important; padding: 18px 0 !important; }
                    .svc-feature-row { padding: 12px 0 !important; }
                }
                @media (max-width: 575px) {
                    .service-details-area .svc-feature-col { flex: 0 0 100% !important; max-width: 100% !important; }
                }

                /* ── Editorial feature list ── */
                .svc-feature-row { display: flex; align-items: center; gap: 16px; padding: 15px 0; border-bottom: 1px solid #edf2f7; border-left: 3px solid transparent; transition: border-left-color 0.2s ease, padding-left 0.2s ease; }
                .svc-feature-row:hover { border-left-color: var(--primary-cyan); padding-left: 10px; }
                .svc-feature-num { font-size: 0.65rem; font-weight: 900; color: rgba(0,204,255,0.3); letter-spacing: 1px; min-width: 28px; flex-shrink: 0; }
                .svc-feature-title { font-size: 0.88rem; font-weight: 700; color: #0d1b33; line-height: 1.3; }

                /* ── Freestanding stats ── */
                .svc-stats-band { display: flex; gap: 0; margin-top: 28px; border-top: 1px solid #edf2f7; padding-top: 24px; }
                .svc-stat-block { flex: 1; text-align: center; position: relative; padding: 0 16px; }
                .svc-stat-block + .svc-stat-block::before { content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%); height: 36px; width: 1px; background: #e2e8f0; }
                .svc-stat-num { font-size: 2.2rem; font-weight: 900; color: #0d1b33; letter-spacing: -2px; line-height: 1; display: block; }
                .svc-stat-label { font-size: 0.62rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #94a3b8; margin-top: 5px; display: block; }

                /* ── Editorial package rows ── */
                .svc-pkg-list { border-top: 1px solid #edf2f7; }
                .svc-pkg-row { display: flex; align-items: flex-start; gap: 24px; padding: 24px 0; border-bottom: 1px solid #edf2f7; border-left: 3px solid transparent; padding-left: 0; transition: border-left-color 0.2s ease, padding-left 0.2s ease; }
                .svc-pkg-row:hover { border-left-color: var(--primary-cyan); padding-left: 14px; }
                .svc-pkg-num { font-size: 1.7rem; font-weight: 900; color: rgba(0,204,255,0.2); letter-spacing: -1px; min-width: 44px; line-height: 1; flex-shrink: 0; margin-top: 3px; }
                .svc-pkg-body { flex: 1; }
                .svc-pkg-title { font-size: 1rem; font-weight: 800; color: #0d1b33; margin: 0 0 5px 0; }
                .svc-pkg-desc { font-size: 0.83rem; color: #64748b; line-height: 1.6; margin: 0; }
                .svc-pkg-arrow { margin-left: auto; color: rgba(0,204,255,0.35); font-size: 0.9rem; flex-shrink: 0; align-self: center; transition: color 0.2s ease, transform 0.2s ease; }
                .svc-pkg-row:hover .svc-pkg-arrow { color: var(--primary-cyan); transform: translateX(4px); }

                /* ── Two-column FAQ ── */
                .svc-faq-split { display: flex; gap: 48px; align-items: flex-start; }
                .svc-faq-qlist { flex: 0 0 42%; }
                .svc-faq-apanel { flex: 1; }
                .svc-faq-q { display: block; width: 100%; text-align: left; background: none; border: none; outline: none; border-left: 3px solid transparent; padding: 13px 16px; font-size: 0.86rem; font-weight: 600; color: #64748b; cursor: pointer; transition: all 0.18s ease; border-bottom: 1px solid #f1f5f9; font-family: 'Poppins', sans-serif; }
                .svc-faq-q.active { border-left-color: var(--primary-cyan); color: #0d1b33; font-weight: 800; background: rgba(0,204,255,0.04); }
                .svc-faq-q:hover:not(.active) { border-left-color: rgba(0,204,255,0.25); color: #0d1b33; }
                .svc-faq-answer { background: #f8fafc; border-radius: 16px; padding: 36px 32px 32px; position: relative; min-height: 180px; }
                .svc-faq-answer::before { content: '\\201C'; position: absolute; top: 4px; left: 18px; font-size: 5rem; color: rgba(0,204,255,0.14); line-height: 1; font-family: Georgia, serif; pointer-events: none; }
                .svc-faq-answer-text { font-size: 0.95rem; color: #4b5563; line-height: 1.75; padding-top: 16px; }
            `}</style>

            <Breadcrumb breadcrumbTitle={service.title} breadcrumbSubtitle={service.description} breadcrumbBg={service.breadcrumbImg}>
                <ul className="pf-service-checklist d-none d-lg-flex" style={{ listStyle: 'none', padding: 0, margin: 0, flexDirection: 'column', gap: '12px' }}>
                    {service.heroChecklist && service.heroChecklist.map((item, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', fontWeight: '500', color: 'rgba(255,255,255,0.95)' }}>
                            <div style={{ width: '24px', height: '24px', background: 'var(--primary-cyan)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#0d1b33', flexShrink: 0 }}>
                                <i className="fas fa-check"></i>
                            </div>
                            {item}
                        </li>
                    ))}
                </ul>
            </Breadcrumb>

            <section className="service-details-area pt-80 pb-100" style={{ overflow: 'visible', background: '#f7f9fc', position: 'relative' }}>
                <style dangerouslySetInnerHTML={{__html: `
                    .row.sticky-support { align-items: flex-start !important; min-height: 800px; }
                    .service-sidebar-sticky { position: -webkit-sticky !important; position: sticky !important; top: 150px !important; z-index: 10; }
                `}} />
                <div className="container" style={{ overflow: 'visible' }}>
                    <div className="row g-5 sticky-support" style={{ overflow: 'visible' }}>

                        {/* LEFT COLUMN */}
                        <div className="col-lg-8">

                            <p className="text-slate mb-30" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>{service.description}</p>

                            {/* Specialized Areas */}
                            {service.specializedAreas && service.specializedAreas.length > 0 && (
                                <div className="mb-40 wow fadeInUp">
                                    <div className="d-flex flex-wrap gap-2">
                                        {service.specializedAreas.map((area, idx) => (
                                            <span key={idx} style={{ padding: '8px 16px', background: 'rgba(0,204,255,0.06)', border: '1px solid rgba(0,204,255,0.15)', borderRadius: '30px', color: '#0d1b33', fontWeight: '600', fontSize: '0.82rem' }}>
                                                {area}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* What We Cover — editorial numbered list */}
                            {service.detailedServices && service.detailedServices.length > 0 && (
                                <div className="mb-50 wow fadeInUp">
                                    <span style={{ fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>What We Cover</span>
                                    <h2 className="text-navy" style={{ fontSize: '1.6rem', fontWeight: '900', letterSpacing: '-0.5px', marginBottom: '20px' }}>Our Services</h2>
                                    <div className="row g-0">
                                        <div className="col-md-6 svc-feature-col" style={{ paddingRight: '20px' }}>
                                            {service.detailedServices.slice(0, Math.ceil(service.detailedServices.length / 2)).map((item, idx) => (
                                                <div className="svc-feature-row" key={idx}>
                                                    <span className="svc-feature-num">{String(idx + 1).padStart(2, '0')}</span>
                                                    <span className="svc-feature-title">{item.title}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-md-6 svc-feature-col" style={{ paddingLeft: '20px', borderLeft: '1px solid #edf2f7' }}>
                                            {service.detailedServices.slice(Math.ceil(service.detailedServices.length / 2)).map((item, idx) => (
                                                <div className="svc-feature-row" key={idx}>
                                                    <span className="svc-feature-num">{String(Math.ceil(service.detailedServices.length / 2) + idx + 1).padStart(2, '0')}</span>
                                                    <span className="svc-feature-title">{item.title}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Why sections + freestanding stats */}
                            {service.whySections && service.whySections.map((section, index) => (
                                <div key={index} className="mb-40 wow fadeInUp">
                                    <h2 className="text-navy" style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '15px', letterSpacing: '-0.5px' }}>{section.title}</h2>
                                    <p className="text-slate mb-30" style={{ fontSize: '0.95rem', lineHeight: '1.75' }}>{section.desc}</p>
                                    {index === 0 && (
                                        <div className="svc-stats-band">
                                            {[{ num: "500+", label: "Clients Served" }, { num: "98%", label: "Client Retention" }, { num: "24/7", label: "Support Available" }].map((stat, si) => (
                                                <div className="svc-stat-block" key={si}>
                                                    <span className="svc-stat-num">{stat.num}</span>
                                                    <span className="svc-stat-label">{stat.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Packages — editorial rows */}
                            {service.packages && service.packages.length > 0 && (
                                <div className="mb-40 wow fadeInUp">
                                    <span style={{ fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>Service Options</span>
                                    <h2 className="text-navy" style={{ fontSize: '1.6rem', fontWeight: '900', letterSpacing: '-0.5px', marginBottom: '4px' }}>Packages</h2>
                                    <div className="svc-pkg-list">
                                        {service.packages.map((pkg, idx) => (
                                            <div className="svc-pkg-row" key={idx}>
                                                <span className="svc-pkg-num">{String(idx + 1).padStart(2, '0')}</span>
                                                <div className="svc-pkg-body">
                                                    <p className="svc-pkg-title">{pkg.title}</p>
                                                    <p className="svc-pkg-desc">{pkg.desc}</p>
                                                </div>
                                                <i className="fas fa-arrow-right svc-pkg-arrow"></i>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* RIGHT COLUMN — sticky sidebar */}
                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="service-sidebar-sticky">
                                <div className="service-sidebar">

                                    {/* Request Quote Widget */}
                                    <div className="sidebar-widget wow fadeInUp" style={{ background: '#0d1b33', borderRadius: '24px', padding: '40px 30px', color: 'white', boxShadow: '0 20px 40px rgba(13,27,51,0.15)', position: 'relative', overflow: 'hidden' }}>
                                        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '150px', height: '150px', background: 'var(--primary-cyan)', opacity: 0.1, borderRadius: '50%', pointerEvents: 'none', filter: 'blur(30px)' }}></div>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '15px', color: 'white' }}>Need {service.title}?</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginBottom: '30px', lineHeight: '1.5' }}>Speak to our specialists to secure priority scheduling and transparent pricing.</p>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                            <a href="tel:1800418411" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: 'rgba(255,255,255,0.05)', color: 'white', padding: '16px', borderRadius: '12px', textDecoration: 'none', fontWeight: '700', fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                                                <i className="fas fa-phone-alt" style={{ color: 'var(--primary-cyan)' }}></i> 1800 418 411
                                            </a>
                                            <Link href="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--primary-cyan)', color: '#0d1b33', padding: '16px', borderRadius: '12px', textDecoration: 'none', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase' }}>
                                                Request Free Quote <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                                            </Link>
                                        </div>
                                        <div className="mt-30 text-center">
                                            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '10px' }}>Prefer to chat?</span>
                                            <a href="https://wa.me/61483798622" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#25D366', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600' }}>
                                                <i className="fab fa-whatsapp" style={{ fontSize: '1.2rem' }}></i> WhatsApp Support
                                            </a>
                                        </div>
                                    </div>

                                    {/* Our Commitment */}
                                    <div className="sidebar-widget mt-30 wow fadeInUp" style={{ background: '#fff', border: '1px solid #f0f4f8', borderRadius: '24px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                                        <h4 className="text-navy mb-25" style={{ fontSize: '1.1rem', fontWeight: '800' }}>Our Commitment</h4>
                                        <div className="d-flex flex-column gap-3">
                                            {[{ icon: "fas fa-shield-alt", text: "Fully Insured & Bonded" }, { icon: "fas fa-user-check", text: "Police Checked Staff" }, { icon: "fas fa-certificate", text: "ISO 9001 Standards" }, { icon: "fas fa-leaf", text: "Eco-Friendly Products" }].map((item, i) => (
                                                <div key={i} className="d-flex align-items-center gap-3">
                                                    <div style={{ width: '32px', height: '32px', background: 'rgba(0,204,255,0.08)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-cyan)', fontSize: '13px' }}>
                                                        <i className={item.icon}></i>
                                                    </div>
                                                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#4b5563' }}>{item.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Sectors We Cover */}
                                    {service.specializedAreas && service.specializedAreas.length > 0 && (
                                        <div className="sidebar-widget mt-30 wow fadeInUp" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '30px' }}>
                                            <h4 className="text-navy mb-20" style={{ fontSize: '1.1rem', fontWeight: '800' }}>Sectors We Cover</h4>
                                            <div className="d-flex flex-wrap gap-2">
                                                {service.specializedAreas.map((area, idx) => (
                                                    <span key={idx} style={{ padding: '6px 12px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '20px', color: '#0d1b33', fontWeight: '600', fontSize: '0.75rem' }}>
                                                        {area}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* How We Work */}
                                    {service.process && service.process.length > 0 && (
                                        <div className="sidebar-widget mt-30 wow fadeInUp" style={{ background: '#fff', border: '1px solid #f0f4f8', borderRadius: '24px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                                            <h4 className="text-navy mb-25" style={{ fontSize: '1.1rem', fontWeight: '800' }}>How We Work</h4>
                                            <div className="process-steps">
                                                {service.process.map((step, index) => (
                                                    <div key={index} className="process-step mb-25" style={{ position: 'relative' }}>
                                                        <div className="d-flex gap-3">
                                                            <div style={{ flexShrink: 0, width: '35px', height: '35px', background: 'rgba(0,204,255,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-cyan)', fontSize: '14px' }}>
                                                                <i className={step.icon}></i>
                                                            </div>
                                                            <div>
                                                                <h5 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '5px' }}>{step.title}</h5>
                                                                <p style={{ fontSize: '0.8rem', color: '#666', lineHeight: '1.4', margin: 0 }}>{step.desc}</p>
                                                            </div>
                                                        </div>
                                                        {index < service.process.length - 1 && (
                                                            <div style={{ position: 'absolute', left: '17px', top: '35px', width: '1px', height: '25px', background: '#e2e8f0' }}></div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Benefits — editorial full-width split */}
            {service.benefits && service.benefits.length > 0 && (
                <section className="benefits-section pb-100" style={{ background: '#0d1b33', paddingTop: '80px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', bottom: '-15%', left: '-5%', width: '400px', height: '400px', background: 'var(--primary-cyan)', opacity: 0.04, borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
                    <div className="container wow fadeInUp">
                        <div className="row align-items-start g-5">
                            <div className="col-lg-4">
                                <span style={{ fontSize: '0.68rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2.5px', color: 'var(--primary-cyan)', display: 'block', marginBottom: '16px' }}>Why It Matters</span>
                                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: '900', color: '#fff', lineHeight: '1.05', letterSpacing: '-1.5px', margin: 0 }}>
                                    Why Partnering<br />With Us <span style={{ color: 'var(--primary-cyan)' }}>Works.</span>
                                </h2>
                            </div>
                            <div className="col-lg-8">
                                {service.benefits.map((benefit, idx) => {
                                    const words = benefit.split(' ');
                                    const accentWords = words.slice(0, 2).join(' ');
                                    const rest = words.slice(2).join(' ');
                                    return (
                                        <div key={idx} style={{ padding: '22px 0', borderBottom: idx < service.benefits.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                                            <span style={{ flexShrink: 0, fontSize: '0.65rem', fontWeight: '900', color: 'rgba(0,204,255,0.4)', letterSpacing: '1px', marginTop: '4px', minWidth: '24px' }}>{String(idx + 1).padStart(2, '0')}</span>
                                            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.65', color: 'rgba(255,255,255,0.75)' }}>
                                                <strong style={{ color: 'var(--primary-cyan)', fontWeight: '700' }}>{accentWords}</strong>{rest ? ` ${rest}` : ''}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ — two-column split */}
            {service.faqs && service.faqs.length > 0 && (
                <section className="faq-section pt-80 pb-100" style={{ background: '#fff' }}>
                    <div className="container">
                        <div className="mb-50 wow fadeInUp">
                            <span style={{ fontSize: '0.68rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2.5px', color: 'var(--primary-cyan)', display: 'block', marginBottom: '10px' }}>Got Questions?</span>
                            <h2 className="text-navy" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: '900', letterSpacing: '-1.5px', margin: 0 }}>Frequently Asked</h2>
                        </div>
                        <div className="svc-faq-split wow fadeInUp">
                            <div className="svc-faq-qlist">
                                {service.faqs.map((faq, index) => (
                                    <button key={index} className={`svc-faq-q${activeFaq === index ? ' active' : ''}`} onClick={() => setActiveFaq(index)} type="button">
                                        {faq.q}
                                    </button>
                                ))}
                            </div>
                            <div className="svc-faq-apanel">
                                <div className="svc-faq-answer">
                                    <p className="svc-faq-answer-text">{service.faqs[activeFaq].a}</p>
                                </div>
                                <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Still need help?</span>
                                    <Link href="/contact" style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--primary-cyan)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                        Talk to a specialist <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
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
