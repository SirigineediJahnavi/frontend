import React, { useState } from 'react';

function Favorites() {
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'Alex', interests: ['Music', 'Travel'] },
  ]);

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map(favorite => (
        <div key={favorite.id}>
          <h3>{favorite.name}</h3>
          <p>Interests: {favorite.interests.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
