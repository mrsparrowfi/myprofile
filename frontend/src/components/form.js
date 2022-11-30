import React, { useState } from 'react';
import axios from 'axios';

import { Header } from "./modules";

import '../assets/css/style.css';
import '../assets/css/media/mobile.css';
import '../assets/css/media/tablet.css';
import '../assets/css/media/desktop.css';

function Form () {

    const [ fullname, setFullname ] = useState('');
    const [ position, setPosition ] = useState('');
    const [ company, setCompany ] = useState('');
    const [ comments, setComments ] = useState('');

    const [ imageUrl, setImageUrl ] = useState('');
    const [ facebookUrl, setFacebookUrl ] = useState('');
    const [ twitterUrl, setTwitterUrl ] = useState('');
    const [ linkedinUrl, setLinkedinUrl ] = useState('');
    const [ instagramUrl, setInstagramUrl ] = useState('');
    const [ tiktokUrl, setTiktokUrl ] = useState('');

    const addUser = () => {
        axios.post('http://localhost:3080/adduser', {
            fullname : fullname,
            position : position,
            company : company,
            comments : comments,
            imageUrl : imageUrl,
            facebookUrl : facebookUrl,
            twitterUrl : twitterUrl,
            linkedinUrl : linkedinUrl,
            instagramUrl : instagramUrl,
            tiktokUrl : tiktokUrl
        });
    }

    return (
        <>
            <Header title = "I value your recommendation" id = "form" />
            <div className="layout--footer btn--space">
                <div className="layout--form">
                    <ul className="right--panel">
                        <li>
                            <h5> * Full Name: </h5>
                            <input 
                                type="text" 
                                id="fullname" 
                                name='fullname' 
                                value={ fullname } 
                                placeholder="Elon Musk" 
                                onChange={ (e) => { setFullname(e.target.value) }} 
                                required 
                            />
                        </li>
                        <li>
                            <h5> * Position: </h5>
                            <input 
                                type="text" 
                                id="position" 
                                name='position' 
                                value={ position } 
                                placeholder="Founder, CEO & Chief Engineer" 
                                onChange={ (e) => { setPosition(e.target.value) }} 
                                required 
                            />
                        </li>
                        <li>
                            <h5> * Company: </h5>
                            <input 
                                type="text" 
                                id="company" 
                                name='company' 
                                value={ company } 
                                placeholder="www.spacex.com" 
                                onChange={ (e) => { setCompany(e.target.value) }} 
                                required 
                            />
                        </li>
                        <li>
                            <h5> * Write about your experience: </h5>
                            <textarea 
                                type="text" 
                                id="details" 
                                name='comments' 
                                value={ comments } 
                                placeholder="I know Manna Barua very well" 
                                onChange={ (e) => { setComments(e.target.value) }} 
                                required 
                            ></textarea>
                        </li>
                    </ul>

                    <ul className="left--panel">
                        <li>
                            <h5> Image(Optional): </h5>
                            <input 
                                type="text" 
                                id="imageUrl" 
                                name='imageUrl' 
                                value={ imageUrl } 
                                placeholder="htttps://www.facebook.com/user/" 
                                onChange={ (e) => { setImageUrl(e.target.value) }} 
                            />
                        </li>
                        <li>
                            <h5> Facebook(Optional): </h5>
                            <input 
                                type="text" 
                                id="facebookUrl" 
                                name='facebookUrl' 
                                value={ facebookUrl } 
                                placeholder="htttps://www.facebook.com/user/" 
                                onChange={ (e) => { setFacebookUrl(e.target.value) }} 
                            />
                        </li>
                        <li>
                            <h5> Twitter(Optional): </h5>
                            <input 
                                type="text" 
                                id="twitterUrl" 
                                name='twitterUrl' 
                                value={ twitterUrl } 
                                placeholder="htttps://www.twitter.com/user/" 
                                onChange={ (e) => { setTwitterUrl(e.target.value) }} 
                            />
                        </li>
                        <li>
                            <h5> LinkedIn(Optional): </h5>
                            <input 
                                type="text" 
                                id="linkedinUrl" 
                                name='linkedinUrl' 
                                value={ linkedinUrl } 
                                placeholder="htttps://www.linkedin.com/user/" 
                                onChange={ (e) => { setLinkedinUrl(e.target.value) }} 
                            />
                        </li>
                        <li>
                            <h5> Instagram(Optional): </h5>
                            <input 
                                type="text" 
                                id="instagramUrl" 
                                name='instagramUrl' 
                                value={ instagramUrl } 
                                placeholder="htttps://www.instagram.com/user/" 
                                onChange={ (e) => { setInstagramUrl(e.target.value) }} 
                            />
                        </li>
                        <li>
                            <h5> Tiktok(Optional): </h5>
                            <input 
                                type="text" 
                                id="tiktokUrl" 
                                name='tiktokUrl' 
                                value={ tiktokUrl } 
                                placeholder="htttps://www.tiktok.com/user/" 
                                onChange={ (e) => { setTiktokUrl(e.target.value) }} 
                            />
                        </li>
                    </ul>
                </div>
                <p className='form--btn'>
                    <button 
                        className='btn' 
                        type='submit' 
                        value='Add User' 
                        onClick={ addUser } 
                    > Recommand Me </button>
                </p>
            </div>
        </>
    );

}

export default Form;
