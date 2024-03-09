import { useEffect } from "react";
import Table from "./Table";

const API_URL = "api/users";
const Users = () => {
  useEffect(() => {
    const FetchUsers = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
    };
    FetchUsers();
  }, []);

  return (
    <div>
      <h1>Users Management</h1>
      <Table />
    </div>
  );
};

export default Users;
