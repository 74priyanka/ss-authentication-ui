import { Route, Routes } from "react-router-dom";
import React from "react";
import Paths from "./Paths";
import WorkerAuthUI from "../components/WorkerAuthUI";

const Router = () => {
  const pageRoutes = Paths.map((item, index) => {
    const { title, path, element } = item;
    return <Route key={title} path={path} element={element} />;
  });

  return (
    <Routes>
      <Route path="/" element={<WorkerAuthUI />}>
        {pageRoutes}
      </Route>
    </Routes>
  );
};

export default Router;
