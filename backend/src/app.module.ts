import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientesModule } from './modules/clientes/clientes.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/crud-clientes'),
    ClientesModule,
  ],
})
export class AppModule {}
