import { calculateTotal } from './test';

describe('calculateTotal', () => {
    it('should calculate total correctly', () => {
        const items = [
            { price: 10, quantity: 2 },
            { price: 15, quantity: 1 },
            { price: 20, quantity: 3 }
        ];
        expect(calculateTotal(items)).toBe(95);
    });
}); 