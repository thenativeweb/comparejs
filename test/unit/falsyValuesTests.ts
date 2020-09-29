import { compare } from '../../lib/compare';
import 'should';

suite('falsy values', (): void => {
  suite('eq', (): void => {
    test(' 0 x 0', async (): Promise<void> => {
      compare.eq(0, 0).should.equal(true);
    });

    test(' 0 x ""', async (): Promise<void> => {
      compare.eq(0, '').should.equal(false);
    });

    test(' 0 x false', async (): Promise<void> => {
      compare.eq(0, false).should.equal(false);
    });

    test(' 0 x null', async (): Promise<void> => {
      compare.eq(0, null).should.equal(false);
    });

    test(' 0 x undefined', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      compare.eq(0, undefined).should.equal(false);
    });

    test('"" x 0', async (): Promise<void> => {
      compare.eq('', 0).should.equal(false);
    });

    test('"" x ""', async (): Promise<void> => {
      compare.eq('', '').should.equal(true);
    });

    test('"" x false', async (): Promise<void> => {
      compare.eq('', false).should.equal(false);
    });

    test('"" x null', async (): Promise<void> => {
      compare.eq('', null).should.equal(false);
    });

    test('"" x undefined', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      compare.eq('', undefined).should.equal(false);
    });

    test('false x 0', async (): Promise<void> => {
      compare.eq(false, 0).should.equal(false);
    });

    test('false x ""', async (): Promise<void> => {
      compare.eq(false, '').should.equal(false);
    });

    test('false x false', async (): Promise<void> => {
      compare.eq(false, false).should.equal(true);
    });

    test('false x null', async (): Promise<void> => {
      compare.eq(false, null).should.equal(false);
    });

    test('false x undefined', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      compare.eq(false, undefined).should.equal(false);
    });

    test('null x 0', async (): Promise<void> => {
      compare.eq(null, 0).should.equal(false);
    });

    test('null x ""', async (): Promise<void> => {
      compare.eq(null, '').should.equal(false);
    });

    test('null x false', async (): Promise<void> => {
      compare.eq(null, false).should.equal(false);
    });

    test('null x null', async (): Promise<void> => {
      compare.eq(null, null).should.equal(true);
    });

    test('null x undefined', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      compare.eq(null, undefined).should.equal(false);
    });

    test('undefined x 0', async (): Promise<void> => {
      compare.eq(undefined, 0).should.equal(false);
    });

    test('undefined x ""', async (): Promise<void> => {
      compare.eq(undefined, '').should.equal(false);
    });

    test('undefined x false', async (): Promise<void> => {
      compare.eq(undefined, false).should.equal(false);
    });

    test('undefined x null', async (): Promise<void> => {
      compare.eq(undefined, null).should.equal(false);
    });

    test('undefined x undefined', async (): Promise<void> => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      compare.eq(undefined, undefined).should.equal(true);
    });
  });
});
