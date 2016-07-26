jest.unmock('../src/ButtonComponent.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const ButtonComponent = require('../src/ButtonComponent.jsx').default;

describe('ButtonComponent', () => {

    let buttonItem = null;

    const text = 'Test Label';

    beforeEach(function() {
       buttonItem = TestUtils.renderIntoDocument(<ButtonComponent text={text} />);
    });

    it('is defined', () => {
        expect(buttonItem).toBeDefined();
    });

    it('is a label element', () => {
        let node = ReactDOM.findDOMNode(buttonItem);
        expect(node.tagName).toBe('BUTTON');
    });

    it('is has specified text', () => {
        let node = ReactDOM.findDOMNode(buttonItem);
        expect(node.textContent).toEqual(text);
    });

    it('is has a active class', () => {
        buttonItem = TestUtils.renderIntoDocument(<ButtonComponent text={text} status={'active'} />);
        let node = ReactDOM.findDOMNode(buttonItem);
        expect(node.classList).toContain('usa-button-active');
    });

    it('is has a hover class', () => {
        buttonItem = TestUtils.renderIntoDocument(<ButtonComponent text={text} status={'hover'} />);
        let node = ReactDOM.findDOMNode(buttonItem);
        expect(node.classList).toContain('usa-button-hover');
    });

    it('is has a disabled status', () => {
        buttonItem = TestUtils.renderIntoDocument(<ButtonComponent text={text} status={'disabled'} />);
        let node = ReactDOM.findDOMNode(buttonItem);
        expect(node.classList).toContain('usa-button-disabled');

        for (var i = 0; i < node.attributes.length; i++) {

            if (node.attributes[i].name == 'disabled') {
                expect(node.attributes[i].name).toEqual('disabled');
                break;
            }
        }
    });

    it('is has a large class', () => {
        buttonItem = TestUtils.renderIntoDocument(<ButtonComponent text={text} size={'large'} />);
        let node = ReactDOM.findDOMNode(buttonItem);
        expect(node.classList).toContain('usa-button-big');
    });

    it('is has an alt class', () => {
        buttonItem = TestUtils.renderIntoDocument(<ButtonComponent text={text} secondaryStyle={'alt'} />);
        let node = ReactDOM.findDOMNode(buttonItem);
        expect(node.classList).toContain('usa-button-primary-alt');
    });

    it('is has a secondary class', () => {
        buttonItem = TestUtils.renderIntoDocument(<ButtonComponent text={text} secondaryStyle={'secondary'} />);
        let node = ReactDOM.findDOMNode(buttonItem);
        expect(node.classList).toContain('usa-button-secondary');
    });

    it('is has a gray class', () => {
        buttonItem = TestUtils.renderIntoDocument(<ButtonComponent text={text} secondaryStyle={'gray'} />);
        let node = ReactDOM.findDOMNode(buttonItem);
        expect(node.classList).toContain('usa-button-gray');
    });

    it('is has an outline class', () => {
        buttonItem = TestUtils.renderIntoDocument(<ButtonComponent text={text} secondaryStyle={'outline'} />);
        let node = ReactDOM.findDOMNode(buttonItem);
        expect(node.classList).toContain('usa-button-outline');
    });

    it('is has an outline-inverse class', () => {
        buttonItem = TestUtils.renderIntoDocument(<ButtonComponent text={text} secondaryStyle={'outline-inverse'} />);
        let node = ReactDOM.findDOMNode(buttonItem);
        expect(node.classList).toContain('usa-button-outline-inverse');
    });
});
