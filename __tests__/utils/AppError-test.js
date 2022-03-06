import {GlobalError, UnauthorizedError, ValidationError} from "../../src/utils/AppError";

describe('Navigation Helper', () => {
    it('create validation error properly', () => {
        const err = new ValidationError('error');
        expect(err.name).toEqual('ValidationError');
        expect(err.message).toEqual('error')
    });

    it('create unauthorized error properly', () => {
        const err = new UnauthorizedError('error');
        expect(err.name).toEqual('UnauthorizedError');
        expect(err.message).toEqual('error')
    });

    it('create global error properly', () => {
        const err = new GlobalError('error');
        expect(err.name).toEqual('GlobalError');
        expect(err.message).toEqual('error')
    });
})
