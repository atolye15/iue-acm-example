import { Author } from './author.model';
import { Post } from './post.model';

const John = new Author(1, 'John', 'Doe');
const Berry = new Author(2, 'Berry', 'Simpson');
const Eric = new Author(3, 'Eric', 'Coni');

John.posts.push(new Post(1, 'Hello World!'), new Post(2, 'And Hello Mars!'));
Eric.posts.push(new Post(3, 'Hey John!'));

export const authors: Author[] = [John, Berry, Eric];
