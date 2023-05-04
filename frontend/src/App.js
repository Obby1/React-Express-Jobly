import React, { useState, useEffect, useContext, createContext } from 'react';
import './App.css';
import CompanyList from './components/CompanyList';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import JobList from './components/JobList';
import CompanyDetail from './components/CompanyDetail';
import JobDetail from './components/JobDetail';
import ProfileForm from './components/ProfileForm';
import JoblyApi from './api';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import jwt_decode from "jwt-decode"
import useLocalStorage from './hooks/useLocalStorage';
import Protected from './components/Protected';
import 'bootstrap/dist/css/bootstrap.min.css';
// import jwt_decode from "jwt-decode";
// import { SECRET_KEY } from "../backend/config";


const UserContext = createContext(null);

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // const [token, setToken] = useState(null);
  const [token, setToken] = useLocalStorage('token', null);


  // 5.2.23 save spot here - need to do something after log in. Log in and update state is now working
  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          // note: using jsonwebtoken package causing several issues with newer version of CRA. Used jwt-decode package instead
          let { username } = jwt_decode(token);
          // put the token on the Api class so it can use it to call the API.
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          // setApplicationIds(new Set(currentUser.applications));
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      // setInfoLoaded(true);
    }

    // set infoLoaded to false while async getCurrentUser runs; once the
    // data is fetched (or even if an error happens!), this will be set back
    // to false to control the spinner.
    // setInfoLoaded(false);
    getCurrentUser();
  }, [token]);



  async function login(formData) {
    const newToken = await JoblyApi.loginUser(formData);
    // console.log(formData)
    setToken(newToken);
    JoblyApi.token = newToken;
  }

  async function signup(formData) {
    const newToken = await JoblyApi.registerUser(formData);
    setToken(newToken);
    JoblyApi.token = newToken;
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  function updateCurrentUser(updatedUser) {
    setCurrentUser(updatedUser);
  }

  async function applyForJob(jobId) {
    if (currentUser) {
      await JoblyApi.applyToJob(currentUser.username, jobId);
      const updatedUser = await JoblyApi.getCurrentUser(currentUser.username);
      setCurrentUser(updatedUser);
    }
  }

  return (
    <UserContext.Provider value={{ currentUser, updateCurrentUser, applyForJob }}>
      <div className="App">
        <Router>
          <Navbar currentUser={currentUser} logout={logout} />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/signup" element={<SignupForm signup={signup} />} />
            <Route element={<Protected />}>
              <Route path="/companies/:handle" element={<CompanyDetail />} />
              <Route path="/companies" element={<CompanyList />} />
              <Route path="/jobs/:id" element={<JobDetail />} />
              <Route path="/jobs" element={<JobList />} />
              <Route path="/profile" element={<ProfileForm />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
export { UserContext };
// Note on using Routes, Route, and Protected component:
// With the updated configuration, the Protected component is now directly used as the parent route element. This means that when any of the child routes (companies, jobs, etc.) are matched, the Protected component will be rendered first.
// The Protected component will check if the user is logged in (using the UserContext). If the user is logged in, it will render its child routes using the <Outlet /> component. If the user is not logged in, it will navigate the user to the /login route.

// old working code here, keeping it until project completion:

{/* <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/signup" element={<SignupForm signup={signup} />} />
            <Route path="/*" element={<Protected />}>
              <Route path="/companies/:handle" element={<CompanyDetail />} />
              <Route path="/companies" element={<CompanyList />} />
              <Route path="/jobs/:id" element={<JobDetail />} />
              <Route path="/jobs" element={<JobList />} />
            </Route>
          </Routes> */}

{/* <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/signup" element={<SignupForm signup={signup} />} />
            <Route
              path="/*"
              element={
                <Protected>
                  <Routes>
                    <Route path="/companies/:handle" element={<CompanyDetail />} />
                    <Route path="/companies" element={<CompanyList />} />
                    <Route path="/jobs/:id" element={<JobDetail />} />
                    <Route path="/jobs" element={<JobList />} />
                  </Routes>
                </Protected>
              }
            />
          </Routes> */}

{/* <Routes>
<Route path="/" element={<Homepage />} />
<Route path="/login" element={<LoginForm login={login} />} />
<Route path="/signup" element={<SignupForm signup={signup} />} />

<Route
  path="/*"
  element={
    <PrivateRoute>
      <Routes>
        <Route path="/companies/:handle" element={<CompanyDetail />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/jobs" element={<JobList />} />
      </Routes>
    </PrivateRoute>
  }
/>
</Routes> */}

{/* broken */ }
{/* <Routes>
            <Route path="/" element={<Homepage />} />
            <PrivateRoute path="/companies/:handle" element={<CompanyDetail />} />
            <PrivateRoute path="/companies" element={<CompanyList />} />
            <PrivateRoute path="/jobs/:id" element={<JobDetail />} />
            <PrivateRoute path="/jobs" element={<JobList />} />
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/signup" element={<SignupForm signup={signup} />} />
          </Routes> */}
{/* <Routes>
            <Route path="/" element={<Homepage />} />
            <PrivateRoute path="/companies/:handle" element={<CompanyDetail />} />
            <PrivateRoute path="/companies" element={<CompanyList />} />
            <PrivateRoute path="/jobs/:id" element={<JobDetail />} />
            <PrivateRoute path="/jobs" element={<JobList />} />
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/signup" element={<SignupForm signup={signup} />} />
          </Routes> */}

{/* fixed */ }
{/* <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/companies/:handle" element={<CompanyDetail />} />
            <Route path="/companies" element={<CompanyList />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/signup" element={<SignupForm signup={signup} />} />
          </Routes> */}

// useEffect(() => {
//   async function getCurrentUser() {
//     if (token) {
//       try {
//         // Get the username from the server
//         const username = await JoblyApi.getCurrentUsername(token);

//         // Get the user details using the username
//         const user = await JoblyApi.getUser(username);
//         setCurrentUser(user);
//       } catch (error) {
//         console.error("Error retrieving current user:", error);
//       }
//     } else {
//       setCurrentUser(null);
//     }
//   }
//   getCurrentUser();
// }, [token]);



// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Homepage from './components/Homepage';
// // import Companies from './components/Companies';
// import CompanyDetail from './components/CompanyDetail';
// import Jobs from './components/Jobs';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Profile from './components/Profile';
// import CompanyList from './components/CompanyList';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         {/* <Route path="/companies" element={<Companies />} /> */}
//         <Route path="/companies" element={<CompanyList />} />
//         <Route path="/companies/:handle" element={<CompanyDetail />} />
//         <Route path="/jobs" element={<Jobs />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


  // // move this to helps folder later
  // function PrivateRoute({ children, ...rest }) {
  //   const currentUser = useContext(UserContext);
  //   return (
  //     <Route
  //       {...rest}
  //       render={({ location }) =>
  //         currentUser ? (
  //           children
  //         ) : (
  //           <Navigate to="/login" state={{ from: location }} />
  //         )
  //       }
  //     />
  //   );
  // }

  // // move this to helps folder later
  // function PrivateRoute({ element: Component, ...rest }) {
  //   const currentUser = useContext(UserContext);

  //   return (
  //     <Route
  //       {...rest}
  //       element={
  //         currentUser ? (
  //           Component
  //         ) : (
  //           <Navigate to="/login" state={{ from: rest.path }} />
  //         )
  //       }
  //     />
  //   );
  // }

  // function PrivateRoute({ children }) {
  //   const currentUser = useContext(UserContext);

  //   return (
  //     currentUser ? (
  //       children
  //     ) : (
  //       <Navigate to="/login" />
  //     )
  //   );
  // }
