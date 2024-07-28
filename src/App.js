import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import FollowingPage from "./Pages/FollowingPage/FollowingPage";
import OpenPost from "./Pages/OpenPost/OpenPost";
import NewStory from "./Pages/NewStory/NewStory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/following" element={<FollowingPage />} />
          <Route path="/post" element={<OpenPost />} />
          <Route path="/new-story" element={<NewStory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
