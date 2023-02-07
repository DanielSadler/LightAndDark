import { buildSchemaSync } from "type-graphql";
import { authChecker } from "../middleware";

export const schema = buildSchemaSync({
  resolvers: [`${__dirname}/**/*.resolver.{ts,js}`],
  dateScalarMode: "isoDate",
  authChecker,
  authMode: "null",
});
