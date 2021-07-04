import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { actions } from '../slices/tournaments';
import CardLogo from './ui/CardLogo';
import Loader from './ui/Loader';
import Message from './ui/Message';

function Tournaments({ match }) {
  const { keyword } = match.params;
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { tournaments, loading, error } = useSelector((state) => state.tournamentsState);
  useEffect(() => {
    (async () => {
      if (keyword) {
        await dispatch(actions.fetchTournaments());
        await dispatch(actions.searchTournaments({ keyword }));
      } else {
        await dispatch(actions.fetchTournaments());
      }
    })();
  }, [dispatch, keyword]);

  return error ? (
    <Message variant="danger" text={error} />
  ) : loading === 'pending' ? (
    <Loader />
  ) : (
    tournaments && (
      <>
        <Container className="container-flex">
          {tournaments.map(({ name, emblemUrl, area, id }) => {
            const logoUrl = emblemUrl || area.ensignUrl || '../img/defaultLogo.png';
            return <CardLogo logoUrl={logoUrl} name={name} pathname={pathname} id={id} key={id} />;
          })}
        </Container>
      </>
    )
  );
}

export default Tournaments;
