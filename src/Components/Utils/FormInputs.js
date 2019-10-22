import React from 'react';

export const InputText1 = (props) => {
    return (
        <div className="input-style-1">
            <label>{props.label}</label>
            <input name={props.label} type="text" form={props.formId}/>
        </div>
    );
}

export const InputPassword1 = (props) => {
    return (
        <div className="input-style-1">
            <label>{props.label}</label>
            <input name={props.label} type="password" form={props.formId} />
        </div>
    );
}

export const InputSubmit1 = (props) => {
    return (
        <div className="button-style-1">
            <input name={props.label} type="submit" value={props.label} form={props.formId}/>
        </div>
    );
}

export const Select1 = (props) => {
    return (
        <div className="select-type-1">
            <label>{props.label}</label>
            <select name={props.label} form={props.formId}>
                <option key={-1} value="default">Select {props.label}</option>
                {props.options.map((v,i) => 
                    <option key={i} value={v.key}>{v.value}</option>
                )}
            </select>
        </div>
    );
}
