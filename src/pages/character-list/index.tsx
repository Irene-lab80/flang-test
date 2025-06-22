import { useEffect, useState } from 'react';

import { CharacterCard } from '../../entities/character/ui/character-card';
import { SearchFilter } from '../../features/search-filter';
import { Pagination } from '../../features/search-filter/pagination';
import { getCharacters } from '../../shared/api/base';
import { Character, CharactersResponse } from '../../shared/api/character';
import s from './character-list.module.css';

export const CharacterListPage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [info, setInfo] = useState<CharactersResponse['info'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({ name: '', status: '' });

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setLoading(true);
        const data = await getCharacters({ ...filters, page: String(page) });
        setCharacters(data.results);
        setInfo(data.info);
      } catch (err) {
        setError('Failed to fetch characters');
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, [page, filters]);

  return (
    <div className={s.content}>
      <div className={s.filters}>
        <SearchFilter
          onFilterChange={setFilters}
          filters={filters}
          resetPage={() => setPage(1)}
        />
      </div>
      {!characters?.length && <div>Nothing found</div>}
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <div className={s.list}>
        {characters?.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      {info && (
        <Pagination currentPage={page} totalPages={info.pages} onPageChange={setPage} />
      )}
    </div>
  );
};
