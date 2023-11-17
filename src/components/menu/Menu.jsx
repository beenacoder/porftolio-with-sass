import './menu.scss';

const Menu = ({openMenu, setOpenMenu}) => {
  return (
    <div className={`menu ${openMenu && 'active'}`}>
        <ul>
            <li onClick={() => setOpenMenu(false)}>
                <a href="#intro">Inicio</a>
            </li>
            {/* <li onClick={() => setOpenMenu(false)}>
                <a href="#projects">Proyectos</a>
            </li> */}
            <li onClick={() => setOpenMenu(false)}>
                <a href="#certificates">Certificados</a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={() => setOpenMenu(false)}>
                <a href="#contact">Contáctame</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu