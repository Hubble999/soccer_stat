const URL = 'http://api.football-data.org/v2/';

const routes = {
  getTeams: () => [URL, 'teams'].join('/'),
};

export default routes;
