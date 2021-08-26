import React from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";
import { nonAuthRoutes } from "./routeEnum";
interface Props {
  Component: React.FC<RouteComponentProps>;
  path: any;
  exact?: boolean;
  requiredRoles: any;
}

function findCommonElement(array1: any, array2: any) {
  // Loop for array1
  for (let i = 0; i < array1.length; i++) {
    // Loop for array2
    for (let j = 0; j < array2.length; j++) {
      // Compare the element of each and
      // every element from both of the
      // arrays
      if (array1[i] === array2[j]) {
        // Return if common element found
        return true;
      }
    }
  }

  // Return if no common element exist
  return false;
}
const ProtectedRoute: React.FC<Props> = ({
  Component,
  path,
  exact = false,
  requiredRoles,
}: Props) => {
  const isAuth = useSelector((state: RootState) => state.loginReducer);
  const { error, isLoginSuccess, data, loading } = isAuth;

  let userHasRequiredRole = false;

  // debugger;
  if (isLoginSuccess) {
    userHasRequiredRole = findCommonElement(requiredRoles, data.roles);
  }
  const message = userHasRequiredRole
    ? "Please Login to view this page"
    : "You can't be here!";
  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) =>
        isLoginSuccess && userHasRequiredRole ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: userHasRequiredRole
                ? nonAuthRoutes.login
                : nonAuthRoutes.notFound,
              state: {
                message,
                requestedPath: path,
              },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
