import React from "react";

import '../assets/css/style.css';
import '../assets/css/media/mobile.css';
import '../assets/css/media/tablet.css';
import '../assets/css/media/desktop.css';

import CUETIMG from '../assets/images/other/cuet.jpg';
import LUTIMG from '../assets/images/other/lut.jpg';

import HUAWEIIMG from '../assets/images/other/huawei.jpeg';
import BANGLALIONIMG from '../assets/images/other/banglalion.jpg';

import { Header, ImageHolder, CUET, LUT, Experience } from "./modules";
import {
    Huawei,
    Banglalion,
    Cuet,
    Lut
} from "./data";


function RightPanel () {

    return (
        <ul className="right--panel">
            <li>
                <Header title = "Professional Experience-1" id = "Experience" />
                <ImageHolder content = { HUAWEIIMG } />
                <Experience content = { Huawei } btnname = "Browse Huawei" address = { Huawei.url } />
            </li>
            <li>
                <Header title = "Professional Experience-2" />
                <ImageHolder content = { BANGLALIONIMG } />
                <Experience content = { Banglalion } btnname = "Browse Banglalion" address = { Banglalion.url } />
            </li>
            <li>
                <Header title = "Academic Background-1" id = "Education" />
                <ImageHolder content = { CUETIMG } />
                <CUET content = { Cuet } btnname = " Browse CUET " address = { Cuet.url } />
            </li>
            <li>
                <Header title = "Academic Background-2" />
                <ImageHolder content = { LUTIMG } />
                <LUT content = { Lut } btnname = " Browse LUT " address = { Lut.url } />
            </li>
        </ul>
    );

}

export default RightPanel;
