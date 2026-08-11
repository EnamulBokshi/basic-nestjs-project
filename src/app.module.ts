import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { ProfileModule } from './profile/profile.module';
import { ProfileController } from './profile/profile.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProfileModule, UsersModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
