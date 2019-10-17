import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button, Dropdown } from 'semantic-ui-react';
import NavBar from '.';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';

enzyme.configure({ adapter: new Adapter() });

describe('App Tests', () => {
  it('Renders App Content', () => {
    const wrapper = shallow(
      <Provider store={configureStore()}>
        <NavBar />
      </Provider>
    );
    expect(wrapper.find(NavBar).exists());
    expect(wrapper.find(Button).exists());
    expect(wrapper.find(Dropdown).exists());
    expect(wrapper.find(Image).exists());
  });
});
