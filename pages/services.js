import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import Counter2 from "@/components/sections/Counter2"
import Services1 from "@/components/sections/Services1"

export default function Service() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout breadcrumbTitle="Services" headerCls="transparent-header">
                <div>
  <Services1 />
                    {/* services-area-end */}
                    {/* support-area */}
                    <section className="support-area pt-115 pb-70">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-md-6">
                                    <div className="support-item">
                                        <div className="support-icon">
                                            <img src="/assets/img/icon/support_icon01.svg" alt="" />
                                        </div>
                                        <div className="support-content">
                                            <h4 className="title">Quick Response</h4>
                                            <p>There are many variations of passages Ipsum available but the</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="support-item">
                                        <div className="support-icon">
                                            <img src="/assets/img/icon/support_icon02.svg" alt="" />
                                        </div>
                                        <div className="support-content">
                                            <h4 className="title">Quick Response</h4>
                                            <p>There are many variations of passages Ipsum available but the</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="support-item">
                                        <div className="support-icon">
                                            <img src="/assets/img/icon/support_icon03.svg" alt="" />
                                        </div>
                                        <div className="support-content">
                                            <h4 className="title">Quick Response</h4>
                                            <p>There are many variations of passages Ipsum available but the</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}