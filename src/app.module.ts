import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './events/events.controller';
import { Event } from './events/event.entity';
import { EventsModule } from './events/events.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nest-events',
    entities: [Event],
    synchronize: true
  }),
  TypeOrmModule.forFeature([Event]),
    EventsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }