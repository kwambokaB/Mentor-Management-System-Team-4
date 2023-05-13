import React, { lazy, Suspense } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from "react-router";
import Paths from "./paths";

const StatusPage = lazy(() =>
  import("../../components/statusPage/status-page.component")
);

const CommonRouter = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <Suspense fallback={""}>
      <Routes>
        {/*  */}
        {children}

        {/* Common paths */}
        <Route
          path={Paths[403]}
          element={
            <StatusPage
              code="403"
              title={"403"}
              helperText={""}
              btnText={"Go to Dashboard"}
            />
          }
        />
        <Route
          path={Paths.systemError}
          element={
            <StatusPage
              code="403"
              title={"403"}
              helperText={""}
              btnText={"Go to Dashboard"}
            />
          }
        />
        <Route
          path={Paths.pageNotFound}
          element={
            <StatusPage
              code="403"
              title={"403"}
              helperText={""}
              btnText={"Go to Dashboard"}
            />
          }
        />
      </Routes>
    </Suspense>
  );
};

export default CommonRouter;