// import { Users } from "./users";
import { useState, useEffect } from "react";
import Table from "./Table";
import axios from "axios";

function FilterUsers() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  let [users, setusers] = useState([]);
  // console.log(query);
  useEffect(() => {
    const fetch = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setusers(res.data))
        // .then(setLoading(false))
        .catch((err) => console.log(err));
    };
    fetch();
  }, []);
  console.log(users);

  // const keys = ["name", "username", "email"];

  const search = (data) => {
    return data.filter(
      (user) =>
        //   keys.some((key) => user[key].toLowerCase().includes(query))
        user.name.toLowerCase().includes(name) ||
        user.username.toLowerCase().includes(username) ||
        user.email.toLowerCase().includes(email)
    );
  };
  return (
    <div className="app ">
      <h1>react</h1>
        <input
          type="text"
          placeholder="search..."
          className="search"
          // onChange={(e) => setquery(e.target.value)}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="search..."
          className="search"
          // onChange={(e) => setquery(e.target.value)}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="search..."
          className="search"
          // onChange={(e) => setquery(e.target.value)}
          onChange={(e) => setEmail(e.target.value)}
        />
      
      <Table data={search(users)} />
    </div>
  );
}

export default FilterUsers;
