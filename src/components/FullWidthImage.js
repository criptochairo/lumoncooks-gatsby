import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import tools from '../img/chef-hat.png';

export default function FullWidthImage(props) {
  const {
    height = 400,
    img,
    title,
    subheading,
    imgPosition = "top left",
  } = props;

  return (
    <>
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
        }}
      >
        {img?.url ? (
          <img
            src={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              height: height,
              width: "100%",
            }}
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={"cover"}
            fadeIn = {true}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              maxHeight: "900px",
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {(title || subheading) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
            }}
          >
            {<img src={tools} alt="#" style={{
              height: "auto",
              width: "7rem"
            }}/>}
            {title && (
              <h1
                className="has-text-weight-bold"
                style={{
                  boxShadow: "0.5rem 0 0 rgba(142, 70, 255, 0), -0.5rem 0 0 rgba(142, 70, 255, 0)",
                  backgroundColor: "rgba(142, 70, 255, 0)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0em",
                  fontSize: "4.5em",
                  fontFamily: "Euphoria Script"
                }}
              >
                {title}
              </h1>
            )}
            {subheading && (
              <h2
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  boxShadow:
                    "rgba(142, 70, 255, 0.7) 0.5rem 0px 0px, rgba(142, 70, 255, 0.7) -0.5rem 0px 0px",
                  backgroundColor: "rgba(142, 70, 255, 0.7)",
                  color: "white",
                  lineHeight: "1.5",
                  padding: "0.25rem",
                  marginTop: "0.5rem",
                  borderRadius: ".25rem"
                }}
              >
                {subheading}
              </h2>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
    </>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
