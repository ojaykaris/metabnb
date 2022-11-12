import "./app.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import PlacesPage from "./pages/places-page/places-page";

function App() {
  return (
    <Routes>
      <Route path="/metabnb" element={<HomePage />} />
      <Route path="/metabnb/places" element={<PlacesPage />} />
    </Routes>
  );
}

export default App;
