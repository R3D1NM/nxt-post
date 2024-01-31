import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { PostStatus } from "src/post/post.enum";


@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    status : PostStatus;

    @ManyToOne(() => User, user => user.posts, {eager:false})
    user: User;
}