import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <Outlet />
    </Suspense>
  );
};

export default SharedLayout;
