import { useEffect, useState } from "react";
import RegisterModel from "./RegisterModel";
import Table from "./Table";

const API_URL = "api/users";

const colDef = [
  { id: "First Name", title: "firstName" },
  { id: "Last Name", title: "lastName" },
  { id: "Gender", title: "gender" },
  { id: "Is Admin", title: "isAdmin" },
  { id: "Is Funny", title: "isFunny" },
];

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const FetchUsers = async () => {
      console.log(users);
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    FetchUsers();
  }, [isOpen]);

  return (
    <div>
      <h1>Users Management</h1>
      <button onClick={() => setIsOpen((prev) => !prev)}>New User</button>
      <RegisterModel
        isOpen={isOpen}
        onClose={() => setIsOpen((prev) => !prev)}
      />
      <Table columnDef={colDef} rowData={users} />
    </div>
  );
};

export default Users;
