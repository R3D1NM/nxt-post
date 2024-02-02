import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostRepository } from './post.repository';
import { PostCreateDto } from './dto/post-create.dto';
import User from 'src/entity/user.entity';
import Post from 'src/entity/post.entity';

@Injectable()
export class PostService {
    // Inject Repository
    constructor(
        @InjectRepository(PostRepository)
        private postRepository : PostRepository,
    ){}

    //Sign Up User
    async create(postCreateDto:PostCreateDto, user:User): Promise<Post>{
        return await this.postRepository.createPost(postCreateDto,user)
    }
}
