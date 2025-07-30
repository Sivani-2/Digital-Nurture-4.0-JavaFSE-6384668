import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 67 },
    { name: "Gill", score: 90 },
    { name: "Dhoni", score: 45 },
    { name: "Rahul", score: 75 },
    { name: "Iyer", score: 55 },
    { name: "Pant", score: 88 },
    { name: "Hardik", score: 95 },
    { name: "Ashwin", score: 60 },
    { name: "Jadeja", score: 70 },
    { name: "Bumrah", score: 92 }
  ];

  // Filter players with score < 70 using arrow function
  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {below70.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;