import type { UserCardProps } from "@/pages/users/users";

const UserCard = ({ user }: UserCardProps) => (
  <div className="flex flex-col border rounded-lg shadow-lg p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
    <h3 className="font-semibold text-lg">{user.name}</h3>
    <p className="text-sm text-gray-500 truncate">{user.company.name}</p>
    <p className="mt-2 text-gray-700">Email: {user.email}</p>
    <p className="text-gray-700 truncate">Phone: {user.phone}</p>
    <p className="mt-2 text-gray-500 truncate">City: {user.address.city}</p>
    <div className="mt-4 text-center">
      <a
        href={`mailto:${user.email}`}
        className="text-blue-500 hover:underline"
      >
        Send Email
      </a>
    </div>
  </div>
);

export default UserCard;
