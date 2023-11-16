import { useEffect, useRef } from 'react';
import { init } from 'ityped'
import './intro.scss';

const Intro = () => {

    
    const textRef = useRef();
    useEffect(() => {

        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            strings: ['Developer', 'M.E.R.N', 'React', 'Node Js', 'Mongo DB' ] 
        })
    }, [])


    return (
        <div className='intro' id="intro">
            <div className="left">
                <div className="img-container">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Saludos! Soy</h2>
                    <h1>Ariel Cabeza</h1>
                    <h3>Fullstack <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro