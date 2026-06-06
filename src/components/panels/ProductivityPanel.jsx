/**
 * Productivity panel – horizontal bar chart of todo completion % per user
 * Bar colours: green (70%+), yellow (50–69%), red (below 50).
 */

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Cell,
  } from 'recharts';
  
  function getBarColor(percentage) {
    if (percentage >= 70) {
      return '#16a34a';
    }
    if (percentage >= 50) {
      return '#ca8a04';
    }
    return '#dc2626';
  }
  
  function ProductivityPanel({ productivityData }) {
    const stats = productivityData?.userCompletionStats;
  
    if (!stats || stats.length === 0) {
      return (
        <div className="productivity-panel">
          <p className="productivity-empty">No productivity data to display.</p>
        </div>
      );
    }
  
    return (
      <div className="productivity-panel">
        <h3 className="productivity-panel-title">User completion percentages</h3>
  
        <div className="productivity-legend">
          <span className="productivity-legend-item">
            <span className="productivity-legend-dot green" />
            Green: 70% and above
          </span>
          <span className="productivity-legend-item">
            <span className="productivity-legend-dot yellow" />
            Yellow: 50% – 69%
          </span>
          <span className="productivity-legend-item">
            <span className="productivity-legend-dot red" />
            Red: below 50%
          </span>
        </div>
  
        <div className="productivity-chart-wrap">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={stats}
              margin={{ top: 8, right: 24, left: 8, bottom: 8 }}
            >
              <XAxis type="number" domain={[0, 100]} unit="%" />
              <YAxis type="category" dataKey="userName" width={110} />
              <Tooltip
                formatter={(value) => [value + '%', 'Completion']}
                labelFormatter={(name) => name}
              />
              <Bar dataKey="completionPercentage" radius={[0, 4, 4, 0]}>
                {stats.map((item) => (
                  <Cell
                    key={item.userId}
                    fill={getBarColor(item.completionPercentage)}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
  
  export default ProductivityPanel;