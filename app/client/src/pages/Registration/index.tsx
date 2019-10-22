import { Container } from 'semantic-ui-react';
import * as React from 'react';

import RegistrationCard from '../../components/RegistrationCard';

const Registration: React.FC = props => {
  return (
    <Container className="container">
      <RegistrationCard />
    </Container>
  );
};

export default Registration;
