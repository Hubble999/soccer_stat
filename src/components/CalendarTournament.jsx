import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { actions } from '../slices/calendarTournament';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CalendarForm from './CalendarForm';
import Sheet from './ui/Sheet';
import Message from './ui/Message';
import Loader from './ui/Loader';

function CalendarTournament({ match }) {
  const { id, dateFrom = null, dateTo = null } = match.params;
  const { calendar, loading, error } = useSelector((state) => state.calendarTournamentState);
  const dispatch = useDispatch();
  useEffect(() => {
    if (dateFrom && dateTo) {
      dispatch(actions.fetchCalendarTournament({ id, dateFrom, dateTo }));
    }
  }, [dispatch, dateFrom, dateTo, id]);

  return error ? (
    <Container>
      <CalendarForm id={id} path={'/tournament'} />
      <Message variant="danger" text={error} />
    </Container>
  ) : !calendar || calendar.length === 0 ? (
    <Container>
      <CalendarForm id={id} path={'/tournament'} />
      <Message />
    </Container>
  ) : loading === 'pending' ? (
    <Container>
      <CalendarForm id={id} path={'/tournament'} />
      <Loader />
    </Container>
  ) : (
    <Container>
      <CalendarForm id={id} path={'/tournament'} />
      <Sheet calendar={calendar} />
    </Container>
  );
}

export default CalendarTournament;
