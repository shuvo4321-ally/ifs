import Head from 'next/head'

const PageHead = ({ headTitle, description }) => {
    const defaultTitle = "Icon Facility Services - Premium Cleaning & Pressure Washing";
    const defaultDesc = "Professional commercial cleaning and pressure washing services in Australia. Contact Icon Facility Services for reliable, high-quality facility management.";
    
    // Website Logo & Sitelinks schema for Google Search
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Icon Facility Services",
        "url": "https://www.iconfacilitys.com.au/",
        "logo": "https://www.iconfacilitys.com.au/assets/img/logo/logo.png",
        "sameAs": [
            "https://www.facebook.com/share/1G6kQXhC9v/",
            "https://www.instagram.com/ifs_au"
        ]
    };

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <title>{headTitle ? `${headTitle} | Icon Facility Services` : defaultTitle}</title>
                <meta name="description" content={description || defaultDesc} />
                
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content={headTitle ? `${headTitle} | Icon Facility Services` : defaultTitle} />
                <meta property="og:description" content={description || defaultDesc} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.iconfacilitys.com.au/" />
                <meta property="og:image" content="https://www.iconfacilitys.com.au/assets/img/logo/logo.png" />
                
                {/* JSON-LD Schema for Google Search Logo & Brand Image */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </Head>
        </>
    )
}

export default PageHead