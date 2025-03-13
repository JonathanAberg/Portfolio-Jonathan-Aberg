import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { SectionProvider } from "./context/SectionContext";

function App() {
  return (
    <SectionProvider>
      <div className="app">
        <Header />
        <Home />
        <Footer />
      </div>
    </SectionProvider>
  );
}

export default App;
