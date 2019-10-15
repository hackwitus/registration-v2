import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Landing from '.';
import { Header } from 'semantic-ui-react';

enzyme.configure({ adapter: new Adapter() });

describe('App Tests', () => {
  it('Renders App Content', () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });
});
