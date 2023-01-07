import React from 'react';
import '../styles/Footer.css';


export default function Footer(){
    return(
        <section className="footer">
            <div className="footer__logo-wrapper">
                <div className="footer__socials-wrapper">
                    <img className="footer__socials" src="./img/facebook.png" alt="facebook" />
                    <img className="footer__socials" src="./img/instagram.png" alt="instagram" />
                    <img className="footer__socials" src="./img/twitter.png" alt="twitter" />
                </div>
            </div>

            <div className="contact__text-wrapper">
                <div className="contact__text">
                    <h2 className="contact__title">Get In Touch</h2>
                    <p className="contact__p">Contact us to find out how we can help you. If it’s easier you can email us at </p>
                </div>

                <p className="contact__email">admin@primentdesign.com</p>
            </div>

            <div className="footer__text-wrapper">
                {/* <ul className="footer__link-list">
                    <li> <a href="./">Terms & Conditions</a> </li>
                    <li> <a href="./">Privacy Policy</a> </li>
                    <li> <a href="./">System Status</a> </li>
                    <li> <a href="./">Product Updates</a> </li>
                </ul> */}

                <p>2022 Priment Design. All Rights Reserved</p>
            </div>
        </section>
    )
}