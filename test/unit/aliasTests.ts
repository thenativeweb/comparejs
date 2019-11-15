import { compare } from '../../lib/compare';
import 'should';

suite('alias', (): void => {
  test('eq x equal', async (): Promise<void> => {
    compare.eq(compare.eq(23, 23), compare.equal(23, 23)).should.equal(true);
  });

  test('ne x notEqual', async (): Promise<void> => {
    compare.eq(compare.ne(23, 23), compare.notEqual(23, 23)).should.equal(true);
  });

  test('gt x greaterThan', async (): Promise<void> => {
    compare.eq(compare.gt(23, 23), compare.greaterThan(23, 23)).should.equal(true);
  });

  test('ge x greaterThanOrEqual', async (): Promise<void> => {
    compare.eq(compare.gte(23, 23), compare.greaterThanOrEqual(23, 23)).should.equal(true);
  });

  test('lt x lessThan', async (): Promise<void> => {
    compare.eq(compare.lt(23, 23), compare.lessThan(23, 23)).should.equal(true);
  });

  test('le x lessThanOrEqual', async (): Promise<void> => {
    compare.eq(compare.lte(23, 23), compare.lessThanOrEqual(23, 23)).should.equal(true);
  });

  test('id x identical', async (): Promise<void> => {
    compare.eq(compare.id(23, 23), compare.identity(23, 23)).should.equal(true);
  });

  test('eqs x equalByStructure', async (): Promise<void> => {
    compare.eq(compare.eqs({ }, { }), compare.equalByStructure({ }, { })).should.equal(true);
  });

  test('nes x notEqualByStructure', async (): Promise<void> => {
    compare.eq(compare.nes({ }, { }), compare.notEqualByStructure({ }, { })).should.equal(true);
  });

  test('gts x greaterThanByStructure', async (): Promise<void> => {
    compare.eq(compare.gts({ }, { }), compare.greaterThanByStructure({ }, { })).should.equal(true);
  });

  test('ges x greaterThanOrEqualByStructure', async (): Promise<void> => {
    compare.eq(compare.gtes({ }, { }), compare.greaterThanOrEqualByStructure({ }, { })).should.equal(true);
  });

  test('lts x lessThanByStructure', async (): Promise<void> => {
    compare.eq(compare.lts({ }, { }), compare.lessThanByStructure({ }, { })).should.equal(true);
  });

  test('les x lessThanOrEqualByStructure', async (): Promise<void> => {
    compare.eq(compare.ltes({ }, { }), compare.lessThanOrEqualByStructure({ }, { })).should.equal(true);
  });
});
