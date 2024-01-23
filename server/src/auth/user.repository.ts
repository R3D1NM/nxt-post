import { Injectable } from "@nestjs/common";
import { User } from "src/entity/user.entity";
import { DataSource, Repository } from "typeorm";
import { AuthSignUpDto } from "./dto/auth-signup.dto";

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(private dataSource : DataSource){
        super(User, dataSource.createEntityManager())
    }

async createUser(authSignUpDto:AuthSignUpDto) : Promise<void> {
    const {username, password,email} = authSignUpDto
    const user = this.create({username,password,email})
    await this.save(user);
}
}