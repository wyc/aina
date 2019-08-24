import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const props = { className: 'Footer' };
    const component = renderer.create(<Footer {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
