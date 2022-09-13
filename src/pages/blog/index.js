import * as React from "react";
import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/wok.jpg')`,
            height: "500px",
            objectFit: "contain",
            boxShadow: "2px 2px 10px black"
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: "white",
              padding: "0.25em",
              borderRadius: ".25rem",
              fontSize: "3.5em",
              textShadow: "1px 1px 5px black",
              fontFamily: "Euphoria Script"
            }}
          >
            Últimas recetas
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
