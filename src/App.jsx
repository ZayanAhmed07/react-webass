import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Weather from "./components/weatherapi";
function app() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route index element={<Homepage />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default app;