import React from "react";

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
                            <h2>Here's how I can enhance your online profile:</h2>
                            <ul>
                                <li>Develop custom web applications that will allow you to more effectively reach your customers.</li>
                                <li>Create dynamic and beautiful web pages that will enhance your online presence.</li>
                                <li>Applications can be developed in areas such as: Single Page Applications (SPAs), Order support and handling, Inventory tracking, Informational/Brochure sites, eCommerce, and any other area where an online identity or automated workflow is needed.</li>
                                <li>Google Analytics can be added to all web applications to track metrics such as: site hits and page usage.</li>
                            </ul>
                            <p>
                                These web applications are developed using the React JS Javascript framework. React JS is one of the fastest-growing and most widely-adopted Javascript frameworks available, it's used by companies such as Facebook, Instagram, Netflix, AirBnb, Visa, and The New York Times. Another great feature of React Js are the many great 3rd party React JS libraries and plug-ins that allow me to enhance web applications with new features in a very quickly.
                            </p>
                            <h3>Coming Soon: Custom native mobile app development using the React Native framework.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </span>        
        );
    }
}