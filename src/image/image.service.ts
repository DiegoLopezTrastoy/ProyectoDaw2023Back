import { Injectable } from '@nestjs/common';
import { Response as Respost } from 'express';
import * as fs from 'fs/promises';
import * as path from 'path';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ImageService {
  async create(file: Express.Multer.File) {
    try {
      const buffer = await fs.readFile(file.path);
      file.originalname = uuid()+file.originalname;
      const filePath = path.join(__dirname, '..', '..', 'public', file.originalname);
      await fs.writeFile(filePath, buffer);
      return { file };
    } catch (error) {
      console.log(error);
      throw error;
      
    }
  }

  findOne(filename: string, res: Respost) {
    return res.status(200).sendFile(filename, { root: 'public' });
  }
}
