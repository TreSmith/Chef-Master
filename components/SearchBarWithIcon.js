import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBarWithIcon = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const [placeholder, setPlaceholder] = useState('Search...');
  const [focused, setFocused] = useState(false);

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(searchInput);
    }
  };

  return (
    <Form style={{ maxWidth: '500px', margin: '0 auto' }} action="/recipe">
      <InputGroup>
        <FormControl
          placeholder={placeholder}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          name="q"
        />
        <InputGroup.Text>
          <Button
            variant="outline-secondary"
            onClick={handleSearchClick}
            type="submit"
          >
            <SearchIcon />
          </Button>
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
};

export default SearchBarWithIcon;
