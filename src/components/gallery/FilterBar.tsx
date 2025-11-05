import React from "react";

export interface FilterBarProps {
  availableFilters: string[];
  selectedFilters: string[];
  onFilterChange: (filters: string[]) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  availableFilters,
  selectedFilters,
  onFilterChange,
}) => {
  if (availableFilters.length === 0) {
    return null;
  }

  const handleToggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      onFilterChange(selectedFilters.filter((f) => f !== filter));
    } else {
      onFilterChange([...selectedFilters, filter]);
    }
  };

  const handleClearFilters = () => {
    onFilterChange([]);
  };

  return (
    <div className="filter-bar bg-white dark:bg-neutral-100 rounded-md p-4 mb-4 shadow-md">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium text-neutral-700">
          Filter by tags:
        </span>
        {availableFilters.map((filter) => (
          <label
            key={filter}
            className="flex items-center gap-2 cursor-pointer text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <input
              type="checkbox"
              checked={selectedFilters.includes(filter)}
              onChange={() => handleToggleFilter(filter)}
              className="w-4 h-4 rounded border-neutral-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <span>{filter}</span>
          </label>
        ))}
        {selectedFilters.length > 0 && (
          <button
            onClick={handleClearFilters}
            className="ml-auto text-xs px-3 py-1 rounded-full bg-neutral-200 hover:bg-neutral-300 text-neutral-700 transition-colors"
          >
            Clear filters ({selectedFilters.length})
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
