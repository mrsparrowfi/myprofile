import React from 'react';
//import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import '../assets/css/style.css';
import '../assets/css/media/mobile.css';
import '../assets/css/media/tablet.css';
import '../assets/css/media/desktop.css';

import Profile from '../assets/images/cover/profile8.jpeg';
import Cover from '../assets/images/cover/cover2.png';

function Header () {

    return (
        <header className='app--header'>
            <Banner />
            <Info />
            <Menu />
        </header>
    );

}

function Banner () {

    return (
        <div className='banner'>
            <img src={ Cover } alt='cover--img' />
        </div>
    );

}

function Info () {

    return (
        <>
            <div className='user--info'>
                <div className='user--image'>
                    <img src={ Profile } alt='user--img' />
                </div>
                <div className='user--details'>
                    <h3> Manna Barua </h3>
                    <h4> On a journey towards Full-Stack Developer </h4>
                    <h5> Actively looking for new opportunity in Finland </h5>
                    <h4> Former Radio Access Network (RAN) Engineer at Huawei </h4>
                    <h4> CCNA R&S || CCNA Cyber Ops || OCA 10g </h4>
                </div>
            </div>
            <div className='social--icons'>
                <a href = "https://facebook.com/" target="_blank" rel="noreferrer">
                    <i className='bi bi-facebook'></i>
                </a>
                <a href = "https://linkedin.com/" target="_blank" rel="noreferrer">
                    <i className='bi bi-linkedin'></i>
                </a>
                <a href = "https://github.com/" target="_blank" rel="noreferrer">
                    <i className='bi bi-github'></i>
                </a>
                <a href = "https://twitter.com/" target="_blank" rel="noreferrer">
                    <i className='bi bi-twitter'></i>
                </a>
                <a href = "https://instagram.com/" target="_blank" rel="noreferrer">
                    <i className='bi bi-instagram'></i>
                </a>
            </div>
        </>
    );

}

function Menu () {

    const itemName = [
        'Home',
        'Objective',
        'Bio',
        'Skills',
        'Experience',
        'Education',
        'Certification',
        'Reference',
        'Archive',
        'My Blog',
        'Todos',
        'Others'
    ];

    const menuItems = itemName.map ((item, index) =>
        <li className='menu--item'>
            <HashLink smooth to = { `#${ item }` } key={ index }>
                <span> { item } </span>
            </HashLink>
        </li>
    );

    return (
        <ul className='menu--holder'>
            { menuItems }
        </ul>
    );

}

export default Header;
