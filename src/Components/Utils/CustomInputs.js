import React from 'react';

export const HomeButton = (props) => {
    return (
        <button className={`home-button-style`}>
            <span>{props.text}</span>
        </button>
    );
}
