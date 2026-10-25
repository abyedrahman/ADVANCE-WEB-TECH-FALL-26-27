
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "teacher" })
export class Teacher {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  designation!: string;

  @Column()
  phone!: string;
}
