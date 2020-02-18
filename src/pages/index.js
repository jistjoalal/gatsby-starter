import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";

export default class RootIndex extends React.Component {
  render() {
    const metaDescription = `Gatsby`;
    const structuredData = {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "Gatsby",
      url: "https://www.example.com/",
      address: "123 3rd st",
      sameAs: ["https://www.facebook.com/gatsby-starter"]
    };

    return (
      <Layout description={metaDescription}>
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>
        <hr />
        <h1>Gatsby Starter</h1>
      </Layout>
    );
  }
}
