import {Injectable } from "@nestjs/common";
import { Post } from "src/entity/post.entity";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class PostRepository extends Repository<Post> {
    constructor(private dataSource : DataSource){
        super(Post, dataSource.createEntityManager())
    }

}