import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormControl, Button } from 'react-bootstrap';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const history = useHistory();
  const { pathname } = history.location;

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/${pathname.split('/')[1]}/search/${keyword}`);
    } else {
      history.push('/');
    }
    setKeyword('');
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <FormControl
        onChange={(e) => setKeyword(e.target.value)}
        type="text"
        placeholder="search"
        className="mr-sm-2"
        value={keyword}
      />
      <Button type="submit" variant="outline-success">
        Search
      </Button>
    </Form>
  );
};

export default Search;
