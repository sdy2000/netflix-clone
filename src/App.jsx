import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Movies, Signup, TVShows } from "./pages";
import { Player } from "./components";

const App = () => {
  return (
    <div className="bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player" element={<Player />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TVShows />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
