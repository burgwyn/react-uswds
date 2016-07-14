import React from 'react';

import BaseComponent from './BaseComponent.jsx';

export default class LabelComponent extends BaseComponent {

    render () {
        return (
            <label>{this.props.text}</label>
        );
    }
}
