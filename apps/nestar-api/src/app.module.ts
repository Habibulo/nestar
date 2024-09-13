import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { ComponentsModule } from './components/components.module';
import { DatabaseModule } from './database/database.module';
import { T } from './libs/types/common';
import { SocketModule } from './socket/socket.module';

@Module({
	imports: [
		ConfigModule.forRoot(), // ConfigModule = .env ni ichidagi datalarni olib beryapti
		GraphQLModule.forRoot({
			driver: ApolloDriver, //ApolloDriver => adapter
			playground: true,
			uploads: false,
			autoSchemaFile: true, // if enabled, GraphQL schema will be generated automatically
			formatError: (error: T) => {
				const graphQLFormattedError = {
					code: error?.extensions.code,
					message:
						   error?.extensions?.exception?.response?.message 
						|| error?.extensions?.response?.message 
						|| error?.message,
				};
				console.log('GRAPHQL ERROR:', graphQLFormattedError);
				return graphQLFormattedError;
			},
		}),
		ComponentsModule, // via HTTP
		DatabaseModule, // via TCP
		// TODO: Socket Connection
		SocketModule, // via TCP
	],
	controllers: [AppController], // via HTTP
	providers: [AppService, AppResolver],
})
export class AppModule { }
