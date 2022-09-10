import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';

const RenderedContent = () => {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    (async () => {
      let data;
      try {
        const response = await fetch('http://localhost:5000/api/characters');
        let res = await response.json();
        data = res.data.characters;
      } catch (err) {
        console.log(err);
        data = [];
      }

      setCharacter(data);
    })();
  }, []);

  return (
    <div className="wrapper">
      {characters.map((character, index) => (
        <CharacterCard characterData={character} key={index} />
      ))}
    </div>
  );
};

export { RenderedContent };
