import React from 'react';
import {Checkbox1} from '../../Utils/FormInputs';

const info = {
    accurateInfo: 'I declare that all information provided is accurate',
    TandC: 'I accept terms and conditions'
}

const keyStrings = {
    accurateInfo: 'accurateInfo',
    TandC: 'TandC'
}

class Declaration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: {
                [keyStrings.accurateInfo]: [],
                [keyStrings.TandC]: []
            },

            check1: false,
            check2: false,
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let _errors = {};

        if(this.state.check1 && this.state.check2) {
            this.props.callBack();
            return;
        } else {
            _errors[keyStrings.TandC] = ['Please accept the declaration']
        }

        this.setState({
            errors: _errors
        });
    }

    onChange = (number) => {
        switch (number) {
            case 1:
                this.setState({
                    check1: !this.state.check1
                })
                break;
            case 2:
                this.setState({
                    check2: !this.state.check2
                })
                break;
        
            default:
                break;
        }
    }

    render() {
        return (
            <form id={this.props.formId} onSubmit={this.handleSubmit} method="post">
                <label className="header f20">Declaration</label>
                <Checkbox1 info={info.accurateInfo} callback={() => this.onChange(1)}/>
                <Checkbox1 info={info.TandC} errors={this.state.errors[keyStrings.TandC]} callback={() => this.onChange(2)}/>
            </form>
        );
    }
}

export default Declaration;