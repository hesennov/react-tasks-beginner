import React, { useState } from "react";
import User from "./User";

function Pagination({ users, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(users.length / itemsPerPage);

  function handleClick(page) {
    setCurrentPage(page);
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

  return (
    <div>
      {currentUsers.map((user) => (
        <User key={user.id} user={user} />
      ))}
      <ul>
        {Array.from({ length: totalPages }).map((_, i) => (
          <li key={i}>
            <button onClick={() => handleClick(i + 1)}>{i + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
