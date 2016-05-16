import React from "react";
import { IndexLink, Link } from "react-router";

export default class Services extends React.Component {
    render() {
        console.log("services");
        return (
            <span>
            <div className="section section-breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Services</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <img className="img-responsive" src="../../../img/slides/1.jpg" alt="Full Width Banner Image" />
                        </div>
                        <div className="col-sm-12">
                            <hr />
                            <h2>We are a Graphic Design company</h2>
                            <h3>Specializing in Wordpress Theme Development</h3>
                            <p>
                            Donec elementum mi vitae enim fermentum lobortis. In hac habitasse platea dictumst. Ut pellentesque, orci sed mattis consequat, libero ante lacinia arcu, ac porta lacus urna in lorem. Praesent consectetur tristique augue, eget elementum diam suscipit id. Donec elementum mi vitae enim fermentum lobortis. In hac habitasse platea dictumst. Ut pellentesque, orci sed mattis consequat, libero ante lacinia arcu, ac porta lacus urna in lorem. Praesent consectetur tristique augue, eget elementum diam suscipit id.
                            </p>
                            <p>
                                Donec elementum mi vitae enim fermentum lobortis. In hac habitasse platea dictumst. Ut pellentesque, orci sed mattis consequat, libero ante lacinia arcu, ac porta lacus urna in lorem. Praesent consectetur tristique augue, eget elementum diam suscipit id.
                            </p>
                            <h3>Wide range of services</h3>
                            <p>
                                Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam condimentum laoreet sagittis. Duis quis ullamcorper leo. Suspendisse potenti.
                                Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam condimentum laoreet sagittis. Duis quis ullamcorper leo. Suspendisse potenti.
                            </p>
        
                            <div className="clients-logo-wrapper text-center row">
                                <div className="col-lg-2 col-md-1 col-sm-3 col-xs-6"><Link to="/"><img src="../../../img/logos/logo-1.jpg" alt="Client Name" /></Link></div>
                                <div className="col-lg-2 col-md-1 col-sm-3 col-xs-6"><Link to="/"><img src="../../../img/logos/logo-2.jpg" alt="Client Name" /></Link></div>
                                <div className="col-lg-2 col-md-1 col-sm-3 col-xs-6"><Link to="/"><img src="../../../img/logos/logo-3.jpg" alt="Client Name" /></Link></div>
                                <div className="col-lg-2 col-md-1 col-sm-3 col-xs-6"><Link to="/"><img src="../../../img/logos/logo-4.jpg" alt="Client Name" /></Link></div>
                                <div className="col-lg-2 col-md-1 col-sm-3 col-xs-6"><Link to="/"><img src="../../../img/logos/logo-5.jpg" alt="Client Name" /></Link></div>
                                <div className="col-lg-2 col-md-1 col-sm-3 col-xs-6"><Link to="/"><img src="../../../img/logos/logo-6.jpg" alt="Client Name" /></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </span>        
        );
    }
}