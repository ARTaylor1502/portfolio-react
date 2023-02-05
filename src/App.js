import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Categories from "./components/Categories/Categories";
import Page from "./components/Page/Page";

const query = `
{
  categoriesCollection {
    items {
      category 
    }
  }
}
`;

function App() {
  const [navItems, setNavItems] = useState([]);

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

        setNavItems(data.categoriesCollection.items);
      });
  }, []);

  if (!navItems) {
    return "Loading...";
  }

  return (
    <Routes>
      <Route path="/" element={<Layout navItems={navItems} />}>
        <Route index element={<Home />} />
        <Route path="/categories/:categoryId" element={<Categories />} />
        <Route path="/pages/:pageId" element={<Page />} />
      </Route>
    </Routes>
  );
}

export default App;
