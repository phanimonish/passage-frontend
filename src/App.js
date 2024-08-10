import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import NewStory from "./Pages/NewStory/NewStory";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Register from "./Pages/RegisterPage/Register";
import Login from "./Pages/LoginPage/LoginPage";
import PostDetails from "./Pages/PostDetails/PostDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/new-story" element={<NewStory />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
