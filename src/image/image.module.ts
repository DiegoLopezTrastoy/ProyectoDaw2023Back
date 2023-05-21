import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  controllers: [ImageController],
  providers: [ImageService],
  imports: [
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', '../public'), // Ruta al directorio donde están las imágenes
  }),
  MulterModule.register({
    dest: '../public', // Directorio de almacenamiento de las imágenes
  }),
]
})
export class ImageModule {}
