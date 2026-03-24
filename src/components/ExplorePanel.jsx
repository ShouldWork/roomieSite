import { useState } from 'react';

const cities = ['All', 'NYC', 'LA', 'Chicago', 'Remote'];

const roommates = [
  { initials: 'AS', name: 'Alex Sharma', detail: 'Brooklyn, NY \u00B7 $1,200/mo budget', tags: [['#EarlyBird','purple'],['#NoPets','green'],['#Remote','pink']], score: '94%', gradient: 'linear-gradient(135deg, #4ECDC4, #36B5AD)' },
  { initials: 'MK', name: 'Morgan Kim', detail: 'Manhattan, NY \u00B7 $1,500/mo budget', tags: [['#NightOwl','purple'],['#Clean','green']], score: '89%', gradient: 'linear-gradient(135deg, #FF6B8A, #FF8FAB)' },
  { initials: 'RP', name: 'Riley Patel', detail: 'Queens, NY \u00B7 $1,000/mo budget', tags: [['#Flexible','purple'],['#PetFriendly','pink']], score: '85%', gradient: 'linear-gradient(135deg, #FFB347, #E09B30)' },
  { initials: 'TL', name: 'Taylor Lee', detail: 'Hoboken, NJ \u00B7 $1,350/mo budget', tags: [['#Quiet','green'],['#WFH','purple']], score: '82%', gradient: 'linear-gradient(135deg, #7C5CFC, #B39DFF)' },
];

export default function ExplorePanel() {
  const [activeCity, setActiveCity] = useState('All');

  return (
    <div className="glass-card card-explore">
      <div className="card-header">
        <div className="card-title">Explore Roommates</div>
        <div className="icon-btn" style={{width:32,height:32,fontSize:12}}>&#x2728;</div>
      </div>
      <div className="search-box">
        <span className="search-icon">&#x1F50D;</span>
        <input type="text" placeholder="Search by name, city, interests..." />
      </div>
      <div className="filter-chips">
        {cities.map((city) => (
          <span
            key={city}
            className={`chip ${activeCity === city ? 'active' : ''}`}
            onClick={() => setActiveCity(city)}
          >
            {city}
          </span>
        ))}
      </div>
      <div className="trending-label">Top Matches For You</div>
      {roommates.map((r) => (
        <div key={r.initials} className="roommate-card">
          <div className="roommate-avatar" style={{background: r.gradient}}>{r.initials}</div>
          <div className="roommate-info">
            <div className="roommate-name">{r.name}</div>
            <div className="roommate-detail">{r.detail}</div>
            <div className="roommate-tags">
              {r.tags.map(([tag, color]) => (
                <span key={tag} className={`tag tag-${color}`}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="compatibility-badge">{r.score}</div>
        </div>
      ))}
    </div>
  );
}
