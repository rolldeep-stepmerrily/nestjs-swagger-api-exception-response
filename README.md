# nestjs-swagger-api-exception-response

Exception Response Decorator for NestJS Swagger Documentation

## Installation

```bash
npm install nestjs-swagger-api-exception-response
```

## Usage

```typescript
import { ApiExceptionResponse } from 'nestjs-swagger-api-exception-response';
import { HttpStatus } from '@nestjs/common';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @ApiExceptionResponse(HttpStatus.BAD_REQUEST, [
    { errorCode: 'E001', message: 'Invalid input' },
    { errorCode: 'E002', message: 'Data ID is required' },
    { errorCode: 'E003', message: 'Data name must be string' },
  ])
  @ApiExceptionResponse(HttpStatus.NOT_FOUND, [
    { errorCode: 'E004', message: 'Data not found' },
  ])
  @Post()
  async getData(@Body() body: BodyDto ) {
    return await this.exampleService.getData(body);
  }
}
```

## Swagger UI Example

![Swagger UI Example](https://d1zuvtsumd8p96.cloudfront.net/examples/swagger.png)


## Response Example

```json
{
  "statusCode": 400,
  "errorCode": "E001",
  "message": "Invalid input",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

