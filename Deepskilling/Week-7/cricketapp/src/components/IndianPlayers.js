import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ["Virat", "Gill", "Dhoni", "Iyer", "Ashwin"];
  const evenTeam = ["Rohit", "Rahul", "Pant", "Jadeja", "Bumrah"];

  // Destructuring example
  const [odd1, odd2, ...restOdd] = oddTeam;
  const [even1, even2, ...restEven] = evenTeam;

  const T20players = ["Surya", "Samson"];
  const RanjiPlayers = ["Shaw", "Ruturaj"];

  // Merging arrays
  const allPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {[odd1, odd2, ...restOdd].map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {[even1, even2, ...restEven].map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>All Merged Players (T20 + Ranji)</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;