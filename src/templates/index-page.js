import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
import ShortBlogRoll from "../components/ShortBlogRoll";
import Navbar from "../components/Navbar";
import cooker from "../img/cooker.png";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  heading
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} title="LuMon Cooks" subheading=""/>
      <Navbar />
      <section className="section section--gradient big-container">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12">
                      
                      <h3 className="title is-size-3" style={{fontFamily: "Abril Fatface"}}>
                        {heading}
                      </h3>
                      
                      <p className="is-size-5">
                        Bienvenidos a nuestro blog de cocina. <Link to="/recetas" className="linkintext">Aquí</Link> pueden ver una lista de todas nuestras recetas y buscar por categoría. Si quieren leer un poco más sobre nosotros, hagan click <Link to="/nosotros">aquí</Link>. Finalmente, si quieren enviarnos una receta, comentarios o platicar, nos pueden buscar en nuestro <a href="https://www.instagram.com/lumoncooks/" target="_blank" rel="noopener noreferrer">Instagram</a> o en la página de <Link to="/contacto">contacto</Link>. 
                      </p>
                      <br />
                      <img src={cooker} alt="#" id="header-img" />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="column is-12">
                    <h3 className="title is-size-3" style={{fontFamily: "Abril Fatface"}}>
                      Nuestra selección personal
                    </h3>
                  </div>

                  <ShortBlogRoll />

                  <div className="column is-12">
                    <h3 className="title is-size-3" style={{fontFamily: "Abril Fatface"}}>
                      Categorías
                    </h3>
                    <Link to="/tags/recetas-favoritas" className="btn">Recetas Favoritas</Link>
                    <Link to="/tags/comida-mexicana" className="btn">Comida Mexicana</Link>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            title
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
