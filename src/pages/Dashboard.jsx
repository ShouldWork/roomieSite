import ScoreCards from '../components/ScoreCards.jsx';
import ActivityChart from '../components/ActivityChart.jsx';
import MatchDistribution from '../components/MatchDistribution.jsx';
import ExplorePanel from '../components/ExplorePanel.jsx';
import AIHelper from '../components/AIHelper.jsx';
import RecentMatches from '../components/RecentMatches.jsx';

export default function Dashboard() {
  return (
    <main className="main">
      <section className="welcome-section">
        <div className="welcome-text">
          <h1>Welcome Back, Jordan.</h1>
          <p>Find your perfect roommate and make your next move stress-free.</p>
        </div>
        <ScoreCards />
      </section>

      <div className="card-grid">
        <ActivityChart />
        <MatchDistribution />
        <ExplorePanel />
        <AIHelper />
        <RecentMatches />
      </div>
    </main>
  );
}
