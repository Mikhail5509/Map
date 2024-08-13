import ErrorRepository from '../ErrorRepository';

describe('ErrorRepository', () => {
    let errorRepo;

    beforeEach(() => {
        errorRepo = new ErrorRepository();
        errorRepo.add(404, 'Not Found');
        errorRepo.add(500, 'Internal Server Error');
    });

    test('should return description for known error code', () => {
        expect(errorRepo.translate(404)).toBe('Not Found');
    });

    test('should return "Unknown error" for unknown error code', () => {
        expect(errorRepo.translate(123)).toBe('Unknown error');
    });

    test('should return description for error code 500', () => {
        expect(errorRepo.translate(500)).toBe('Internal Server Error');
    });
});
