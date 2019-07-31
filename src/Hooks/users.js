import React, { useState } from "react";
import UserTable from "./userTable";
import AddUserForm from "./addUser";
import EditUser from "./EditUserForm";

const Users = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" }
  ];

  const [users, setUsers] = useState(usersData);
  // Editing users
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
    setEditing(false);
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="row">
        {editing ? (
          <div className="col-6 col-md-4">
            <div className="card">
              <div className="card-body">
                <EditUser
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="col-6 col-md-4">
            <div className="card">
              <div className="card-body">
                <AddUserForm addUser={addUser} />
              </div>
            </div>
          </div>
        )}
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <UserTable
                users={users}
                deleteUser={deleteUser}
                editRow={editRow}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
