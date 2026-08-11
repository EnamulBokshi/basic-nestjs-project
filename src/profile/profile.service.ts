import { Injectable, NotFoundException } from '@nestjs/common';
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

    findOne(id: string): CreateProfile | undefined {

        const profile = this.profiles.find(profile => profile.id === id);
        if(!profile){
            throw new NotFoundException(`Profile with id ${id} not found`);

        }

        return profile;
    } 

    create(profile:CreateProfile): CreateProfile | undefined {
        const newProfile = this.profiles.push(profile);

        return newProfile?profile:undefined;
    }
    delete(id: string): boolean {
        const index = this.profiles.findIndex(profile => profile.id === id);
        if (index !== -1) {
            this.profiles.splice(index, 1);
            return true;
        }
        return false;
    }
}



