import "./styles.css";
import { Home } from "./container/Home";
import { News } from "./container/News";
import { Show } from "./container/Show";
import { Ask } from "./container/Ask";
import { Jobs } from "./container/Jobs";
import { About } from "./container/About";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/show" element={<Show />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </div>
  );
}
