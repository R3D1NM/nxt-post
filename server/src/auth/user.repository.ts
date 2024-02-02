import { ConflictException, Injectable, InternalServerErrorException, Logger } from "@nestjs/common";
import User from "src/entity/user.entity";
import { DataSource, Repository } from "typeorm";
import { AuthSignUpDto } from "./dto/auth-signup.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(private dataSource : DataSource){
        super(User, dataSource.createEntityManager())
    }

    async createUser(authSignUpDto:AuthSignUpDto) : Promise<void> {
        const {username, password,email} = authSignUpDto
        const salt = await bcrypt.genSalt()
        const hashed = await bcrypt.hash(password,salt)
        const user = this.create({username,password:hashed,email})
        try {
            await this.save(user);
        } catch (error) {
            if(error.code === '23505'){
                throw new ConflictException(`username ${username} already exists`)
            } else {
                throw new InternalServerErrorException()
            }
        }
        Logger.log(`Created new user ${username}`)
    }
}