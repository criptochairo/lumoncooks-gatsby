import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
import { Link } from "gatsby";
import products1 from "../img/products1.jpg";
import products2 from "../img/products2.jpeg";
import products3 from "../img/products3.jpeg";
import products4 from "../img/products4.jpg";


// eslint-disable-next-line
export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  fullImage,
  pricing,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div className="content">
      <FullWidthImage img={heroImage} title={title} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            {/* <div className="columns">
              <div className="column is-7 is-offset-1">
                <h3 className="has-text-weight-semibold is-size-2">
                  {heading}
                </h3>
                <p>{description}</p>
              </div>
            </div> */}
            {/* <div className="columns">
              <div className="column is-10 is-offset-1">
                <Features gridItems={intro.blurbs} /> 
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {main.heading}
                    </h3>
                    <p>{main.description}</p>
                  </div>
                </div>
                <div className="tile is-ancestor">
                  <div className="tile is-vertical">
                    <div className="tile">
                      <div className="tile is-parent is-vertical">
                        <article className="tile is-child">
                          <PreviewCompatibleImage imageInfo={main.image1} />
                        </article>
                      </div>
                      <div className="tile is-parent">
                        <article className="tile is-child">
                          <PreviewCompatibleImage imageInfo={main.image2} />
                        </article>
                      </div>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image3} />
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="columns"> 
                  <div className="column is 6 has-text-justified">
                    <h2 style={{color: "#9155A7"}} className="is-size-2" >Lentes Esclerales</h2>
                    <h3 style={{color: "#9155A7"}} className="is-size-4 has-text-weight-light">Lentes de contacto esclerales precio México</h3>
                    <p className="is-size-5 has-text-justified">Los lentes de contacto esclerales son una de las opciones más cómodas y eficientes en el tratamiento no quirúrgico del queratocono. Estos lentes reposan sobre la esclera (parte blanca del ojo) volviéndose inmóviles mientras se usan, lo que brinda la sensación de libertad y comodidad en todos los movimientos oculares.
                    <br /><br />
                    <strong>El precio de cada lente depende del caso específico.</strong> Cosas que pueden influir en el costo son: el tipo de problema, ojo seco, uso de computadora, cirugías glaucoma, entre otras.</p>
                    <br /><br />
                    <div className="column is 6 has-text-centered">
                      <Link className="btn is-size-3" href="tel:5563327093" >
                          Llamar
                      </Link>
                    </div>
                  </div>

                  <div className="column is 6 has-text-centered">
                    <img src={products1} alt="#" className="productimg" />
                  </div>
              </div>

              <br /><br /><br />

              <div className="columns">
                <div className="column is 6 has-text-centered">
                  <img src={products2} alt="#" className="productimg" />
                </div>
                
                <div className="column is 6 has-text-centered">
                    <h2 style={{color: "#9155A7"}} className="is-size-2" >Lentes esclerales para queratocono</h2>
                    <p className="is-size-5 has-text-justified" >La principal indicación para estos lentes son deformaciones corneales, como el <strong>queratocono</strong>. Esta es una enfermedad en la que la córnea se deforma y adelgaza provocando que se distorsione la visión.
                    <br /><br />
                    También se indican en casos de trasplantes de córnea, degeneraciones marginales, cirugías de graduación fallidas o en casos de ojo seco, miopía, hipermetropía, astigmatismo y vista cansada.
                    </p>
                    <div className="column is 6 has-text-centered">
                      <Link className="btn is-size-3" href="tel:5563327093" >
                          Llamar
                      </Link>
                    </div>
                </div>
              </div>

              <br /><br /><br />

              <div className="columns"> 
                  <div className="column is 6 has-text-justified">
                  <h2 style={{color: "#9155A7"}} className="is-size-2" >Lentes esclerales CDMX</h2>
                    <p className="is-size-5 has-text-justified">En Especialidades Visuales, la adaptación de estos lentes es personalizada para cada paciente, donde consideramos la severidad del caso, actividades y entorno. Trabajamos con la tecnología mas actualizada, además de estar en constante capacitación con el objetivo de satisfacer las necesidades que cada caso requiera.
                    <br /><br />
                    Para información detallada, con gusto le atenderemos en los teléfonos de contacto o puede dejarnos un mensaje en <Link to="/contact">este formato</Link>.
                    </p>
                    <div className="column is 6 has-text-centered">
                    <Link className="btn is-size-3" href="tel:5563327093" >
                        Llamar
                    </Link>
                    </div>
                  </div>

                  <div className="column is 6 has-text-centered">
                    <img src={products3} alt="#" className="productimg" />
                  </div>
              </div>

              <br /><br /><br />

              <div className="columns">
                <div className="column is 6 has-text-centered">
                  <img src={products4} alt="#" className="productimg" />
                </div>
                
                <div className="column is 6 has-text-centered">
                    <h2 style={{color: "#9155A7"}} className="is-size-2" >Complicaciones con lentes esclerales</h2>
                    <p className="is-size-5 has-text-justified" >Las principales <strong>complicaciones con lentes esclerales</strong> son consecuencia de la falta de oxigenación que producen y/o la resequedad de los materiales, lo cual, afectará la visión mientras se usan.
                    <br /><br />
                    La mayoría de estos problemas pueden ser fácilmente solucionados con la atención y prevención adecuadas.
                    <br /><br />
                    Si ya es usuario de lentes de esclerales y tiene alguno de estos problemas, u otro no mencionado, con gusto le podemos brindar asesoría en los teléfonos de contacto. o a través de mensajes en el chat.
                    </p>
                    <div className="column is 6 has-text-centered">
                    <Link className="btn is-size-3" href="tel:5563327093" >
                        Llamar
                    </Link>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </section>
      {/* <FullWidthImage img={fullWidthImage} imgPosition={"bottom"} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <h2 className="has-text-weight-semibold is-size-2">
                  {pricing.heading}
                </h2>
                <p className="is-size-5">{pricing.description}</p>
                <Pricing data={pricing.plans} />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        description
        intro {
          blurbs {
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
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 72, layout: FULL_WIDTH)
              }
            }
          }
        }
        testimonials {
          author
          quote
        }

        full_image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
