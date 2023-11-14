import Topbar from "./components/topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import './app.scss';


const App = () => {
    return (
        <div className="app">
            <Topbar />
            <div className="sections">
                <p>asdasdasdas</p>
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