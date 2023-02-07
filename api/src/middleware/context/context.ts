import { PrismaClient } from "@prisma/client";
import { Request } from "express";
import pino from "pino";
import { prisma, logger } from "../../services";
import { Token, verifyAccessToken } from "../../utils";

export interface ContextInput {
  req: Request;
}

interface Services {
  prisma: PrismaClient;
}

export class Context {
  public token?: Token | null;

  public services: Services;

  public log: pino.Logger;

  constructor(variables: ContextInput) {
    if (variables.req.headers.authorization) {
      try {
        this.token = verifyAccessToken(variables.req.headers.authorization);
      } catch {
        this.token = null;
      }
    }
    this.services = {
      prisma,
    };
    this.log = logger().child({ token: this.token });
  }
}
