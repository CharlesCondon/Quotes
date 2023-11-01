import React from 'react';
import sketch from './sketch';
import {ReactP5Wrapper} from 'react-p5-wrapper';

function home() {
    return (
        <>
            <ReactP5Wrapper sketch={sketch}/>
        </>
    )
}

export default home