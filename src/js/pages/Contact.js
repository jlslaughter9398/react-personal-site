import React from "react";

export default class Contact extends React.Component {
    render() {
        console.log("contact");
        return (
            <span>
            <div className="section section-breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Contact</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <img className="img-responsive" src="../../../img/slides/3.jpg" alt="Full Width Banner Image" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <hr />
                            <h2>Let's begin a collaboration...</h2>
                            <p>
                                This collaboration will allow your new web application to begin working for you and have your online presence enhanced.
                            </p>
                            <p>
                                You can start the ball rolling by clicking the button below to create an email to me where you'll describe your chanllange and your expected result.
                            </p>
                            <p>
                                I'll respond to your email within three business days to further the discussion.
                            </p>
                            <p>
                                Hope to talk to you soon!!!
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-md-offset-4">
                            <a class="btn btn-md" href="mailto:james.slaughter08@gmail.com">Click this button to send me that email</a>
                        </div>
                    </div>
                </div>
            </div>
        </span>
        );
    }
}