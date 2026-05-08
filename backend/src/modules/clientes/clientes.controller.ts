import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto, UpdateClienteDto } from './cliente.dto';

@Controller('api/clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  async create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @Get()
  async findAll() {
    return this.clientesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.clientesService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClienteDto: UpdateClienteDto,
  ) {
    return this.clientesService.update(id, updateClienteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.clientesService.remove(id);
  }
}
