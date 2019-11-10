import React from 'react';

const errorList = (errors) => {
    return errors.length <= 0? null: (
        <div class="error">
            <ul>
                {errors.map(v => (<li> {v} </li>))}
            </ul>
        </div>
    );
}

export const InputText1 = (props) => {
    const errors = props.errors;
    return (
        <div className={`input-style-1 ${errors?errors.length <= 0? '': 'error':''}`}>
            <label>{props.label}</label>
            <input name={props.label} type="text" form={props.formId}/>
            {errors ? errorList(errors):null}
        </div>
    );
}

export const InputPassword1 = (props) => {
    const errors = props.errors;
    return (
        <div className={`input-style-1 ${errors?errors.length <= 0? '': 'error':''}`}>
            <label>{props.label}</label>
            <input name={props.label} type="password" form={props.formId} />
            {errors ? errorList(errors):null}
        </div>
    );
}

export const InputSubmit1 = (props) => {
    const errors = props.errors;
    return (
        <div className={`button-style-1 ${errors?errors.length <= 0? '': 'error':''}`}>
            <input name={props.label} type="submit" value={props.label} form={props.formId}/>
            {errors ? errorList(errors):null}
        </div>
    );
}

export const Select1 = (props) => {
    const errors = props.errors;
    return (
        <div className={`select-style-1 ${errors?errors.length <= 0? '': 'error':''}`}>
            <label>{props.label}</label>
            <select name={props.label} form={props.formId}>
                <option key={-1} value="default">Select {props.label}</option>
                {props.options.map((v,i) => 
                    <option key={i} value={v.key}>{v.value}</option>
                )}
            </select>
            {errors ? errorList(errors):null}
        </div>
    );
}
