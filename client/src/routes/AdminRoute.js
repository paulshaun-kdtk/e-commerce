impor React from 'react';
impor { useSelector } from 'react-redux';
impot { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => {
  const userAuthData = useSelector((state) => state.userLogin);

  const { userInfo } = userAuthData;

  return (
    <Route
      {...rest}
      render={(props) =>
        !userInfo ? (
          <Redirect to="/login" />
        ) : userInfo.role !== 'admin' ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AdminRoute;
