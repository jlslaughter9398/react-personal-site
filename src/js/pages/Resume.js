import React from "react";

export default class Resume extends React.Component {
    render() {
        console.log("resume");
        return (
            <span>
                <div className="section section-breadcrumbs">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Resume</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-10">
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
                            </div>
                            <div className="col-sm-2">
                                <a class="btn btn-md" href="/resume-files/Resume_of_James_Slaughter_Angular.docx" download>Download Resume as .docx</a>
                                <a class="btn btn-md" href="/resume-files/Resume_of_James_Slaughter_Angular.pdf" download>Download Resume as .pdf</a>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        );
    }
}