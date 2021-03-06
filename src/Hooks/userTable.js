import React from "react";

const UserTable = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(user);
                  }}
                  className="btn btn-warning btn-sm"
                  style={{ margin: "4px" }}
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteUser(user.id)}
                  className="btn btn-outline-danger btn-sm"
                  style={{ margin: "4px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
