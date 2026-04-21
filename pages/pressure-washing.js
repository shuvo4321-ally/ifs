import Layout from "@/components/layout/Layout"
import Banner1 from "@/components/sections/Banner1"
import PressureServices from "@/components/sections/PressureServices"
import PressureShowcase from "@/components/sections/PressureShowcase"
import React from 'react'

export default function PressureWashing() {
    return (
        <>
            <Layout headerCls="transparent-header">
                <Banner1 />

                <PressureServices />
                <PressureShowcase />
            </Layout>
        </>
    )
}
