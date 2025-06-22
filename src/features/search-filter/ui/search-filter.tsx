export const SearchFilter = ({
  onFilterChange,
  filters,
  resetPage,
}: {
  onFilterChange: (filters: { name: string; status: string }) => void;
  filters: { name: string; status: string };
  resetPage: () => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onFilterChange({ ...filters, [e.target.name]: e.target.value });
    resetPage();
  };

  return (
    <div className="filters">
      <input
        type="text"
        name="name"
        placeholder="Search by name"
        value={filters.name}
        onChange={handleChange}
      />
      <select name="status" value={filters.status} onChange={handleChange}>
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};
