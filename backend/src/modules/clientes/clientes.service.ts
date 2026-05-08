import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cliente } from './cliente.schema';
import { CreateClienteDto, UpdateClienteDto } from './cliente.dto';

@Injectable()
export class ClientesService {
  constructor(@InjectModel(Cliente.name) private clienteModel: Model<Cliente>) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const newCliente = new this.clienteModel(createClienteDto);
    return newCliente.save();
  }

  async findAll(): Promise<Cliente[]> {
    return this.clienteModel.find().exec();
  }

  async findOne(id: string): Promise<Cliente> {
    return this.clienteModel.findById(id).exec();
  }

  async update(id: string, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    return this.clienteModel.findByIdAndUpdate(id, updateClienteDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Cliente> {
    return this.clienteModel.findByIdAndDelete(id).exec();
  }
}
