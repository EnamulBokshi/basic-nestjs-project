import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

    type AuthInput = {username: string, password: string};
    type SignInData = { userId: string, token: string, username: string };
    type AuthResponse = {userId: string, token: string, username: string};

@Injectable()
export class AuthService {

    constructor(private userService: UsersService, private jwtService: JwtService){
        this.userService = userService;
        this.jwtService = jwtService;
    }

    async validateUser(input: AuthInput): Promise<SignInData | null> {
        const user = await this.userService.findUserByName(input.username);
        if(!user || user.password !== input.password){
            return null;
        }
        return { userId: user.id, token: 'some-jwt-token', username: user.username };
    }

    async authenticateUser(input: AuthInput): Promise<AuthResponse | null> {
        const user = await this.userService.findUserByName(input.username);
        if(!user || user.password !== input.password){
            throw new UnauthorizedException('Invalid username or password');
        }
       return this.signIn({ userId: user.id, token: 'some-jwt-token', username: user.username });
    }

    async signIn(input: SignInData): Promise<AuthResponse | null> {
       const tokenPayload = {
        sub: input.userId,
        username: input.username
       }

       const token = await this.jwtService.signAsync(tokenPayload);
         return {userId: input.userId, token, username: input.username};
    }
}
