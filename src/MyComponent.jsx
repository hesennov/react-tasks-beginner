import React from "react";
import customhook from "./hooks/customhook";

const MyComponent = () => {
  const { data, isLoading, isError, refetchData } = customhook(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  return (
    <div>
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
      <button onClick={refetchData}>Reload data</button>
    </div>
  );
};
export default MyComponent;
