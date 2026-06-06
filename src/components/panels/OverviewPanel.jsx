/**
 * Overview panel – high-level stats across all APIs
 * Receives pre-processed totals only (no fetch, no processing here).
 */

import StatCard from '../shared/StatCard';

// Props: data = { totalUsers, totalPosts, totalTodos, totalCountries }
function OverviewPanel({ data }) {
  if (!data) {
    return (
      <div className="overview-panel">
        <p className="overview-empty">No overview data available.</p>
      </div>
    );
  }

  return (
    <div className="overview-panel">
      <div className="overview-stats-grid">
        <StatCard title="Total Users" value={data.totalUsers} icon="👤" />
        <StatCard title="Total Posts" value={data.totalPosts} icon="📝" />
        <StatCard title="Total Todos" value={data.totalTodos} icon="✅" />
        <StatCard
          title="Total Countries"
          value={data.totalCountries}
          icon="🌍"
        />
      </div>
    </div>
  );
}

export default OverviewPanel;