import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find({where: {activo: true}});
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({id, activo: true});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user: User = await this.userRepository.findOneBy({id});
    if (user) {
      Object.assign(user, updateUserDto);
      return this.userRepository.save(user);
    }
  }

  async remove(id: number) {
    const user: User = await this.userRepository.findOneBy({id});
    if (user) {
      user.activo = false;
      this.userRepository.save(user);
    }
  }
}
