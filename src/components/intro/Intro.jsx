import './intro.scss';

const Intro = () => {
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
          <h3>Fullstack <span></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro