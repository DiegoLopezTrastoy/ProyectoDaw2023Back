import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id?: number;
  
    @Column()
    nombre: string;
  
    @Column()
    email: string;

    @Column()
    fecha_nacimiento: string;

    @Column()
    num_telefono: number;

    @Column()
    imagen: string;

    @Column('boolean', {default: true, select: false})
    activo: boolean;
}
