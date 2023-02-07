import { AuthChecker } from "type-graphql";
import { Context } from "../context";

export const authChecker: AuthChecker<Context> = async ({ context }) => {
  context.log.info(`Checking ${context.token?.sub ? "true" : "false"}`);
  return !!context.token?.sub;
};
