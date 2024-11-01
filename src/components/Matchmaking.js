import React, { useState } from 'react';

function Matchmaking() {
  const [matches, setMatches] = useState([
    { id: 1, name: 'Alex', interests: ['Music', 'Travel'] },
    { id: 2, name: 'Jordan', interests: ['Movies', 'Cooking'] },
  ]);

  return (
    <div>
      <h2>Today's Matches</h2>
      {matches.map(match => (
        <div key={match.id}>
          <h3>{match.name}</h3>
          <p>Interests: {match.interests.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default Matchmaking;
