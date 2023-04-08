import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


function App() {
  // MAIN CODE !! DO NOT REMOVE
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/author/:authorID" element={<Author />} />
        <Route path="/item-details/:nftID" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
