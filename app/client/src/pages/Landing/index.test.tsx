import * as React from 'react';
import { shallow } from 'enzyme';
import Landing from './index';

describe('Landing Page Component', () => {
  it('renders landing page', () => {
    const landing = shallow(<Landing />);
    expect(shallow).toMatchSnapshot();
  });
});
