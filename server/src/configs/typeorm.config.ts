import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import 'dotenv/config'

export const typeORMConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DB_USER_ID,
    password: process.env.DB_USER_PASSWORD,
    database: 'nxt-post',
    autoLoadEntities: true,
    synchronize: true,
}