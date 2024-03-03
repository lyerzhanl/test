// import React, { useEffect } from 'react';
// import { useKeycloak } from '@react-keycloak/web';

// const PrivateRoute = ({ children }) => {
//   const { keycloak } = useKeycloak();
//   const isLoggedIn = keycloak.authenticated;

//   useEffect(() => {
//     const checkAuthentication = async () => {
//       if (!isLoggedIn) {
//         await keycloak.login();
//       }
//     };

//     checkAuthentication();
//   }, [isLoggedIn, keycloak]);

//   return <>{children}</>;
// };

// export default PrivateRoute;
import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import { Navigate } from 'react-router-dom';

export function PrivateRoute({ component: Component, roles, ...rest }) {
  const { keycloak } = useKeycloak();

  return (
    <React.Fragment
      render={(props) => {
        return keycloak.authenticated === true ? (
          <Component {...props} />
        ) : (
          <Navigate to={{ pathname: '/' }} />
        );
      }}
    />
  );
}

export default PrivateRoute;
