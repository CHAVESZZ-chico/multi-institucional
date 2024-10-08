import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesModule } from './services/services.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [ServicesModule, EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
