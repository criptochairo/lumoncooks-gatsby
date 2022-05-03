import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import girlGlasses from "../img/girl-with-glasses.jpg";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} title="Lentes de contacto esclerales" />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  
                  <div className="columns">
                    <div className="column is-6 has-text-left is-size-3">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="column is-6 has-text-centered is-offset-1 is-size-1">
                      <Link className="btn is-size-3" to="/contact" >
                        Llamar
                      </Link>
                    </div>
                  </div>

                  <div className="columns">
                    <div className="column is-8">
                      <img src={girlGlasses} alt="#" className="column is-12"/>
                    </div>
                    <div className="column is-4">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                      <a className="btn" to="/about">
                        Información Detallada
                      </a>
                    </div>
                  </div>

                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        Ver todos los productos
                      </Link>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-3 has-text-centered">
                      Post
                    </div>
                    <div className="column is-3 has-text-centered">
                      Post
                    </div>
                    <div className="column is-3 has-text-centered">
                      Post
                    </div>
                    <div className="column is-3 has-text-centered">
                      Post
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-4 has-text-centered">
                      Post
                    </div>
                    <div className="column is-4 has-text-centered">
                      Post
                    </div>
                    <div className="column is-4 has-text-centered">
                      Post
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Testimonios
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
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
