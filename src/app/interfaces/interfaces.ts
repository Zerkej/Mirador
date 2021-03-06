

export interface libro {
    id_libro: number;
    nombre: String;
    precio: number;
    cantidad: number;
    descripcion: String;
    formato: String;
    editorial: number;
    disponibilidad: boolean;
}

export interface editorial {
    id_editorial: number;
    nombre: String;
}

export interface autores{
    id_libro_a: number;
    id_autor_a: number;
}

export interface autor {
    id_autor: number;
    nombre: String;
    apellido: String;
}