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
    constructor(props){
        super(props);
        this.state = {
            errors: {
                name: [],
                surname: [],
                salutation: [],
                email: [],
                username: [],
                password: [],
                repeatPassword: [],
                clientType: [],
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const targets = event.target;
        let _errors = {}
        
        let name = targets[0];
        if(!name.value){
            _errors.name = ["Please fill in this field"];
        }
        let surname = targets[1];
        if(!surname.value){
            _errors.surname = ["Please fill in this field"];
        }
        let salutation = targets[2];
        if(salutation.value === "default"){
            _errors.salutation = ["Please select an option"];
        }

        let email = targets[3];
        if(!email.value){
            _errors.email = ["Please fill in this field"];
        } else {
            let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
            if(!re.test(email.value)){
                _errors.email = ["email should be in this format 'example@domain.xxx'"];
            }
        }
        let password = targets[4];
        if(!password.value){
            _errors.password = ["Please fill in this field"];
        } else {
            if(password.value.length < 8){
                _errors.password = ["Password must be 8 characters or longer"];
            }
        }
        let repeatpassword = targets[5];
        if(!repeatpassword.value){
            _errors.repeatPassword = ["Please fill in this field"];
        } else {
            if(repeatpassword.value !== password.value){
                _errors.repeatPassword = ["It must match the password"];
            }
        }
        let clienttype = targets[6];
        if(clienttype.value === "default"){
            _errors.clientType = ["Please select an option"];
        }

        this.setState({
            errors: _errors
        })
    }
    render() { 
        return (
            <form id={registerFormId} onSubmit={this.handleSubmit} method="post">
                <InputText1 label="Name" formId={registerFormId} errors={this.state.errors.name}/>
                <InputText1 label="Surname" formId={registerFormId} errors={this.state.errors.surname}/>
                <Select1 label="Salutation" options={salutation} formId={registerFormId} errors={this.state.errors.salutation}/>
                <InputText1 label="E-mail" formId={registerFormId} errors={this.state.errors.email}/>
                <InputPassword1 label="Password" formId={registerFormId} errors={this.state.errors.password}/>
                <InputPassword1 label="Repeat Password" formId={registerFormId} errors={this.state.errors.repeatPassword}/>
                <Select1 label="Client Type" options={clientType} formId={registerFormId} errors={this.state.errors.clientType} selected={this.props.selected}/>
                <InputSubmit1 label="Register" formId={registerFormId}/>
            </form>
        );
    }
}
 
export default RegisterForm;
