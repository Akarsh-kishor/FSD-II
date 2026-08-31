import { useSelector } from "react-redux";

import {
  selectTotalEngagement,
  selectPlatformAnalytics,
} from "../features/posts/postSelectors";

function Analytics() {
  const totalEngagement = useSelector(selectTotalEngagement);
  const analytics = useSelector(selectPlatformAnalytics);

  return (
    <section className="analytics">
      <h2>Analytics</h2>

      <div className="analytics-grid">
        <div className="analytics-card">
          <h3>Total Posts</h3>
          <p>{analytics.totalPosts}</p>
        </div>

        <div className="analytics-card">
          <h3>Total Engagement</h3>
          <p>{totalEngagement}</p>
        </div>
      </div>
    </section>
  );
}

export default Analytics;