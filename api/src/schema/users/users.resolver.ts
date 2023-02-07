import { Resolver, Query, Ctx, Authorized } from "type-graphql";
import { Users } from "@generated/type-graphql";
import { Context } from "../../middleware";

@Resolver(() => Users)
export class UserResolver {
  @Authorized()
  @Query(() => Users)
  me(@Ctx() context: Context) {
    if (!context.token?.sub) return null;
    return context.services.prisma.users.findUnique({
      where: { id: context.token.sub },
    });
  }
}
