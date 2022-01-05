import {
  Container,
  Options,
  Option,
  PopoverContainer,
  TriggerButton,
  SearchBox,
  SearcInput,
} from './Filter.styled';
import { FaChevronDown } from 'react-icons/fa';
import { HiOutlineX } from 'react-icons/hi';
import PropTypes from 'prop-types';
export const Filter = ({ isOpen = false, searchable = false, options }) => {
  return (
    <Container>
      <TriggerButton type="button">
        ВЫБРАНО: 0 <FaChevronDown />{' '}
      </TriggerButton>
      {isOpen && (
        <PopoverContainer>
          {searchable && (
            <SearchBox>
              <SearcInput type="text" name="searchbox" />
              <HiOutlineX />
            </SearchBox>
          )}
          <Options>
            {' '}
            {options.map(({ value, label }) => (
              <Option key={value}>
                <input type="checkbox" name="option" value={value} /> {label}
              </Option>
            ))}{' '}
          </Options>
        </PopoverContainer>
      )}
    </Container>
  );
};

Filter.propTypes = {
  isOpen: PropTypes.bool,
  searchable: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
