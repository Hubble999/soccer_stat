import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { actions } from '../slices/teams';
import CardLogo from './ui/CardLogo';
import Loader from './ui/Loader';
import Message from './ui/Message';

const Teams = ({ match }) => {
  const { keyword } = match.params;
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { teams, loading, error } = useSelector((state) => state.teamsState);

  useEffect(() => {
    (async () => {
      if (keyword) {
        await dispatch(actions.fetchTeams());
        await dispatch(actions.searchTeam({ keyword }));
      } else {
        await dispatch(actions.fetchTeams());
      }
    })();
  }, [dispatch, keyword]);

  return error ? (
    <Message variant="danger" text={error} />
  ) : loading === 'pending' ? (
    <Loader />
  ) : (
    teams && (
      <>
        <Container className="container-flex">
          {teams.map(({ shortName, venue, founded, website, crestUrl, clubColors, id }) => {
            return (
              <CardLogo name={shortName} logoUrl={crestUrl} id={id} pathname={'/team'} key={id} />
            );
          })}
        </Container>
      </>
    )
  );
};

export default Teams;
