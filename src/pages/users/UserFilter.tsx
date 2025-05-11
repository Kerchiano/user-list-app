import type { UsersFilterProps } from "@/pages/users/users";

const UsersFilter = ({
  searchQuery,
  cityFilter,
  onSearchChange,
  onCityChange,
}: UsersFilterProps) => (
  <div className="flex justify-between mb-4 gap-4">
    <input
      type="text"
      placeholder="Search by name"
      className="p-2 border rounded w-auto outline-none"
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
    />
    <input
      type="text"
      placeholder="Search by city"
      className="p-2 border rounded w-auto outline-none"
      value={cityFilter}
      onChange={(e) => onCityChange(e.target.value)}
    />
  </div>
);

export default UsersFilter;
