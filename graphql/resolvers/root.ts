import { PrismaClient } from "@prisma/client";
import PrismaDataSource from "../datasources/prisma";

import {
    Query as userQuery,
    Mutation as userMutation,
} from "./user"

interface DataSources {
    prisma: PrismaDataSource;
}

export interface Context {
    dataSources: DataSources;
    prisma: PrismaClient;
    [key: string]: any;
}

export interface Resolver {
    [key: string]: (parent: any, args: any, ctx: Context) => any;
}

type Resolvers = Resolver;

interface Root {
    Query: Resolvers;
    Mutation: Resolvers;
    // Subscription: Resolvers;
    [key: string]: Resolvers;
}

const resolvers: Root = {
    Query: {
        ...userQuery
    },
    Mutation: {
        ...userMutation
    }
}

export default resolvers