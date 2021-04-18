import React, { useContext } from 'react';
import { Context } from '../../Context/GlobalContext';
import { Row, Col, Container, ListGroup } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

function Display() {

  const { tracks, setId } = useContext(Context);
  const { data } = tracks;

  return (
    <Container>
      <Row className="justify-content-md-center">
        {
        (data) && data.map(( item, index ) => {
          return (
            <Col key={index} xs={12} sm={4}>
              <Container>
                <Row className="mb-5">
                  <Col className="artist-wrapper">
                  <div className="image-wrapper">
                    <img 
                    src={ item.artist.picture }
                    alt=""
                    style={{height: '30vh', width: '25vh', border: 'hidden', borderRadius: '10px'}}
                    className="mb-2"
                  />
                  </div>
                  <div className="artist-title">
                    <span>{item.title}</span>
                    <span>{`${Math.floor( item.duration/60 )}:${(item.duration % 60)}`}</span>
                  </div>
                  <ListGroup variant="flush">
                    <ListGroup.Item
                      onClick = { () => setId(item.artist.id) }
                    >
                      <Link to="/details" className="link">
                      <div>
                        By <em>{item.artist.name}</em>
                      </div>
                      </Link>
                    </ListGroup.Item>
                  </ListGroup>
                  <div style={{color: '#C5C6C7', fontSize: 'large', fontWeight: 'lighter'}}>
                    {item.album.title}
                  </div> 
                  </Col>
                </Row>
              </Container>
            </Col>
          )
        })
      }
      </Row>
    </Container>
  )
}

export default Display;