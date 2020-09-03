import React, { useState, useEffect } from "react";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.updateUser(user.id, user);
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

      <button className="btn btn-success" style={{ margin: "5px" }}>
        Update user
      </button>
      <button
        onClick={() => props.setEditing(false)}
        className="btn btn-info"
        style={{ margin: "5px" }}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
