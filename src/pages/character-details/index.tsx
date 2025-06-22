import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Character } from '../../entities/character/model/types';
import { getCharacter } from '../../shared/api/base';

export const CharacterDetailsPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const loadCharacter = async () => {
      try {
        const data = await getCharacter(id);
        setCharacter(data);
      } finally {
        setLoading(false);
      }
    };

    loadCharacter();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!character) return <div>Character not found</div>;

  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Location: {character.location.name}</p>
    </div>
  );
};
