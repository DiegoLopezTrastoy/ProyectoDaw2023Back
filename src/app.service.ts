import { Injectable } from '@nestjs/common';
import { UserService } from './user/user.service';
import { AvisoService } from './vecinos/aviso/aviso.service';
import { VecinoService } from './vecinos/vecino/vecino.service';

@Injectable()
export class AppService {

  constructor(
    private userSevice: UserService,
    private avisoService: AvisoService,
    private vecinoService: VecinoService
  ) {
    // this.executeSeed()
  }

  async executeSeed() {
    const user = await this.userSevice.create({nombre: 'Diego', email: 'sondiegolt@gmail.com', fecha_nacimiento: '19/07/2003', num_telefono: 658679811, imagen: 'no_image.jpg'});
    // const vecino = await this.vecinoService.create({comunidad});
    // this.avisoService.create({imagen: "no_image.jpg", texto: "Chapa rota", vecino});
  }

  getHello(): string {
    return 'Hello World!';
  }
}
