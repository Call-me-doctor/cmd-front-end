import React from 'react';
import {InputText1, Select1} from '../../Utils/FormInputs';

const keyStrings = {
    id: 'Identity Number',
    nationality: 'Nationality',
    medicalAid:'Medical Aid Provider'
}

const IDOptions= [
    {key:'id', value:'ID Number'},
    {key:'passport', value:'Password Number'},
]

class IdentityDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {
                [keyStrings.id]: [],
                [keyStrings.nationality]: [],
                [keyStrings.medicalAid]: [],
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const targets = event.target;
        let _errors = {};
        let isError = false;

        _errors[keyStrings.id] = [];
        if(targets[0].value){
            if(targets[0].value === "default"){
                _errors[keyStrings.id] = ["Please select identity type"];
                isError = true;
            }
        } else {
            isError = true;
            _errors[keyStrings.id] = ["Please select identity type"];
        }

        if(!targets[1].value){
            isError = true;
            _errors[keyStrings.id].push("Please fill in your identity");
        }

        if(!targets[2].value){
            isError = true;
            _errors[keyStrings.nationality] = ["Please fill in your nationality"];
        }

        if(!targets[3].value){
            isError = true;
            _errors[keyStrings.medicalAid] = ["Please fill in your medical aid provider"];
        }

        if(!isError){
            const data = {
                [keyStrings.id]: {key:targets[0].value, value:targets[1].value},
                [keyStrings.nationality]:  targets[2].value,
                [keyStrings.medicalAid]: targets[3].value,
            }
            this.props.callBack("identityDetails", data);
        }

        this.setState({
            errors:_errors
        })
        
    }

    processData = (key) => {
        if(!this.props.data){
            return '';
        }
        const idType = this.props.data[keyStrings.id];
        switch (key) {
            case 0:
                return idType?idType.key:'';
            case 1:
                return idType?idType.value:'';
            case 2:
                return this.props.data[keyStrings.nationality];
            case 3:
                return this.props.data[keyStrings.medicalAid];
            default:
                return 'default';
        }
    }
    render() { 
        return (
            <form id={this.props.formId} onSubmit={this.handleSubmit} method="post">
                <label className="header f20">Identity Details</label>
                <Select1 selected={this.processData(0)} options={IDOptions} formId={this.props.formId} label={'Identity Type'} />
                <InputText1 val={this.processData(1)} formId={this.props.formId} errors={this.state.errors[keyStrings.id]}/>
                <InputText1 
                    val={this.processData(2)} 
                    formId={this.props.formId} 
                    label={keyStrings.nationality} 
                    errors={this.state.errors[keyStrings.nationality]}
                />
                <InputText1 
                    val={this.processData(3)} 
                    formId={this.props.formId} 
                    label={keyStrings.medicalAid} 
                    errors={this.state.errors[keyStrings.medicalAid]} 
                    placeholder="Type 'none' if unavailable"
                />
            </form>
        );
    }
}
 
export default IdentityDetails;