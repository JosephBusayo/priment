import React from 'react';
import '../styles/Portfolio.css';
import Data from './PortfolioData'


export default function Portfolio(){
    return(
        <section className="portfolio">
            <h2 className="portfolio_heading">Our work</h2>
            <div className="portfolio_detail">
                {Data.map(data => (
                    <img className="portfolio_image" src={`./img/${data.img}`} alt={`${data.title}`}/>
                ))}
            </div>
        </section>
    )
}