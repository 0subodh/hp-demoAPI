import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const CharacterDetail = () => {
  const { id } = useParams();

  const [characters, setCharacter] = useState({});

  useEffect(() => {
    (async () => {
      let data;
      try {
        const response = await fetch(
          `http://localhost:5000/api/characters/${id}`
        );
        let res = await response.json();
        data = res?.data;
      } catch (err) {
        console.log(err);
        data = {};
      }

      setCharacter(data.character);
    })();
  }, [id]);

  console.log(id);
  console.log('detail');
  console.log(characters !== {});

  return (
    <>
      {characters.id ? (
        <div className="card">
          <h1>{id}</h1>
          <img src={characters?.image} alt={characters?.name} />
          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <th>Name:</th>
                <td>{characters?.name}</td>
              </tr>
              <tr>
                <th>Date of Birth:</th>
                <td>{characters?.dateOfBirth}</td>
              </tr>
              <tr>
                <th>Gender:</th>
                <td>{characters?.gender}</td>
              </tr>
              <tr>
                <th>House:</th>
                <td>{characters?.house}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h1>No Content</h1>
        </div>
      )}
    </>
  );
};

export default CharacterDetail;
