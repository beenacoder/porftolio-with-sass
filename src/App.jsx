import { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Menu from "./components/menu/Menu";
import './app.scss';


const App = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className="app">
            <Topbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            <div className="sections">
                <Intro />
                {/* <Projects /> */}
                <Certificates />
                <Portfolio />
                <Contact />
            </div>
        </div>
    )
}

export default App