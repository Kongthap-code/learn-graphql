import { Resolver } from "./root"

export const Query: Resolver = {
  user(_, args, ctx) {
    return ctx.dataSources.prisma.getUsers();
  },
}

export const Mutation: Resolver = {
  login() {
    return user
  }
}

const user = [
  {
    id: 1,
    name: 'Kongthap Phuengsang',
  },
  {
    id: 2,
    name: 'Thanawat Yodnil',
  }
];