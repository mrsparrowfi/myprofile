import React from 'react';
import '../assets/css/style.css';
import '../assets/css/media/mobile.css';
import '../assets/css/media/tablet.css';
import '../assets/css/media/desktop.css';
import Smiley from '../assets/images/other/smiley.webp';

function Footer () {

    return (
        <ul className='app--footer'>
            <li className='app--footer image--smiley'>
                <img src={ Smiley } alt='smiley--img' />
            </li>
            <li className='app--footer text--welcome'> Hei !! <br /> Thank you very much for your interest and patient to visit my profile. <br /> I wish you a great day. </li>
            <li className='app--footer icon--phone'> <i className='bi bi-telephone-outbound-fill'></i> Speak soon </li>
            <li className='app--footer text--copyright'> © 2022 Copyright: Design & Developed by Manna Barua </li>
        </ul>
    );

}

export default Footer;
