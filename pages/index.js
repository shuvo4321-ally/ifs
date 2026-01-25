import Layout from "@/components/layout/Layout"
import Slider1 from "@/components/sections/Slider1"
import Banner1 from "@/components/sections/Banner1"
import Brand1 from "@/components/sections/Brand1"
import Features1 from "@/components/sections/Features1"
import About1 from "@/components/sections/About1"
import Services1 from "@/components/sections/Services1"
import Project1 from "@/components/sections/Project1"
import Team1 from "@/components/sections/Team1"
import Counter1 from "@/components/sections/Counter1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Blog1 from "@/components/sections/Blog1"
import Newsletter1 from "@/components/sections/Newsletter1"
import Work1 from "@/components/sections/Work1"
import Features2 from './../components/sections/Features2';
import Faq1 from "@/components/sections/Faq1"

export default function Home() {

    return (
        <>
            <Layout headerCls="transparent-header">
                <Slider1 />
                <Features2 />
                <Features1 />
                <About1 />
              
                <Work1 />
                {/* <Project1 /> */}
                {/* <Counter1 /> */}
                <Team1 />
                {/* <Testimonial1 />
                <Blog1 />
                <Newsletter1 /> */}
                <Faq1 />
            </Layout>
        </>
    )
}