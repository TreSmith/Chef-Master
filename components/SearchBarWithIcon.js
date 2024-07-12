import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBarWithIcon = () => {
  const [searchInputQuery, setSearchInputQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('Search...');

  const searchChange = (event) => setSearchInputQuery(event.target.value);

  const handleSearchClick = () => {
    alert(`Searching for ${searchInputQuery} `);
    console.log(
      `Search recipes name that matches include ${searchInputQuery} `
    );
  };

  const handleFocus = () => {
    setPlaceholder('');
  };

  const handleBlur = () =>
    !searchInputQuery ? setPlaceholder('Search...') : '';
  return (
    <Form style={{ maxWidth: '500px', margin: '0 auto' }}>
      <InputGroup>
        <FormControl
          placeholder={placeholder}
          className=" mr-sm-3"
          id="searchBar"
          value={searchInputQuery}
          onChange={searchChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <InputGroup.Text>
          <Button variant="outline-secondary" onClick={handleSearchClick}>
            <SearchIcon />
          </Button>
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
};

export default SearchBarWithIcon;
