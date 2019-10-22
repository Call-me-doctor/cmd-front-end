import React from 'react';

export const InputText1 = (props) => {
    return (
        <div className="input-style-1">
            <label>{props.label}</label>
            <input type="text" form={props.formId}/>
        </div>
    );
}

export const InputPassword1 = (props) => {
    return (
        <div className="input-style-1">
            <label>{props.label}</label>
            <input type="password" form={props.formId} />
        </div>
    );
}

export const InputSubmit1 = (props) => {
    return (
        <div className="button-style-1">
            <input type="submit" value={props.label} form={props.formId}/>
        </div>
    );
}

export const Select1 = (props) => {
    return (
        <div className="select-type-1">
            <label>{props.label}</label>
            <select name={props.label} form={props.formId}>
                <option value="default">Select {props.label}</option>
                {props.options.map((v) => 
                    <option value={v.key}>{v.value}</option>
                )}
            </select>
        </div>
    );
}
