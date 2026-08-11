import { Controller, Get, Param, Query, Body, Post, Put, HttpStatus, Delete } from '@nestjs/common';
import { CreateProfile } from './dto/create-profile.dto';
import { ProfileService } from './profile.service';

@Controller('profiles')
export class ProfileController {

    constructor(private  profileService: ProfileService){}
    // GET /profiles
    @Get()
    getProfiles(){
        return this.profileService.findAll();
    }

    // GET /profiles/:id
    @Get(":id")
    getProfileById(@Param('id') id:string){
        console.log(id);
        return {id, name: 'John Doe', age: 30};
    }

    //POST /profiles
    @Post() 
    createProfile(@Body() profileData: CreateProfile){
        console.log(profileData);
        const newProfile = this.profileService.create(profileData);
        if(!newProfile){
            return {message: 'Failed to create profile'};
        }
        return {
            status: HttpStatus.CREATED,
            message: 'Profile created successfully', 
            data: {
                id: profileData.id,
                name: profileData.name,
                age: profileData.age
            }
        };
    }


    //PUT /profiles/:id
    @Put(":id")
    updateProfile(@Param('id') id: string, @Body() profileData: CreateProfile){
        console.log(id, profileData);
        return {message: 'Profile updated successfully', id, profileData};
    }

    @Delete(":id")
    deleteProfile(@Param('id') id: string){
        return this.profileService.delete(id) ? {message: 'Profile deleted successfully'} : {message: 'Failed to delete profile'};
    }
}
