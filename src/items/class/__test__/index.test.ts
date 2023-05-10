import { execClass } from '..';

test('test execClass', () => {
  let incCount = 0;
  class A {
    private a;
    constructor(a: number) {
      this.a = a;
    }
    inc(count: number): number {
      this.a += count;
      incCount++;
      return this.a;
    }
  }

  let res = execClass(A, ['A', 'inc', 'inc', 'inc'], [[5], [2], [3], [4]]);

  expect(res).toEqual([null, 7, 10, 14]);
  expect(incCount).toEqual(3);
});
