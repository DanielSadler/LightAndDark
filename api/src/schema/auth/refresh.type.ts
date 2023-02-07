import { InputType, Field } from "type-graphql";

@InputType()
export class RefreshInput {
  @Field()
  refresh_token: string;
}
