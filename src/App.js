import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import {Routes, Route} from 'react-router-dom'
import Home from "./page/home";
import Marketplace from "./page/marketplace";
import Rankings from "./page/rankings";
import Connect from "./page/connect";
import Sign from "./page/sign";
import Error from "./page/error/error";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/marketplace"} element={<Marketplace/>}/>
                <Route path={"/rankings"} element={<Rankings/>}/>
                <Route path={"/connect"} element={<Connect/>}/>
                <Route path={"/sign-up"} element={<Sign/>}/>
                <Route path={"*"} element={<Error/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
