import { MainPage, Beauty, Home, Electronics, Luxury, Error } from "./pages";
import { Navbar,SideBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <MainPage/>} />
          <Route path="/beauty" element={ <Beauty/>} />
          <Route path="/home" element={ <Home/>} />
          <Route path="/electronics" element={ <Electronics/>} />
          <Route path="/luxury" element={ <Luxury/>} />
          <Route path="*" element={ <Error/>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}


export default App;
