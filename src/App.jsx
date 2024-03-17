import React, { useState } from "react";
import Input from "./inputFields/Input";

const App = () => {
  const [inputVal, setInputVal] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const inputFields = [
    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "Enter your username",
      label: "Username",
      autoComplete: "off",
      required: true,
      pattern: `^[A-Za-z0-9]{3,8}`,
      errorMessage:
        "Invalid Username. username should be atleast 3 char and max 8 char",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      autoComplete: "off",
      required: true,
      autoComplete: "off",
      placeholder: "Enter your email",
      label: "Email",
      errorMessage: "Invalid email",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      label: "Password",
      autoComplete: "off",
      required: true,
      pattern:
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,16}$",
      errorMessage:
        "Password must contain at least 1 uppercase, 1 lowercase, 1 special symbol, and must be 8 to 16 characters",
    },

    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm your password",
      label: "Confirm your password",
      autoComplete: "off",
      required: true,
      pattern: inputVal.password,
      errorMessage: "Password doesn't match",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputVal);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {inputFields.map((input) => (
          <Input {...input} key={input.id} onChange={onChange} />
        ))}
        <button type="submit">SUBMIT NOW</button>
      </form>
    </div>
  );
};

export default App;
