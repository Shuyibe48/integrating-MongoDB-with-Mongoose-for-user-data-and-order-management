export type TFullName = {
  firstName: string;
  lastName: string;
};

export type TAddress = {
  street: string;
  city: string;
  country: string;
};

export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: TFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: TAddress;
};

// Example usage:
//   const user: User = {
//     userId: 1,
//     username: "john_doe",
//     password: "password123",
//     fullName: {
//       firstName: "John",
//       lastName: "Doe",
//     },
//     age: 25,
//     email: "john@example.com",
//     isActive: true,
//     hobbies: ["reading", "coding"],
//     address: {
//       street: "123 Main St",
//       city: "Anytown",
//       country: "Country",
//     },
//   };
