import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthSignUpDto {
    @IsString() @MinLength(6) @MaxLength(12)
    username: string;

    @IsString() @MinLength(6) @MaxLength(20) 
    @Matches(/^[a-zA-Z0-9]*$/,{
        message: "password should be a combination of alphabets and numerals"
    })
    password: string;

    @IsString()
    @Matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,{
        message: "email should be in form of example@mail.com"
    })
    email: string;
}