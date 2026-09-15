export function ExhibitionTitle() {
  const glyphs = 'creative works'.split('').map((glyph, index) => (
    <span className="title-glyph" key={`${glyph}-${index}`}>
      {glyph === ' ' ? '\u00a0' : glyph}
    </span>
  ));

  return (
    <h1 className="display-title" aria-label="creative works exhibition">
      <span className="title-line-one" aria-hidden="true">
        {glyphs}
      </span>
      <span className="title-line-two" aria-hidden="true">
        exhibition
      </span>
    </h1>
  );
}
