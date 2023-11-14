import Topbar from "./components/topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";


const App = () => {
    return (
        <div className="app">
            <Topbar />
            <div className="section">
                <Intro />
                <Portfolio />
                <Projects />
                <Certificates />
                <Contact />
            </div>
        </div>
    )
}

export default App