import { useEffect } from "react"
import DataBg from '../elements/DataBg'
import Breadcrumb from './Breadcrumb'
import Footer from './Footer'
import Header from './Header'
import PageHead from './PageHead'

export default function Layout({ headerCls, headerTop, headTitle, breadcrumbTitle, breadcrumbBg, children }) {
    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false,
            mobile: false, // Disable animations on mobile
            offset: 100   // Start animation when 100px from viewport
        })
        window.wow.init()
    }, [])
    return (
        <>
            <PageHead headTitle={headTitle} />
            <DataBg />

            <Header headerCls={headerCls} headerTop={headerTop} />
            <main>
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} breadcrumbBg={breadcrumbBg} />}
                {children}
            </main>
            <Footer />
        </>
    )
}
