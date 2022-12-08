import React from 'react';
import '../assets/css/style.css';
import '../assets/css/media/mobile.css';
import '../assets/css/media/tablet.css';
import '../assets/css/media/desktop.css';

import LeftPanel from './leftpanel';
import RightPanel from './rightpanel';
import Form from './form';
import Network from './network';
import Archive from './archieve';


function Layout () {

    return (
        <main className='app--layout'>
            <div className='layout--panel'>
                <LeftPanel />
                <RightPanel />
            </div>
            <Form />
            <Network />
            <Archive />
        </main>
    );
}

export default Layout;
