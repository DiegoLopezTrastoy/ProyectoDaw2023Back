import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id?: string;
  
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

    @Column()
    password: string;
}
