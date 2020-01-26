import React from 'react';
import {InputText1} from '../../Utils/FormInputs';

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
        this.props.callBack();
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