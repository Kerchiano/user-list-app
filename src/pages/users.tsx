import UsersFilter from "@/pages/users/UserFilter";
import UsersList from "@/pages/users/UserList";
import type { User } from "@/pages/users/users";
import { getUsers } from "@/services/getUsers";
import { useEffect, useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setFilteredUsers(data);
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filtered = users.filter(
        (user: User) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          user.address.city.toLowerCase().includes(cityFilter.toLowerCase())
      );
      setFilteredUsers(filtered);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchQuery, cityFilter, users]);

  return (
    <div className="container mx-auto p-4">
      <UsersFilter
        searchQuery={searchQuery}
        cityFilter={cityFilter}
        onSearchChange={setSearchQuery}
        onCityChange={setCityFilter}
      />
      <UsersList users={filteredUsers} />
    </div>
  );
};

export default UsersPage;
