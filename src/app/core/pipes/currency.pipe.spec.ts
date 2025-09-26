import { CurrencyPipe } from './currency.pipe';

describe('CurrencyPipe', () => {
  let pipe: CurrencyPipe;

  beforeEach(() => {
    pipe = new CurrencyPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format millions correctly', () => {
    expect(pipe.transform(2300000)).toBe('$2.3M');
    expect(pipe.transform(2800000)).toBe('$2.8M');
    expect(pipe.transform(1700000)).toBe('$1.7M');
    expect(pipe.transform(1900000)).toBe('$1.9M');
    expect(pipe.transform(1200000)).toBe('$1.2M');
    expect(pipe.transform(1400000)).toBe('$1.4M');
  });

  it('should format thousands correctly', () => {
    expect(pipe.transform(875000)).toBe('$875K');
    expect(pipe.transform(920000)).toBe('$920K');
    expect(pipe.transform(1500)).toBe('$1.5K');
    expect(pipe.transform(1000)).toBe('$1K');
    expect(pipe.transform(2000)).toBe('$2K');
  });

  it('should format billions correctly', () => {
    expect(pipe.transform(2300000000)).toBe('$2.3B');
    expect(pipe.transform(1500000000)).toBe('$1.5B');
    expect(pipe.transform(2000000000)).toBe('$2B');
    expect(pipe.transform(1000000000)).toBe('$1B');
  });

  it('should remove trailing .0 for whole numbers', () => {
    expect(pipe.transform(1000000)).toBe('$1M');
    expect(pipe.transform(2000000)).toBe('$2M');
    expect(pipe.transform(1000)).toBe('$1K');
    expect(pipe.transform(2000)).toBe('$2K');
    expect(pipe.transform(1000000000)).toBe('$1B');
    expect(pipe.transform(2000000000)).toBe('$2B');
  });

  it('should keep decimal places for non-whole numbers', () => {
    expect(pipe.transform(1100000)).toBe('$1.1M');
    expect(pipe.transform(1050000)).toBe('$1.1M'); // rounds up
    expect(pipe.transform(1500)).toBe('$1.5K');
    expect(pipe.transform(2300000000)).toBe('$2.3B');
  });

  it('should format small numbers correctly', () => {
    expect(pipe.transform(500)).toBe('$500');
    expect(pipe.transform(0)).toBe('$0');
  });

  it('should handle negative numbers', () => {
    expect(pipe.transform(-2300000)).toBe('-$2.3M');
    expect(pipe.transform(-1500)).toBe('-$1.5K');
  });

  it('should handle null and undefined', () => {
    expect(pipe.transform(null)).toBe('$0');
    expect(pipe.transform(undefined)).toBe('$0');
  });

  it('should handle NaN', () => {
    expect(pipe.transform(NaN)).toBe('$0');
  });
});
