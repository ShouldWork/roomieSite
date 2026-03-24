const matches = [
  { initials: 'AS', name: 'Alex Sharma', status: 'Messaging', statusClass: 'active', score: '94%', scoreColor: '#7C5CFC', date: 'Mar 22, 2026', gradient: 'linear-gradient(135deg, #4ECDC4, #36B5AD)' },
  { initials: 'MK', name: 'Morgan Kim', status: 'Accepted', statusClass: 'accepted', score: '89%', scoreColor: '#4ECDC4', date: 'Mar 21, 2026', gradient: 'linear-gradient(135deg, #FF6B8A, #FF8FAB)' },
  { initials: 'RP', name: 'Riley Patel', status: 'Pending', statusClass: 'pending', score: '85%', scoreColor: '#FFB347', date: 'Mar 20, 2026', gradient: 'linear-gradient(135deg, #FFB347, #E09B30)' },
  { initials: 'TL', name: 'Taylor Lee', status: 'Pending', statusClass: 'pending', score: '82%', scoreColor: '#7C5CFC', date: 'Mar 19, 2026', gradient: 'linear-gradient(135deg, #7C5CFC, #B39DFF)' },
  { initials: 'JW', name: 'Jamie Wong', status: 'Declined', statusClass: 'declined', score: '72%', scoreColor: '#FF6B8A', date: 'Mar 18, 2026', gradient: 'linear-gradient(135deg, #6BCB77, #95E89D)' },
];

export default function RecentMatches() {
  return (
    <div className="glass-card">
      <div className="card-header">
        <div className="card-title">Recent Matches</div>
        <a href="#" className="card-action">See all</a>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Roommate</th>
              <th>Status</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((m) => (
              <tr key={m.initials}>
                <td>
                  <div className="match-user">
                    <div className="match-avatar-sm" style={{background: m.gradient}}>{m.initials}</div>
                    {m.name}
                  </div>
                </td>
                <td>
                  <span className={`status-badge status-${m.statusClass}`}>
                    <span className="status-dot"></span>{m.status}
                  </span>
                </td>
                <td className="score-cell" style={{color: m.scoreColor}}>{m.score}</td>
                <td style={{color:'#9B98B0',fontSize:12}}>{m.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
