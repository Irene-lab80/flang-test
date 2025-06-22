import { useEffect, useState } from 'react';

import { CharacterCard } from '../../entities/character/ui/character-card';
import { getCharacters } from '../../shared/api/base';
import { Character } from '../../shared/api/character';
import s from './character-list.module.css';

export const CharacterListPage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setLoading(true);
        const data = await getCharacters();
        setCharacters(data.results);
      } catch (err) {
        setError('Failed to fetch characters');
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={s.content}>
      <div className={s.list}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};
