import Link from 'next/link'
import { useState } from 'react'
import Slider from 'react-slick'
import Brand2 from './Brand2'

export default function Slider1() {
    const [nav1, setNav1] = useState()
    const [nav2, setNav2] = useState()
    return (
        <>
            <section className="slider-area">
                <div className="slider-shape" data-background="/assets/img/slider/slider_shape.png" />
                <div className="slider-img-wrap">
                    <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}
                        autoplay={true}
                        infinite={true}
                        speed={500} className="sliderNav-active">
                        <div className="slider-img-item" data-background="/assets/img/slider/slider_img01.jpg" />
                        <div className="slider-img-item" data-background="/assets/img/slider/slider_img02.jpg" />
                        <div className="slider-img-item" data-background="/assets/img/slider/slider_img03.jpg" />
                        <div className="slider-img-item" data-background="/assets/img/slider/slider_img04.jpg" />
                        <div className="slider-img-item" data-background="/assets/img/slider/slider_img05.jpg" />
                    </Slider>
                </div>
                <div className="slider-content-wrap">
                    <Slider
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}
                        autoplay={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        arrows={false}
                        className="sliderContent-active">
                        
                        {/* Slide 1 - Pressure Washing & Soft Washing */}
                        <div className="slider-content">
                            <h1 className="overly-text">Pressure <br />Washing</h1>
                            <span className="sub-title" data-animation-in="fadeInUp" data-delay-in=".2" data-duration-in=".6">Residential & Commercial</span>
                            <h2 className="title" data-animation-in="fadeInUp" data-delay-in=".4" data-duration-in=".6">Professional Pressure Washing & Soft Washing</h2>
                            <p data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">
                                Restore the original shine of your property with our high-pressure and gentle soft-wash solutions. 
                                We safely remove dirt, mould, algae, and grime from driveways, roofs, walls, and outdoor surfaces—perfect for homes and businesses alike.
                            </p>
                            <Link href="/services" className="btn" data-animation-in="fadeInUp" data-delay-in=".8" data-duration-in=".6">Pressure Washing Services</Link>
                        </div>
                        
                        {/* Slide 2 - Window & Solar Panel Cleaning */}
                        <div className="slider-content">
                            <h1 className="overly-text">Window &<br />Solar Cleaning</h1>
                            <span className="sub-title" data-animation-in="fadeInUp" data-delay-in=".2" data-duration-in=".6">Professional Cleaning Solutions</span>
                            <h2 className="title" data-animation-in="fadeInUp" data-delay-in=".4" data-duration-in=".6">Expert Window & Solar Panel Cleaning</h2>
                            <p data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">
                                We provide safe, streak-free window and solar panel cleaning for residential and commercial properties, 
                                including buildings up to three storeys high. Our professional equipment ensures outstanding results without compromising safety.
                            </p>
                            <Link href="/services" className="btn" data-animation-in="fadeInUp" data-delay-in=".8" data-duration-in=".6">Window & Solar Services</Link>
                        </div>
                        
                        {/* Slide 3 - Commercial Office Cleaning */}
                        <div className="slider-content">
                            <h1 className="overly-text">Commercial<br />Cleaning</h1>
                            <span className="sub-title" data-animation-in="fadeInUp" data-delay-in=".2" data-duration-in=".6">Office & Business Solutions</span>
                            <h2 className="title" data-animation-in="fadeInUp" data-delay-in=".4" data-duration-in=".6">Professional Commercial Office & Business Cleaning</h2>
                            <p data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">
                                Create a spotless, healthy workspace for your staff and clients. We provide reliable, customised cleaning 
                                for offices, retail spaces, and commercial properties—ensuring a professional environment every day.
                            </p>
                            <Link href="/services" className="btn" data-animation-in="fadeInUp" data-delay-in=".8" data-duration-in=".6">Commercial Cleaning</Link>
                        </div>
                        
                        {/* Slide 4 - Strata & Building Maintenance */}
                        <div className="slider-content">
                            <h1 className="overly-text">Strata<br />Cleaning</h1>
                            <span className="sub-title" data-animation-in="fadeInUp" data-delay-in=".2" data-duration-in=".6">Building Maintenance Solutions</span>
                            <h2 className="title" data-animation-in="fadeInUp" data-delay-in=".4" data-duration-in=".6">Comprehensive Strata & Building Maintenance Cleaning</h2>
                            <p data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">
                                Keep shared spaces clean, safe, and well-maintained. Our strata cleaning services cover common areas, 
                                stairwells, car parks, and building exteriors with consistent, high-quality care.
                            </p>
                            <Link href="/services" className="btn" data-animation-in="fadeInUp" data-delay-in=".8" data-duration-in=".6">Strata Services</Link>
                        </div>
                        
                        {/* Slide 5 - End of Lease Cleaning */}
                        <div className="slider-content">
                            <h1 className="overly-text">End of<br />Lease</h1>
                            <span className="sub-title" data-animation-in="fadeInUp" data-delay-in=".2" data-duration-in=".6">Bond Cleaning Specialists</span>
                            <h2 className="title" data-animation-in="fadeInUp" data-delay-in=".4" data-duration-in=".6">Professional End of Lease / Bond Cleaning</h2>
                            <p data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">
                                Moving out? We've got it covered. Our detailed end-of-lease cleaning meets real estate and property manager standards, 
                                helping you secure your full bond with confidence.
                            </p>
                            <Link href="/services" className="btn" data-animation-in="fadeInUp" data-delay-in=".8" data-duration-in=".6">Bond Cleaning</Link>
                        </div>
                    </Slider>
                </div>
                {/* brand-area */}
                <Brand2 />
                {/* brand-area-end */}
            </section>
        </>
    )
}