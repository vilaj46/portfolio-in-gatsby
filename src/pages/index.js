import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

// Components
import App from "../components/App";

// Data
import { headData } from "../data/data.js";

// Styles
import "../style/main.scss";

/**
 * Hookup Projects
 * Get images on projects. What sizes do we need?
 * Set up a gmail for julianviladev@gmail.com or something.
 *
 * About me section
 * New Favicon, also get rid of favicon warning
 *
 * Figure out what social links we want
 *
 * Need a picture of myself
 * Color Scheme
 * Change "Unknown Developer"
 */

const IndexPage = () => {
  const { title, lang, description } = headData;
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <App />
    </Fragment>
  );
};

export default IndexPage;
