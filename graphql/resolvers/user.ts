import { Resolver } from "./root"

export const Query: Resolver = {
  user() {
    return user
  }
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