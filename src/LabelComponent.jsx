import React from 'react';

import BaseComponent from './BaseComponent.jsx';

export default class LabelComponent extends BaseComponent {

    constructor(props) {
        super(props);
    }

    render () {
        let className = 'usa-label' + ((this.props.size === 'large') ? '-big' : '');
        return (
            <h6 className={className}>{this.props.text}</h6>
        );
    }
}

LabelComponent.defaultProps = {
	size: 'small'
};

LabelComponent.propTypes = {
	size: React.PropTypes.oneOf(['small', 'large']),
    text: React.PropTypes.string.isRequired
};
