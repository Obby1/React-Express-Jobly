import React, { useContext } from 'react';
import { UserContext } from '../App';

function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      {currentUser ? (
        <h2>Welcome, {currentUser.username}!</h2>
      ) : (
        <h2>Please create an account or log in to access more features.</h2>
      )}
    </div>
  );
}

export default Homepage;


// import React from 'react';

// function Homepage() {
//   return (
//     <div>
//       <h1>Welcome to Jobly</h1>
//     </div>
//   );
// }

// export default Homepage;
