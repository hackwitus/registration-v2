import * as React from 'react';
import { Form } from 'semantic-ui-react';
import uuid from 'uuid/v4';
import schoolData from '../../assets/data/schools.json';

const RegistrationCard: React.FC = props => {
  const parseSchools = () => {
    let schools: any = [];
    schoolData.schools.map(school => {
      return schools.push({ key: uuid(), text: school, value: school });
    });
    return schools;
  };
  const schools = parseSchools();
  const graduationYears = [
    { key: uuid(), text: '2019', value: '2019' },
    { key: uuid(), text: '2020', value: '2020' },
    { key: uuid(), text: '2021', value: '2021' },
    { key: uuid(), text: '2022', value: '2022' },
    { key: uuid(), text: '2023', value: '2023' },
  ];
  const genders = [
    { key: uuid(), text: 'Male', value: 'male' },
    { key: uuid(), text: 'Female', value: 'female' },
    { key: uuid(), text: 'Other', value: 'other' },
    { key: uuid(), text: 'Prefer Not To Specify', value: 'prefer_not_to_specify' },
  ];
  return (
    <div className="registration-card">
      <h1 className="registration-card__header">Application</h1>
      <h2 className="registration-card__subheader">Basic Information</h2>
      <div className="registration-card__form-container">
        <Form>
          <Form.Input fluid label="Email" placeholder="Email" />
          <Form.Group widths="equal">
            <Form.Input fluid label="First Name" placeholder="First Name" />
            <Form.Input fluid label="Last Name" placeholder="Last Name" />
          </Form.Group>
          <Form.Dropdown label="School" fluid search selection options={schools} />
          <Form.Dropdown label="Graduation Year" fluid selection options={graduationYears} />
          <Form.Dropdown label="Gender" fluid selection options={genders} />
          <Form.Input
            fluid
            label="I would describe myself as..."
            placeholder="Designer, Data Scientist, iOS Wizard, Hacker Extrordinare..."
          />
          <Form.TextArea fluid label="What would you like to learn or get out of HackWITus? (optional)" />
          <p className="registration-card__meta">
            Because of limitations imposed by WIT, we are not legally allowed to host non-WIT minors (those under 18)
            for HackWITus. Checking the box below affirms that you are or will be 18 years or older by the day of the
            event.
          </p>
          <p className="registration-card__disclaimer">
            We will be checking ID. If you are a non-WIT minor, you will be turned away at the door.
          </p>
          <Form.Checkbox label="I am 18 or older" />
        </Form>
      </div>
    </div>
  );
};

export default RegistrationCard;
