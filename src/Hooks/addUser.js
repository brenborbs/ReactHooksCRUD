import React, { useState } from "react";

const AddUserForm = props => {
  const initialFormState = {
    id: null,
    name: "",
    username: ""
  };

  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Name</label>
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
      </div>

      <label>Username</label>
      <div className="form-group">
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
      </div>

      <button className="btn btn-secondary">Add new user</button>
    </form>
  );
};

export default AddUserForm;
