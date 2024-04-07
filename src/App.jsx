import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About_Us from "./pages/About_Us";
import Contact_Us from "./pages/Contact_Us";
import Inventorypage from "./pages/Inventorypage";
import Signuplogin from "./pages/signuplogin";
import TermsandConditions from "./pages/Terms&Conditions";
import Privacypolicy from "./pages/Privacy_Policy";
import Navbar from "./Components/Navbar";
import Hamburger from "./Components/hamburger";
import Footer from "./Components/Footer";
import Greetings from "./Components/Greetings";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Navbar />
        <Hamburger />
        <Greetings isLoggedIn={false} username="User" />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Inventorypage" element={<Inventorypage />} />
          <Route path="/About_Us" element={<About_Us />} />
          <Route path="/Contact_Us" element={<Contact_Us />} />
          <Route path="/signuplogin" element={<Signuplogin />} />
          <Route path="/Terms&Conditions" element={<TermsandConditions />} />
          <Route path="/Privacy_Policy" element={<Privacypolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
