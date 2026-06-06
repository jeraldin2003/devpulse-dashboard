/**
 * Users panel – lists all users and highlights business (.biz) emails
 * Receives raw users array from dashboard (filtering happens here for display).
 */

import Badge from '../shared/Badge';

function UsersPanel({ users }) {
  if (!users || users.length === 0) {
    return (
      <div className="users-panel">
        <p className="users-empty">No users to display.</p>
      </div>
    );
  }

  const businessUsers = [];

  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    if (user.email.endsWith('.biz')) {
      businessUsers.push(user);
    }
  }

  return (
    <div className="users-panel">
      <h3 className="users-section-title">Business Accounts (.biz)</h3>

      {businessUsers.length === 0 ? (
        <p className="users-no-business">No business accounts found</p>
      ) : (
        <div className="users-grid users-grid--business">
          {businessUsers.map((user) => (
            <article key={user.id} className="user-card user-card--business">
              <Badge text="BUSINESS ACCOUNT" type="success" />
              <h4 className="user-card-name">{user.name}</h4>
              <p className="user-card-email">{user.email}</p>
              <p className="user-card-company">{user.company.name}</p>
            </article>
          ))}
        </div>
      )}

      <h3 className="users-section-title">All Users</h3>
      <div className="users-grid">
        {users.map((user) => (
          <article key={user.id} className="user-card">
            <h4 className="user-card-name">{user.name}</h4>
            <p className="user-card-email">{user.email}</p>
            <p className="user-card-company">{user.company.name}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default UsersPanel;