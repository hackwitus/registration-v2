import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavLink from '.';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';

enzyme.configure({ adapter: new Adapter() });
describe('NavLink Tests', () => {
  it('Renders NavLink Content', () => {
    const wrapper = shallow(
      <Provider store={configureStore()}>
        <NavLink label="test" to="/" />
      </Provider>
    );
    expect(wrapper.find(NavLink).exists());
  });
});
