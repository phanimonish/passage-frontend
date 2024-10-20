import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Avatar, Button, Divider } from "@mui/material";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode"; // Ensure correct import for jwtDecode
import "./MyAccount.css";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export default function MyAccount() {
  const [bio, setBio] = useState("");
  const token = Cookies.get("token");
  const decode = jwtDecode(token);
  const username = decode.username;
  const email = decode.email;
  const navigate = useNavigate();

  function handleSave() {
    fetch("https://passage-backend.onrender.com/api/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`, // Attach token for authentication
      },
      body: JSON.stringify({ bio }), // Send bio in the request body
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Bio updated successfully!");
        } else {
          console.error("Failed to update bio:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error updating bio:", error);
      });
    navigate("/profile");
  }

  return (
    <div>
      <Navbar />
      <div className="my-account-container">
        <div className="my-account-left-container">
          <div className="avatar-head">
            <Avatar sx={{ width: 75, height: 75 }} />
            <h2
              style={{ textTransform: "capitalize", marginLeft: "1rem" }}
              className="username"
            >
              {username}
            </h2>
          </div>
          <Divider style={{ margin: "1.5rem 1.5rem 1.5rem 0rem" }} />
          <div className="user-details">
            <h4 className="user-head">Username</h4>
            <TextField
              className="disabled-textfield"
              disabled
              id="outlined-multiline-static"
              label={username}
            />
          </div>
          <div className="user-details">
            <h4 className="user-head">Email - Id</h4>
            <TextField
              className="disabled-textfield"
              disabled
              id="outlined-multiline-static"
              label={email}
            />
          </div>
          <div className="user-details">
            <h4 className="user-head">Short Bio</h4>
            <TextField
              className="disabled-textfield"
              id="outlined-multiline-static"
              label={"Write your bio"}
              multiline
              rows={5}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <div>
            <Button
              style={{ margin: "1.5rem 0rem", textTransform: "capitalize" }}
              color="success"
              variant="contained"
              onClick={handleSave}
            >
              Save & Update
            </Button>
          </div>
        </div>
        <div className="my-account-right-container">
          <h2>My Account</h2>
          <p>
            Personalize your account with a vivid portrait of yourself than your
            "Short Bio"
          </p>
        </div>
      </div>
    </div>
  );
}
