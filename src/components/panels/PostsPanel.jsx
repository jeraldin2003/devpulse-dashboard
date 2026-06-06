/**
 * Posts panel – bar chart + list for top 5 users by post count
 * Props come from postsProcessor (processedPostsData).
 */

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
  } from 'recharts';
  
  function PostsPanel({ processedPostsData }) {
    const top5 = processedPostsData?.top5UsersByPostCount;
  
    if (!top5 || top5.length === 0) {
      return (
        <div className="posts-panel">
          <p className="posts-empty">No posts data to display.</p>
        </div>
      );
    }
  
    return (
      <div className="posts-panel">
        <h3 className="posts-panel-title">Top 5 users by post count</h3>
  
        <div className="posts-chart-wrap">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={top5} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
              <XAxis
                dataKey="userId"
                tickFormatter={(userId) => 'User ' + userId}
              />
              <YAxis allowDecimals={false} />
              <Tooltip
                labelFormatter={(userId) => 'User ' + userId}
                formatter={(value) => [value, 'Posts']}
              />
              <Bar dataKey="postCount" fill="#2563eb" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
  
        <ul className="posts-list">
          {top5.map((item) => (
            <li key={item.userId} className="posts-list-item">
              User {item.userId}: {item.postCount} posts
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default PostsPanel;