import {ApolloError, AuthenticationError} from "apollo-server-micro";
import {PrismaClient,User} from "@prisma/client";
import { DataSource } from "apollo-datasource";

class PrismaDataSource extends DataSource {
    private user: User;
    
    constructor(public prisma: PrismaClient) {
        super();
      }


    async getUsers() {
        const users = await this.prisma.user.findMany();
        return users;
    }

}

export default PrismaDataSource;