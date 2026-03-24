const scores = [
  { icon: '\u2764', value: 87, max: '/100', label: 'Compatibility', color: 'purple' },
  { icon: '\uD83E\uDD1D', value: 12, max: '', label: 'Active Matches', color: 'green' },
  { icon: '\uD83D\uDC40', value: 34, max: '', label: 'Profile Views', color: 'pink' },
];

export default function ScoreCards() {
  return (
    <div className="score-cards">
      {scores.map((s) => (
        <div key={s.label} className={`score-card score-${s.color}`}>
          <div className="score-icon">{s.icon}</div>
          <div className="score-value">
            {s.value}<span className="score-max">{s.max}</span>
          </div>
          <div className="score-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
