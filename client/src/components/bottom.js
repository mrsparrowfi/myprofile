import React, { useState, useEffect } from 'react';
import '../assets/css/style.css';
import '../assets/css/media/mobile.css';
import '../assets/css/media/tablet.css';
import '../assets/css/media/desktop.css';
import { BackToTop } from './modules';

function Bottom () {

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
        <div className='app--bottom'>
            <a className='bottom--left' href='https://github.com/mrsparrowfi/myprofile' target='_blank' rel='noreferrer'>
                View project in <i className='bi bi-github'></i> github
            </a>
            <div className='bottom--right'>
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

export default Bottom;
