export type Users = {
  $id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
};

export type AddUser = Omit<Users, "$id">;
