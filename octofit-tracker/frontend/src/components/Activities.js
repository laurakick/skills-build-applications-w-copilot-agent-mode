import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://laughing-acorn-9qq9757x6rgf4v5-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Activities</h2>
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>User</th>
              <th>Activity Type</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(activities) && activities.length > 0 ? (
              activities.map(activity => (
                <tr key={activity._id || activity.id}>
                  <td>{activity.user}</td>
                  <td>{activity.activity_type}</td>
                  <td>{activity.duration}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="3">No activities found.</td></tr>
            )}
          </tbody>
        </table>
        {/* 預留新增活動按鈕與 modal */}
        <button className="btn btn-primary mt-3" disabled>Add Activity (Coming Soon)</button>
      </div>
    </div>
  );
}

export default Activities;
