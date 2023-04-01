import { MainPage, Beauty, Home, Electronics, Luxury, Error } from "./pages";
import { Navbar,SideBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
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

    </Wrapper>
  );
}
export default App;
const Wrapper = styled.div`
rotate: -90;
@media screen and (orientation:landscape){
  rotate: -90deg;
}
`