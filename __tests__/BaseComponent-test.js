jest.unmock('../src/BaseComponent.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const BaseComponent = require('../src/BaseComponent.jsx').default;

describe('BaseComponent', () => {

    let baseItem = null;

    xit('is defined', () => {
        expect(baseItem).toBeDefined();
    });
});
