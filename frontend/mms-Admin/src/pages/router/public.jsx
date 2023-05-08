import React, { lazy, useEffect } from "react";
import { Route, useLocation, useNavigate } from "react-router";
import Paths, { protectedRoutes } from "./paths";
import CommonRouter from "./common";

const Login = lazy(() => import("../auth/LoginForm"));
const ForgetPassword = lazy(() => import("../auth/ForgotPasswordForm"));
const ResetPasswordForm = lazy(() => import("../auth/ResetPasswordForm"));

const PublicRouter = () => {
  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   if (protectedRoutes.includes(location.pathname)) {
  //     navigate(Paths.home, { replace: true });
  //   }
  // }, [location, navigate]);

  return (
    <CommonRouter>
      <Route path={Paths.login} element={<Login />} />
      <Route path={Paths.forgotPassword} element={<ForgetPassword />} />
      <Route path={Paths.resetPassword} element={<ResetPasswordForm />} />
    </CommonRouter>
  );
};

export default PublicRouter;
