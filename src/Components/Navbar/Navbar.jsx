// Navbar.jsx
import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import "./Navbar.css";
import { Tooltip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import Box from "@mui/material/Box";

function Navbar({ onSearch }) {
  const [anchorElNotifications, setAnchorElNotifications] =
    React.useState(null);
  const [anchorElAccount, setAnchorElAccount] = React.useState(null);
  const navigate = useNavigate();
  const openNotifications = Boolean(anchorElNotifications);
  const openAccount = Boolean(anchorElAccount);

  const handleClickNotifications = (event) => {
    setAnchorElNotifications(event.currentTarget);
    setAnchorElAccount(null); // Close account menu if open
  };

  const token = Cookies.get("token");
  let username;

  if (token) {
    try {
      // Assuming you have a function to decode the token
      const decode = JSON.parse(atob(token.split('.')[1]));
      username = decode.username;
    } catch (error) {
      console.error("Invalid token:", error);
      Cookies.remove("token");
      navigate("/");
    }
  }

  const handleClickAccount = (event) => {
    setAnchorElAccount(event.currentTarget);
    setAnchorElNotifications(null); // Close notifications menu if open
  };

  const handleCloseNotifications = () => {
    setAnchorElNotifications(null);
  };

  const handleCloseAccount = () => {
    setAnchorElAccount(null);
  };

  const handleProfileClick = () => {
    if (token) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };
  const handleAccountClick = () => {
    if (token) {
      navigate("/my-account");
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/");
    navigate(0); // Reload the page to reset the state
  };

  // Search functionality
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchValue(query);
    onSearch(query); // Call the handler passed from HomePage
  };

  return (
    <AppBar className="navbar" position="static">
      <Container maxWidth="xl">
        <Toolbar className="navbar-box" disableGutters>
          <div className="nav-left-content">
            <Link className="logo" to="/home">
              <h2 className="logo">Passage</h2>
            </Link>
            <div className="search-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <input
                placeholder="Search"
                className="search-input"
                value={searchValue}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="nav-right-content">
            <Link to="/new-story">
              <Button className="write-btn" variant="contained">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fillRule="none"
                  viewBox="0 0 24 24"
                  aria-label="Write"
                >
                  <path
                    fillRule="currentColor"
                    d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"
                  ></path>
                  <path
                    stroke="currentColor"
                    d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"
                  ></path>
                </svg>
                Write
              </Button>
            </Link>
            <Box className="notifications">
              <Tooltip title="Notifications">
                <IconButton
                  onClick={handleClickNotifications}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={
                    openNotifications ? "notifications-menu" : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={openNotifications ? "true" : undefined}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-label="Notifications"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      d="M15 18.5a3 3 0 1 1-6 0"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinejoin="round"
                      d="M5.5 10.532V9a6.5 6.5 0 0 1 13 0v1.532c0 1.42.564 2.782 1.568 3.786l.032.032c.256.256.4.604.4.966v2.934a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.934c0-.363.144-.71.4-.966l.032-.032A5.35 5.35 0 0 0 5.5 10.532Z"
                    ></path>
                  </svg>{" "}
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorElNotifications}
              id="notifications-menu"
              disableScrollLock={true}
              open={openNotifications}
              onClose={handleCloseNotifications}
              onClick={handleCloseNotifications}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleCloseNotifications}>
                No Notifications
              </MenuItem>
            </Menu>
            <Box>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClickAccount}
                  className="account"
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={openAccount ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openAccount ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      textTransform: "capitalize",
                    }}
                  >
                    {username ? username : "Guest"}&#11206;{" "}
                  </span>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorElAccount}
              id="account-menu"
              disableScrollLock={true}
              open={openAccount}
              onClose={handleCloseAccount}
              onClick={handleCloseAccount}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleProfileClick}>
                <PersonRoundedIcon fontSize="small" />
                <span style={{ marginLeft: "0.5rem" }}> Profile</span>
              </MenuItem>
              <MenuItem onClick={handleAccountClick}>
                <ManageAccountsRoundedIcon fontSize="small" />{" "}
                <span style={{ marginLeft: "0.5rem" }}> My Account </span>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout }>
                <Logout fontSize="small" />
                <span style={{ marginLeft: "0.5rem" }}> Logout </span>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
