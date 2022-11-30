import React, { useState, useEffect } from 'react';
import  axios from 'axios';

import './assets/css/style.css';
import './assets/css/media/mobile.css';
import './assets/css/media/tablet.css';
import './assets/css/media/desktop.css';

import { Header } from "./components/modules";

function Form () {

    const [ fullname, setFullname ] = useState('');
    const [ position, setPosition ] = useState('');
    const [ company, setCompany ] = useState('');
    const [ guestList, setGuestList ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3080/read').then((response) => {
            setGuestList(response.data);
        })
    }, []);

    const addUser = () => {
        axios.post('http://localhost:3080/adduser', {
            fullname : fullname,
            position : position,
            company : company
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
                                name="fullname" 
                                id="fullname" 
                                placeholder="Elon Musk" 
                                value={ fullname } 
                                onChange = { (e) => { setFullname(e.target.value) }} 
                                required 
                            />
                        </li>
                        <li>
                            <h5> * Position: </h5>
                            <input 
                                type="text" 
                                name="position" 
                                id="position" 
                                placeholder="Founder, CEO & Chief Engineer" 
                                value={ position } 
                                onChange = { (e) => { setPosition(e.target.value) }} 
                                required 
                            />
                        </li>
                        <li>
                            <h5> * Company: </h5>
                            <input 
                                type="text" 
                                name="company" 
                                id="company" 
                                placeholder="www.spacex.com" 
                                value={ company } 
                                onChange = { (e) => { setCompany(e.target.value) }} 
                                required 
                            />
                        </li>
                        <li>
                            <h5> * Write about your experience: </h5>
                            <textarea type="text" id="details" placeholder="I know Manna Barua very well"></textarea>
                        </li>
                    </ul>

                    <ul className="left--panel">
                        <li>
                            <h5> Image(Optional): </h5>
                            <input type="text" id="image" placeholder="htttps://www.facebook.com/user/" />
                        </li>
                        <li>
                            <h5> Facebook(Optional): </h5>
                            <input type="text" id="facebook" placeholder="htttps://www.facebook.com/user/" />
                        </li>
                        <li>
                            <h5> Twitter(Optional): </h5>
                            <input type="text" id="twitter" placeholder="htttps://www.twitter.com/user/" />
                        </li>
                        <li>
                            <h5> LinkedIn(Optional): </h5>
                            <input type="text" id="linkedin" placeholder="htttps://www.linkedin.com/user/" />
                        </li>
                        <li>
                            <h5> Instagram(Optional): </h5>
                            <input type="text" id="instagram" placeholder="htttps://www.instagram.com/user/" />
                        </li>
                        <li>
                            <h5> Tiktok(Optional): </h5>
                            <input type="text" id="tiktok" placeholder="htttps://www.tiktok.com/user/" />
                        </li>
                    </ul>
                </div>
                <p className='form--btn'>
                    <button className='btn' type='submit' value='Add User' onClick={ addUser }> Recommand Me </button>
                </p>
            </div>
            {
                guestList.map((item, index) => {
                    return (
                        <div key={ index }>
                            <h5> { item.fullname } </h5>
                            <h5> { item.position } </h5>
                            <h5> { item.company } </h5>
                        </div>
                    );
                })
            }
        </>
    );

}

export default Form;
