/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
import {render} from '@testing-library/react-native';


// 0 npm install --save-dev @testing-library/react-native
// 1. Create jestSetupFile.js
// 2. Register in package.json
// 3. For image asset : npm install --save-dev identity-obj-proxy

jest.mock('../src/utils/ReactotronConfig', () => (
    {
        createEnhancer: jest.fn(),
    }
));
it('renders correctly', () => {
    render(<App/>);
});
