import cmp from '../../lib/compare';
import 'should';

suite('falsy values', (): void => {
  suite('eq', (): void => {
    test(' 0 x 0', async (): Promise<void> => {
      cmp.eq(0, 0).should.equal(true);
    });

    test(' 0 x ""', async (): Promise<void> => {
      cmp.eq(0, '').should.equal(false);
    });

    test(' 0 x false', async (): Promise<void> => {
      cmp.eq(0, false).should.equal(false);
    });

    test(' 0 x null', async (): Promise<void> => {
      cmp.eq(0, null).should.equal(false);
    });

    test(' 0 x undefined', async (): Promise<void> => {
      cmp.eq(0, undefined).should.equal(false);
    });

    test('"" x 0', async (): Promise<void> => {
      cmp.eq('', 0).should.equal(false);
    });

    test('"" x ""', async (): Promise<void> => {
      cmp.eq('', '').should.equal(true);
    });

    test('"" x false', async (): Promise<void> => {
      cmp.eq('', false).should.equal(false);
    });

    test('"" x null', async (): Promise<void> => {
      cmp.eq('', null).should.equal(false);
    });

    test('"" x undefined', async (): Promise<void> => {
      cmp.eq('', undefined).should.equal(false);
    });

    test('false x 0', async (): Promise<void> => {
      cmp.eq(false, 0).should.equal(false);
    });

    test('false x ""', async (): Promise<void> => {
      cmp.eq(false, '').should.equal(false);
    });

    test('false x false', async (): Promise<void> => {
      cmp.eq(false, false).should.equal(true);
    });

    test('false x null', async (): Promise<void> => {
      cmp.eq(false, null).should.equal(false);
    });

    test('false x undefined', async (): Promise<void> => {
      cmp.eq(false, undefined).should.equal(false);
    });

    test('null x 0', async (): Promise<void> => {
      cmp.eq(null, 0).should.equal(false);
    });

    test('null x ""', async (): Promise<void> => {
      cmp.eq(null, '').should.equal(false);
    });

    test('null x false', async (): Promise<void> => {
      cmp.eq(null, false).should.equal(false);
    });

    test('null x null', async (): Promise<void> => {
      cmp.eq(null, null).should.equal(true);
    });

    test('null x undefined', async (): Promise<void> => {
      cmp.eq(null, undefined).should.equal(false);
    });

    test('undefined x 0', async (): Promise<void> => {
      cmp.eq(undefined, 0).should.equal(false);
    });

    test('undefined x ""', async (): Promise<void> => {
      cmp.eq(undefined, '').should.equal(false);
    });

    test('undefined x false', async (): Promise<void> => {
      cmp.eq(undefined, false).should.equal(false);
    });

    test('undefined x null', async (): Promise<void> => {
      cmp.eq(undefined, null).should.equal(false);
    });

    test('undefined x undefined', async (): Promise<void> => {
      cmp.eq(undefined, undefined).should.equal(true);
    });
  });
});
