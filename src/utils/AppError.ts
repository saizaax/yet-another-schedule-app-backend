export class AppError extends Error {
  statusCode: number

  constructor(statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode
  }
}

export class BadRequestError extends AppError {
  constructor(message = "Bad Request") {
    super(400, message)
  }
}

export class NotFoundError extends AppError {
  constructor(message = "Not Found") {
    super(404, message)
  }
}
