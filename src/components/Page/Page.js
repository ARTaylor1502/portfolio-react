import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";

const Page = () => {
  let { pageId } = useParams();
  const [page, setPage] = useState(null);

  const query = `
  {
    portfolioPage(id: "${pageId}") {
       title
      bannerImage {
        url
        title
      }
      briefclientRequirements
      techUsed
      development
      projectOutcome
    }
  }
  `;

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPage(data.portfolioPage);
      });
  }, [pageId]);

  if (!page) {
    return "Loading...";
  }

  return (
    <div>
      <h1 className="mb-6 lg:mb-0 lg:py-6 text-3xl font-semibold">
        {page.title}
      </h1>
      <img
        className="mb-12"
        src={page.bannerImage.url}
        alt={page.bannerImage.title}
      />
      <div className="text-lg">
        {page.briefclientRequirements && (
          <>
            <h2 className="mb-8 text-2xl font-semibold">
              Brief/Client Requirements
            </h2>
            <div className="mb-8">
              {HTMLReactParser(page.briefclientRequirements)}
            </div>
          </>
        )}
        {page.techUsed && (
          <>
            <h2 className="mb-8 text-2xl font-semibold">Tech Used</h2>
            <div className="mb-8">{HTMLReactParser(page.techUsed)}</div>
          </>
        )}
        {page.development && (
          <>
            <h2 className="mb-8 text-2xl font-semibold">Development</h2>
            <div className="mb-8">{HTMLReactParser(page.development)}</div>
          </>
        )}
        {page.projectOutcome && (
          <>
            <h2 className="mb-8 text-2xl font-semibold">Project Outcome</h2>
            <div className="mb-8">{HTMLReactParser(page.projectOutcome)}</div>
          </>
        )}
      </div>
    </div>
  );
};

Page.propTypes = {};

Page.defaultProps = {};

export default Page;
