import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from 'src/config/config';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports:[
    UsersModule,
    JwtModule.register({
      global:true,
      secret: jwtConfig.secret,
      signOptions: {expiresIn: jwtConfig.expiration as any}
    })
  ]
})
export class AuthModule {}
