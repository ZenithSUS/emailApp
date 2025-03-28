import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateInfoPage from "./pages/updateInfo";
import DisplayInfo from "./pages/displayInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<UpdateInfoPage />} />
        <Route path="/display" element={<DisplayInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
