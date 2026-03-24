const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const chartData = [
  [60,80,45],[45,65,55],[75,90,60],[55,70,50],[95,110,65],[80,100,70],
  [120,140,80],[100,130,90],[85,105,70],[110,125,85],[130,150,95],[105,135,88],
];

export default function ActivityChart() {
  return (
    <div className="glass-card">
      <div className="card-header">
        <div>
          <div className="card-title">Weekly Match Activity</div>
          <div className="chart-legend">
            <span className="legend-item"><span className="legend-dot" style={{background:'#7C5CFC'}}></span> New Matches</span>
            <span className="legend-item"><span className="legend-dot" style={{background:'#A78BFA'}}></span> Messages</span>
            <span className="legend-item"><span className="legend-dot" style={{background:'#C4B5FD'}}></span> Profile Views</span>
          </div>
        </div>
        <select className="dropdown-sm">
          <option>Monthly</option>
          <option>Weekly</option>
        </select>
      </div>
      <div className="chart-area">
        {months.map((month, i) => (
          <div key={month} className="chart-bar-group">
            <div className="chart-bars">
              <div className="chart-bar bar-new" style={{height: chartData[i][0]}}></div>
              <div className="chart-bar bar-active" style={{height: chartData[i][1]}}></div>
              <div className="chart-bar bar-matched" style={{height: chartData[i][2]}}></div>
            </div>
            <span className="chart-label">{month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
