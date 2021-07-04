import React from 'react';
import { Table } from 'react-bootstrap';

function Sheet({ calendar }) {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Home</th>
          <th>Score</th>
          <th>Away</th>
        </tr>
      </thead>
      <tbody>
        {calendar.map(({ awayTeam, homeTeam, score, id }) => {
          return (
            <tr className="1shadow-sm p-3 mb-5 bg-body rounded" key={id}>
              <td className="align-middle">{homeTeam.name}</td>
              <td className="align-middle">
                {score.fullTime.homeTeam} : {score.fullTime.awayTeam}
              </td>
              <td className="align-middle">{awayTeam.name}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Sheet;
