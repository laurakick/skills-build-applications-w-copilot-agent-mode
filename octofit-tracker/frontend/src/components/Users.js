import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://laughing-acorn-9qq9757x6rgf4v5-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Users</h2>
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.length > 0 ? (
              users.map(user => (
                <tr key={user._id || user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="2">No users found.</td></tr>
            )}
          </tbody>
        </table>
        <button className="btn btn-primary mt-3" disabled>Add User</button>
      </div>
    </div>
  );
}

export default Users;
