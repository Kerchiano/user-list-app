export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UsersListProps {
  users: User[];
}

export interface UsersFilterProps {
  searchQuery: string;
  cityFilter: string;
  onSearchChange: (value: string) => void;
  onCityChange: (value: string) => void;
}

export interface UserCardProps {
  user: User;
}
