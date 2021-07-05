import React from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../slices/calendarTeam';
import CalendarForm from './CalendarForm';
import Loader from './ui/Loader';
import Message from './ui/Message';
import Sheet from './ui/Sheet';

function CalendarTeam({ match }) {
  const { id, dateFrom = null, dateTo = null } = match.params;
  const { calendar, loading, error } = useSelector((state) => state.calendarTeamState);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if (dateFrom && dateTo) {
        await dispatch(actions.fetchCalendarTeam({ id, dateFrom, dateTo }));
      }
    })();
  }, [dispatch, dateFrom, dateTo, id]);

  return error ? (
    <Container>
      <CalendarForm id={id} path={'/team'} />
      <Message variant="danger" text={error} />
    </Container>
  ) : !calendar || calendar.length === 0 ? (
    <Container>
      <CalendarForm id={id} path={'/team'} />
      <Message />
    </Container>
  ) : loading === 'pending' ? (
    <Container>
      <CalendarForm id={id} path={'/team'} />
      <Loader />
    </Container>
  ) : (
    <Container>
      <CalendarForm id={id} path={'/team'} />
      <Sheet calendar={calendar} />
    </Container>
  );
}

export default CalendarTeam;
