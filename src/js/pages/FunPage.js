import React from "react";

export default class FunPage extends React.Component {
    render() {
        console.log("funpage");
        return (
            <span>
                <div className="section section-breadcrumbs">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Fun Page</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2>Coming Soon: This page will contain a small "mini" app that shows the capability and versatility of React JS!!!</h2>
                            </div>
                        </div>
                    </div>
                </div>    
            </span>
        );
    }
}