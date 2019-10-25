import { Search, SearchResultData, SearchProps } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import * as _ from 'lodash';

import { handleResultSelect, handleSearchChange } from '../../actions/schoolSearchActions';

interface SchoolSearchProps {
  handleResultSelect: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, data: SearchResultData) => void;
  handleSearchChange: (event: React.MouseEvent<HTMLElement, MouseEvent>, data: SearchProps) => void;
  filteredResults: Object | Array<any>;
  results: Object | Array<any>;
  value: string;
}

const SchoolInput: React.FC<SchoolSearchProps> = ({
  handleResultSelect,
  handleSearchChange,
  filteredResults,
  value,
}) => {
  return (
    <div className="registration-card__search-container">
      <p className="registration-card__disclaimer required" style={{ marginBottom: '0.5rem' }}>
        School
      </p>
      <Search
        onSearchChange={_.debounce(handleSearchChange, 500, { leading: true })}
        className="registration-card__search"
        onResultSelect={handleResultSelect}
        results={filteredResults}
        value={value}
        name="school"
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  results: state.registration.fields.school.results,
  filteredResults: state.registration.fields.school.filteredResults,
  value: state.registration.fields.school.value,
});

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      handleResultSelect,
      handleSearchChange,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchoolInput);
