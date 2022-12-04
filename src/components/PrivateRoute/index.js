import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { Context } from '../Context/AuthContext';

function PrivateRoute({ children, redirectTo }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  console.log(authenticated);
  return authenticated ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute;
