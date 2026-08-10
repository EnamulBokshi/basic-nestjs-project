import { Controller, Get, Param, Query, Body, Post } from '@nestjs/common';

@Controller('profiles')
export class ProfileController {
    // GET /profiles
    @Get()
    getProfiles(@Query('query') query:string){
        console.log(query);
        return [{query}, {name: 'John Doe', age: 30}, {name: 'Jane Smith', age: 25}];
    }

    // GET /profiles/:id
    @Get(":id")
    getProfileById(@Param('id') id:string){
        console.log(id);
        return {id, name: 'John Doe', age: 30};
    }

    //POST /profiles
    @Post() 
    createProfile(@Body() profileData: any){
        console.log(profileData);
        return {message: 'Profile created successfully', profileData};
    }


    //PUT /profiles/:id

}
