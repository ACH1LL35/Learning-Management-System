import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParentModule } from './parent/parent.module';

@Module({
  imports: [
    ParentModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'tiger',
      database: 'labtest',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Use STARTTLS
        auth: {
          user: 'zobayeralam1025@gmail.com', // Your Gmail email address
          pass: 'axpa nfuj virs fgbl', // Your Gmail password or app-specific password
        },
        tls: {
          // Optional TLS settings if needed
        }
      },
      defaults: {
        from: '"No Reply" <no-reply@example.com>', // Default sender address
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
