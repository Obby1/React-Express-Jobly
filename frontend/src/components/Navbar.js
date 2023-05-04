import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

function Navbar({ currentUser, logout }) {
    return (
        <BootstrapNavbar bg="light" expand="lg">
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    {currentUser && (
                        <>
                            <NavLink className="navbar-brand" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/companies">Companies</NavLink>
                            <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                            <NavLink className="nav-link" onClick={logout} to="/">Logout</NavLink>
                        </>
                    )}
                    {!currentUser && (
                        <>
                            <NavLink className="navbar-brand" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                            <NavLink className="nav-link" to="/signup">Signup</NavLink>
                        </>
                    )}
                </Nav>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    );
}

export default Navbar;


// import React from 'react';
// import { NavLink } from 'react-router-dom';


// function Navbar({ currentUser, logout }) {
//     return (
//         <nav>
//             <NavLink exact="true" to="/">Home</NavLink>
//             {currentUser && (
//                 <>
//                     <NavLink to="/companies">Companies</NavLink>
//                     <NavLink to="/jobs">Jobs</NavLink>
//                     <NavLink to="/profile">Profile</NavLink>
//                     <NavLink onClick={logout} to="/">Logout</NavLink>
//                 </>
//             )
//             }
//             {
//                 !currentUser && (
//                     <>
//                         <NavLink to="/login">Login</NavLink>
//                         <NavLink to="/signup">Signup</NavLink>
//                     </>
//                 )
//             }
//         </nav >
//     );
// }


// export default Navbar;


// function Navbar() {


//     return (
//         <nav>
//             <NavLink exact="true" to="/">Home</NavLink>
//             <NavLink to="/companies">Companies</NavLink>
//             <NavLink to="/jobs">Jobs</NavLink>
//             <NavLink to="/login">Login</NavLink>
//             <NavLink to="/signup">Signup</NavLink>
//             <NavLink to="/profile">Profile</NavLink>
//         </nav>
//     );
// }
