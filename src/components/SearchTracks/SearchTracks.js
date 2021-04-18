import React, {useContext} from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { Context } from '../../Context/GlobalContext';

function SearchTracks () {

  const { search, setSearch, setTrackName } = useContext(Context);

  const handleSearchTrack = (e) => {
    e.preventDefault();
    setTrackName(search);
    setSearch('');
  };

  return (
    <>
      <div className="mt-2 mb-5 heading">
        Deezer Music Search
      </div>
      <Form onSubmit = {handleSearchTrack} className="form mb-4">
        <Form.Row>
          <Col>
            <Form.Control 
                type="text"
                placeholder="Search for your favourite tracks here..."
                value = { search }
                onChange = { (e)=> setSearch(e.target.value)}
            />
          </Col>
          <Col>
            <Button
              variant="outline-primary"
              type="submit"
             >
              Search
              </Button>
          </Col>
        </Form.Row>
      </Form>
    </>
  );
}

export default SearchTracks;