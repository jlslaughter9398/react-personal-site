import React from "react";

export default class About extends React.Component {
    render() {
        console.log("about");
        return (
            <span>
            <div className="section section-breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>About</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <img className="img-responsive" src="../../../img/slides/2.jpg" alt="Full Width Banner Image" />
                        </div>
                        <div className="col-sm-12">
                            <hr />
                            <h2>Hi, my name is James Slaughter...</h2>
                            <p>
                            I am a freelance web developer who specializes in creating dynamic and beautiful web applications. I have been in the field for nearly 7 years, and have been loving every minute of it. I am an entrepreneur, developer, designer, and overall thinker.
                            </p>
                            <p>
                                I specialize in creating web applications that solves the needs of my client. When I build these applications, I specificallly use the React JS Javascript framework. I use React JS because:
                            </p>
                            <ol>
                                <li>It's one of the fastest-growing and most widely-adopted Javascript frameworks available, being used by companies such as Facebook, Instagram, Netflix, AirBnb, Visa, and The New York Times.</li>
                                <li>There are a ton of great 3rd party React JS libraries and plug-ins that allow me to enhance web applications with new features in a very short timeframe.</li>
                            </ol>
                            <p>
                                I live in the Chicagoland area where my wife and I are "empty-nesters" and we love to travel since my kids are adults and have begun the persuit of their own life ambitions. I have a Bachelor's Degree in Computer Science from the Illinois Insitute of Technology and have worked in the IT industry for over 20+ years starting on IBM Mainframe development and evolving into the web development areas that I work on today.
                            </p>
                            <p>
                                Once we decide to collaborate together, I know we can build a web appliaction that will effectively deliver the desired expectations you need.
                            </p>
                            <p>
                                Hopefully we can work together to build a web application that allows you to effectively get the message across to your clients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </span>
        );
    }
}