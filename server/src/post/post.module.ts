import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostRepository } from './post.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import Post from 'src/entity/post.entity';

@Module({
  controllers: [PostController],
  providers: [PostService,PostRepository],
  imports:[
    TypeOrmModule.forFeature([Post])
  ]
})
export class PostModule {}
