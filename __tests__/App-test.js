/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../src/App'
//https://callstack.github.io/react-native-testing-library/docs/getting-started

jest.mock('../src/utils/ReactotronConfig', () => (
    {
        createEnhancer: jest.fn(),
    }
));
it('renders correctly', () => {
    render(<App/>)
});
