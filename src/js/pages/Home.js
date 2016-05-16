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
                                <h2 className="animation animated-item-1">Welcome to BASICA! A Bootstrap3 Template - Slide1</h2>
                                <p className="animation animated-item-2">Sed mattis enim in nulla blandit tincidunt. Phasellus vel sem convallis, mattis est id, interdum augue. Integer luctus massa in arcu euismod venenatis. </p>
                            </div>
                        </div>                        
                        <div className="slider-image2 carousel">
                            <div className="container">
                                <h2 className="animation animated-item-1">Welcome to BASICA! A Bootstrap3 Template - Slide2</h2>
                                <p className="animation animated-item-2">Sed mattis enim in nulla blandit tincidunt. Phasellus vel sem convallis, mattis est id, interdum augue. Integer luctus massa in arcu euismod venenatis. </p>
                            </div>
                        </div>                        
                        <div className="slider-image3 carousel">
                            <div className="container">
                                <h2 className="animation animated-item-1">Welcome to BASICA! A Bootstrap3 Template - Slide3</h2>
                                <p className="animation animated-item-2">Sed mattis enim in nulla blandit tincidunt. Phasellus vel sem convallis, mattis est id, interdum augue. Integer luctus massa in arcu euismod venenatis. </p>
                            </div>
                        </div>
                    </Slider>
                </section>
            </span>
        );
    }
}