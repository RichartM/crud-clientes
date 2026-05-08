export class CreateClienteDto {
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
}

export class UpdateClienteDto {
  nombre?: string;
  email?: string;
  telefono?: string;
  direccion?: string;
  estado?: string;
}
