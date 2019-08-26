import React from 'react';
import renderer from 'react-test-renderer';

import Layout from './Layout';

describe('Layout', () => {
  it('renders correctly', () => {
    const props = { children: [] };
    const component = renderer.create(<Layout {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
