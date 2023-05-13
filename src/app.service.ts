import { Injectable } from '@nestjs/common';
import { UserService } from './user/user.service';

@Injectable()
export class AppService {

  constructor(
    private usersevice: UserService
  ) {
    this.executeSeed()
  }

  executeSeed() {
    this.usersevice.create({nombre: 'Diego', email: 'sondiegolt@gmail.com', fecha_nacimiento: '19/07/2003', num_telefono: 658679811, imagen: 'no_image.jpg'});
  }

  getHello(): string {
    return 'Hello World!';
  }
}
