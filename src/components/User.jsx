import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleClick = () => {
    setShowAll(true);
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.slice(0, showAll ? users.length : 5).map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
      {!showAll && <button onClick={handleClick}>Read More</button>}
    </div>
  );
}

export default Users;
