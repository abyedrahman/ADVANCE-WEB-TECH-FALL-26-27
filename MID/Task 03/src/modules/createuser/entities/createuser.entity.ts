import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "createusers" })
export class Createuser {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  fullName!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({ type: "int" })
  age!: number;

  // Stored as text so the leading 0 of the phone number is not lost
  @Column({ type: "varchar", length: 11 })
  phone!: string;

  @Column()
  accountType!: string;

  @Column({ type: "varchar", nullable: true })
  address?: string | null;

  @CreateDateColumn({ type: "timestamp" })
  created_at?: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updated_at?: Date;
}
