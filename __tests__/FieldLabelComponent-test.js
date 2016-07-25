jest.unmock('../src/FieldLabelComponent.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const FieldLabelComponent = require('../src/FieldLabelComponent.jsx').default;

describe('FieldLabelComponent', () => {

    let labelItem = null;

    const text = 'Test Label';

    beforeEach(function() {
       labelItem = TestUtils.renderIntoDocument(<FieldLabelComponent text={text} />);
    });

    it('is defined', () => {
        expect(labelItem).toBeDefined();
    });

    it('is a label element', () => {
        let node = ReactDOM.findDOMNode(labelItem);
        expect(node.tagName).toBe('LABEL');
    });

    it('is has a type of text', () => {
        let node = ReactDOM.findDOMNode(labelItem);
        expect(node.textContent).toBe(text);
    });
});
