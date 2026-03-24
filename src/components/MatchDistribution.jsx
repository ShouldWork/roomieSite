const items = [
  { label: 'Pending Review', sub: 'Awaiting your response', value: 24, pct: '60%', gradient: 'linear-gradient(90deg, #7C5CFC, #B39DFF)' },
  { label: 'Active Conversations', sub: 'Currently messaging', value: 18, pct: '45%', gradient: 'linear-gradient(90deg, #4ECDC4, #7EDDD7)' },
  { label: 'Confirmed Matches', sub: 'Both sides accepted', value: 8, pct: '20%', gradient: 'linear-gradient(90deg, #6BCB77, #95E89D)' },
  { label: 'Expired / Declined', sub: 'No longer active', value: 6, pct: '15%', gradient: 'linear-gradient(90deg, #FF6B8A, #FF8FAB)' },
];

export default function MatchDistribution() {
  return (
    <div className="glass-card">
      <div className="card-header">
        <div className="card-title">Match Distribution</div>
      </div>
      {items.map((item) => (
        <div key={item.label} className="distribution-item">
          <div className="dist-header">
            <span className="dist-label">{item.label}</span>
            <span className="dist-value">{item.value}</span>
          </div>
          <div className="dist-sublabel">{item.sub}</div>
          <div className="dist-bar-bg">
            <div className="dist-bar-fill" style={{width: item.pct, background: item.gradient}}></div>
          </div>
        </div>
      ))}
    </div>
  );
}
