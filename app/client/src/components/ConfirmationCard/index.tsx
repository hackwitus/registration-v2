import { Form } from 'semantic-ui-react';
import * as React from 'react';
import uuid from 'uuid/v4';

const ConfirmationCard: React.FC = props => {
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
          <p className="confirmation-card__disclaimer" style={{ marginBottom: '1rem !important' }}>
            Will you be needing hardware?
          </p>
          <p className="confirmation-card__meta" />
          <Form.Group>
            <Form.Checkbox label="Yes, I would like to use hardware in my hack" />
          </Form.Group>
          <p className="confirmation-card__disclaimer">What kind of hardware would be useful for you?</p>
          <p className="confirmation-card__meta">
            We will have a hardware checkout, and we'll try our best to provide things that would be useful to you -
            however, we can't guarentee everything. We will publish a list of available hardware closer to the day of
            the event.
          </p>
          <Form.Input />
          <h2 className="confirmation-card__subheader" style={{ textAlign: 'center' }}>
            Skills & Accomplishments
          </h2>
          <Form.Input
            fluid
            label="What are you studying?"
            placeholder="Computer Science, Product Design, Basket Weaving..."
          />
          <Form.Input fluid label="GitHub" placeholder="https://github.com/foobar" />
          <Form.Input fluid label="Twitter" placeholder="https://twitter.com/foobar" />
          <Form.TextArea label="What would you like to learn or get out of HackWITus? (optional)" />
          <p className="confirmation-card__disclaimer">Skill Sheet</p>
          <p className="confirmation-card__meta">
            Upload a document outlining any skills or experience you'd like to share (ex. resume). PDF preferred!
          </p>
          <Form.Button primary>Upload</Form.Button>
          <h2 className="confirmation-card__subheader" style={{ textAlign: 'center' }}>
            Legal
          </h2>
          <p className="confirmation-card__disclaimer">Liability Waiver</p>
          <a href="/">Liability Waiver</a>
          <p className="confirmation-card__meta">
            For legal reasons, our university asks that you read and accept the terms of our liability waiver. Again, as
            we mentioned in the original application - you <strong style={{ color: '#000' }}>must</strong> be 18 years
            or older, or a WIT undergraduate by the day of the event or{' '}
            <strong style={{ color: '#000' }}>we will refuse you admission at the door. We will be checking ID.</strong>
          </p>
          <p className="confirmation-card__meta">
            By writing my name below, I affirm that I have read and accepted the terms of the liability waiver above,
            and will be either a WIT undergraduate or 18 years or older at the time of the event.
          </p>
          <Form.Input placeholder="Your Full Legal Name" />

          <p className="confirmation-card__disclaimer">Photo Release</p>
          <a href="/">Photo Release</a>
          <p className="confirmation-card__meta">
            Signing this photo release means if we take photos or photos of you, we can share it with the world.
          </p>
          <p className="confirmation-card__meta">
            By writing my name below, I affirm that I have read and accepted the terms of the photo release above.
          </p>
          <Form.Input placeholder="Your Full Legal Name" />

          <p className="confirmation-card__disclaimer">Code of Conduct</p>
          <a href="/">Hacker Code of Conduct</a>
          <p className="confirmation-card__meta">
            It is extremely important to us that attendees follow a set of guidelines to make the event fun for everyone
            involved. Please read through and make sure you understand what we will be expecting of you.
          </p>
          <p className="confirmation-card__meta">
            By writing my name below, I affirm that I have read and will abide by the code of conduct detailed above.
          </p>
          <Form.Input placeholder="Your Full Legal Name" />
          <h2 className="confirmation-card__subheader" style={{ textAlign: 'center' }}>
            Everything Else
          </h2>
          <p className="confirmation-card__disclaimer">Additional Notes</p>
          <p className="confirmation-card__meta">If there's anything else you need to let us know, tell us here!</p>
          <Form.TextArea />
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
