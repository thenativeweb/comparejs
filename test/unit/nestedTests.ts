import cmp from '../../lib/compare';
import 'should';

suite('cmp', (): void => {
  suite('eq', (): void => {
    test('both equal => true', async (): Promise<void> => {
      const first = {
        name: 'foo',
        value: 42,
        nested: {
          empty: null,
          valid: true,
          items: [ 1, 2, 3 ]
        }
      };

      const second = {
        name: 'foo',
        value: 42,
        nested: {
          empty: null,
          valid: true,
          items: [ 1, 2, 3 ]
        }
      };

      cmp.eq(first, second).should.equal(true);
    });

    test('not equal on first level => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        value: 23,
        nested: {
          empty: null,
          valid: true,
          items: [ 1, 2, 3 ]
        }
      };

      const second = {
        name: 'foo',
        value: 42,
        nested: {
          empty: null,
          valid: true,
          items: [ 1, 2, 3 ]
        }
      };

      cmp.eq(first, second).should.equal(false);
    });

    test('missing property on first level => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        nested: {
          empty: null,
          valid: true,
          items: [ 1, 2, 3 ]
        }
      };

      const second = {
        name: 'foo',
        value: 42,
        nested: {
          empty: null,
          valid: true,
          items: [ 1, 2, 3 ]
        }
      };

      cmp.eq(first, second).should.equal(false);
    });

    test('not equal on second level => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        value: 42,
        nested: {
          empty: null,
          valid: true,
          items: [ 1, 2, 3 ]
        }
      };

      const second = {
        name: 'foo',
        value: 42,
        nested: {
          empty: null,
          valid: false,
          items: [ 1, 2, 3 ]
        }
      };

      cmp.eq(first, second).should.equal(false);
    });

    test('missing property on second level => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        value: 42,
        nested: {
          empty: null,
          valid: true,
          items: [ 1, 2, 3 ]
        }
      };

      const second = {
        name: 'foo',
        value: 42,
        nested: {
          empty: null,
          items: [ 1, 2, 3 ]
        }
      };

      cmp.eq(first, second).should.equal(false);
    });

    test('empty object and empty array on second level => false', async (): Promise<void> => {
      const first = { foo: 'bar', baz: {}};
      const second = { foo: 'bar', baz: []};

      cmp.eq(first, second).should.equal(false);
    });
  });

  suite('eqs', (): void => {
    test('both equal => true', async (): Promise<void> => {
      const first = {
        name: 'foo',
        value: 42,
        nested: {
          empty: null,
          valid: true,
          items: [ 1, 2, 3 ]
        }
      };

      const second = {
        name: 'foo',
        value: 42,
        nested: {
          empty: null,
          valid: true,
          items: [ 1, 2, 3 ]
        }
      };

      cmp.eqs(first, second).should.equal(true);
    });

    test('not equal on first level => true', async (): Promise<void> => {
      const first = {
        name: 'foo',
        value: 23,
        nested: {
          empty: null,
          valid: true,
          items: [ 1, 2, 3 ]
        }
      };

      const second = {
        name: 'foo',
        value: 42,
        nested: {
          empty: null,
          valid: true,
          items: [ 1, 2, 3 ]
        }
      };

      cmp.eqs(first, second).should.equal(true);
    });

    test('missing property on first level => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        nested: {
          empty: null,
          valid: true,
          items: [ 1, 2, 3 ]
        }
      };

      const second = {
        name: 'foo',
        value: 42,
        nested: {
          empty: null,
          valid: true,
          items: [ 1, 2, 3 ]
        }
      };

      cmp.eqs(first, second).should.equal(false);
    });

    test('not equal on second level => true', async (): Promise<void> => {
      const first = {
        name: 'foo',
        value: 42,
        nested: {
          empty: null,
          valid: true,
          items: [ 1, 2, 3 ]
        }
      };

      const second = {
        name: 'foo',
        value: 42,
        nested: {
          empty: null,
          valid: false,
          items: [ 1, 2, 3 ]
        }
      };

      cmp.eqs(first, second).should.equal(true);
    });

    test('missing property on second level => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        value: 42,
        nested: {
          empty: null,
          valid: true,
          items: [ 1, 2, 3 ]
        }
      };

      const second = {
        name: 'foo',
        value: 42,
        nested: {
          empty: null,
          items: [ 1, 2, 3 ]
        }
      };

      cmp.eqs(first, second).should.equal(false);
    });
  });
});
