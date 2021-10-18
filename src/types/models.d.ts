export interface ICreateDomain {
    name: string;
    url: string;
}

export interface IEditDomain {
    name?: string;
    url?: string;
}

export interface ICreateUser {
    email: string;
    password: string | null; // May be null if user only registered via OAuth
}

export interface IEditUser {
    email?: string;
    password?: string | null;
}
