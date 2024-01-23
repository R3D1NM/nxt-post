import { Injectable } from '@nestjs/common';
import { AuthSignUpDto } from './dto/auth-signup.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
    // Inject Repository
    constructor(
        @InjectRepository(UserRepository)
        private userRepository : UserRepository,
    ){}

    //Sign Up User
    async signUp(authSignUpDto:AuthSignUpDto): Promise<void>{
        await this.userRepository.createUser(authSignUpDto)
    }
}
