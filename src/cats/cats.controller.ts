import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('cats')
export class CatsController {
 @Get()
 getCats(){
  return 'This is the cats endpoint';
 }
 @Post()
 createCat(){
  return 'This action adds a new cat';
 }
}