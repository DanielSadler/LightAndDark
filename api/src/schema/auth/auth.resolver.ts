import { Resolver, Arg, Mutation, Ctx } from "type-graphql";
import { Users } from "@generated/type-graphql";
import { AuthenticationError } from "apollo-server";
import {
  checkPassword,
  createAccessToken,
  createRefreshToken,
  verifyRefreshToken,
} from "../../utils";
import { Auth } from "./auth.type";
import { Context } from "../../middleware";
import { LoginInput } from "./login.type";
import { RefreshInput } from "./refresh.type";

@Resolver(() => Users)
export class AuthResolver {
  @Mutation(() => Auth)
  async login(
    @Arg("loginData") loginData: LoginInput,
    @Ctx() context: Context
  ) {
    try {
      const user = await context.services.prisma.users.findFirst({
        where: {
          email: loginData.email,
        },
      });
      if (!user) throw new AuthenticationError("Invalid email or password");
      const validpass = checkPassword(
        loginData.password,
        user?.hashed_password ?? ""
      );
      if (validpass) {
        return {
          access_token: createAccessToken(user.id),
          refresh_token: createRefreshToken(user.id),
        };
      }
      return {};
    } catch (e) {
      context.log.error(e);
      throw new AuthenticationError("Invalid email or password");
    }
  }

  @Mutation(() => Auth)
  async refresh(
    @Arg("refreshData") refreshData: RefreshInput,
    @Ctx() context: Context
  ) {
    try {
      const token = verifyRefreshToken(refreshData.refresh_token);
      const user = await context.services.prisma.users.findUnique({
        where: {
          id: token.sub,
        },
      });
      if (!user) throw new AuthenticationError("Invalid token");
      return {
        access_token: createAccessToken(user.id),
        refresh_token: createRefreshToken(user.id),
      };
    } catch (e) {
      context.log.error(e);
      throw new AuthenticationError("Invalid token");
    }
  }
}
