import { certifData } from '../../portfolioData'
import './certificates.scss';

const Certificates = () => {
    return (
        <div className='certificates' id="certificates">
            <h1>Certificados</h1>
            <div className="container">
                {certifData.map(certif => (
                    <div className={certif.featured ? "card featured" : "card"} key={certif.id}>
                        <div className="top">
                            <img src={certif.imgUrl} className='user' alt="" />
                        </div>
                        <div className="center">
                            {certif.description}
                        </div>
                        <div className="bottom">
                            <h3>{certif.title}</h3>
                            {/* <h4>Universidad Nacional de La Rioja</h4> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certificates