import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../../Context/GlobalContext';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Details () {

  const { id } = useContext(Context);
  const [ artist, setArtist ] = useState({});
  const [ tracklist, setTrackList ] = useState({});

  useEffect(()=> {
    fetch(`https://api.deezer.com/artist/${id}`, {
      "method": "GET"
    })
    .then(response => response.json())
    .then(response => { setArtist(response); })
    .catch(error => { console.error(error); })
  }, [])

  console.log(artist)

  useEffect(()=> {
    fetch(`${artist.tracklist}`, {
      "method": "GET"
    })
    .then(response => response.json())
    .then(response => setTrackList(response))
    .catch(error => console.error(error))
  }, [artist])

  const { data } = tracklist;
  if (data) console.log(data.slice(0, 5))

  return (
    <Container>
      <div className="heading mt-2 mb-4">{artist.name}'s Details</div>
      <Row className="justify-content-md-center artist-wrapper">
        <Col xs={12} sm={7}>
          <div className="details">
            <div className="artist-details mr-3">
              <span style={{color: '#C5C6C7', fontWeight: 'bold', fontSize: 'large'}} className="mb-3"><em>{artist.name}</em></span>
              <span style={{color: '#C5C6C7', fontWeight: 'light', fontSize: 'large'}} className="mb-3">
                {artist.nb_fan} <em>fans</em>
              </span>
              <span style={{color: '#C5C6C7', fontWeight: 'light', fontSize: 'large'}}>
                {`${artist.name} has ${artist.nb_album} albums`}
              </span>
            </div>
            <div>
              <img 
                src = { artist.picture}
                alt=""
                style={{height: '30vh', width: '25vh', border: 'hidden', borderRadius: '10px'}}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} sm={5}>
          <div className="top-tracks">
            Top Tracks
          </div>
          <ListGroup variant="flush">
            {
              (data) && data.slice(0, 5).map((song, index)=> (
                <ListGroup.Item key={ index }>
                  <div className="artist-title">
                    <span style={{fontWeight: 'bold'}}>{index + 1}</span>
                    <span>{song.title}</span>
                    <span>{`${Math.floor( song.duration/60 )}:${(song.duration % 60)}`}</span>
                  </div>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </Col>
      </Row>
      <Link to="/">
        <Button 
        variant="outline-primary"
        type="button"
        className="mt-3"
        >
          Back to Home
        </Button>
      </Link>
    </Container>
  );
}

export default Details;