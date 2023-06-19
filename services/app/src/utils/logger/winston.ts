import winston from "winston";

const mebi = 1 << 20;
const maxLogSize = 5 * mebi; // 5MB

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({
      filename: "log/error.log",
      level: "error",
      maxsize: maxLogSize,
    }),
    new winston.transports.File({
      filename: "log/combined.log",
      maxsize: maxLogSize,
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}
