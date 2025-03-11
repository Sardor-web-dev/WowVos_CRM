import LoginPage from "./pages/Login"
import { BrowserRouter as  Routes, Route } from 'react-router-dom';
import ScrollToTop from "./utils/scrollToTop";
import Home from "./pages/Home";
function App() {

  console.log("LoginPage")
  
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route element={<LoginPage />} path="/" />
        <Route element={<Home />} path="/home" />
      </Routes>
  </>
  )
}

export default App
