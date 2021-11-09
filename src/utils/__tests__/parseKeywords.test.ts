import parseKeywords from '../parseKeywords';

describe('parseKeywords', () => {
  it('simple cases', () => {
    assert('a', ['a']);
    assert('a b', ['a', 'b']);
    assert('a b;c,d  e', ['a', 'b', 'c', 'd', 'e']);
    assert('x:y;z, ;\t t', ['x:y', 'z', 't']);
  });
  it('with quotes', () => {
    assert('"aei"', ['aei']);
    assert('"a e i"', ['a e i']);
    assert('"""hello"""', ['"hello"']);
    assert('"my prop":"my value"', ['my prop:my value']);
    assert('   a:"bc"""" "" de"  e ', ['a:bc"" " de', 'e']);
  });
});

/**
 * Assert.
 *
 * @param keywords - String.
 * @param result - Result.
 */
function assert(keywords: string, result: string[]) {
  expect(parseKeywords(keywords)).toStrictEqual(result);
}
