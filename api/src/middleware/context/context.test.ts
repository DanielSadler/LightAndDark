import {
  createAccessToken,
  createRefreshToken,
  verifyAccessToken,
} from "../../utils";
import { Context } from "./context";

describe("context", () => {
  it("should create a context", () => {
    const context = new Context({ req: { headers: {} } } as any);
    expect(context).toBeTruthy();
  });
  it("should create a context with a valid token if valid", () => {
    const token = createAccessToken("test_id");
    const context = new Context({
      req: { headers: { authorization: token } },
    } as any);
    expect(context).toBeTruthy();
    expect(context.token).toEqual(verifyAccessToken(token));
  });
  it("should create a context with no token if invalid", () => {
    const token = createRefreshToken("test_id");
    const context = new Context({
      req: { headers: { authorization: token } },
    } as any);
    expect(context).toBeTruthy();
    expect(context.token).toEqual(null);
  });
});
