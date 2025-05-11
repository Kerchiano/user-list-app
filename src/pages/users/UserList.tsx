import UserCard from "@/pages/users/UserCard";
import type { UsersListProps } from "@/pages/users/users";

const UsersList = ({ users }: UsersListProps) => (
  <div className="flex flex-wrap justify-between gap-4">
    {users.map((user) => (
      <UserCard key={user.id} user={user} />
    ))}
  </div>
);

export default UsersList;
