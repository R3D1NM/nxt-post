import {Injectable } from "@nestjs/common";
import Post from "src/entity/post.entity";
import { DataSource, Repository } from "typeorm";
import { PostCreateDto } from "./dto/post-create.dto";
import User from "src/entity/user.entity";

@Injectable()
export class PostRepository extends Repository<Post> {
    constructor(private dataSource : DataSource){
        super(Post, dataSource.createEntityManager())
    }
    async createPost(postCreateDto:PostCreateDto, user:User) : Promise <Post>{
        const {title, content, status} = postCreateDto
        const post = this.create({
            title,
            content,
            status,
            user
        })

        await this.save(post)
        return post
    }
}