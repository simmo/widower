import widower from '.';

describe('widower', () => {
  it('replaces last space', () => {
    expect(widower('word word word word')).toBe('word word word\u00A0word');
  });
});
