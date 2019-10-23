import { Container } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import * as React from 'react';

import TeamDetailCard from '../../components/TeamDetailCard';
import { teams } from '../../assets/data/teams.json';
import { Team } from '../../models/Team/team';

const Registration: React.FC = props => {
  const { id } = useParams();
  const [team, setTeam] = React.useState<Team.Team | undefined>(undefined);

  const fetchTeam = (id: string) => {
    teams.forEach((team: Team.Team) => {
      if (team.id === id) {
        return setTeam(team);
      }
    });
  };

  React.useEffect(() => {
    fetchTeam(id);
  }, [id]);

  return <Container className="container">{team !== undefined ? <TeamDetailCard team={team} /> : ''}</Container>;
};

export default Registration;
