import { Injectable } from '@nestjs/common';
import {randomUUID} from 'crypto';
export type user = {
    id: string;
    username: string;
    password: string;
}

const users: user[] = [
    {
        id: randomUUID(),
        username: "john",
        password: "password"
    },
    {
        id: randomUUID(),
        username: "jane",
        password: "password"
    },
    {
        id: randomUUID(),
        username: "bob",
        password: "password"
    }
]

@Injectable()
export class UsersService {
    async findUserByName(username: string): Promise<user | undefined> {
        return users.find(user => user.username === username);
    };
    
}
