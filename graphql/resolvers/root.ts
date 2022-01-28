import {
    Query as userQuery,
    Mutation as userMutation,
} from "./user"

export interface Resolver {
    [key: string]: () => any;
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

export default  resolvers