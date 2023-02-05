import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Categories = () => {
  let { categoryId } = useParams();
  const [categoryPages, setCategoryPages] = useState([]);

  const query = `
  {
    portfolioPageCollection(where: {category: {category: "${categoryId}"}}) {
      items {
        sys {
          id
        }
        title
        bannerImage {
          url
          title
        }
      }
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

        setCategoryPages(data.portfolioPageCollection.items);
      });
  }, [categoryId]);

  if (!categoryPages) {
    return "Loading...";
  }

  return (
    <div className="grid grid-cols-2 gap-8">
      {categoryPages.map((page) => (
        <Link
          to={`/pages/${page.sys.id}`}
          className="text-2xl text-primary-light hover:text-black"
          key={`page-${page.sys.id}`}
        >
          <div className="border border-black">
            <div className="h-80 p-5 flex justify-center items-center">
              <img
                className="h-fit"
                src={page.bannerImage.url}
                alt={page.bannerImage.title}
              />
            </div>
            <h3 className="p-3">{page.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

Categories.propTypes = {};

Categories.defaultProps = {};

export default Categories;
