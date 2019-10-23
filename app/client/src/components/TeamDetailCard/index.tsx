import * as React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

import { Team } from '../../models/Team/team';

interface TeamDetailCardProps {
  team: Team.Team;
}

const TeamDetailCard: React.FC<TeamDetailCardProps> = ({
  team: { id, team_name, accepting_members, project, bio },
}) => {
  return (
    <div className="team-detail-card">
      <Link to="/teams" className="team-detail-card__link">
        <i className="fas fa-arrow-left" />
      </Link>
      <h1 className="team-detail-card__header">{team_name}</h1>
      <div
        className={`team-detail-card__status team-detail-card__status--${
          accepting_members ? 'accepting' : 'not-accepting'
        }`}
      >
        {accepting_members ? 'Recruiting' : 'Not Recruiting'}
      </div>
      <h2 className="team-detail-card__subheader" style={{ textAlign: 'center' }}>
        {project}
      </h2>
      <Divider style={{ width: '100%' }} />
      <div className="team-detail-card__bio team-detail-card__bio--truncated">{bio}</div>
    </div>
  );
};

export default TeamDetailCard;
