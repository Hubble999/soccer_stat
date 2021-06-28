import React from 'react';
import { Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../slices/teams';
import { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import Search from '../components/Search';

const Teams = ({ match }) => {
  const { keyword } = match.params;
  /*   useEffect(() => {
    const fetchData = async () => {
      //http://api.football-data.org/v2/areas/2077 GET EUR
      //http://api.football-data.org/v2/competitions/2004 get league
      //http://api.football-data.org/v2/competitions?plan=TIER_ONE
      
      //http://api.football-data.org/v2/competitions/2017/teams GET Team   for list Teams
      //http://api.football-data.org/v2/competitions?areas=2077 GET EUR Leagues  for list Leagues

      const res = await fetch('http://api.football-data.org/v2/teams', {
        headers: {
          'X-Auth-Token': '101874d9e3f24b4b895c986de6b61257'
        }
      });
      const { teams } = await res.json();
      console.log(teams);
    };
    fetchData();
  }, []); */
  const dispatch = useDispatch();
  const { teams, loading, error } = useSelector((state) => state.teamsState);

  useEffect(() => {
    (async () => {
      if (keyword) {
        await dispatch(actions.fetchTeams());
        dispatch(actions.searchTeam({ keyword }));
      } else {
        dispatch(actions.fetchTeams());
      }
    })();
  }, [dispatch, keyword]);

  return (
    teams && (
      <>
        <Route
          render={({ history }) => <Search history={history} searchTeam={actions.searchTeam} />}
        />
        <Table bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Founded</th>
              <th>Home Stadium</th>
              <th>Club Colors</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(({ name, venue, founded, website, crestUrl, clubColors, id }) => {
              return (
                <tr className="1shadow-sm p-3 mb-5 bg-body rounded" key={name}>
                  <td>
                    <img src={crestUrl} alt="information about footbal club" />
                  </td>
                  <td className="align-middle">{name}</td>
                  <td className="align-middle">{founded}</td>
                  <td className="align-middle">{venue}</td>
                  <td className="align-middle">{clubColors}</td>
                  <td className="align-middle">
                    <a href={website}>{website}</a>
                  </td>
                  <td className="align-middle">
                    <Link to={`/team/${id}`}>
                      <Button variant="link">Show Calendar</Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </>
    )
  );
};

export default Teams;
