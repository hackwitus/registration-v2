import * as React from 'react';
import * as _ from 'lodash';
import { Search, SearchResultData, SearchProps } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { handleResultSelect, handleSearchChange } from '../../actions/schoolSearchActions';
import { connect } from 'react-redux';

interface SchoolSearchProps {
  handleResultSelect: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, data: SearchResultData) => void;
  handleSearchChange: (event: React.MouseEvent<HTMLElement, MouseEvent>, data: SearchProps) => void;
  results: Object | Array<any>;
  filteredResults: Object | Array<any>;
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
        className="registration-card__search"
        onResultSelect={handleResultSelect}
        onSearchChange={_.debounce(handleSearchChange, 500, { leading: true })}
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
  value: state.registration.fields.school.result,
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
