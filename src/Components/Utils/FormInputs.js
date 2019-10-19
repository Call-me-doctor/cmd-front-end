import React from 'react';

export const InputText1 = (props) => {
    return (
        <div className="input-style-1">
            <label>{props.label}</label>
            <input type="text" />
        </div>
    );
}

export const InputPassword1 = (props) => {
    return (
        <div className="input-style-1">
            <label>{props.label}</label>
            <input type="password" />
        </div>
    );
}
