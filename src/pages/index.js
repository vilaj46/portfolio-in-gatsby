import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

// Components
import App from "../components/App";

// Data
import { headData } from "../data/data.js";

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
