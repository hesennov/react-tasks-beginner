import data from "./data.json";
const DataFetch = () => {
  data.toString();
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <h5>{item.email}</h5>
          </div>
        );
      })}
    </div>
  );
};
export default DataFetch;
