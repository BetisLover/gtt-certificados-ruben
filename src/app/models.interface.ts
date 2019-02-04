export interface User{
    id: number;
    username: string;
    password: string;
    email: string;
    role: number;
}

export interface UserJira{
    id: number;
    user_id: number;
    password: string;
    url: string;
    project: string;
    component: string;
}

