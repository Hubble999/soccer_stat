import { API_URL } from './configs';

const routes = {
  getTeams: () => [API_URL, 'teams'].join('/'),
  getCalendarTeam: (id, from, to) =>
    [API_URL, 'teams', id, `matches?dateFrom=${from}&dateTo=${to}`].join('/'),
  getTournaments: () => [API_URL, 'competitions?plan=TIER_ONE'].join('/'),
  getCalendarTournament: (id, from, to) =>
    [API_URL, 'competitions', id, `matches?dateFrom=${from}&dateTo=${to}`].join('/')
};
export default routes;
