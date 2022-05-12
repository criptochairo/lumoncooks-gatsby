import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/Layout";
import Alex1 from "../../img/alex.jpg";
import Alex2 from "../../img/alex.jpeg";
import whatsapp from "../../img/whatsapp.png";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/white-background.jpg')`,
            height: "500px",
            objectFit: "contain",
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1 has-text-centered"
            style={{
              boxShadow: "0.5rem 0 0 rgba(142, 70, 255, 0.7), -0.5rem 0 0 rgba(142, 70, 255, 0.7)",
              backgroundColor: "rgba(142, 70, 255, 0.7)",
              color: "white",
              padding: "0.25em",
              borderRadius: ".25rem",
              fontSize: "3em",
            }}
          >
            Acerca de Nosotros
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns"> 
                  <Link className="btn is-size-3" 
                    id="whatsapp-sidebutton" 
                    to="https://wa.me/525563327093"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={whatsapp} alt="#" />
                  </Link> 
                  <div className="column is 6 has-text-justified">
                    <h2 style={{color: "#58b48d"}} className="is-size-2 has-text-centered" >Alejandro Rodríguez Mercado</h2>
                    <h3 className="is-size-3">Contactólogo especialista en queratocono</h3>
                    <p className="is-size-5 has-text-justified">El licenciado Alejandro es optometrista egresado del Instituto Politécnico Nacional. Siendo estudiante fomentó el desarrollo de la investigación, trabajando directamente en proyectos sobre los cambios en la calidad visual y en la percepción al color en diabéticos, con los cuales realizó su tesis de grado. Ced. Prof: 11204056
                    <br /><br />
                    Realizó su servicio social en el departamento de lentes de contacto del hospital: Fundación Conde de Valenciana, donde también se desempeñó como encargado de ese departamento para el turno vespertino.
                    <br /><br />
                    Manteniéndose en actualización constante realizó su especialidad en lentes de contacto con el Colegio Australiano de Optometría. Ha continuado el trabajo de investigación en distintas áreas, exponiendo los resultados en congresos nacionales e internacionales, yendo más allá de la optometría, llegando a otras áreas como ingeniería biomédica y óptica física.
                    <br /><br />
                    Actualmente es miembro de la Sociedad Educativa de Lentes Esclerales y estudia la Maestría en Investigación Clínica en la Escuela Superior de Medicina del IPN, enfocándose en tendencias actuales como, las repercusiones en la visión por el creciente uso prolongado de computadoras y celulares.
                    <br /><br />
                    También dedica tiempo a la redacción de artículos científicos y de divulgación, además de capacitación en la enseñanza del sistema de lecto-escritura Braille.
                    <br /><br />
                    Puede leer artículos escrito por el Lic. Alejandro en los siguientes enlaces:
                    <br /><br />
                    <a href="https://www.revista.unam.mx/2020v21n5/las_lagrimas_y_sus_padecimientos/" target="_blank" rel="noreferrer">Lágrimas</a>
                    <br />
                    <a href="http://www.revoftalmologia.sld.cu/index.php/oftalmologia/article/view/734" target="_blank" rel="noreferrer">Sensibilidad al contraste</a></p>
                  </div>

                  <div className="column is 6 has-text-centered">
                    <img src={Alex1} alt="#" />
                  </div>
              </div>

              <br /><br />

              <div className="columns">
                <div className="column is 6 has-text-centered">
                  <img src={Alex2} alt="#" />
                </div>
                
                <div className="column is 6 has-text-justified">
                    <h2 style={{color: "#58b48d"}} className="is-size-2 has-text-centered" >Alejandro Ordoñez Campos</h2>
                    <h3 className="is-size-3">Médico cirujano egresado de la Facultad Mexicana de Medicina, Universidad La Salle.</h3>
                    <p className="is-size-5" >Realizó su Especialidad en Medicina como Cirujano Oftalmólogo en el Instituto de Oftalmología Conde de Valenciana, al igual que su Alta Especialidad en Glaucoma; avaladas por la Universidad Nacional Autónoma de México (UNAM).
                    <br /><br />
                    Ha participado en diferentes congresos nacionales e internacionales. Certificado por el Consejo Mexicano de Oftalmología con No. de certificado 4083.
                    <br /><br />
                    Vocación por el cuidado en la salud visual tanto en niños, jóvenes, adultos y adultos mayores. Área de atención especializada en pacientes con enfermedades crónico-degenerativas sistémicas (Diabetes Mellitus, Hipertensión Arterial Sistémica, etc) y visuales como glaucoma, enfermedad por cierre angular, catarata, glaucoma neovascular, retinopatía diabética, entre otras.
                    <br /><br />
                    Cédula Profesional: 9461734
                    <br /><br />
                    Cédula de Especialidad: 11625815</p>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
