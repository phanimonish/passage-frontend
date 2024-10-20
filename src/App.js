import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import NewStory from "./Pages/NewStory/NewStory";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Register from "./Pages/RegisterPage/Register";
import Login from "./Pages/LoginPage/LoginPage";
import PostDetails from "./Pages/PostDetails/PostDetails";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import MyAccount from "./Pages/MyAccount/MyAccount";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/new-story" element={<NewStory />} />
          <Route path="/new-story/:postId" element={<NewStory />} />{" "}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post-details" element={<PostDetails />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/my-account" element={<MyAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
