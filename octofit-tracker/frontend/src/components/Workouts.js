import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://laughing-acorn-9qq9757x6rgf4v5-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Workouts</h2>
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(workouts) && workouts.length > 0 ? (
              workouts.map(workout => (
                <tr key={workout._id || workout.id}>
                  <td>{workout.name}</td>
                  <td>{workout.description}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="2">No workouts found.</td></tr>
            )}
          </tbody>
        </table>
        <button className="btn btn-primary mt-3" disabled>Add Workout</button>
      </div>
    </div>
  );
}

export default Workouts;
