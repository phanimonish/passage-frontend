import React from "react";
import "../RegisterPage/Register.css";
import { styled } from "@mui/material/styles";
import MuiTextField from "@mui/material/TextField";
import { Button, Divider } from "@mui/material";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

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

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

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
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`https://passage-backend.onrender.com/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.err) {
          const token = data.token;
          Cookies.set("token", token);
          navigate("/home");
        } else {
          alert(data.err);
        }
      });
  }

  return (
    <div className="register">
      <div className="login-form">
        <h2>Log In</h2>
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
          Log In
        </Button>
        <div className="or">
          <Divider className="dividers" />
          <p style={{ margin: 0, padding: "0rem 0.5rem" }}>Or</p>
          <Divider className="dividers" />
        </div>
        <Button variant="outlined" href="register" className="login-btn">
          Sign Up
        </Button>
      </div>
    </div>
  );
}
