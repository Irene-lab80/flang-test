import { Link } from 'react-router-dom';

import { Character } from '../model/types';
import s from './character-card.module.css';

export const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <Link to={`/character/${character.id}`} className={s.card}>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </Link>
  );
};
