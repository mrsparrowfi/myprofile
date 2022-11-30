import React, { useState, useEffect } from 'react';
import '../assets/css/style.css';
import '../assets/css/media/mobile.css';
import '../assets/css/media/tablet.css';
import '../assets/css/media/desktop.css';
import { BackToTop } from './modules';
import Smiley from '../assets/images/other/smiley.webp';

function Footer () {

    const [ showBtn, setShowBtn ] = useState (false);
    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setShowBtn (true);
            } else {
                setShowBtn (false);
            }
        })

    }, []);

    return (
        <div className='footer--container'>
            <div className='left--footer'></div>
            <ul className='app--footer'>
                <li className='app--footer image--smiley'>
                    <img src={ Smiley } alt='smiley--img' />
                </li>
                <li className='app--footer text--welcome'> Hei !! <br /> Thank you very much for your interest and patient to visit my profile. <br /> I wish you a great day. </li>
                <li className='app--footer icon--phone'> <i className='bi bi-telephone-outbound-fill'></i> Speak soon </li>
                <li className='app--footer text--copyright'> © 2022 Copyright: Design & Developed by Manna Barua </li>
            </ul>
            <div className='right--footer'>
                {
                    showBtn && 
                        <button id='btn--back2top' className='btn--back2top' onClick={ BackToTop }>
                            <i className='bi bi-chevron-compact-up'></i>
                        </button>
                }
            </div>
        </div>
    );

}

export default Footer;
