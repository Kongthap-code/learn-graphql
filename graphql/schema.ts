import fs, { readSync } from "fs";
import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = fs.readFileSync("./graphql/typeDefs.gql", {
  encoding: "utf-8",
});

let schema = makeExecutableSchema({
  typeDefs: [typeDefs],
});

export default schema;
