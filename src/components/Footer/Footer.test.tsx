import React from 'react';
import * as renderer from 'react-test-renderer';

import Footer from './Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const props = {};
    const component = renderer.create(<Footer {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
