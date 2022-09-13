import * as React from "react";
import { Link } from "gatsby";
import instagram from "../img/instagram.png";

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
                      <Link className="navbar-item" to="/nosotros">
                        Nosotros
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/recetas">
                        Recetas
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contacto" >
                        Contacto
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
                <a title="instagram" 
                href="https://www.instagram.com/lumoncooks/"
                target="_blank"
                rel="noopener noreferrer">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
            <br />
            <div className="columns">
              <div className="column is-12 has-text-centered is-size-6">
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
