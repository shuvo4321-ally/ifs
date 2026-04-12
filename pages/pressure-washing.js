import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import Features1 from "@/components/sections/Features1"
import About1 from "@/components/sections/About1"
import Services1 from "@/components/sections/Services1"
import Project1 from "@/components/sections/Project1"
import Team1 from "@/components/sections/Team1"
import About2 from "@/components/sections/About2"
import ServicesCreative from "@/components/sections/ServicesCreative"


export default function PressureWashing() {

    return (
        <>
            <Layout headerCls="transparent-header">
                <Banner1 />

                <ServicesCreative />
                <Project1 />
            </Layout>
        </>
    )
}
