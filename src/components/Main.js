import React from 'react';
import '../styles/Main.css';


export default function About(){
    return(
        <section className="main">
            {/* FIRST SECTION */}
            <section className="main__outer-section about">
                <p>The landing design subscription<br/> And the numbers to prove it</p>

                <div className="about__fact">
                    <div> <h3>25K+</h3> <p>Global designers</p></div>
                    <div> <h3>500+</h3> <p>Designs completed</p></div>
                    <div> <h3>4K+ </h3> <p>Client served </p></div>
                </div>
            </section>


            {/* SECOND SECTION */}
            <section className="main__outer-section simplify">
                <section className="simplify__content-wrapper">
                    <div className="simplify__text">
                        <h3 className="simplify__title"> Simplify the way your design work gets done. </h3>
                        <p className="simplify__p">We’re an all-in-one platform with a built-in global design workforce, trailblazing the path to easier, faster, and more efficient creative.</p>
                    </div>
                    <div className="simplify__image-wrapper">
                        <img className="simplify__image" src="./img/laptop.png" alt="laptop"/>
                    </div>
                </section>

                <section className="simplify__card-wrapper">
                    <div className="simplify__card">
                        <h3>Creative Management Platform</h3>
                        <p>An all in one solution built specifically to simplify the creative process. Manage design files, integrate with your existing workflows, and communicate with your designers in one place.</p>
                    </div>
                    <div className="simplify__card">
                        <h3>Designers On Demand</h3>
                        <p>Priment design’s easy-to-use, interactive software simplifies the convoluted creative ecosystem of hiring for graphic design services, helping you save time and speed up your creative content output.</p>
                    </div>
                    <div className="simplify__card">
                        <h3>Flat-Rate Design</h3>
                        <p>Supercharge your creative output with unlimited Graphic Design, Custom Illustrations, Presentation Design and Motion Graphics. No surprise fees. No contracts. No brainer!</p>
                    </div>
                </section>
            </section>


            {/* THIRD SECTION */}
            <section className="main__outer-section design">
                <section className="imagine">
                    <h2> <span className="nowrap">If You Can Imagine It,</span> <span>We Can Design It</span></h2>

                    <div className="imagine__niche-wrapper">
                        <div>Graphic Design</div>
                        <div> Motion Graphics</div>
                        <div> Development</div>
                    </div>
                </section>

                <section className="design_info-wrapper">
                    <div className="quote-wrapper">
                        <h3 className="quote__title">Fix Your Graphic Design Bottleneck, Guaranteed</h3>
                        <p className="quote__p">Centralize your unlimited graphic design needs with flexible creative subscription plans and designers who can execute on your creative vision, with a fraction of the hassle.</p>
                    </div>

                    <div className="step__content-wrapper">
                        <div className="step__content">
                            <h3 className="step__title">1. Submit Your Request</h3>
                            <p className="step__p">Centralize your unlimited graphic design needs with flexible creative subscription plans and designers who can execute on your creative vision, with a fraction of the hassle.</p>
                        </div>
                        <div className="step__content">
                            <h3 className="step__title">2. Your Designer Gets to Work</h3>
                            <p className="step__p">From apparel to presentations, our global team of 500+ creatives have handled nearly every kind of graphic design out there</p>
                        </div>
                        <div className="step__content">
                            <h3 className="step__title">3. You've Got a Design</h3>
                            <p className="step__p">And if it’s not perfect? No problem! All of our plans include unlimited graphic design revisions at no additional cost.</p>
                        </div>
                    </div>
                </section>
            </section>


            {/*FOURTH SECTION -- PARTNERS */}
            <section className="partner">
                <h2 className="step__header">Meet Our Partners</h2>

                <div className="partner__logo-wrapper">
                    <img className="logo partner__logo" alt="company-logo" src="./img/edge.png"/>
                    <img className="logo partner__logo" alt="company-logo" src="./img/digitalnow.png"/>
                    <img className="logo partner__logo" alt="company-logo" src="./img/orderit.png"/>
                    <img className="logo partner__logo" alt="company-logo" src="./img/techcre.png"/>      
                    <img className="logo partner__logo" alt="company-logo" src="./img/printzone.png"/>
                    <img className="logo partner__logo" alt="company-logo" src="./img/chickenhobb.png"/>
                    <img className="logo partner__logo" alt="company-logo" src="./img/autos.png"/>
                    <img className="logo partner__logo" alt="company-logo" src="./img/flair.png"/>
                </div>
            </section>


            {/*FIFTH SECTION -- SUBSCRIBE */}
            <section className="subscribe">
                <h2 className="subscribe__title">Subscribe To Our Newsletter</h2>
                <button className="nowrap subscribe__btn">Coming Soon</button>
            </section>
        </section>
    )
}