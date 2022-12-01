import React from 'react';
import First from './First';
import SideBar from './SideBar';
import Nav from './Nav';

const App = () => {
    return(
        <>
            <div>
                <Nav />
                <SideBar />
                <First />
            </div>
        </>
    )
}

export default App;