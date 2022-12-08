import React from 'react';
import { HashLink } from 'react-router-hash-link';

import '../assets/css/style.css';
import '../assets/css/media/mobile.css';
import '../assets/css/media/tablet.css';
import '../assets/css/media/desktop.css';

export function Header (props) {

    return (
        <div className='layout--header' id = { props.id }>
            <h3> { props.title } </h3>
        </div>
    );

}

export function Body (props) {

    return (
        <div className='layout--body'>
            <h4> { props.title } </h4>
            <p> { props.text } </p>
        </div>
    );

}

export function Footer (props) {

    return (
        <div className='layout--footer'>
            <p> { props.content } </p>
        </div>
    );

}

export function Bottom (props) {

    const data = props.content;

    return (
        <div className='layout--footer'>
            {
                data.map((item, index) => {
                    return (
                        <h6 key={ index }> { item.title } </h6>
                    );
                })
            }
        </div>
    );

}

export function BottomWithIcon (props) {

    const data = props.content;

    return (
        <div className='layout--footer'>
            {
                data.map((item, index) => {
                    return (
                        <h6 key={ index }> <i className= { item.iclass }></i> { item.title } </h6>
                    );
                })
            }
        </div>
    );

}

export function StrongBottom (props) {

    const data = props.content;

    return (
        <div className='layout--footer'>
            {
                data.map((item, index) => {
                    return (
                        <h6 key={ index }><strong> { item.bold } </strong> { item.title } </h6>
                    );
                })
            }
        </div>
    );

}

export function StrongBottomWithButton (props) {

    const data = props.content;

    return (
        <ul className='layout--footer'>
            {
                data.map((item, index) => {
                    return (
                        <li key={ index }>
                            <h6><strong> { item.bold } </strong> { item.title } </h6>
                        </li>
                    );
                })
            }
            <li>
                <HashLinkButton title = { props.btnname } link = { props.address } />
            </li>
        </ul>
    );

}

export function ImageHolder (props) {

    return (
        <div className='layout--image'>
            <img src = { props.content } alt='layout--img' />
        </div>
    );

}

export function SubmitButton (props) {

    return (
        <p className='form--btn'>
            <button className='btn' type='submit'> { props.title } </button>
        </p>
    );

}

export function LinkButton (props) {

    return (
        <p className='form--btn'>
            <a href= { props.link }>
                <button className='btn'> { props.title } </button>
            </a>
        </p>
    );

}

export function HashLinkButton (props) {

    return (
        <p className='form--btn'>
            <HashLink smooth to = { `#${ props.link }` }>
                <button className='btn'> { props.title } </button>
            </HashLink>
        </p>
    );

}

export function NewFotter (props) {

    const data = props.content;

    return (
        <ul className='layout--footer'>
            {
                data.map((item, index) => {
                    return (
                        <li className='layout--main' key={ index }>
                            <h4> { item.bold } </h4>
                            <p> { item.title } </p>
                        </li>
                    );
                })
            }
        </ul>
    );

}

export function CUET (props) {

    const data = props.content;

    return (
        <ul className='layout--footer'>
            <li className='layout--main layout--space'>
                <h3> { data.name } </h3>
                <h4> { data.degree } </h4>
                <h5> { data.session } </h5>
            </li>
            <li className='layout--space2'>
                <h4 className='bottom--space'> { data.major } </h4>
                <h5 className='layout--padding'> { data.title } </h5>
            </li>
            <li><LinkButton title = { props.btnname } link = { props.address } /></li>
        </ul>
    );

}

export function LUT (props) {

    const data = props.content;

    return (
        <ul className='layout--footer'>
            <li className='layout--main layout--space'>
                <h3> { data.name } </h3>
                <h4> { data.degree } <span style={{ color : "blue" }}> { data.bold } </span></h4>
                <h5> { data.session } </h5>
            </li>
            <li className='layout--main layout--space2'>
                <h4> { data.major } </h4>
                <h5 className='layout--padding'> { data.title } </h5>
            </li>
            <li className='layout--main layout--space2'>
                <h4> { data.minor } </h4>
                <h5 className='layout--padding'> { data.mtitle } </h5>
            </li>
            <li className='layout--space2'>
                <h5 className='layout--padding'> { data.text } </h5>
            </li>
            <li><LinkButton title = { props.btnname } link = { props.address } /></li>
        </ul>
    );

}

export function Experience (props) {

    const data = props.content;
    const jobposition = data.title;
    const responsibility = data.jobs;

    return (
        <ul className='layout--footer'>
            <li className='layout--main layout--space'>
                <h3> { data.name } </h3>
                <h4> { data.period } </h4>
                <h5> { data.location } </h5>
            </li>
            <li className='layout--main layout--space2'>
                <h4> { data.position } </h4>
                {
                    jobposition.map((item, index) => {
                        return(
                            <h5 className='layout--padding' key={ index }> { item.list } </h5>
                        ); 
                    })
                }
            </li>
            <li className='layout--space2'>
                <h4 className='bottom--space'> { data.text } </h4>
                {
                    responsibility.map((item, index) => {
                        return (
                            <h5 className='layout--padding' key={ index }> { item.jobtitle } </h5>
                        );
                    })
                }
            </li>
            <li><LinkButton title = { props.btnname } link = { props.address } /></li>
        </ul>
    );

}

export const BackToTop = () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

}
