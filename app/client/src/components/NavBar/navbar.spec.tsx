import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from 'semantic-ui-react';
import NavBar from '.';

enzyme.configure({ adapter: new Adapter() });

describe('App Tests', () => {
  it('Renders App Content', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
