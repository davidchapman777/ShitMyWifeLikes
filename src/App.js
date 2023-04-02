import { MainPage, Beauty, Home, Electronics, Luxury, Error } from "./pages";
import { Navbar,SideBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
// import { Message } from './components'
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop>

        <Routes>
          <Route path="/" element={ <MainPage/>} />
          <Route path="/beauty" element={ <Beauty/>} />
          <Route path="/home" element={ <Home/>} />
          <Route path="/electronics" element={ <Electronics/>} />
          <Route path="/luxury" element={ <Luxury/>} />
          <Route path="*" element={ <Error/>} />
        </Routes>
        </ScrollToTop>
      </BrowserRouter>
    {/* <Message/> */}
    </Wrapper>
  );
}
export default App;
const Wrapper = styled.div`
 

    

`