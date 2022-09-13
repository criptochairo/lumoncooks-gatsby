import React from "react";
import { Link } from "gatsby";
import instagram from "../img/instagram.png";
import logo from "../img/hot-pot.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo" style={{height: "auto", width: "75px" }}>
              <img src={logo} alt="#" id="logo" style={{maxHeight: "75px", width: "75px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/blog" >
                Recetas
              </Link>
              <Link className="navbar-item" to="/about">
                Nosotros
              </Link>
              <Link className="navbar-item" to="/contact">
                Contacto
              </Link>
              <Link className="navbar-item" to="/contact/examples" style={{display: "none"}} >
                Form Examples
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://www.instagram.com/lumoncooks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon" style={{maxHeight: "35px", width: "35px"}}>
                  <img src={instagram} alt="Instagram" style={{maxHeight: "35px", width: "35px"}} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
