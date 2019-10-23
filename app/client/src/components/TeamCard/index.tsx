import * as React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import { Team } from '../../models/Team/team';

interface TeamCardProps {
  team: Team.Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team: { id, team_name, accepting_members, project, bio } }) => {
  return (
    <Link className="team-card" to={`/teams/${id}`}>
      <h1 className="team-card__header">{team_name}</h1>
      <div className={`team-card__status team-card__status--${accepting_members ? 'accepting' : 'not-accepting'}`}>
        {accepting_members ? 'Recruiting' : 'Not Recruiting'}
      </div>
      <h2 className="team-card__subheader" style={{ textAlign: 'center' }}>
        {project}
      </h2>
      <Divider style={{ width: '100%' }} />
      <div className="team-card__bio team-card__bio--truncated">{bio}</div>
    </Link>
  );
};

export default TeamCard;
