import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://laughing-acorn-9qq9757x6rgf4v5-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Teams</h2>
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(teams) && teams.length > 0 ? (
              teams.map(team => (
                <tr key={team._id || team.id}>
                  <td>{team.name}</td>
                  <td>
                    {team.members && Array.isArray(team.members)
                      ? team.members.map((member, idx) =>
                          typeof member === 'object' && member.username ? member.username : member
                        ).join(', ')
                      : ''}
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="2">No teams found.</td></tr>
            )}
          </tbody>
        </table>
        <button className="btn btn-primary mt-3" disabled>Create Team</button>
      </div>
    </div>
  );
}

export default Teams;
