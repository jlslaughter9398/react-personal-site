import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      "margin-top": "90px"
    };
    console.log("layout");
    return (
      <div>

        <Nav location={location} />

        {this.props.children}
        
        <Footer/>
      </div>

    );
  }
}
