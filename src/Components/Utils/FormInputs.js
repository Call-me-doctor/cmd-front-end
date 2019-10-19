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

export const InputSubmit1 = (props) => {
    return (
        <div className="button-style-1">
            <input type="submit" value={props.label}/>
        </div>
    );
}
