import {
  checkPassword,
  hashPassword,
  createAccessToken,
  verifyAccessToken,
  createRefreshToken,
  verifyRefreshToken,
} from "./crypto";

describe("crypto", () => {
  describe("hashPassword", () => {
    it("should hash a password", () => {
      const password = "password";
      const response = hashPassword("password");
      expect(password).not.toEqual(response);
      expect(checkPassword(password, response)).toBe(true);
    });
    it("should validate a correct password", () => {
      const password = "password";
      const response = hashPassword("password");
      expect(checkPassword(password, response)).toBe(true);
    });
    it("should throw an error on an incorrect password", () => {
      const password = "password";
      const response = hashPassword("password");
      expect(password).not.toEqual(response);
      try {
        checkPassword("incorrect", response);
        expect(true).toBe(false);
      } catch (error) {
        expect((error as Error).message).toBe("USER_PASSWORD_INCORRECT");
      }
    });
  });
  describe("token", () => {
    it("should create a valid access token", () => {
      const token = createAccessToken("access_test_id");
      expect(verifyAccessToken(token).sub).toEqual("access_test_id");
    });
    it("should create a valid refresh token", () => {
      const token = createRefreshToken("refresh_test_id");
      expect(verifyRefreshToken(token).sub).toEqual("refresh_test_id");
    });
    it("should throw an error if trying to verify the wrong token", () => {
      const token = createRefreshToken("refresh_test_id");
      try {
        expect(verifyAccessToken(token).sub).toEqual("refresh_test_id");
        expect(true).toBe(false);
      } catch (error) {
        expect((error as Error).message).toBe("invalid signature");
      }
    });
    it("should throw an error if trying to verify the wrong token", () => {
      const token = createAccessToken("refresh_test_id");
      try {
        expect(verifyRefreshToken(token).sub).toEqual("refresh_test_id");
        expect(true).toBe(false);
      } catch (error) {
        expect((error as Error).message).toBe("invalid signature");
      }
    });
  });
});
