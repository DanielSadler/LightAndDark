import bcryptjs from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

export interface Token {
  exp: number;
  sub: string;
}

const accessTokenSecret = process.env.JWT_SECRET ?? "";
const refreshTokenSecret = process.env.REFRESH_SECRET ?? "";
const saltRounds = 10;

export function hashPassword(password: string): string {
  const salt = bcryptjs.genSaltSync(saltRounds);
  return bcryptjs.hashSync(password, salt);
}

export function checkPassword(password: string, hashedPassword: string) {
  const isCorrect = bcryptjs.compareSync(password, hashedPassword);
  if (!isCorrect) {
    throw new Error("USER_PASSWORD_INCORRECT");
  }
  return true;
}

export const createAccessToken = (sub: string) =>
  jsonwebtoken.sign(
    {
      exp: Math.floor(new Date().getTime() / 1000) + 900,
      sub,
    },
    accessTokenSecret
  );
export const createRefreshToken = (sub: string) =>
  jsonwebtoken.sign(
    {
      exp: Math.floor(new Date().getTime() / 1000) + 86400,
      sub,
    },
    refreshTokenSecret
  );

export const verifyAccessToken = (token: string): Token =>
  jsonwebtoken.verify(token, accessTokenSecret) as Token;

export const verifyRefreshToken = (token: string): Token =>
  jsonwebtoken.verify(token, refreshTokenSecret) as Token;
