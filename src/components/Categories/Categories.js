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
    <div className="grid grid-cols-2 gap-16">
      {categoryPages.map((page) => (
        <Link
          to={`/pages/${page.sys.id}`}
          className="text-2xl text-primary-light hover:text-primary-dark hover:shadow-xl hover:shadow-secondary-light"
          key={`page-${page.sys.id}`}
        >
          <div
            style={{ backgroundImage: `url('${page.bannerImage.url}')` }}
            className="h-80 flex items-end bg-cover bg-center bg-no-repeat"
          >
            <h3 className="p-3 bg-white">{page.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

Categories.propTypes = {};

Categories.defaultProps = {};

export default Categories;
