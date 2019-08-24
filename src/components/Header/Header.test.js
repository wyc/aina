import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    const props = { className: 'Header' };
    const component = renderer.create(<Header {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
