import { Container, Grid } from 'semantic-ui-react';
import * as React from 'react';

import TeamsCard from '../../components/TeamCard';
import { teams } from '../../assets/data/teams.json';
import { Team } from '../../models/Team/team';

const Registration: React.FC = props => {
  const renderTeams = () => {
    return teams.map((team: Team.Team) => {
      return (
        <Grid.Column key={team.id}>
          <TeamsCard team={team} />
        </Grid.Column>
      );
    });
  };

  return (
    <Container className="container">
      <Grid columns={3}>
        <>{renderTeams()}</>
      </Grid>
    </Container>
  );
};

export default Registration;
