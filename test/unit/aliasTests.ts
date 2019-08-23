import cmp from '../../lib/compare';
import 'should';

suite('alias', (): void => {
  test('eq x equal', async (): Promise<void> => {
    cmp.eq(cmp.eq(23, 23), cmp.equal(23, 23)).should.equal(true);
  });

  test('ne x notEqual', async (): Promise<void> => {
    cmp.eq(cmp.ne(23, 23), cmp.notEqual(23, 23)).should.equal(true);
  });

  test('gt x greaterThan', async (): Promise<void> => {
    cmp.eq(cmp.gt(23, 23), cmp.greaterThan(23, 23)).should.equal(true);
  });

  test('ge x greaterThanOrEqual', async (): Promise<void> => {
    cmp.eq(cmp.gte(23, 23), cmp.greaterThanOrEqual(23, 23)).should.equal(true);
  });

  test('lt x lessThan', async (): Promise<void> => {
    cmp.eq(cmp.lt(23, 23), cmp.lessThan(23, 23)).should.equal(true);
  });

  test('le x lessThanOrEqual', async (): Promise<void> => {
    cmp.eq(cmp.lte(23, 23), cmp.lessThanOrEqual(23, 23)).should.equal(true);
  });

  test('id x identical', async (): Promise<void> => {
    cmp.eq(cmp.id(23, 23), cmp.identity(23, 23)).should.equal(true);
  });

  test('eqs x equalByStructure', async (): Promise<void> => {
    cmp.eq(cmp.eqs({ }, { }), cmp.equalByStructure({ }, { })).should.equal(true);
  });

  test('nes x notEqualByStructure', async (): Promise<void> => {
    cmp.eq(cmp.nes({ }, { }), cmp.notEqualByStructure({ }, { })).should.equal(true);
  });

  test('gts x greaterThanByStructure', async (): Promise<void> => {
    cmp.eq(cmp.gts({ }, { }), cmp.greaterThanByStructure({ }, { })).should.equal(true);
  });

  test('ges x greaterThanOrEqualByStructure', async (): Promise<void> => {
    cmp.eq(cmp.gtes({ }, { }), cmp.greaterThanOrEqualByStructure({ }, { })).should.equal(true);
  });

  test('lts x lessThanByStructure', async (): Promise<void> => {
    cmp.eq(cmp.lts({ }, { }), cmp.lessThanByStructure({ }, { })).should.equal(true);
  });

  test('les x lessThanOrEqualByStructure', async (): Promise<void> => {
    cmp.eq(cmp.ltes({ }, { }), cmp.lessThanOrEqualByStructure({ }, { })).should.equal(true);
  });
});
