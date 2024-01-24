import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignUpDto } from './dto/auth-signup.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    //Sign up new user
    @Post('/signup')
    @UsePipes(ValidationPipe)
    signUp(@Body() authSignUpDto : AuthSignUpDto): Promise<void> {
        return this.authService.signUp(authSignUpDto)
    }
}
