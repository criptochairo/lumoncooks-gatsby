import * as React from "react";
import { Link } from "gatsby";

import whatsapp from "../img/whatsapp.png";
import phone from "../img/phone.png";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Nosotros
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Lentes Esclerales
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contacto
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog" style={{display: "none"}}>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{display: "none"}}
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="whatsapp" 
                href="https://wa.me/525563327093"
                target="_blank"
                rel="noopener noreferrer">
                  <img
                    src={whatsapp}
                    alt="Whatsapp"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="phone-number" href="tel:5563327093">
                  <img
                    src={phone}
                    alt="Phone"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
            <br />
            <div className="columns">
              <div className="column is-12 has-text-centered is-size-6">
                Estamos ubicados en <address>Calle Antigua Taxqueña #148, Col. Parque San Andrés. Coyoacán. CDMX</address><br />
                <span>Teléfono</span><br />
                <a href="tel:5563327093">55 63 32 70 93</a><br /><br />
                
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a><br />
                Icons & images made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a><br />
                Website by <a href="https://github.com/criptochairo" title="GithubProfile">Criptochairo</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
