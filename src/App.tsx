import { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateInfoPage from "./pages/updateInfo";
import DisplayInfo from "./pages/displayInfo";

function App() {
  const [clientIP, setClientIP] = useState<string>("");

  useEffect(() => {
    // get public ip using ipify api
    const fetchIP = async () => {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setClientIP(data.ip);
    };

    fetchIP();
    // insert into appwrite database
  }, []);

  console.log(clientIP);
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
