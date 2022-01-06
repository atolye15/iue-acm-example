import { Injectable } from '@nestjs/common';
import { authors } from 'src/models/mocks';
import { Post } from 'src/models/post.model';

interface Params {
  authorId: number;
}

@Injectable()
export class PostsService {
  findAll(params: Params) {
    const author = authors.find((a) => a.id === params.authorId);

    return author?.posts;
  }
}
