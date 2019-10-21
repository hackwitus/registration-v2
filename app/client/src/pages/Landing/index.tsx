import * as React from 'react';
import StatusCard from '../../components/StatusCard';

const Landing: React.FC = () => {
  return (
    <StatusCard
      statusHeader="your status:"
      status="confirmed"
      message="Welcome back Mike!"
      registrationDeadline={new Date()}
      confirmationDeadline={new Date()}
    />
  );
};

export default Landing;
