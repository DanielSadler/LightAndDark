import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { schema } from "./src/schema";
import { Context } from "./src/middleware";
import { logger } from "./src/services";

const PORT = process.env.PORT ?? 80;

export const app = async () => {
  const server = new ApolloServer({
    schema,
    context: (request) => new Context(request),
  });

  const { url } = await server.listen(PORT);
  logger().info(`Server is running, GraphQL Playground available at ${url}`);
};

app();
