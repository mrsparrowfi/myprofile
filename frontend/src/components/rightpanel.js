import React from "react";

import '../assets/css/style.css';
import '../assets/css/media/mobile.css';
import '../assets/css/media/tablet.css';
import '../assets/css/media/desktop.css';

import { Header, ImageHolder, CUET, LUT, Experience } from "./modules";
import {
    Huawei,
    Banglalion,
    Cuet,
    Lut,
    photoGallery
} from "./data";


function RightPanel () {

    return (
        <ul className="right--panel">
            <li>
                <Header title = "Professional Experience-1" id = "Experience" />
                <ImageHolder content = { photoGallery.srcHuawei } />
                <Experience content = { Huawei } btnname = "Browse Huawei" address = { Huawei.url } />
            </li>
            <li>
                <Header title = "Professional Experience-2" />
                <ImageHolder content = { photoGallery.srcBanglalion } />
                <Experience content = { Banglalion } btnname = "Browse Banglalion" address = { Banglalion.url } />
            </li>
            <li>
                <Header title = "Academic Background-1" id = "Education" />
                <ImageHolder content = { photoGallery.srcCuet } />
                <CUET content = { Cuet } btnname = " Browse CUET " address = { Cuet.url } />
            </li>
            <li>
                <Header title = "Academic Background-2" />
                <ImageHolder content = { photoGallery.srcLut } />
                <LUT content = { Lut } btnname = " Browse LUT " address = { Lut.url } />
            </li>
        </ul>
    );

}

export default RightPanel;
