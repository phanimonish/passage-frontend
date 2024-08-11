import React from "react";
import "./Register.css";
import { styled } from "@mui/material/styles";
import MuiTextField from "@mui/material/TextField";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const options = {
  shouldForwardProp: (prop) => prop !== "borderColor",
};
const outlinedSelectors = [
  "& .MuiOutlinedInput-notchedOutline",
  "&:hover .MuiOutlinedInput-notchedOutline",
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline",
];

const StyleTextField = styled(
  MuiTextField,
  options
)(({ borderColor }) => ({
  "& label.Mui-focused": {
    color: "black",
    borderWidth: 20,
  },
  [outlinedSelectors.join(",")]: {
    borderWidth: 1,
    borderColor,
  },
}));

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleInput(e) {
    switch (e.target.name) {
      default:
        return;
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify({ username, password, email }));
    fetch(`https://passage-backend.onrender.com/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.err) {
          localStorage.setItem("token", data.token);
          navigate("/login");
        } else {
          alert(data.err);
        }
      });
  }

  return (
    <div className="register">
      <div className="register-form">
        <h2>Register</h2>
        <StyleTextField
          placeholder="Enter email"
          label="Email"
          borderColor="black"
          className="inputs"
          required
          name="email"
          onChange={handleInput}
        />
        <StyleTextField
          placeholder="Enter username"
          label="Username"
          borderColor="black"
          className="inputs"
          required
          name="username"
          onChange={handleInput}
        />
        <StyleTextField
          placeholder="Enter password"
          label="Password"
          borderColor="black"
          type="password"
          className="inputs"
          required
          name="password"
          onChange={handleInput}
        />
        <Button
          variant="contained"
          className="signup-btn"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <div className="or">
          <Divider className="dividers" />
          <p style={{ margin: 0, padding: "0rem 0.5rem" }}>Or</p>
          <Divider className="dividers" />
        </div>
        <Button variant="outlined" href="login" className="login-btn">
          Log In
        </Button>
      </div>
    </div>
  );
}
