import React, {Fragment} from 'react';
import NavBar from '../../NavigationBar/NavigationBar';

class CompleteProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Fragment>
                <NavBar hideLogin={true}/>
                <div className="user-content-container">
                    <label>Complete Your Profile</label>
                    <div className="content-container">
                        <div className="details-form">
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default CompleteProfile;