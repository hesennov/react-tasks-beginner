// import { Users } from "./users";
import { useState, useEffect } from "react";
import Table from "./Table";
import axios from "axios";

function FilterUsers() {
  const [query, setquery] = useState("");
  let [users, setusers] = useState([
    {
      name: "",
      surname: "",
      email: "",
    },
  ]);
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
  const keys = ["name", "username", "email"];

  const search = (data) => {
    return data.filter(
      (user) =>
        //   keys.some((key) => user[key].toLowerCase().includes(query))
        user.name.toLowerCase().includes(query) ||
        user.username.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
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
        onChange={(e) => setquery(e.target.value)}
      />
      <Table data={search(users)} />
    </div>
  );
}

export default FilterUsers;
