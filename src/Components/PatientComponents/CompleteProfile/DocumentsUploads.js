import React from 'react';
import {Avatar1,FileUpload1} from '../../Utils/FormInputs';

const keyStrings = {
    avatar: 'Profile Picture',
    idCopy: 'Proof of ID',
}

class IdentityDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {
                [keyStrings.avatar]: [],
                [keyStrings.idCopy]: [],
            }
        }
        
        this.data = {
            avatar: {name: '', value:''},
            idCopy: {name: '', value:''},
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let _errors = {};
        let isError = false;

        if(!(this.data.avatar['name'] && this.data.avatar['value'])){
            _errors[keyStrings.avatar] = ['invalid file'];
            isError = true;
        }

        if(!(this.data.idCopy['name'] && this.data.idCopy['value'])){
            _errors[keyStrings.idCopy] = ['invalid file'];
            isError = true;
        }

        if(!isError){
            this.props.callBack("documentUploads", this.data);
        } else {
            this.setState({
                errors:_errors
            })
        }        
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
            default:
                return 'default';
        }
    }

    processProfilePhoto = (e, setImage) => {
        const file = e.target.files[0];
        const data = this.data;

        if(file.type.indexOf("images/") && file.type){
            let reader = new FileReader();


            reader.onload = (function (f){
                return function(e) { 
                    setImage(e.target.result);
                    data.avatar['name'] = file.name;
                    data.avatar['value'] = e.target.result;
                }
            })(file)

            reader.readAsDataURL(file);
        } else {
            window.alert("file must be an image")
            data.avatar['name'] = null;
            data.avatar['value'] = null;
            setImage(null);
        }
    }

    processId = (e, setFilename) => {
        const file = e.target.files[0];
        const data = this.data;

        if((file.type.indexOf("images/") || file.type.indexOf("application/pdf")) && file.type){
            let reader = new FileReader();


            reader.onload = (function (f){
                return function(e) { 
                    data.idCopy['name'] = file.name;
                    data.idCopy['value'] = e.target.result;
                    if(file.name.length > 12){
                        const name = file.name.substring(0,10) + '...';
                        setFilename(name);
                    } else {
                        setFilename(file.name);
                    }
                }
            })(file)

            reader.readAsDataURL(file);
        } else {
            window.alert("file must be an image")
            data.idCopy['name'] = null;
            data.idCopy['value'] = null;
            setFilename('');
        }
    }

    render() { 
        return (
            <form id={this.props.formId} onSubmit={this.handleSubmit} method="post">
                <label className="header f20">Documents Upload</label>
                <label className="header f12">Documents should not exceed 1.5Mb in size</label>
                <Avatar1 label="Profile Picture" id="profile-picture" onChange={this.processProfilePhoto} errors={this.state.errors[keyStrings.avatar]}/>
                <FileUpload1 label="Proof of ID" placeholder="Upload image" id="proof-of-id"  onChange={this.processId} errors={this.state.errors[keyStrings.idCopy]}/>
            </form>
        );
    }
}
 
export default IdentityDetails;