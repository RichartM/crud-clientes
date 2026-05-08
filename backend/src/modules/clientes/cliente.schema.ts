import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Cliente extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  telefono: string;

  @Prop({ required: true })
  direccion: string;

  @Prop({ default: 'activo' })
  estado: string;
}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);
