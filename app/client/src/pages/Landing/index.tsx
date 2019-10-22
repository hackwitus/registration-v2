import { Container } from 'semantic-ui-react';
import * as React from 'react';

import StatusCard from '../../components/StatusCard';

const Landing: React.FC = () => {
  return (
    <Container>
      <StatusCard
        statusHeader="your status:"
        status="confirmed"
        message="Welcome back Mike!"
        registrationDeadline={new Date()}
        confirmationDeadline={new Date()}
      />
    </Container>
  );
};

export default Landing;
