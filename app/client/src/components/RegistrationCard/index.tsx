import { Form, InputOnChangeData, DropdownProps, TextAreaProps, CheckboxProps } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import {
  handleInputChange,
  handleDropdownChange,
  handleTextAreaChange,
  handleCheckboxChange,
  initializeFromAuth,
} from '../../actions/registrationActions';
import SchoolInput from '../SchoolInput';
import { Registration } from '../../models/Registration/registration';

interface RegistrationProps {
  handleDropdownChange: (_: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void;
  handleInputChange: (_: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void;
  handleTextAreaChange: (_: React.FormEvent<HTMLTextAreaElement>, data: TextAreaProps) => void;
  handleCheckboxChange: (_: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => void;
  initializeFromAuth: (field: string, value: string) => void;
  user: any;
  fields: Registration.Fields;
}

const RegistrationCard: React.FC<RegistrationProps> = ({
  fields,
  handleInputChange,
  handleDropdownChange,
  handleTextAreaChange,
  handleCheckboxChange,
  initializeFromAuth,
  user,
}) => {
  React.useEffect(() => {
    if (user && user.email && user.email !== fields.email) {
      initializeFromAuth('email', user.email);
    }
    // eslint-disable-next-line
  }, [user]);
  return (
    <div className="registration-card">
      <h1 className="registration-card__header">Application</h1>
      <h2 className="registration-card__subheader">Basic Information</h2>
      <div className="registration-card__form-container">
        <Form>
          <Form.Input
            onChange={handleInputChange}
            value={fields.email.value}
            placeholder="Email"
            label="Email"
            name="email"
            required
          />

          <Form.Group widths="equal">
            <Form.Input
              fluid
              value={fields.first_name.value}
              onChange={handleInputChange}
              placeholder="First Name"
              label="First Name"
              name="first_name"
              required
            />

            <Form.Input
              value={fields.last_name.value}
              onChange={handleInputChange}
              placeholder="Last Name"
              label="Last Name"
              name="last_name"
              required
              fluid
            />
          </Form.Group>

          <SchoolInput />

          <Form.Dropdown
            options={fields.graduation_year.options}
            value={fields.graduation_year.value}
            onChange={handleDropdownChange}
            label="Graduation Year"
            name="graduation_year"
            selection
            required
            fluid
          />

          <Form.Dropdown
            onChange={handleDropdownChange}
            options={fields.gender.options}
            value={fields.gender.value}
            label="Gender"
            name="gender"
            selection
            required
            fluid
          />

          <Form.Input
            placeholder="Designer, Data Scientist, iOS Wizard, Hacker Extrordinare..."
            label="I would describe myself as..."
            value={fields.description.value}
            onChange={handleInputChange}
            name="description"
            required
            fluid
          />

          <Form.TextArea
            label="What would you like to learn or get out of HackWITus? (optional)"
            value={fields.learning_goals.value}
            onChange={handleTextAreaChange}
            name="learning_goals"
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
            onChange={handleCheckboxChange}
            checked={fields.is_adult.value}
            label="I am 18 or older"
            name="is_adult"
            required
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
  user: state.user.profile,
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      handleInputChange,
      handleDropdownChange,
      handleTextAreaChange,
      handleCheckboxChange,
      initializeFromAuth,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationCard);
