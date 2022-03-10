import { Response, Request, NextFunction } from 'express';
import { CelebrateError } from 'celebrate';

import { AppError } from '../errors/AppError';
import { string, ValidationError } from 'yup';

interface ValidationErrors {
  message: string;
}

const errorsHandler = (
  error: Error | AppError,
  _request: Request,
  response: Response,
  _: NextFunction,
): Response => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  if (error instanceof CelebrateError) {
    const errors: ValidationErrors[] = [];
    error.details.forEach(err => {
      err.details.forEach(detail => {
        errors.push({ message: detail.message });
      });
    });

    return response.status(400).json({ message: 'validation fails', errors });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal Server Error - ${error.message}`,
  });
};

export { errorsHandler };
