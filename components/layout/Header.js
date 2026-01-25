import Link from "next/link"
import { useEffect, useState } from 'react'
import Sidebar from "./Sidebar"

export default function Header({ headerCls, headerTop }) {
    const [scroll, setScroll] = useState(0)

    const [isToggled, setToggled] = useState(false)
    const handleToggled = () => {
        setToggled(!isToggled)
        !isToggled ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <style jsx global>{`
    .menu-area, .sticky-menu {
        background-color: #0f1437 !important;
    }
    .navigation li a, 
    .mobile-nav-toggler, 
    .close-btn,
    .navigation,
    .sub-menu li a {
        color: white !important;
    }
    .navigation li a:hover,
    .sub-menu li a:hover {
        color: #ffcc00 !important;
    }
    .sub-menu {
        background-color: #0f1437 !important;
    }
    .mobile-menu .menu-box {
        background-color: #0f1437 !important;
    }
    .mobile-menu .menu-box * {
        color: white !important;
    }
    .menu-backdrop {
        background-color: rgba(15, 20, 55, 0.9) !important;
    }
`}</style>

            <header>
                <div id="sticky-header" className={`menu-area  ${scroll ? "sticky-menu" : ""} ${headerCls ? headerCls : ""}`}>
                    <div className="container">
                        <div className="row" >
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleToggled}><i className="fas fa-bars" /></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo different-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="logo d-none">
                                            <Link href="/"><img src="/assets/img/logo/logo_02.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li><Link href="/">Home</Link></li>
                                                <li><Link href="/about">About us</Link></li>
                                                <li><Link href="/services">Our Services</Link></li>
                                                {/* <li className="menu-item-has-children"><Link href="/#">Our Services</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/services">Services Page</Link></li>
                                                        <li><Link href="/services-details">Services Details</Link></li>
                                                    </ul>
                                                </li> */}
                                                <li className="menu-item-has-children"><Link href="/#">Pages</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/project">Project Page</Link></li>
                                                        <li><Link href="/project-details">Project Details</Link></li>
                                                        <li><Link href="/team">Our Team</Link></li>
                                                        <li><Link href="/team-details">Team Details</Link></li>
                                                        <li><Link href="/error">404 Error</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children"><Link href="/#">Blog</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link href="/blog">Our Blog</Link></li>
                                                        <li><Link href="/blog-details">Blog Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/contact">Contact</Link></li>
                                            </ul>
                                        </div>
                                        <div className="header-action d-none d-md-block">
                                            <ul className="list-wrap">
                                                <li className="header-btn"><Link href="/contact" className="btn">Get a Quoute</Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleToggled}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/logo_02.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="menu-outer">
                                            <Sidebar />
                                        </div>
                                        <div className="social-links">
                                            <ul className="clearfix list-wrap">
                                                <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="/#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="menu-backdrop" onClick={handleToggled} />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}