import { FC } from 'react';
import { Navigate } from 'react-router';

interface PrivateRouteType {
  isAuthenticated?: boolean;
  component: JSX.Element;
}

export const PrivateRoute: FC<PrivateRouteType> = ({
  isAuthenticated = true,
  component,
}) => {
  if (isAuthenticated) return component;
  else return <Navigate to="/" />;
};
