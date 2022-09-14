import * as React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import Navbar from "../../components/Navbar";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
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
      <Helmet title={`Tags | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: "1rem" }}
          >
            <h1 className="title is-size-2 is-bold-light">Etiquetas & Categorías</h1>
            <ul className="taglist">
              {group.map((tag) => (
                <li key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
      <h1 className="title is-size-2 has-text-centered is-bold-light" style={{marginBottom: "1em"}}>Todas las recetas</h1>
        <div className="content">
          <BlogRoll />
        </div>
      </div>
    </section>       
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
