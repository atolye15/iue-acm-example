import { Injectable } from '@nestjs/common';
import { authors } from 'src/models/mocks';

@Injectable()
export class AuthorsService {
  findAll() {
    return authors;
  }

  findOneById(id: number) {
    return authors.find((a) => a.id === id);
  }
}
