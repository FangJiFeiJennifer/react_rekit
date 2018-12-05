import React from 'react';
import { shallow } from 'enzyme';
import { NotLogin } from '../../../src/features/examples/NotLogin';

describe('examples/NotLogin', () => {
  it('renders node with correct class name', () => {
    const props = {
      examples: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <NotLogin {...props} />
    );

    expect(
      renderedComponent.find('.examples-not-login').length
    ).toBe(1);
  });
});
