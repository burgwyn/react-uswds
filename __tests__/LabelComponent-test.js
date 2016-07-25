jest.unmock('../src/LabelComponent.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const LabelComponent = require('../src/LabelComponent.jsx').default;

describe('LabelComponent', () => {

    let labelItem = null;

    const text = 'Test Label';

    beforeEach(function() {
       labelItem = TestUtils.renderIntoDocument(<LabelComponent text={text} />);
    });

    it('is defined', () => {
        expect(labelItem).toBeDefined();
    });

    it('is a label element', () => {
        let node = ReactDOM.findDOMNode(labelItem);
        expect(node.tagName).toBe('H6');
    });

    it('is has specified text', () => {
        let node = ReactDOM.findDOMNode(labelItem);
        expect(node.textContent).toEqual(text);
    });

    it('is has a default class', () => {
        let node = ReactDOM.findDOMNode(labelItem);
        expect(node.classList[0]).toEqual('usa-label');
    });

    it('is has a big class', () => {
        labelItem = TestUtils.renderIntoDocument(<LabelComponent text={text} size={'large'} />);
        let node = ReactDOM.findDOMNode(labelItem);
        expect(node.classList[0]).toEqual('usa-label-big');
    });
});
