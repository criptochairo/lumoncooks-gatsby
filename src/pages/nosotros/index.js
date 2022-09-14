import * as React from "react";
import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";
import Lumon from "../../img/lumon.jpg";
import { Link } from "gatsby";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/colorful-mexican.jpg')`,
            height: "500px",
            objectFit: "contain",
            boxShadow: "2px 2px 10px black"
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1 has-text-centered"
            style={{
              color: "white",
              fontFamily: "Euphoria Script",
              padding: "0.25em",
              borderRadius: ".25rem",
              fontSize: "3.5em",
            }}
          >
            Acerca de Nosotros
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column is 12">
                  <img src={Lumon} alt="#" id="lumon-img"/>
                </div>
              </div>
              <br /><br />
              <div className="columns is-centered is-mobile"> 
                  <div className="column">
                    <h2 style={{fontFamily: "Abril Fatface"}} className="is-size-2 has-text-centered" >Luis & Montse</h2>
                    <p className="is-size-5" style={{padding: "1.5em"}}>
                      Somos una pareja joven originarios de la Ciudad de México. Desde chicos, nos fascinó la cocina en casa y el experimentar con nuevas recetas. No somos profesionales, pero sí amateurs entusiasmados por aprender y compartir con todos.
                      <br /><br />
                      Creamos este blog de cocina para poder compartir algunas de nuestras recetas favoritas, conservar recetas tradicionales de nuestras familias y guardar cualquier nueva receta que encontremos y probemos.
                      <br /><br />
                      Esperamos que les gusten las recetas y si tienen cualquier duda o comentario no duden en ponerse en contacto con nosotros. Nos pueden escribir en la página de <Link to="/contacto">contacto</Link> o, si nos cononcemos, nos pueden escribir por WhatsApp.  
                    </p>
                    <br />
                  </div>            
              </div>             
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
