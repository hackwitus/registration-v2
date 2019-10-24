import { Form, InputOnChangeData, DropdownProps, TextAreaProps, CheckboxProps } from 'semantic-ui-react';
import * as React from 'react';

import { Registration } from '../../models/Registration/registration';
import SchoolInput from '../SchoolInput';
import { bindActionCreators } from 'redux';
import {
  handleInputChange,
  handleDropdownChange,
  handleTextAreaChange,
  handleCheckboxChange,
} from '../../actions/registrationActions';
import { connect } from 'react-redux';

interface RegistrationProps {
  fields: Registration.Fields;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void;
  handleDropdownChange: (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void;
  handleTextAreaChange: (event: React.FormEvent<HTMLTextAreaElement>, data: TextAreaProps) => void;
  handleCheckboxChange: (event: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => void;
}

const RegistrationCard: React.FC<RegistrationProps> = ({
  fields,
  handleInputChange,
  handleDropdownChange,
  handleTextAreaChange,
  handleCheckboxChange,
}) => {
  return (
    <div className="registration-card">
      <h1 className="registration-card__header">Application</h1>
      <h2 className="registration-card__subheader">Basic Information</h2>
      <div className="registration-card__form-container">
        <Form>
          <Form.Input
            placeholder="Email"
            label="Email"
            name="email"
            required
            onChange={handleInputChange}
            value={fields.email.value}
          />

          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="First Name"
              placeholder="First Name"
              name="first_name"
              required
              onChange={handleInputChange}
              value={fields.first_name.value}
            />

            <Form.Input
              fluid
              label="Last Name"
              placeholder="Last Name"
              name="last_name"
              required
              onChange={handleInputChange}
              value={fields.last_name.value}
            />
          </Form.Group>

          <SchoolInput />

          <Form.Dropdown
            label="Graduation Year"
            fluid
            selection
            required
            name="graduation_year"
            options={fields.graduation_year.options}
            onChange={handleDropdownChange}
            value={fields.graduation_year.value}
          />

          <Form.Dropdown
            label="Gender"
            fluid
            selection
            options={fields.gender.options}
            required
            name="gender"
            value={fields.gender.value}
            onChange={handleDropdownChange}
          />

          <Form.Input
            fluid
            label="I would describe myself as..."
            placeholder="Designer, Data Scientist, iOS Wizard, Hacker Extrordinare..."
            required
            name="description"
            value={fields.description.value}
            onChange={handleInputChange}
          />

          <Form.TextArea
            label="What would you like to learn or get out of HackWITus? (optional)"
            name="learning_goals"
            onChange={handleTextAreaChange}
            value={fields.learning_goals.value}
          />

          <p className="registration-card__meta">
            Because of limitations imposed by WIT, we are not legally allowed to host non-WIT minors (those under 18)
            for HackWITus. Checking the box below affirms that you are or will be 18 years or older by the day of the
            event.
          </p>
          <p className="registration-card__disclaimer">
            We will be checking ID. If you are a non-WIT minor, you will be turned away at the door.
          </p>
          <Form.Checkbox
            label="I am 18 or older"
            required
            name="is_adult"
            onChange={handleCheckboxChange}
            checked={fields.is_adult.value}
          />

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
  fields: state.registration.fields,
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      handleInputChange,
      handleDropdownChange,
      handleTextAreaChange,
      handleCheckboxChange,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationCard);
