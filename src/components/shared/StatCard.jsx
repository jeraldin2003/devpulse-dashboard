/**
 * StatCard – reusable summary tile (title + value + icon)
 * Used on the Overview panel.
 */

function StatCard({ title, value, icon }) {
    return (
      <div className="stat-card">
        <div className="stat-card-icon">{icon}</div>
        <div>
          <p className="stat-card-title">{title}</p>
          <p className="stat-card-value">{value}</p>
        </div>
      </div>
    );
  }
  
  export default StatCard;