import { IsString } from "class-validator";
import { PostStatus } from "../post.enum";

export class PostCreateDto {
    @IsString()
    title: string;
    @IsString()
    content: string;
    @IsString()
    status: PostStatus;
}