import { portfolioData } from '../../portfolioData'
import './portfolio.scss'

const Portfolio = () => {
    return (
        <div className='portfolio' id="portfolio">
            <h1>Proyectos</h1>

            <div className="container">
                {portfolioData.map(portfolio => (
                    <div key={portfolio.id} className="item">
                        <img src={portfolio.imgUrl} alt="some photo" />
                        <h3>{portfolio.title}</h3>
                        <a href={portfolio.url} target="_blank">Ver</a>   
                    </div>
                ))}
              
            </div>
        </div>
    )
}

export default Portfolio