import * as React from 'react';
import { shallow } from 'enzyme';
import StatusCard from './index';

describe('StatusCard Component', () => {
  let wrapper;
  const mockStatusHeader = 'www.test.com';
  const mockStatus = 'confirmed';
  const mockMessage = 'Test Message';
  const mockDeadline = new Date();
  const mockConfirmation = new Date();

  wrapper = shallow(
    <StatusCard
      statusHeader={mockStatusHeader}
      status={mockStatus}
      message={mockMessage}
      registrationDeadline={mockDeadline}
      confirmationDeadline={mockConfirmation}
    />
  );

  it('renders status card', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
