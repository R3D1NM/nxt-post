import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { JwtModule } from '@nestjs/jwt';
import 'dotenv/config'

@Module({
  controllers: [AuthController],
  providers: [AuthService,UserRepository],
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret:process.env.JWT_SECRET,
      signOptions:{
        expiresIn: 60*60*24
      }
    })
  ]
})
export class AuthModule {}
