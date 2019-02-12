export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    role: number;
}

export interface UserJira {
    id: number;
    user_id: number;
    username: string;
    password: string;
    url: string;
    project: string;
    component: string;
    issue: string;
}

export interface Certificate {
    id: number;
    alias: string;
    entidad_emisora: string;
    numero_de_serie: string;
    subject: string;
    caducidad: Date;
    password: string;
    id_orga: string;
    nombre_cliente: string;
    contacto_renovacion: string;
    repositorio: string;
    observaciones: string;
    integration_list: string;
    ficheroBase64: any;
    nombre_archivo: string;
    marcar_borrado: boolean;

}

