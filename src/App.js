import "./App.css";
import { Route, Routes } from "react-router-dom";
import NewMeetup from "./pages/NewMeetup";
import Navbar from "./pages/NavBar";
import Favorite from "./pages/Favorite";
import DummyData from "./Apidata/DummyData";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DummyData />} />
        <Route path="/newmeetup" element={<NewMeetup />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
