import { Form, InputOnChangeData, DropdownProps, CheckboxProps, Transition } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import {
  handleInputChange,
  handleDropdownChange,
  handleCheckboxChange,
  handleFoodRestrictionChange,
} from '../../actions/confirmationActions';
import { shirt_sizes } from '../../models/Confirmation/initialState';
import { Confirmation } from '../../models/Confirmation/confirmation';

interface ConfirmationProps {
  fields: Confirmation.Fields;
  handleInputChange: (_: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void;
  handleDropdownChange: (_: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void;
  handleCheckboxChange: (_: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => void;
  handleFoodRestrictionChange: (_: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => void;
}

const ConfirmationCard: React.FC<ConfirmationProps> = ({
  fields,
  handleInputChange,
  handleDropdownChange,
  handleCheckboxChange,
  handleFoodRestrictionChange,
}) => {
  return (
    <div className="confirmation-card">
      <h1 className="confirmation-card__header">Confirmation</h1>
      <h2 className="confirmation-card__subheader">Basic Details</h2>
      <div className="confirmation-card__form-container">
        <Form>
          <p className="confirmation-card__disclaimer">What's your phone number?</p>
          <p className="confirmation-card__meta">We need this in case we need to get ahold of you.</p>
          <Form.Input
            fluid
            placeholder="Phone Number"
            name="phone_number"
            value={fields.phone_number.value}
            onChange={handleInputChange}
          />
          <p className="confirmation-card__disclaimer">Dietary Restrictions</p>
          <p className="confirmation-card__meta">
            If your restriction is not included here, please let us know in the additional notes at the bottom. We'll
            make sure you get fed :)
          </p>
          <Form.Group>
            <Form.Checkbox
              label="Vegetarian"
              name="vegetarian"
              checked={fields.dietary_restrictions.vegetarian}
              onChange={handleFoodRestrictionChange}
            />
            <Form.Checkbox
              label="Vegan"
              name="vegan"
              checked={fields.dietary_restrictions.vegan}
              onChange={handleFoodRestrictionChange}
            />
            <Form.Checkbox
              label="Halal"
              name="halal"
              checked={fields.dietary_restrictions.halal}
              onChange={handleFoodRestrictionChange}
            />
            <Form.Checkbox
              label="Kosher"
              name="kosher"
              checked={fields.dietary_restrictions.kosher}
              onChange={handleFoodRestrictionChange}
            />
            <Form.Checkbox
              label="Nut Allergy"
              name="nut_allergy"
              checked={fields.dietary_restrictions.nut_allergy}
              onChange={handleFoodRestrictionChange}
            />
          </Form.Group>
          <p className="confirmation-card__disclaimer">Shirt Size</p>
          <p className="confirmation-card__meta">Let's get you some swag!</p>
          <Form.Dropdown
            placeholder="Shirt Size"
            fluid
            selection
            options={shirt_sizes}
            name="shirt_size"
            value={fields.shirt_size.value}
            onChange={handleDropdownChange}
          />
          <p className="confirmation-card__disclaimer" style={{ marginBottom: '1rem !important' }}>
            Will you be needing hardware?
          </p>
          <p className="confirmation-card__meta" />
          <Form.Group>
            <Form.Checkbox
              label="Yes, I would like to use hardware in my hack"
              name="needs_hardware"
              checked={fields.needs_hardware.value}
              onChange={handleCheckboxChange}
            />
          </Form.Group>
          <Transition animation="drop" visible={fields.needs_hardware.value} duration={500}>
            <p className="confirmation-card__disclaimer">What kind of hardware would be useful for you?</p>
          </Transition>
          <Transition animation="drop" visible={fields.needs_hardware.value} duration={500}>
            <p className="confirmation-card__meta">
              We will have a hardware checkout, and we'll try our best to provide things that would be useful to you -
              however, we can't guarentee everything. We will publish a list of available hardware closer to the day of
              the event.
            </p>
          </Transition>
          <Transition animation="drop" visible={fields.needs_hardware.value} duration={500}>
            <Form.Input name="hardware_needed" value={fields.hardware_needed.value} onChange={handleInputChange} />
          </Transition>
          <h2 className="confirmation-card__subheader" style={{ textAlign: 'center' }}>
            Skills &amp; Accomplishments
          </h2>
          <Form.Input
            fluid
            label="What are you studying?"
            placeholder="Computer Science, Product Design, Basket Weaving..."
            name="major"
            value={fields.major.value}
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            label="GitHub"
            placeholder="https://github.com/foobar"
            name="github"
            value={fields.github.value}
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            label="Twitter"
            placeholder="https://twitter.com/foobar"
            name="twitter"
            value={fields.twitter.value}
            onChange={handleInputChange}
          />
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
          <Form.Input
            placeholder="Your Full Legal Name"
            name="liability_signature"
            value={fields.liability_signature.value}
            onChange={handleInputChange}
          />

          <p className="confirmation-card__disclaimer">Photo Release</p>
          <a href="/">Photo Release</a>
          <p className="confirmation-card__meta">
            Signing this photo release means if we take photos or photos of you, we can share it with the world.
          </p>
          <p className="confirmation-card__meta">
            By writing my name below, I affirm that I have read and accepted the terms of the photo release above.
          </p>
          <Form.Input
            placeholder="Your Full Legal Name"
            name="photo_signature"
            value={fields.photo_signature.value}
            onChange={handleInputChange}
          />

          <p className="confirmation-card__disclaimer">Code of Conduct</p>
          <a href="/">Hacker Code of Conduct</a>
          <p className="confirmation-card__meta">
            It is extremely important to us that attendees follow a set of guidelines to make the event fun for everyone
            involved. Please read through and make sure you understand what we will be expecting of you.
          </p>
          <p className="confirmation-card__meta">
            By writing my name below, I affirm that I have read and will abide by the code of conduct detailed above.
          </p>
          <Form.Input
            placeholder="Your Full Legal Name"
            name="coc_signature"
            value={fields.coc_signature.value}
            onChange={handleInputChange}
          />
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

const mapStateToProps = (state: any) => ({
  fields: state.confirmation.fields,
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      handleInputChange,
      handleDropdownChange,
      handleCheckboxChange,
      handleFoodRestrictionChange,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationCard);
