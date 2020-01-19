import React from 'react';

export const HomeButton = (props) => {
    function path(){
        window.location.href = props.path?props.path:'#'
    }
    return (
        <button onClick={path} className={`home-button-style`}>
            <span>{props.text}</span>
        </button>
    );
}
