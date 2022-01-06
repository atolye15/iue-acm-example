import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsResolver } from './resolvers/author.resolver';
import { AuthorsService } from './services/author.service';
import { PostsService } from './services/post.service';

@Module({
  imports: [GraphQLModule.forRoot({ path: '/graphql', autoSchemaFile: true })],
  controllers: [AppController],
  providers: [AppService, AuthorsResolver, AuthorsService, PostsService],
})
export class AppModule {}
