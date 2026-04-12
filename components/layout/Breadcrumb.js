import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle, breadcrumbBg }) {
    // Fallback to default if no specific image is provided
    const bgImage = breadcrumbBg || "/assets/img/services/office_cleaning_premium.jpg";

    return (
        <>
            <section className="pf-breadcrumb-area" style={{ backgroundImage: `url('${bgImage}')` }}>
                <div className="pf-breadcrumb-overlay" />
                
                {/* Cinematic Depth Elements */}
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 204, 255, 0.15) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 1 }}></div>
                <div style={{ position: 'absolute', bottom: '-20%', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 1 }}></div>
                
                <div className="container" style={{ position: 'relative', zIndex: 5 }}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pf-breadcrumb-content">
                                <div className="pf-expertise-tag wow fadeInUp" data-wow-delay=".2s">Service Excellence</div>
                                <h2 className="title wow fadeInUp" data-wow-delay=".4s">{breadcrumbTitle}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
