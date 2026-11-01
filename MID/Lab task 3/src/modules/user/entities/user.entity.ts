import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  age!: number;

  @Column()
  phone!: number;
  
  @Column()
  accounttype!: string;

  @Column()
  address!: string;

  @Column()
  created_at?: Date;

  @Column()
  updated_at?: Date;
}

