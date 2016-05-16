import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const homeClass = location.pathname === "/" ? "active" : "";
    const resumeClass = location.pathname.match(/^\/resume/) ? "active" : "";
    const servicesClass = location.pathname.match(/^\/services/) ? "active" : "";
    const aboutClass = location.pathname.match(/^\/about/) ? "active" : "";
    const funpageClass = location.pathname.match(/^\/funpage/) ? "active" : "";
    const contactClass = location.pathname.match(/^\/contact/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="banner">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" onClick={this.toggleCollapse.bind(this)} className="navbar-brand"><img src="../../../../img/logo.png" alt="Basica" /></Link>
          </div>
          <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className={homeClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li className={resumeClass}>
                <Link to="resume" onClick={this.toggleCollapse.bind(this)}>Resume</Link>
              </li>
              <li className={servicesClass}>
                <Link to="services" onClick={this.toggleCollapse.bind(this)}>Services</Link>
              </li>
              <li className={aboutClass}>
                <Link to="about" onClick={this.toggleCollapse.bind(this)}>About</Link>
              </li>
              <li className={funpageClass}>
                <Link to="funpage" onClick={this.toggleCollapse.bind(this)}>Fun Page</Link>
              </li>
              <li className={contactClass}>
                <Link to="contact" onClick={this.toggleCollapse.bind(this)}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
