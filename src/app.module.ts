import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { ServiceModule } from './service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ApiModule, ServiceModule, ScheduleModule.forRoot()],
})
export class AppModule {}
