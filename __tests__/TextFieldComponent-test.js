jest.unmock('../src/TextFieldComponent.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const TextFieldComponent = require('../src/TextFieldComponent.jsx').default;

describe('TextFieldComponent', () => {

    let textFieldItem = null;

    beforeEach(function() {
       textFieldItem = TestUtils.renderIntoDocument(<TextFieldComponent />);
    });

    it('is defined', () => {
        expect(textFieldItem).toBeDefined();
    });

    it('is an input element', () => {
        let node = ReactDOM.findDOMNode(textFieldItem);
        expect(node.tagName).toBe('INPUT');
    });

    it('is has a type of text', () => {
        let node = ReactDOM.findDOMNode(textFieldItem);
        expect(node.type).toBe('text');
    });
});
