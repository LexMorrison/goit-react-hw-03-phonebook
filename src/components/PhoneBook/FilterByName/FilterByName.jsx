import PropTypes from 'prop-types';
import { NamesFilterLabel, NamesFilterInput } from './FilterByName.styled';
export const Filter = ({ value, selected }) => {
  return (
    <div>
      <NamesFilterLabel>
        Find contacts by name
        <NamesFilterInput type="text" value={value} onChange={selected} />
      </NamesFilterLabel>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  selected: PropTypes.func.isRequired,
};
