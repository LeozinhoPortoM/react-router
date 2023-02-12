import "./App.css";

import SearchField from "../components/SearchField";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import Search from "../pages/Search";

export default function App() {
  return (
    <div className="App">
      <h1>React router</h1>
      <BrowserRouter>
        <Navbar />
        <SearchField />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
