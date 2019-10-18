import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
import NavBar from '../NavBar';
import PrivateRoute from '.';

enzyme.configure({ adapter: new Adapter() });
describe('NavLink Tests', () => {
  it('Renders NavLink Content', () => {
    const wrapper = shallow(
      <Provider store={configureStore()}>
        <PrivateRoute component={NavBar} path="/" />
      </Provider>
    );
    expect(wrapper.find(PrivateRoute).exists());
    expect(wrapper.find(NavBar).exists());
  });
});
