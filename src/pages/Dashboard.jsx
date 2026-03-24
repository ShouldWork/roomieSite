import { useAuth } from '../contexts/AuthContext.jsx';
import ScoreCards from '../components/ScoreCards.jsx';
import ActivityChart from '../components/ActivityChart.jsx';
import MatchDistribution from '../components/MatchDistribution.jsx';
import ExplorePanel from '../components/ExplorePanel.jsx';
import AIHelper from '../components/AIHelper.jsx';
import RecentMatches from '../components/RecentMatches.jsx';

export default function Dashboard() {
  const { user } = useAuth();
  const firstName = (user?.displayName || user?.email?.split('@')[0] || 'there').split(' ')[0];

  return (
    <main className="main">
      <section className="welcome-section">
        <div className="welcome-text">
          <h1>Welcome Back, {firstName}.</h1>
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
