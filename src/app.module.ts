import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { ProfileModule } from './profile/profile.module';
import { ProfileController } from './profile/profile.controller';

@Module({
  imports: [ProfileModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
