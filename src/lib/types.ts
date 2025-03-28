export type Users = {
  $id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  birthdate: string;
  gender: string;
};

export type AddUser = Omit<Users, "$id">;
