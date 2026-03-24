const prompts = [
  '\u2728 Improve my profile',
  '\uD83D\uDCAC Conversation starters',
  '\uD83D\uDD0D Refine preferences',
];

export default function AIHelper() {
  return (
    <div className="glass-card">
      <div className="card-header">
        <div className="card-title">AI Roommate Helper</div>
        <div className="icon-btn" style={{width:32,height:32,fontSize:12}}>&#x1F916;</div>
      </div>
      <div className="ai-section">
        <div className="ai-orb"></div>
        <div>
          <div className="ai-prompts">
            {prompts.map((p) => (
              <span key={p} className="ai-prompt-chip">{p}</span>
            ))}
          </div>
          <div className="ai-input">
            <input type="text" placeholder="Ask anything about finding a roommate..." />
            <button className="ai-send-btn">&#x27A4;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
