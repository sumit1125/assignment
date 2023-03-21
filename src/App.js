import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
      setIsLoading(false);
    }, 5000);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">Brand Name</div>
        <button className="get-users-button" onClick={getUsers}>
          {isLoading ? 'Loading...' : 'Get Users'}
 
        </button>
      </nav>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="user-grid">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <img src={user.avatar} alt={`Avatar of ${user.first_name} ${user.last_name}`} />
              <div>{`${user.first_name} ${user.last_name}`}</div>
              <div>{user.email}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
