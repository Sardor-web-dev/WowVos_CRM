import LoginPage from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import Home from "./pages/Home";
function App() {
  return (
    <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
    </>
  );
}

export default App;
