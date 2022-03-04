export class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

export class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.name = "UnauthorizedError";
    }
}

export class GlobalError extends Error {
    constructor(message) {
        super(message);
        this.name = "GlobalError";
    }
}
