import * as React from 'react';
import RegistrationCard from '../../components/RegistrationCard';
import { Container } from 'semantic-ui-react';

const Registration: React.FC = props => {
  return (
    <Container>
      <RegistrationCard />
    </Container>
  );
};

export default Registration;
