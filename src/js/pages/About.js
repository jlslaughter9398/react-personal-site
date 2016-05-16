import React from "react";

export default class About extends React.Component {
    render() {
        console.log("about");
        return (
            <div className="section section-breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>About</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}