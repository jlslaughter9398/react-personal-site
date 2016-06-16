import React from "react";
//import Carousel from "react-responsive-carousel";
//var Carousel = require('react-responsive-carousel').Carousel;
import Slider from "react-slick";

export default class Home extends React.Component {
    render() {
        const settings = {
            arrows: true,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            infinite: true,
            fade: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const spanStyle1 = {
            "background-image": "url(../img/slides/1.jpg)"
        };
        const spanStyle2 = {
            "background-image": "url(../img/slides/2.jpg)"
        };
        const spanStyle3 = {
            "background-image": "url(../img/slides/3.jpg)"
        };
        
        console.log("home");
        return (
            <span className="home-page">
                <section id="main-slider" className="no-margin">
                    <Slider {...settings}>                        
                        <div className="slider-image1 carousel">
                            <div className="container">
                                <h2 className="animation animated-item-1">Welcome to<br />JSPREMIERWEBSOLUTIONS</h2>
                                <p className="animation animated-item-2">Get a web application built that fits your needs and satisfaction.</p>
                            </div>
                        </div>                        
                        <div className="slider-image2 carousel">
                            <div className="container">
                                <h2 className="animation animated-item-1">Welcome to<br />JSPREMIERWEBSOLUTIONS</h2>
                                <p className="animation animated-item-2">Get the assistance you need to create or enhance your online presence.</p>
                            </div>
                        </div>                        
                        <div className="slider-image3 carousel">
                            <div className="container">
                                <h2 className="animation animated-item-1">Welcome to<br />JSPREMIERWEBSOLUTIONS</h2>
                                <p className="animation animated-item-2">Get a leg up on your competitors with a web application that allows you to stand out in your industry.</p>
                            </div>
                        </div>
                    </Slider>
                </section>
            </span>
        );
    }
}