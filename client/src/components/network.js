import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Header } from './modules';

import '../assets/css/style.css';
import '../assets/css/media/mobile.css';
import '../assets/css/media/tablet.css';
import '../assets/css/media/desktop.css';

function Network () {

    return (
        <>
            <Header title = 'My Network' id = 'network' />
            <div className='layout--footer'>
                <GuestCard />
            </div>
        </>
    );

}

function GuestCard () {

    const [ guestList, setGuestList ] = useState([]);

    useEffect(() => {
        axios.get('/api/listuser').then((response) => {
            setGuestList(response.data);
        });
    }, []);

    return (
        <div className='card--holder'>
            {
                guestList.map((item, index) => {
                    if(!item.publish) {
                        return null;
                    } else {
                        return (
                            <ul className='guest--card' key={ index }>
                                <li className='card--header'>
                                    <img src={ item.imageUrl } alt='guest--img' />
                                    <ul className='guest--info'>
                                        <h3 className='guest--name'> { item.fullname } </h3>
                                        <h4 className='guest--position'> { item.position } </h4>
                                        <h5 className='guest--company'> { item.company } </h5>
                                        <li className='social--icons'>
                                            <Link to = {{ pathname : `${ item.facebookUrl }` }} target='_blank'>
                                                <i className='bi bi-facebook'></i>
                                            </Link>
                                            <Link to = {{ pathname : `${ item.linkedinUrl }` }} target='_blank'>
                                                <i className='bi bi-linkedin'></i>
                                            </Link>
                                            <Link to = {{ pathname : `${ item.twitterUrl }` }} target='_blank'>
                                                <i className='bi bi-twitter'></i>
                                            </Link>
                                            <Link to = {{ pathname : `${ item.instagramUrl }` }} target='_blank'>
                                                <i className='bi bi-instagram'></i>
                                            </Link>
                                            <Link to = {{ pathname : `${ item.tiktokUrl }` }} target='_blank'>
                                                <i className='bi bi-tiktok'></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className='guest--notes'>
                                    <p> { item.comments } </p>
                                </li>
                            </ul>
                        );
                    }
                })
            }
        </div>
    );

}

export default Network;
