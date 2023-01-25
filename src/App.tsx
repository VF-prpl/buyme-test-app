import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import PageContent from "./pages/PageContent";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/pagenumber1" element={<PageContent />} />
        <Route path="/page2" element={<PageContent />} />
        <Route path="/" element={<PageContent />} />
      </Routes>
    </div>
  );
}

export default App;
