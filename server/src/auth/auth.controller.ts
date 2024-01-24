import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignUpDto } from './dto/auth-signup.dto';
import { Logger } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    //Sign up new user
    @Post('/signup')
    @UsePipes(ValidationPipe)
    async signUp(@Body() authSignUpDto : AuthSignUpDto): Promise<void> {
        Logger.log(`Signup Request`)
        return await this.authService.signUp(authSignUpDto)
    }
}
