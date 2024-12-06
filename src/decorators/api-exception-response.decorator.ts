import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
 

interface IExceptionExample { 
  errorCode: string;
  message: string;
};

export const ApiExceptionResponse = (statusCode: HttpStatus, examples: IExceptionExample[]) => {
  const formattedExamples = Object.fromEntries(
    Object.entries(examples).map(([key, example]) => [
      key,
      { summary: example.message, value: { statusCode, ...example, timestamp: new Date().toISOString() } },
    ]),
  );

  return applyDecorators(
    ApiResponse({ status: statusCode, content: { 'application/json': { examples: formattedExamples } } }),
  );
};
