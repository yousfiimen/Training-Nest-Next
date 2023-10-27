import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env.development.local', '.env.development'],
    isGlobal: true,

  }), UserModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
