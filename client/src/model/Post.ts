import { User } from "./User";
import { PostStatus } from "./enums";

export interface Post {
    id: string;
    title: string;
    content: string;
    status : PostStatus;
    user: User;
}