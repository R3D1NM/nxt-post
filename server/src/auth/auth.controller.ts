import { Body, Controller, Get, Post, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignUpDto } from './dto/auth-signup.dto';
import { Logger } from '@nestjs/common';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { GetUser } from './getUser.decorator';
import { User } from 'src/entity/user.entity';
import { AuthGuard } from '@nestjs/passport';

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

    //Sign up new user
    @Post('/login')
    @UsePipes(ValidationPipe)
    async login(@Body() authCredentialDto : AuthCredentialDto, @Res({ passthrough: true }) res : any): Promise<{result: string,accessToken:string}> {
        return await this.authService.login(authCredentialDto,res)
    }

    @Get('/validate')
    @UseGuards(AuthGuard('jwt'))
    validate(@GetUser() user:User): User{
        return user
    }

}
