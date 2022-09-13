import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/watercolor-blue.jpg')`,
            height: "500px",
            objectFit: "contain",
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 rgba(142, 70, 255, 0.7), -0.5rem 0 0 rgba(142, 70, 255, 0.7)",
              backgroundColor: "rgba(142, 70, 255, 0.7)",
              color: "white",
              padding: "0.25em",
              borderRadius: ".25rem",
              fontSize: "3em",
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
