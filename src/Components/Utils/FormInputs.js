import React, {useState} from 'react';

const errorList = (errors) => {
    return errors.length <= 0? null: (
        <div className="error">
            <ul>
                {errors.map((v,i) => (<li key={i}> {v} </li>))}
            </ul>
        </div>
    );
}

export const InputText1 = (props) => {
    const errors = props.errors;
    return (
        <div className={`input-style-1 ${errors?errors.length <= 0? '': 'error':''}`}>
            <label>{props.label}</label>
            <input name={props.label} defaultValue={props.val} type="text" form={props.formId} placeholder={props.placeholder}/>
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

export const InputControl1 = (props) => {
    const errors = props.errors;
    return (
        <div className={`button-style-1 ${errors?errors.length <= 0? '': 'error':''}`}>
            <input name={props.label} type="submit" value={props.label} onClick={props.callBack} form={props.formId}/>
            {errors ? errorList(errors):null}
        </div>
    );
}

export const Select1 = (props) => {
    const errors = props.errors;
    const chosenOptions = props.options.find(opt => props.selected === opt.key);
    return (
        <div className={`select-style-1 ${errors?errors.length <= 0? '': 'error':''}`}>
            <label>{props.label}</label>
            <select name={props.label} form={props.formId} defaultValue={`${chosenOptions?chosenOptions.key:-1}`}>
                <option key={-1} value="default">Select {props.label}</option>
                {props.options.map((v,i) => 
                    <option key={i} value={v.key}>{v.value}</option>
                )}
            </select>
            {errors ? errorList(errors):null}
        </div>
    );
}

export const Avatar1 = (props) => {
    const errors = props.errors;
    const [image, setImage] = useState('');
    const styles = {
        backgroundImage:`url('${image}')`
    }
    
    return (
        <div className={`avatar-style-1 ${errors?errors.length <= 0? '': 'error':''}`}>
            <input id={props.id} name={props.label} type="file" 
                form={props.formId} onChange={(e) => {props.onChange(e,setImage)}} />
            <label id="avatar" htmlFor={props.id} style={styles}>+</label>
            <label id="label">{props.label}</label>
            {errors ? errorList(errors):null}
        </div>
    );
}

export const FileUpload1 = (props) => {
    const errors = props.errors;
    const [filename, setFilename] = useState('');

    return (
        <div className={`file-upload-style-1 ${errors?errors.length <= 0? '': 'error':''}`}>
            <label>{props.label}</label>
            <div className="inline-inputs">
                <input type="text" name="filename" placeholder={props.placeholder} value={filename} readOnly />
                <label id="file" htmlFor={props.id}>+</label>
                <input id={props.id} name={props.label} type="file" 
                    form={props.formId} onChange={(e) => {props.onChange(e,setFilename)}}/>
            </div>
            {errors ? errorList(errors):null}
        </div>
    );
}

export const Checkbox1 = (props) => {
    const errors = props.errors;
    return (
        <div className={`checkbox-style-1 ${errors?errors.length <= 0? '': 'error':''}`}>
            <label class="container">{props.info}
                <input type="checkbox" id={props.id}
                    form={props.formId} />
                <span class="checkmark"></span>
            </label>
            {errors ? errorList(errors):null}
        </div>
    );
}
