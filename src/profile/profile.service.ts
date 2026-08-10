import { Injectable } from '@nestjs/common';
import { CreateProfile } from './dto/create-profile.dto';
import {randomUUID} from 'crypto';
@Injectable()
export class ProfileService {
    private profiles: CreateProfile[] = [
        {
            id: randomUUID(),
            name: 'John Doe',
            age: 30
        },
        {
            id: randomUUID(), 
            name: 'Jane Smith',
            age: 25
        }
    ]
    findAll(): CreateProfile[]{
        return this.profiles;
    }
}



