import { ApolloError, AuthenticationError } from "apollo-server-micro";
import { PrismaClient, User } from "@prisma/client";
import bcrypt from "bcryptjs";
import { signJWT } from "../../utils/auth";
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

    async createUser(args) {
        const usernameExist = await this.prisma.user.findUnique({
            where: { username: args.username },
        });

        if (usernameExist)
            return new ApolloError('username already in use", "USERNAME_EXIST"')

        const hash = bcrypt.hashSync(args.password, 10);
        
        const user = await this.prisma.user.create({
            data: {
                username: args.username,
                name: args.name,
                password: hash,
            },
        });

        return signJWT(user.user_id);
    }

    async login(args) {
        const user = await this.prisma.user.findUnique({
            where: {username: args.username},
        })
        if(!user) return new AuthenticationError("no user with username given found")

        if(!bcrypt.compareSync(args.password,user.password))
            return new AuthenticationError("password error");
        
        return signJWT(user.user_id);
    }

}

export default PrismaDataSource;