import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import Post  from "./post.entity";


@Entity() @Unique(['username'])
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @OneToMany(()=> Post, post => post.user, {eager:false})
    posts: Post[]
}