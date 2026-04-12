import Layout from "@/components/layout/Layout"
import BannerPink from "@/components/sections/BannerPink"
import AboutPink from "@/components/sections/AboutPink"
import ServicesPink from "@/components/sections/ServicesPink"
import ProcessPink from "@/components/sections/ProcessPink"
import CtaPink from "@/components/sections/CtaPink"
import Testimonial1 from "@/components/sections/Testimonial1"
import Faq1 from "@/components/sections/Faq1"

export default function Home() {
    return (
        <>
            <Layout headerCls="transparent-header">
                {/* 1. Hero / Quote Form */}
                <BannerPink />
                
                {/* 2. Services Grid */}
                <ServicesPink />
                
                {/* 3. About Split Section */}
                <AboutPink />
                
                {/* 4. How it Works */}
                <ProcessPink />
                
                {/* 6. Final Deep Navy CTA */}
                <CtaPink />
                
                {/* 7. FAQ Section */}
                <Faq1 />
            </Layout>
        </>
    )
}