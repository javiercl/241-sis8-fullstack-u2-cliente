import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../mutations/userMutations";
const AddUser = () => {
  const [createUser] = useMutation(CREATE_USER);
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
  });
  
  const { name, password, email } = user;
  
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  const addUser = (e) => {
    e.preventDefault();
    if (name.length && password.length && email.length) {
      createUser({
        variables: {
          name,
          password,
          email,
        },
      });
      setUser({
        name: "",
        password: "",
        email: "",
      });
    }
  };
  
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form>
          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Enter Your Name" name="name" value={name} onChange={(e) => onInputChange(e)} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Enter Your Password" name="password" value={password} onChange={(e) => onInputChange(e)} />
          </div>
          <div className="form-group">
            <input type="email" className="form-control form-control-lg" placeholder="Enter Your E-mail Address" name="email" value={email} onChange={(e) => onInputChange(e)} />
          </div>
          <button className="btn btn-primary btn-block" onClick={(e) => addUser(e)}>
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddUser;