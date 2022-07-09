import "./App.css";
import useSWR from "swr";
import fetcher from "./fetcher";

function App() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (error) {
    return <div>Error fetching data</div>;
  }

  if (!data) {
    return <div> Loading...</div>;
  }

  return (
    <div>
      {data.map((user) => {
        return <div>{user.name}</div>;
      })}
    </div>
  );
}

export default App;
