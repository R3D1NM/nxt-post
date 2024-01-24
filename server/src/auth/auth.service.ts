import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthSignUpDto } from './dto/auth-signup.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    // Inject Repository
    constructor(
        @InjectRepository(UserRepository)
        private userRepository : UserRepository,
        private jwtService : JwtService
    ){}

    //Sign Up User
    async signUp(authSignUpDto:AuthSignUpDto): Promise<void>{
        await this.userRepository.createUser(authSignUpDto)
    }

    //User Login
    async login(authCredentialDto : AuthCredentialDto): Promise<{accessToken:string}>{
        const {username,password} = authCredentialDto
        const user = await this.userRepository.findOneBy({username})
        if(user&& (await bcrypt.compare(password,user.password))){
            const payload = {username}
            const accessToken = await this.jwtService.sign(payload)
            return {accessToken}
        } else {
            throw new UnauthorizedException("Login Failed")
        }
    }
}
