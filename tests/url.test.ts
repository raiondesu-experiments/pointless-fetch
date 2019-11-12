import { join, query, subUrl } from '../src/url';

describe('joinUrls', () => {
  it('joins correct urls', () => {
    const part1 = 'part1';
    const part2 = 'part2';
    const result = 'part1/part2';

    expect(join([part1, part2])).toBe(result);
  });

  it('joins with custom separator', () => {
    const part1 = 'part1';
    const part2 = 'part2';
    const result = 'part1,part2';

    expect(join([part1, part2], ',')).toBe(result);
  });

  it('joins slashed urls', () => {
    const part1 = 'part1/';
    const part2 = '/part2/';
    const result = 'part1/part2/';

    expect(join([part1, part2])).toBe(result);
  });

  it('joins joined urls', () => {
    const part1 = 'part1/part1';
    const part2 = '/part2/part2';
    const result = 'part1/part1/part2/part2';

    expect(join([part1, part2])).toBe(result);
  });

  it('joins incorrect urls', () => {
    const part1 = '//part1///part1//';
    const part2 = '/part2///part2';
    const result = '/part1/part1/part2/part2';

    expect(join([part1, part2])).toBe(result);
  });
});

describe('subUrl', () => {
  it('is a string', () => {
    expect(String(subUrl)).toBe('');
  });

  it('returns a string', () => {
    const base = '/base';

    expect(String(subUrl(base))).toBe(base);
  });

  it('returns a function', () => {
    const base = '/base';

    expect(typeof subUrl(base)).toBe('function');
  });

  it('returns itself, based', () => {
    const base = '/base';
    const sub = '/sub';
    const result = '/base/sub';
    const sub2 = '/sub2';
    const result2 = '/base/sub/sub2';

    const subUrl1 = subUrl(base)(sub);

    expect(String(subUrl1)).toBe(result);
    expect(typeof subUrl1).toBe('function');

    const subUrl2 = subUrl1(sub2);

    expect(String(subUrl2)).toBe(result2);
    expect(typeof subUrl2).toBe('function');
  });

  it('accepts a function', () => {
    const base = '/base';
    const baseUrl = subUrl(base);

    const sub = baseUrl((id: number) => `${id}/sub`);
    const result = (id: number) => `/base/${id}/sub`;

    const id = Math.random();

    expect(typeof sub).toBe('function');
    expect(String(sub(id))).toBe(result(id));
  });

});
