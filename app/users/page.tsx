import React from "react";
import UserTable from "./UserTable";

const UsersPage = async () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-red-700">Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>

      <UserTable />
    </>
  );
};

export default UsersPage;
