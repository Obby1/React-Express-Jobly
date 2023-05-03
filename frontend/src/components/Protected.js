import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../App';

function Protected() {
    const { currentUser } = React.useContext(UserContext);

    return currentUser ? <Outlet /> : <Navigate to="/" />;
}

export default Protected;

// Notes on using Outlet:
//  <Outlet /> component serves as a placeholder in parent route components for 
// rendering child routes (and only the matched child route) based on the given path
// In our case, the parent route (Protected) will render with conditional logic.
// if currentUser then render child component via <Outlet />, else navigate to login

//working here:
// import React from 'react';
// import { Outlet, Navigate } from 'react-router-dom';
// import { UserContext } from '../App';

// function Protected({ children }) {
//     const currentUser = React.useContext(UserContext);

//     return currentUser ? (
//         <>{children}</>
//     ) : (
//         <Navigate to="/login" />
//     );
// }

// export default Protected;
