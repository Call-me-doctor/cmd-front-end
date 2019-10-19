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
]

const clientType = [
    {key:0, value: 'Patient'},
    {key:1, value: 'Medical Doctor'},
]

class Register extends React.Component {
    render() { 
        return (
            <Fragment>
                <NavBar />
                <div className="content-container">
                    <div className="details-form">
                        <form>
                            <InputText1 label="Name" />
                            <InputText1 label="Surname" />
                            <Select1 label="Salutation" options={salutation} />
                            <InputText1 label="E-mail" />
                            <InputText1 label="Username" />
                            <InputPassword1 label="Password" />
                            <InputPassword1 label="Repeat Password" />
                            <Select1 label="Client Type" options={clientType} />
                            <InputSubmit1 label="Register" />
                        </form>
                        <label>Already have an account? <a href="login">Login here</a></label>
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default Register;
