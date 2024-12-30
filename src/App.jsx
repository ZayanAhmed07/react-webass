import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Weather from "./components/weatherapi";
import Login from "./pages/login"; // Import the Login component
import Crud from "./pages/crud";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Login Route */}
          <Route path="/login" element={<Login />} />
          
          {/* Other Routes */}
          <Route path="/homepage" element={<Homepage />} />
          <Route index element={<Homepage />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/crud" element={<Crud />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
