import { Divider } from 'semantic-ui-react';
import * as React from 'react';

interface StatusCardProps {
  statusHeader: string;
  status: 'incomplete' | 'submitted' | 'admitted' | 'confirmed' | 'declined';
  message: string;
  registrationDeadline: Date;
  confirmationDeadline: Date;
}

const StatusCard: React.FC<StatusCardProps> = props => {
  return (
    <div className="status-card">
      <h1 className={`status-card__header status-card__header--${props.status}`}>Your Status:</h1>
      <div className={`status-card__status status-card__status--${props.status}`}>{props.status}</div>
      <Divider style={{ width: '100%' }} />
      <p className="status-card__message">{props.message}</p>
      <p className="status-card__key">
        Registration Deadline: <span className="status-card__value">{props.registrationDeadline.toUTCString()}</span>
      </p>
      <p className="status-card__key">
        Confirmation Deadline: <span className="status-card__value">{props.confirmationDeadline.toUTCString()}</span>
      </p>
    </div>
  );
};

export default StatusCard;
