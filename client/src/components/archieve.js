import React from 'react';

import { Header } from './modules';
import { imageGallery } from './data';

import '../assets/css/style.css';
import '../assets/css/media/mobile.css';
import '../assets/css/media/tablet.css';
import '../assets/css/media/desktop.css';


function Archive () {

    return (
        <>
            <Header title = 'Welcome to My Archive' id = 'Archive' />
            <div className='layout--footer'>
                <Gallary />
            </div>
        </>
    );

}

function Gallary () {

    return (
        <div className='image--gallery'>
            {
                imageGallery.map((item, index) => {
                    return (
                        <ul id={ item.id } className='image--frame' key={ index }>
                             <li>
                                <img src={ item.source } alt='archive--img' />
                            </li>
                            <li className='img--title'>
                                <span> { item.title } </span>
                            </li>
                        </ul>
                    );
                })
            }
        </div>
    );

}

export default Archive;
