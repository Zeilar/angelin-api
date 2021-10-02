import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Domain {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column("text")
    public name: string;

    @Column("text")
    public url: string;

    @CreateDateColumn()
    public created_at: string;

    @UpdateDateColumn()
    public updated_at: string;
}
