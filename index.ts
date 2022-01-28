import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import schema from "./graphql/schema";
import resolvers from "./graphql/resolvers/resolvers"
import express from "express";
import http from "http";

async function startApolloServer(schema: any, resolvers: any) {
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(schema, resolvers).then();
