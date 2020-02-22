import React from 'react';
import {Checkbox1} from '../../Utils/FormInputs';

const info = {
    accurateInfo: 'I declare that all information provided is accurate',
    TandC: 'I accept terms and conditions'
}

class Declaration extends React.Component {

    render() {
        return (
            <form id={this.props.formId} onSubmit={this.handleSubmit} method="post">
                <label className="header f20">Declaration</label>
                <Checkbox1 info={info.accurateInfo}/>
                <Checkbox1 info={info.TandC}/>
            </form>
        );
    }
}

export default Declaration;