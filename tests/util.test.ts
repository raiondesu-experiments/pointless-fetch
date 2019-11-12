import { join, isBase } from '../src/util';

describe('isBase', () => {
  it('gives correct results', () => {
    expect(isBase('')).toBe(false);
    expect(isBase('//')).toBe(true);
    expect(isBase('//test')).toBe(true);
    expect(isBase('//test.com')).toBe(true);
    expect(isBase('https://test.com')).toBe(true);
    expect(isBase('https://t')).toBe(true);
    expect(isBase('https://')).toBe(false);
  });
});

describe('join', () => {
  it('joins correct urls', () => {
    const part1 = 'part1';
    const part2 = 'part2';
    const result = 'part1/part2';

    expect(join(part1, part2)).toBe(result);
  });

  it('joins slashed urls', () => {
    const part1 = 'part1/';
    const part2 = '/part2/';
    const result = 'part1/part2/';

    expect(join(part1, part2)).toBe(result);
  });

  it('joins joined urls', () => {
    const part1 = 'part1/part1';
    const part2 = 'part2/part2';
    const result = 'part1/part1/part2/part2';

    expect(join(part1, part2)).toBe(result);
  });

  it('joins incorrect urls', () => {
    const part1 = '//part1///part1//';
    const part2 = '/part2///part2';
    const result = '/part1/part1/part2/part2';

    expect(join(part1, part2)).toBe(result);
  });

  it('joins base system urls', () => {
    const part1 = 'http://domain1.com/part1/';
    const part2 = 'part2/part3';
    const result = 'http://domain1.com/part1/part2/part3';

    expect(join(part1, part2)).toBe(result);
  });
});
