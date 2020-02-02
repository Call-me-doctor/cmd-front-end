import React, {Fragment} from 'react';
import NavBar from '../../NavigationBar/NavigationBar';
import {InputControl1} from '../../Utils/FormInputs';
import ContactDetails from './ContactDetails';

const numForm = 4;

const formIDs = ['ContactDetails'];

class CompleteProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            formID: 0,
            showPrev: false,
            submitForm: false,
            data: {
                contactDetails:{}
            }
         }
    }

    formLoader = (formID) => {
        switch (formID) {
            case 0:
                return <ContactDetails data={this.state.data.contactDetails} callBack={(name,data)=>{this.formControlCallback(1, name,data)}} formId={formIDs[formID]}/>
            case 1:
                return <div>Form 2</div>
            case 2:
                return <div>Form 3</div>
            case 3:
                return <div>Form 4</div>
        
            default:
                break;
        }
    }

    formControlCallback = (direction, name, data)=>{
        let newFormID = this.state.formID + direction*1;
        let newShowPrev = this.state.showPrev;
        let newSubmitForm = this.state.submitForm;
        if(newFormID <= 0){
            newFormID = 0;
            newShowPrev = false;
            newSubmitForm = false;
        } 
        else if(newFormID >= numForm - 1) {
            newFormID = numForm - 1;
            newShowPrev = true;
            newSubmitForm = true;
        } else {
            newShowPrev = true;
            newSubmitForm = false;
        }

        this.setState({
            formID: newFormID,
            showPrev: newShowPrev,
            submitForm: newSubmitForm,
        })

        this.addData(name,data);
    }

    addData = (name,data) => {
        const _data = this.state.data;
        _data[name] = data;
        this.setState({
            data: _data
        })
    }

    submitForm = () => {
        /* TODO
        Post Request to an API
        */
    }

    render() {
        return (
            <Fragment>
                <NavBar hideLogin={true}/>
                <div className="user-content-container">
                    <label className="header">Complete Your Profile</label>
                    <div className="content-container">
                        <div className="details-form">
                            {this.formLoader(this.state.formID)}
                            <div className="inline-buttons">
                                {this.state.submitForm?<InputControl1 label="Submit" callBack={this.submitForm}/>:
                                <InputControl1 formId={formIDs[0]} label="Next" />}
                                {this.state.showPrev?<InputControl1 label="Back" callBack={()=>{this.formControlCallback(-1)}}/>:null}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default CompleteProfile;