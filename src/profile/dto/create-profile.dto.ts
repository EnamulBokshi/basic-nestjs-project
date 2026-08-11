import { IsNotEmpty, IsString, IsNumber, MinLength, MaxLength} from 'class-validator'
export class CreateProfile{
    @IsNotEmpty()
    @IsString()
    id:string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    name:string;

    @IsNotEmpty()
    @IsNumber()

    age:number;
//     constructor(id:string, name:string, age:number){
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
}