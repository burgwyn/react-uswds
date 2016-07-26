import React from 'react';

import BaseComponent from './BaseComponent.jsx';

export default class ButtonComponent extends BaseComponent {

    constructor(props) {
        super(props);
    }

    render () {

        //local vars
        let className = [];
        let disabled = '';

        if (this.props.secondaryStyle !== '') {

            switch(this.props.secondaryStyle) {
                case 'alt':
                    className.push('usa-button-primary-alt');
                    break;
                case 'secondary':
                    className.push('usa-button-secondary');
                    break;
                case 'gray':
                    className.push('usa-button-gray');
                    break;
                case 'outline':
                    className.push('usa-button-outline');
                    break;
                case 'outline-inverse':
                    className.push('usa-button-outline-inverse');
                    break;
            }
        }

        if (this.props.size === 'large') {
            className.push('usa-button-big');
        }

        if (this.props.status !== '') {
            className.push('usa-button-' + this.props.status);

            if (this.props.status === 'disabled') {
                disabled = 'disabled';
            }
        }

        return (
            <button className={className} disabled={disabled}>{this.props.text}</button>
        );
    }
}

ButtonComponent.defaultProps = {
    secondaryStyle: '',
    size: '',
	status: ''
};

ButtonComponent.propTypes = {
    secondaryStyle: React.PropTypes.oneOf(['', 'alt', 'secondary', 'gray', 'outline', 'outline-inverse']),
    size: React.PropTypes.oneOf(['', 'large']),
	status: React.PropTypes.oneOf(['', 'active', 'disabled', 'hover']),
    text: React.PropTypes.string.isRequired
};
