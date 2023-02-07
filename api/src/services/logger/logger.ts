import pino from "pino";

const loggingLevel = process.env.LOGGING_LEVEL || "debug";

export const logger = (name?: string) =>
  pino({
    level: loggingLevel,
    name,
    serializers: pino.stdSerializers,
  });
