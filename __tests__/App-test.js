/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';

describe('The App', () => {
  it('This passes', () => {
    const {baseElement} = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('This causes "JavaScript heap out of memory"', async () => {
    const {baseElement} = render(<App />);

    expect(baseElement).toMatchSnapshot();
  });
});
