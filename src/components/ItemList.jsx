import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <Pagination users={users} itemsPerPage={30} />
    </div>
  );
}

export default Users;
