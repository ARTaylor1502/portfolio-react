import React from "react";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import useFetch from "../../hooks/useFetch";
import { portfolioQuery } from "../../gql/portfolioPage";

const Page = () => {
  let { pageId } = useParams();
  const { data, loading } = useFetch(
    `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}/`,
    portfolioQuery(pageId)
  );

  if (loading) {
    return "Loading...";
  }

  let page = data.portfolioPage;

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
