import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterCard.css';

const CharacterCard = ({ characterData }) => {
  return (
    <div className="card">
      <div className="card__body">
        <img src={characterData.image} alt={characterData.name} />
        <h3 className="card__title">{characterData.name}</h3>
        <p className="card__birth">{characterData.dateOfBirth}</p>
      </div>
      <Link to={`characters/${characterData.id}`}>
        <button className="card__btn">View Details</button>
      </Link>
    </div>
  );
};

export default CharacterCard;
