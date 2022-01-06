import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }

  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field((type) => Int, { nullable: true })
  votes?: number;
}
