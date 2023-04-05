import { useEffect, useState } from "react";
import axios from "axios";

const FunctionsComponents = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetch = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setData(res.data))
        .then(setLoading(false))
        .catch((err) => console.log(err));
    };
    fetch();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((val, i) => (
        <div key={i}>
          <h3>{val.name}</h3>
          <p>
            <i> {val.email}</i>
          </p>
        </div>
      ))}
    </div>
  );
};
export default FunctionsComponents;
