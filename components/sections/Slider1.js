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
                        
                        {/* Slide 1 - General Overview */}
                        <div className="slider-content">
                            <h1 className="overly-text">Professional <br />Cleaning</h1>
                            <span className="sub-title" data-animation-in="fadeInUp" data-delay-in=".2" data-duration-in=".6">Icon Facility Services</span>
                            <h2 className="title" data-animation-in="fadeInUp" data-delay-in=".4" data-duration-in=".6">Premium Cleaning Services for Homes & Businesses</h2>
                            <p data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">
                                We offer professional cleaning services including pressure washing, window cleaning, 
                                deep carpet and upholstery care, and full interior cleaning—delivering reliable, 
                                high-quality results for homes and businesses.
                            </p>
                            <Link href="/services" className="btn" data-animation-in="fadeInUp" data-delay-in=".8" data-duration-in=".6">View All Services</Link>
                        </div>
                        
                        {/* Slide 2 - Exterior Services */}
                        <div className="slider-content">
                            <h1 className="overly-text">Exterior <br />Cleaning</h1>
                            <span className="sub-title" data-animation-in="fadeInUp" data-delay-in=".2" data-duration-in=".6">Professional Exterior Solutions</span>
                            <h2 className="title" data-animation-in="fadeInUp" data-delay-in=".4" data-duration-in=".6">Expert Pressure Washing & Soft Washing</h2>
                            <p data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">
                                Professional pressure washing, roof soft washing, exterior house cleaning, 
                                and solar panel cleaning services. We use specialized techniques to safely 
                                clean and protect your property's exterior surfaces.
                            </p>
                            <Link href="/services" className="btn" data-animation-in="fadeInUp" data-delay-in=".8" data-duration-in=".6">Explore Exterior Services</Link>
                        </div>
                        
                        {/* Slide 3 - Interior Services */}
                        <div className="slider-content">
                            <h1 className="overly-text">Interior <br />Cleaning</h1>
                            <span className="sub-title" data-animation-in="fadeInUp" data-delay-in=".2" data-duration-in=".6">Deep Cleaning Experts</span>
                            <h2 className="title" data-animation-in="fadeInUp" data-delay-in=".4" data-duration-in=".6">Comprehensive Interior Cleaning Solutions</h2>
                            <p data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">
                                Specialized deep cleaning services, move-in/move-out cleaning, carpet and upholstery care, 
                                and general cleaning services. We deliver meticulous results for pristine living 
                                and working environments.
                            </p>
                            <Link href="/services" className="btn" data-animation-in="fadeInUp" data-delay-in=".8" data-duration-in=".6">Explore Interior Services</Link>
                        </div>
                        
                        {/* Slide 4 - Commercial Services */}
                        <div className="slider-content">
                            <h1 className="overly-text">Commercial <br />Cleaning</h1>
                            <span className="sub-title" data-animation-in="fadeInUp" data-delay-in=".2" data-duration-in=".6">Office & Commercial Solutions</span>
                            <h2 className="title" data-animation-in="fadeInUp" data-delay-in=".4" data-duration-in=".6">Professional Cleaning for Businesses</h2>
                            <p data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">
                                Comprehensive office and commercial cleaning services. We provide reliable, 
                                high-quality cleaning solutions for businesses, ensuring clean, healthy, 
                                and professional work environments.
                            </p>
                            <Link href="/services" className="btn" data-animation-in="fadeInUp" data-delay-in=".8" data-duration-in=".6">View Commercial Services</Link>
                        </div>
                        
                        {/* Slide 5 - Specialized Services */}
                        <div className="slider-content">
                            <h1 className="overly-text">Specialized <br />Services</h1>
                            <span className="sub-title" data-animation-in="fadeInUp" data-delay-in=".2" data-duration-in=".6">Expert Cleaning Solutions</span>
                            <h2 className="title" data-animation-in="fadeInUp" data-delay-in=".4" data-duration-in=".6">Window, Solar Panel & Deep Cleaning</h2>
                            <p data-animation-in="fadeInUp" data-delay-in=".6" data-duration-in=".6">
                                Professional window cleaning, solar panel maintenance, deep carpet care, 
                                and specialized cleaning services. We handle the challenging cleaning tasks 
                                with expertise and precision.
                            </p>
                            <Link href="/services" className="btn" data-animation-in="fadeInUp" data-delay-in=".8" data-duration-in=".6">View Specialized Services</Link>
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