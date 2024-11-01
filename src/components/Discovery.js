import React, { useState } from 'react';

function Discovery() {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'Chris', age: 28, location: 'New York' },
    { id: 2, name: 'Taylor', age: 24, location: 'Los Angeles' },
  ]);

  return (
    <div>
      <h2>Discover New People</h2>
      {profiles.map(profile => (
        <div key={profile.id}>
          <h3>{profile.name}, {profile.age}</h3>
          <p>Location: {profile.location}</p>
        </div>
      ))}
    </div>
  );
}

export default Discovery;
