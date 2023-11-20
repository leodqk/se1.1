import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home.js";
import Explore from "./pages/Explore/explore";
import Login from "./pages/Login/login";
import Search from "./pages/Search/search";
import Root from "./pages/Root/root";
import Reels from "./pages/Reels/reels";
import Inbox from "./pages/Inbox/inbox";
import Noti from "./pages/Notification/noti";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/message" element={<Inbox />} />
          <Route path="/noti" element={<Noti />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
