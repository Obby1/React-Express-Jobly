import React, { useContext } from 'react';
import { UserContext } from '../App';

function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      {currentUser ? (
        <>
          <h2>Welcome, {currentUser.username}!</h2>
          <h3> Practice applying to fake jobs in our 100% organic database </h3>
        </>
      ) : (
        <h2>Please create an account or log in to access more features.</h2>
      )}
    </div>
  );
}

export default Homepage;


