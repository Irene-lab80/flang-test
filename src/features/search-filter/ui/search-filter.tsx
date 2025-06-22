import { Filters } from '../../../entities/character/model/types';
import { Select } from '../../../shared';

export const SearchFilter = ({
  onFilterChange,
  filters,
  resetPage,
}: {
  onFilterChange: (filters: Filters) => void;
  filters: Filters;
  resetPage: () => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onFilterChange({ ...filters, [e.target.name]: e.target.value });
    resetPage();
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Search by name"
        value={filters.name}
        onChange={handleChange}
      />
      <Select
        name="status"
        value={filters.status}
        onChange={handleChange}
        options={[
          { value: '', label: 'All' },
          { value: 'alive', label: 'Alive' },
          { value: 'dead', label: 'Dead' },
          { value: 'unknown', label: 'Unknown' },
        ]}
      />
      <Select
        name="species"
        value={filters.species}
        onChange={handleChange}
        options={[
          { value: '', label: 'All' },
          { value: 'human', label: 'Human' },
          { value: 'alien', label: 'Alien' },
          { value: 'humanoid', label: 'Humanoid' },
          { value: 'robot', label: 'Robot' },
        ]}
      />
      <Select
        name="gender"
        value={filters.gender}
        onChange={handleChange}
        options={[
          { value: '', label: 'All' },
          { value: 'female', label: 'Female' },
          { value: 'male', label: 'Male' },
          { value: 'genderless', label: 'Genderless' },
          { value: 'unknown', label: 'Unknown' },
        ]}
      />
    </div>
  );
};
