import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { categoryPagesQuery } from "../../gql/categoryPages";

const Categories = () => {
  let { categoryId } = useParams();

  const { data, loading } = useFetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/`,
    categoryPagesQuery(categoryId)
  );

  if (loading) {
    return "Loading...";
  }

  const categoryPages = data.portfolioPageCollection.items;

  return (
    <div className="grid md:grid-cols-2 gap-16">
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

export default Categories;
