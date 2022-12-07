import { useState, useEffect } from "react";

const List = () => {
  const [users, setUsers] = useState([]);
  const axios = require("axios").default;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {users.map((user) => {
        return <h1>{user.name}</h1>;
      })}
    </div>
  );
};
export default List;
