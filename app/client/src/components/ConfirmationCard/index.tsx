import { Form } from 'semantic-ui-react';
import * as React from 'react';
import uuid from 'uuid/v4';

import schoolData from '../../assets/data/schools.json';

const ConfirmationCard: React.FC = props => {
  const parseSchools = () => {
    let schools: any = [];
    schoolData.schools.map(school => {
      return schools.push({ key: uuid(), text: school, value: school });
    });
    return schools;
  };

  const shirt_sizes = [
    { key: uuid(), text: 'Unisex X-Small', value: 'unisex_x_small' },
    { key: uuid(), text: 'Unisex Small', value: 'unisex_small' },
    { key: uuid(), text: 'Unisex Medium', value: 'unisex_medium' },
    { key: uuid(), text: 'Unisex Large', value: 'unisex_large' },
    { key: uuid(), text: 'Unisex X-Large', value: 'unisex_x_large' },
    { key: uuid(), text: 'Unisex XX-Large', value: 'unisex_xx_large' },
    { key: uuid(), text: "Women's X-Small", value: 'womens_x_small' },
    { key: uuid(), text: "Women's Small", value: 'womens_small' },
    { key: uuid(), text: "Women's Medium", value: 'womens_medium' },
    { key: uuid(), text: "Women's Large", value: 'womens_large' },
    { key: uuid(), text: "Women's X-Large", value: 'womens_x_large' },
    { key: uuid(), text: "Women's XX-Large", value: 'womens_xx_large' },
  ];

  const genders = [
    { key: uuid(), text: 'Male', value: 'male' },
    { key: uuid(), text: 'Female', value: 'female' },
    { key: uuid(), text: 'Other', value: 'other' },
    { key: uuid(), text: 'Prefer Not To Specify', value: 'prefer_not_to_specify' },
  ];

  return (
    <div className="confirmation-card">
      <h1 className="confirmation-card__header">Confirmation</h1>
      <h2 className="confirmation-card__subheader">Basic Details</h2>
      <div className="confirmation-card__form-container">
        <Form>
          <p className="confirmation-card__disclaimer">What's your phone number?</p>
          <p className="confirmation-card__meta">We need this in case we need to get ahold of you.</p>
          <Form.Input fluid placeholder="Phone Number" />
          <p className="confirmation-card__disclaimer">Dietary Restrictions</p>
          <p className="confirmation-card__meta">
            If your restriction is not included here, please let us know in the additional notes at the bottom. We'll
            make sure you get fed :)
          </p>
          <Form.Group>
            <Form.Checkbox label="Vegetarian" />
            <Form.Checkbox label="Vegan" />
            <Form.Checkbox label="Halal" />
            <Form.Checkbox label="Kosher" />
            <Form.Checkbox label="Nut Allergy" />
          </Form.Group>
          <p className="confirmation-card__disclaimer">Shirt Size</p>
          <p className="confirmation-card__meta">Let's get you some swag!</p>
          <Form.Dropdown placeholder="Shirt Size" fluid selection options={shirt_sizes} />
          <Form.Dropdown label="School" fluid search selection options={parseSchools()} />
          <Form.Dropdown label="Gender" fluid selection options={genders} />
          <Form.Input
            fluid
            label="I would describe myself as..."
            placeholder="Designer, Data Scientist, iOS Wizard, Hacker Extrordinare..."
          />
          <Form.TextArea label="What would you like to learn or get out of HackWITus? (optional)" />
          <p className="confirmation-card__meta">
            Because of limitations imposed by WIT, we are not legally allowed to host non-WIT minors (those under 18)
            for HackWITus. Checking the box below affirms that you are or will be 18 years or older by the day of the
            event.
          </p>
          <p className="confirmation-card__disclaimer">
            We will be checking ID. If you are a non-WIT minor, you will be turned away at the door.
          </p>
          <Form.Checkbox label="I am 18 or older" />
          <Form.Group style={{ marginTop: '2rem' }}>
            <Form.Button>Clear</Form.Button>
            <Form.Button primary type="submit">
              Submit
            </Form.Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default ConfirmationCard;
