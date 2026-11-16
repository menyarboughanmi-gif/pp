import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GgModule } from './gg/gg.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),GgModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
