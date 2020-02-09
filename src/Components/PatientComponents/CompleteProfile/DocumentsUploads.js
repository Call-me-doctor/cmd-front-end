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
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const targets = event.target;
        let _errors = {};
        let isError = false;

        if(!isError){
            const data = {
                [keyStrings.id]: targets[0],
                [keyStrings.nationality]:  targets[1],
            }
            this.props.callBack("profilePicture", data);
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
            default:
                return 'default';
        }
    }
    render() { 
        return (
            <form id={this.props.formId} onSubmit={this.handleSubmit} method="post">
                <label className="header f20">Documents Upload</label>
                <label className="header f12">Documents should not exceed 1.5Mb in size</label>
                <Avatar1 label="Profile Picture" id="profile-picture" />
                <FileUpload1 label="Proof of ID" placeholder="Upload image" id="proof-of-id"/>
            </form>
        );
    }
}
 
export default IdentityDetails;