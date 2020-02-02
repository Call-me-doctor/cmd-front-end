import React from 'react';
import {InputText1} from '../../Utils/FormInputs';
import {IsCellNumber,HowManyCommas} from '../../Utils/MiscFunctions';

class ContactDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {
                cellphone: [],
                address: [],
                zip: [],
                emergency: [],
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        /*TODO
            Validate form
            if no errors run callback
            else show errors
        */
        const targets = event.target;
        let _errors = {};
        let isError = false;
        if(targets[0].value){
            if(!IsCellNumber(targets[0].value)){
                _errors.cellphone = ["Please use this format: 27000000000"];
                isError = true;
            }
        } else {
            isError = true;
            _errors.cellphone = ["Please fill in cellphone field"];
        }

        _errors.address = [];
        if(targets[1].value){
            if(HowManyCommas(targets[1].value) !== 1){
                isError = true;
                _errors.address = ["Please use this format: str. number, str. name"];
            }
        } else {
            isError = true;
            _errors.address = ["Please fill in street name and number field"];
        }

        if(targets[2].value){
            if(HowManyCommas(targets[2].value) !== 1){
                isError = true;
                _errors.address.push("Please use this format: str. number, str. name");
            }
        } else {
            isError = true;
            _errors.address.push("Please fill in suburb and city/town field");
        }

        if(!targets[3].value){
            isError = true;
            _errors.zip = ["Please fill in the zip code field"]
        }

        if(targets[4].value){
            if(!IsCellNumber(targets[4].value)){
                isError = true;
                _errors.emergency = ["Please use this format: 27000000000"];
            }
        } else {
            isError = true;
            _errors.emergency = ["Please fill in emergency contact"];
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
    render() { 
        return (
            <form id={this.props.formId} onSubmit={this.handleSubmit} method="post">
                <label className="header f20">Contact Details</label>
                <InputText1 formId={this.props.formId} label="Cellphone" placeholder="27000000000" errors={this.state.errors.cellphone}/>
                <InputText1 formId={this.props.formId} label="Home Address" placeholder="str number, street name"/>
                <InputText1 formId={this.props.formId} label="" placeholder="Suburb, City/Town" errors={this.state.errors.address}/>
                <InputText1 formId={this.props.formId} label="Zip Code" errors={this.state.errors.zip}/>
                <InputText1 formId={this.props.formId} label="Emergency Contact Number" placeholder="27000000000" errors={this.state.errors.emergency}/>
            </form>
        );
    }
}
 
export default ContactDetails;