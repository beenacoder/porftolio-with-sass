import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import './topbar.scss'

const Topbar = () => {
    return (
        <div className='topbar' id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>LOGO</a>
                    <div className="item-container">
                        <WhatsAppIcon className='icon' />
                        <span>+54-3825-670079</span>
                    </div>
                    <div className="item-container">
                        <EmailIcon className='icon' />
                        <span>ariel.c.cabeza@gmail.com</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger">
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar