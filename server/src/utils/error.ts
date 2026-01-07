class AppError extends Error {
    public readonly statusCode: number;
    public readonly isOperational: boolean;

    constructor(message: string, statusCode: number, isOperational: boolean = true) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.isOperational = isOperational;

        Object.setPrototypeOf(this, AppError.prototype);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

class NotFoundError extends AppError {
    constructor(message: string = "Resource not found") {
        super(message, 404, true);
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}

class BadRequestError extends AppError {
    constructor(message: string = "Bad request") {
        super(message, 400, true);
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}

class UnauthorizedError extends AppError {
    constructor(message: string = "Unauthorized access") {
        super(message, 401, true);
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}

class InternalServerError extends AppError {
    constructor(message: string = "Internal server error") {
        super(message, 500, false);
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
}

export { AppError, NotFoundError, BadRequestError, UnauthorizedError, InternalServerError };