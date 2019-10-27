import React from 'react';
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

class RegisterForm extends React.Component {
    constructor(){
        super();
        this.state = {
            errors: [
                {errors: []},
                {errors: []},
                {errors: []},
                {errors: []},
                {errors: []},
                {errors: []},
                {errors: []},
                {errors: []},
            ]
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const targets = event.target;
        let err = []
        
        let name = targets[0]
        if(!name.value){
            err[0] = {errors: ["Please fill in this field"]}
        }
        let surname = targets[1]
        if(!surname.value){
            err[1] = {errors: ["Please fill in this field"]}
        }
        let salutation = targets[2]
        if(salutation.value === "default"){
            err[2] = {errors: ["Please fill in this field"]}
        }
        let email = targets[3]
        if(!email.value){
            err[3] = {errors: ["Please fill in this field"]}
        }
        let username = targets[4]
        if(!username.value){
            err[4] = {errors: ["Please fill in this field"]}
        }
        let password = targets[5]
        if(!password.value){
            err[5] = {errors: ["Please fill in this field"]}
        }
        let repeatpassword = targets[6]
        if(!repeatpassword.value){
            err[6] = {errors: ["Please fill in this field"]}
        }
        let clienttype = targets[7]
        if(!clienttype.value){
            err[7] = {errors: ["Please fill in this field"]}
        }
    }
    render() { 
        return (
            <form id={registerFormId} onSubmit={this.handleSubmit} method="post">
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
        );
    }
}
 
export default RegisterForm;
