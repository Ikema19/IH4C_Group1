import type { Express, Request, Response, NextFunction } from "express";
import { Exception } from "@/utils/exception";
import logger from "@/utils/logger";

type ErrorResponse = {
  message: string;
};

const defaultErrorResponse = {
  status: 500,
  body: {
    message: "予期せぬエラーが発生しました",
  },
} as const;

export const errorHandling = (app: Express) => {
  app.use(
    (
      error: Error,
      _: Request,
      res: Response<ErrorResponse>,
      __: NextFunction,
    ) => {
      if (error instanceof Exception) {
        if (error.isInternalError) logger.error(error.stack || error.message);

        const status = error.status;
        const body = {
          message: error.message,
        };

        res.status(status).send(body);
        return;
      }
      logger.error(error.stack || error.message);

      res.status(defaultErrorResponse.status).send(defaultErrorResponse.body);
    },
  );
};
