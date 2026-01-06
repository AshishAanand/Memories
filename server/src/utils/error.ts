class AppError extends Error {
    constructor(message: string, public statusCode: number) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

class NotFoundError extends AppError {
    constructor(message: string = "Resource not found") {
        super(message, 404);
    }
}

class BadRequestError extends AppError {
    constructor(message: string = "Bad request") {
        super(message, 400);
    }
}

class UnauthorizedError extends AppError {
    constructor(message: string = "Unauthorized access") {
        super(message, 401);
    }
}

export { AppError, NotFoundError, BadRequestError, UnauthorizedError };