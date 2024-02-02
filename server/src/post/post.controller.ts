import { Body, Controller, Logger, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostService } from './post.service';
import { AuthGuard } from '@nestjs/passport';
import { PostCreateDto } from './dto/post-create.dto';
import { GetUser } from 'src/auth/getUser.decorator';
import UserEntity from 'src/entity/user.entity';
import PostEntity from 'src/entity/post.entity';

@Controller('post')
export class PostController {
    constructor(private postService:PostService){}

    //Sign up new user
    @Post('/create')
    @UseGuards(AuthGuard('jwt'))
    @UsePipes(ValidationPipe)
    async signUp(@Body() postCreateDto : PostCreateDto, @GetUser() user:UserEntity): Promise <PostEntity> {
        Logger.log(`Signup Request`)
        return await this.postService.create(postCreateDto,user)
    }
}
