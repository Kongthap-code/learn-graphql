import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import schema from "./graphql/schema";
import resolvers from "./graphql/resolvers/root";
import PrismaDataSource from "./graphql/datasources/prisma";
import prisma from "./prisma/client";
import express from "express";
import http from "http";

async function startApolloServer(schema: any) {
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs:schema,
    resolvers,
    dataSources: () => ({
      prisma: new PrismaDataSource(prisma),
    }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise((resolve) =>
   httpServer.listen({ port: 4000 }, () => resolve(null))
   );

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);

}

startApolloServer(schema).then()