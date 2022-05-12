import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import FullWidthImage from "../components/FullWidthImage";
import girlGlasses from "../img/vision-exam.jpg";
import ref1 from "../img/ref1.jpg";
import ref2 from "../img/ref2.jpg";
import ref3 from "../img/ref3.jpg";
import ref4 from "../img/ref4.png";
import us1 from "../img/alex.jpg";
import us2 from "../img/alex.jpeg";
import testimonial1 from "../img/testimonial1.jpeg";
import testimonial2 from "../img/testimonial2.jpeg";
import testimonial3 from "../img/testimonial3.jpeg";
import map from "../img/map.png";

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
      <FullWidthImage img={heroImage} title="Consultorio de Especialidades Visuales" subheading="Ver bien. Sentirse bien. Verse bien."/>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  
                  <div className="columns">
                    <div className="column is-6 has-text-left is-size-4 is-size-5-mobile">
                      <h1 className="title has-text-centered" style={{padding: "10px"}}>Contáctanos</h1>
                    </div>
                    <div className="column is-8 has-text-centered is-size-1">
                      <Link className="btn is-size-3" href="tel:525563327093" >
                        Llamar
                      </Link>
                    </div>
                  </div>

                  <br />

                  <div className="columns">
                    <div style={{display: "flex", flexDirection: "column"}} className="column is-8">
                      <img src={girlGlasses} alt="#" className="column is-12"/>
                    </div>
                    <div className="column is-4">
                      <h3 className="has-text-weight-semibold is-size-3">
                        {heading}
                      </h3>
                      <p className="is-size-5">{description}</p>
                      <Link className="btn" to="/about">
                        Información Detallada
                      </Link>
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
                  

                  <br /><br /><br />


                  <div className="columns">
                    <div className="column is-3 has-text-centered">
                      <div className="ref-container content has-text-centered">
                      <div className="">
                        <img src={ref1} alt="#" className="column is-12" />
                        <h3 style={{color: "#58b48d"}}>Congresos</h3>
                        <p className="is-size-5">Exposición en congresos nacionales e internacionales.</p>
                      </div>
                        
                      </div>
                    </div>
                    <div className="ref-container column is-3 has-text-centered" >
                      <div className="">
                        <img src={ref2} alt="#" className="column is-12" />
                        <h3 style={{color: "#58b48d"}}>Artículos Científicos</h3>
                        <p className="is-size-5">Publicación de artículos científicos y de divulgación.</p>
                      </div>
                      
                    </div>
                    <div className="ref-container column is-3 has-text-centered" >
                      <div className="">
                        <img src={ref3} alt="#" className="column is-12" />
                        <h3 style={{color: "#58b48d"}}>Scleral Lens Education Society</h3>
                        <p className="is-size-5">Miembro de la sociedad internacional de lentes de contacto esclerales.</p>
                      </div>
                      
                    </div>
                    <div className="ref-container column is-3 has-text-centered" >
                    <div className="">
                        <img src={ref4} alt="#" className="column is-12" />
                        <h3 style={{color: "#58b48d"}}>Miembro de "Australian College of Optometry"</h3>
                        <p className="is-size-5">Certificado en lentes de contacto avanzados.</p>
                      </div>
                      
                    </div>
                  </div>

                  <br /><br />

                  <div className="columns">
                    <div className="column is-5 has-text-centered">
                      <div className="profile-container">
                        <img src={us1} alt="#" className="column is-12" />
                      </div>
                    </div>  
                    <div className="profile-text">
                      <h3 className="has-text-weight-semibold has-text-centered is-size-2">Sobre <span style={{color: "#D886F7"}}>nosotros</span></h3>
                      <span>___________</span><br />
                      <p className="is-size-5">Nuestro equipo de trabajo está en constante actualización en las ramas de investigación y en todas las opciones tecnológicas disponibles.</p>
                    </div>
                    <div className="column is-5 has-text-centered">
                      <div className="profile-container">
                        <img src={us2} alt="#" className="column is-12" />
                      </div>
                    </div>
                  </div>

                  <br /><br />

                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        Testimonios
                      </h3>
                    </div>
                  </div>

                  <div className="columns">
                    <div className="column is-4 has-text-centered">
                      <div className="testimonial-img-wrapper">
                        <img src={testimonial1} alt="#"></img>
                      </div>
                        <h3 style={{color: "#D886F7"}} className="is-size-2">Ana Laura</h3>
                        <p className="is-size-5 has-text-weight-light"><i>"Hace casi once años me detectaron Queratocono; no tenía idea que era eso, lamentablemente era una situación muy compleja ya a mi ojo izquierdo le tuvieron que trasplantar la córnea... con el tiempo mi ojo a pasado por procesos difíciles pero sigue con vida, el derecho aún sigue con su misma córnea. 
                        <br /><br />
                        Tuve la gran oportunidad de contactar al doctor Rodríguez ya que andaba en busca de lentes Esclerales que son muy difíciles de encontrar ya que son especiales para córneas deformes como las mías; desde el momento que pude comunicarme con él me dio la absoluta confianza para poder explicar ampliamente mi problema, se dio el tiempo para escucharme y decirme detalle por detalle cual es el proceso del uso de los lentes, no hizo falta buscar más, aquí estoy feliz con su atención del doctor. estoy en proceso de adaptación de lente Escleral en el ojo derecho; en ojo izquierdo me dio otra opción muy favorable ya que no se pudo adaptar el Escleral por problemas de inflamación en el mismo.
                        <br /><br />
                        Les puedo decir que me ha cambiado mi vida por completo ya que el lente es súper cómodo no se siente a pesar de mi córnea deforme y veo excelentemente, se ha adaptado muy bien gracias a su excelente trabajo y atención del doctor, doy gracias a Dios por estar mucho mejor y lograr ver todo lo que ya no podía percibir."</i></p>
                    </div>
                    <div className="column is-4 has-text-centered">
                      <div className="testimonial-img-wrapper">
                          <img src={testimonial2} alt="#"></img>
                        </div>
                        <h3 style={{color: "#D886F7"}} className="is-size-2">Estefanía</h3>
                        <p className="is-size-5 has-text-weight-light"><i>"Uso lentes desde que era niña y nunca en 20 años me dijeron mi diagnóstico completo ni toda mi graduación, hasta que llegué con el Dr. Alejandro y ahora puedo notar la diferencia entre usar o no lentes. Totalmente recomendable."</i></p>
                    </div>
                    <div className="column is-4 has-text-centered">
                      <div className="testimonial-img-wrapper">
                          <img src={testimonial3} alt="#"></img>
                        </div>
                        <h3 style={{color: "#D886F7"}} className="is-size-2">Alberto</h3>
                        <p className="is-size-5 has-text-weight-light"><i>"Tengo problema en mi vista a causa del queratocono, anteriormente ya había visitado otros doctores pero no cumplían con mi espectativa de mejorar mi visión, hasta que llegue hace tres años con el Doctor Alejandro y fue el quien me realizó estudios completos para identificar que tipo de lente de contacto requería, y hasta el momento estoy muy contento ya que mejoro muchísimo mi visión y mi calidad de vida."</i></p>
                    </div>
                  </div>

                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Leer más
                    </Link>
                  </div>

                  <div className="column is-12">
                    <a href="https://www.google.com/maps/place/Consultorio+de+Especialidades+Visuales/@19.3451119,-99.1544067,16.75z/data=!4m5!3m4!1s0x85d1ff71d0465bd5:0xa645229cffb456d7!8m2!3d19.3451474!4d-99.1529121" className="map" target="_blank" rel="noreferrer">
                      <img src={map} alt="#" />
                    </a>
                  </div>

                  <div className="column is-12 has-text-centered">
                    <Link className="btn" href="https://www.google.com/maps/place/Consultorio+de+Especialidades+Visuales/@19.3451119,-99.1544067,16.75z/data=!4m5!3m4!1s0x85d1ff71d0465bd5:0xa645229cffb456d7!8m2!3d19.3451474!4d-99.1529121" target="_blank" rel="noreferrer">
                    Cómo llegar
                    </Link>
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
