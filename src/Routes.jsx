import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./components/Layout/SharedLayout";

const HomePage = lazy(() => import("./pages/Home"));
const CatalogPage = lazy(() => import("./pages/Catalog"));
const FavoritPage = lazy(() => import("./pages/Favorit"));

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorit" element={<FavoritPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
