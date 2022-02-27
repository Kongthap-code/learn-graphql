import { Resolver } from "./root"

export const Query: Resolver = {
  user(_, args, ctx) {
    return ctx.dataSources.prisma.getUsers();
  },
}

export const Mutation: Resolver = {
  register(_, args, ctx) {
    return ctx.dataSources.prisma.createUser(args);
  },
}