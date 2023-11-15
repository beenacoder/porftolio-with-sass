import './topbar.scss'

const Topbar = () => {
  return (
    <div className='topbar' id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>LOGO</a>
        </div>
       
        <div className="right"><h4>derecha</h4></div>
      </div>
    </div>
  )
}

export default Topbar