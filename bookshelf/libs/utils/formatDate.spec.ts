import { formatDate } from "./formatDate";

describe('formatDate', () => {
    it('should format', () => {
        expect(formatDate('2026-01-01')).toEqual('Jan 1, 2026');
    });
});