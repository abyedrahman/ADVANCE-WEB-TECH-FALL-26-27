import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "uservalidators" })
export class UserValidator {
    // userid is a number sent by the client, so it is a normal (not generated) primary key
    @PrimaryColumn({ type: "int" })
    userid!: number;

    @Column()
    username!: string;

    @Column()
    hashedpassword!: string;

    @Column()
    created_at?: Date;

    @Column()
    updated_at?: Date;
}
