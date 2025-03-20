export type Users = {
    $id: string;
    fullName?: string;
    email?: string;
    phone?: string;
    address?: string;
    gender?: string;
}

export type AddUser = Omit<Users, "$id">;