import React, {Fragment} from 'react';
import NavBar from '../NavigationBar/NavigationBar';
import {
    InputText1,
    InputPassword1 ,
    InputSubmit1,
    Select1
} from '../Utils/FormInputs';

const salutation = [
    {key:'mr', value:'Mr.'},
    {key:'ms', value:'Ms.'},
    {key:'dr', value:'Dr.'},
];

const clientType = [
    {key:0, value: 'Patient'},
    {key:1, value: 'Medical Doctor'},
];

const registerFormId = "register-form";

class Register extends React.Component {
    render() { 
        return (
            <Fragment>
                <NavBar />
                <div className="content-container">
                    <div className="details-form">
                        <form id={registerFormId}>
                            <InputText1 label="Name" formId={registerFormId}/>
                            <InputText1 label="Surname" formId={registerFormId}/>
                            <Select1 label="Salutation" options={salutation} formId={registerFormId}/>
                            <InputText1 label="E-mail" formId={registerFormId}/>
                            <InputText1 label="Username" formId={registerFormId}/>
                            <InputPassword1 label="Password" formId={registerFormId}/>
                            <InputPassword1 label="Repeat Password" formId={registerFormId}/>
                            <Select1 label="Client Type" options={clientType} formId={registerFormId}/>
                            <InputSubmit1 label="Register" formId={registerFormId}/>
                        </form>
                        <label>Already have an account? <a href="login">Login here</a></label>
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default Register;
