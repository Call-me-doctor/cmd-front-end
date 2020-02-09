import React from 'react';
import {InputText1} from '../../Utils/FormInputs';
import {IsCellNumber,HowManyCommas} from '../../Utils/MiscFunctions';

const keyStrings = {
    cellphone: 'cellphone',
    address: 'address',
    zip:'zip',
    emergency:'emergency'
}

class ContactDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {
                [keyStrings.cellphone]: [],
                [keyStrings.address]: [],
                [keyStrings.zip]: [],
                [keyStrings.emergency]: [],
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const targets = event.target;
        let _errors = {};
        let isError = false;
        if(targets[0].value){
            if(!IsCellNumber(targets[0].value)){
                _errors[keyStrings.cellphone] = ["Please use this format: 27000000000"];
                isError = true;
            }
        } else {
            isError = true;
            _errors[keyStrings.cellphone] = ["Please fill in cellphone field"];
        }

        _errors[keyStrings.address] = [];
        if(targets[1].value){
            if(HowManyCommas(targets[1].value) !== 1){
                isError = true;
                _errors[keyStrings.address] = ["Please use this format: str. number, str. name"];
            }
        } else {
            isError = true;
            _errors[keyStrings.address] = ["Please fill in street name and number field"];
        }

        if(targets[2].value){
            if(HowManyCommas(targets[2].value) !== 1){
                isError = true;
                _errors[keyStrings.address].push("Please use this format: suburb, city/Town");
            }
        } else {
            isError = true;
            _errors[keyStrings.address].push("Please fill in suburb and city/town field");
        }

        if(!targets[3].value){
            isError = true;
            _errors[keyStrings.zip] = ["Please fill in the zip code field"]
        }

        if(targets[4].value){
            if(!IsCellNumber(targets[4].value)){
                isError = true;
                _errors[keyStrings.emergency] = ["Please use this format: 27000000000"];
            }
        } else {
            isError = true;
            _errors[keyStrings.emergency] = ["Please fill in emergency contact"];
        }

        if(!isError){
            const data = {
                'cellphone': targets[0].value,
                'address': targets[1].value + ',' + targets[2].value,
                'zip': targets[3].value,
                'emergency': targets[4].value,
            }
            this.props.callBack("contactDetails", data);
        }

        this.setState({
            errors:_errors
        })
        
    }

    processData = (key) => {
        if(!this.props.data){
            return '';
        }
        switch (key) {
            case 0:
                return this.props.data[keyStrings.cellphone];
            case 1:
                const address1 = this.props.data[keyStrings.address];
                if(address1){
                    const segments1 = address1.split(',');
                    return segments1[0] + ',' + segments1[1];
                } else {
                    return '';
                }
            case 2:
                const address2 = this.props.data[keyStrings.address];
                if(address2){
                    const segments2 = address2.split(',');
                    return segments2[2] + ',' + segments2[3];
                } else {
                    return '';
                }
            case 3:
                return this.props.data[keyStrings.zip];
            case 4:
                return this.props.data[keyStrings.emergency];
            default:
                return 'default';
        }
    }
    render() { 
        return (
            <form id={this.props.formId} onSubmit={this.handleSubmit} method="post">
                <label className="header f20">Contact Details</label>
                <InputText1 val={this.processData(0)} formId={this.props.formId} label="Cellphone" placeholder="27000000000" errors={this.state.errors.cellphone}/>
                <InputText1 val={this.processData(1)} formId={this.props.formId} label="Home Address" placeholder="str number, street name"/>
                <InputText1 val={this.processData(2)} formId={this.props.formId} label="" placeholder="Suburb, City/Town" errors={this.state.errors.address}/>
                <InputText1 val={this.processData(3)} formId={this.props.formId} label="Zip Code" errors={this.state.errors.zip}/>
                <InputText1 val={this.processData(4)} formId={this.props.formId} label="Emergency Contact Number" placeholder="27000000000" errors={this.state.errors.emergency}/>
            </form>
        );
    }
}
 
export default ContactDetails;