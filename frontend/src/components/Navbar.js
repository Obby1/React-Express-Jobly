import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar({ currentUser, logout }) {
    return (
        <nav>
            <NavLink exact="true" to="/">Home</NavLink>
            {currentUser && (
                <>
                    <NavLink to="/companies">Companies</NavLink>
                    <NavLink to="/jobs">Jobs</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink onClick={logout} to="/">Logout</NavLink>
                </>
            )
            }
            {
                !currentUser && (
                    <>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/signup">Signup</NavLink>
                    </>
                )
            }
        </nav >
    );
}


export default Navbar;


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
