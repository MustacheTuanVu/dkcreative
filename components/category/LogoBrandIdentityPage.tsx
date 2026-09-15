import { CategoryPage } from '../../components/CategoryPage';
import { CollectionCopy } from '../../components/CollectionCopy';

export function LogoBrandIdentityPage() {
  return (
    <CategoryPage pageHeight={3193} label="Logo and brand identity portfolio" active="space-iv">
      <section className="brand-dark" aria-labelledby="brand-title">
        <img className="brand-texture" style={{ left: '-477.7px', top: '0.4px', width: '2320.9px', height: '1546.2px' }} src="/assets/reference-extracted/logo-brand/raw-15.jpg" alt="" />
        <CollectionCopy
          light
          eyebrow="collection VIII"
          title="Lagtuz Vietnam"
          titleId="brand-title"
          descriptionLabel="Creative Direction"
          description={[
            'Inspired by the story of life thriving in unimaginable environments like',
            'a cactus rising from the middle of a lake, reinforcing the core values of',
            'distinctiveness, resilience, and adaptability. The brand image is',
            'reimagined through the convergence of technological capabilities,',
            'human expertise, and a diverse portfolio of solutions.',
          ]}
          role={['Creative Lead', 'Graphic Design']}
          project={['Rebranding']}
        />
        <div className="brand-system" style={{ left: '21px', top: '289px' }}><h3>Logo</h3></div>
        <img className="media" style={{ left: '21px', top: '318.3px', width: '1325.4px', height: '297.9px', zIndex: 2 }} src="/assets/reference-extracted/logo-brand/logo-hero-composite.png" alt="Lagtuz logo over the Lagoon Bloom landscape" />
        <div className="brand-system" style={{ left: '21px', top: '657px' }} aria-labelledby="palette-title">
          <h3 id="palette-title">Palette</h3>
          <div className="palette-bar" style={{ display: 'flex', width: '639px', height: '20px', marginTop: '14px', borderRadius: '4px', overflow: 'hidden' }}>
            <span style={{ flex: 1, background: '#26c0bd' }} />
            <span style={{ flex: 1, background: '#fff' }} />
            <span style={{ flex: 1, background: '#052d24' }} />
            <span style={{ flex: 1, background: '#ffef38' }} />
          </div>
          <div className="palette-grid" style={{ marginTop: '14px' }}>
            <div className="palette-swatch"><strong>Lagoon Bloom</strong><span className="hex">Hex: #26C0BD</span><span>C/M/Y/K: 69/0/32/0</span><span>R/G/B: 38/192/189</span></div>
            <div className="palette-swatch"><strong>White Sand</strong><span className="hex">Hex: #FFFFFF</span><span>C/M/Y/K: 0/0/0/0</span><span>R/G/B: 255/255/255</span></div>
            <div className="palette-swatch"><strong>Cactus Night</strong><span className="hex">Hex: #052D24</span><span>C/M/Y/K: 87/54/73/68</span><span>R/G/B: 5/45/36</span></div>
            <div className="palette-swatch"><strong>Desert Radiance</strong><span className="hex">Hex: #FFEF38</span><span>C/M/Y/K: 3/0/88/0</span><span>R/G/B: 255/239/56</span></div>
          </div>
        </div>
        <div className="brand-system" style={{ left: '723px', top: '657px', width: '622px' }} aria-labelledby="icons-title">
          <h3 id="icons-title">Icon System</h3>
          <div className="brand-icons">
            <img style={{ left: '7px', top: '32px', width: '55px', height: '56px' }} src="/assets/reference-extracted/logo-brand/icon-1.png" alt="Digital Marketing icon" />
            <img style={{ left: '138px', top: '32px', width: '60px', height: '60px' }} src="/assets/reference-extracted/logo-brand/icon-2.png" alt="Communications icon" />
            <img style={{ left: '274px', top: '30px', width: '64px', height: '65px' }} src="/assets/reference-extracted/logo-brand/icon-3.png" alt="Media Production icon" />
            <img style={{ left: '414px', top: '32px', width: '63px', height: '62px' }} src="/assets/reference-extracted/logo-brand/icon-4.png" alt="Solutions icon" />
            <img style={{ left: '552px', top: '32px', width: '59px', height: '58px' }} src="/assets/reference-extracted/logo-brand/icon-5.png" alt="Budget icon" />
            <span className="icon-caption" style={{ left: '0', top: '102px' }}>Digital<br />Marketing</span>
            <span className="icon-caption" style={{ left: '117px', top: '102px' }}>Communications</span>
            <span className="icon-caption" style={{ left: '268px', top: '102px' }}>Media<br />Production</span>
            <span className="icon-caption" style={{ left: '413px', top: '102px' }}>Solutions</span>
            <span className="icon-caption" style={{ left: '548px', top: '102px' }}>Budget</span>
          </div>
        </div>
        <div className="brand-system" style={{ left: '21px', top: '844px' }} aria-labelledby="imagery-title"><h3 id="imagery-title">Imaginery</h3></div>
        <div className="brand-imagery" aria-label="Lagtuz imagery set">
          <figure><img className="media" style={{ left: '10px', top: '874.5px', width: '437.6px', height: '250.1px' }} src="/assets/reference-extracted/logo-brand/raw-17.jpg" alt="Horizontal Awakening imagery" /><figcaption style={{ left: '23px', top: '1129px' }}>Horizontal Awakening</figcaption></figure>
          <figure><img className="media" style={{ left: '443.5px', top: '874.5px', width: '444.8px', height: '249.9px' }} src="/assets/reference-extracted/logo-brand/raw-19.png" alt="Resilient Lagoon imagery" /><figcaption style={{ left: '442px', top: '1138px' }}>Resilient Lagoon</figcaption></figure>
          <figure><img className="media" style={{ left: '895.2px', top: '863.6px', width: '483.5px', height: '271.5px' }} src="/assets/reference-extracted/logo-brand/raw-16.jpg" alt="Desert Bloom imagery" /><figcaption style={{ left: '897px', top: '1138px' }}>Desert Bloom</figcaption></figure>
        </div>
      </section>

      <section className="brand-light" aria-label="Lagtuz brand imagery">
        <figure><img className="media" style={{ left: '21px', top: '38px', width: '1325px', height: '1190px' }} src="/assets/reference-extracted/logo-brand/brandboard-composite.png" alt="Lagtuz visual identity and imagery board" /></figure>
      </section>
    </CategoryPage>
  );
}
