import React, {useState} from 'react';
import '../styles/Home.css';


export default function Homepage(){
    const [isActive, setIsActive] = useState(false)
    
    function toggleActive(){ setIsActive(isActive ? false : true) }

    return(
        <section className="home">
            <div className="nav">
                <img className="logo nav__logo" src="./img/logo.png" alt="logo" />

                <button className={`hamburger ${isActive?'active':''} `}
                        onClick={() => toggleActive()} >
                    <div className="hamburger-icon"></div>
                    <div className="hamburger-icon"></div>
                    <div className="hamburger-icon"></div>
                </button>  
            </div>


            <section className="hero">
                <div className="hero__title-wrapper">
                    <div className="hero__title">
                        <div className="we">WE</div>
                        <div className="create">CREATE <span className="and-symbol">&</span></div>
                        <div className="design">DESIGN <span className="desgin__strike-through"> </span></div>
                    </div>

                    <div className="hero__niche-wrapper">
                        <div>Graphic Design |</div>
                        <div> Motion Graphics |</div>
                        <div> Development</div>
                    </div>
                </div>

                <div className="hero__image-container">
                    <img className="hero__image" src="./img/Frame4.png" alt="frame4" />
                    <img className="hero__image" src="./img/Frame5.png" alt="frame5" />
                    <img className="hero__image" src="./img/Frame6.png" alt="frame6" />
                </div>

                <div>
                    <div className="hero__circle"></div>
                    <div className="hero__circle"></div>
                    <div className="hero__circle"></div>
                </div>
            </section>
        </section>

    )
}