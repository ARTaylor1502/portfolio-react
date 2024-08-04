import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Categories from "./components/Categories/Categories";
import Page from "./components/Page/Page";
import { categoriesQuery } from "./gql/categories";
import useFetch from "./hooks/useFetch";
import Loading from  "./components/Loading/Loading";

function App() {
  const { data, loading } = useFetch(
    `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}/`,
    categoriesQuery
  );

  if (loading) {
    return <Loading />;
  }

  const navItems = data.categoriesCollection.items;

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
