import { CategoryPage } from '../../components/CategoryPage';
import { CollectionCopy } from '../../components/CollectionCopy';

export function PhotoshootDirectionPage() {
  return (
    <CategoryPage pageHeight={2809} label="Photoshoot direction portfolio" active="space-iii">
      <section className="collection-band photo-c1" aria-labelledby="photo-title">
        <CollectionCopy
          eyebrow="collection VII"
          title="Sony Vietnam"
          titleId="photo-title"
          descriptionLabel="Creative Direction"
          description={[
            'The creative direction centers on portraying experts using the earbuds',
            'WF-1000XM6 as an essential part of their modern lifestyle, seamlessly',
            'integrated into both professional environments and everyday moments',
          ]}
          role={['Creative Lead']}
          project={['Photoshoot, KOL']}
        />
        <div className="concept-block" style={{ top: '260px' }} aria-labelledby="concept-title">
          <h3 id="concept-title">Creative Concept</h3>
          <p>The concept was brought to life through three everyday listening scenarios,<br />each highlighting a key product feature:</p>
          <div className="concept-scenarios">
            <div className="scenario"><span className="scenario-index">1</span><strong>Airport</strong><span>Demonstrating best in<br />noise cancellation.</span></div>
            <div className="scenario"><span className="scenario-index">2</span><strong>Workspace</strong><span>Showcasing premium<br />sound quality</span></div>
            <div className="scenario"><span className="scenario-index">3</span><strong>On the go</strong><span>Highlighting crystal-clear<br />call quality</span></div>
          </div>
        </div>
      </section>
      <section className="collection-band photo-c2" aria-label="Sony campaign gallery" />

      <div className="media-layer" aria-label="Sony campaign artwork">
        <figure><img className="media" style={{ left: '58px', top: '843px', width: '70px', height: '70px', borderRadius: 0 }} src="/assets/reference-extracted/photoshoot-direction/concept-icon-1.png" alt="Airport concept icon" /></figure>
        <figure><img className="media" style={{ left: '64.2px', top: '948.7px', width: '59px', height: '59px', borderRadius: 0 }} src="/assets/reference-extracted/photoshoot-direction/concept-icon-2.png" alt="Workspace concept icon" /></figure>
        <figure><img className="media" style={{ left: '490.5px', top: '862.4px', width: '200.7px', height: '301.1px' }} src="/assets/reference-extracted/photoshoot-direction/raw-15.png" alt="Sony concept image one" /></figure>
        <figure><img className="media" style={{ left: '684px', top: '832px', width: '251.5px', height: '167.7px' }} src="/assets/reference-extracted/photoshoot-direction/raw-16.png" alt="Sony concept image two" /></figure>
        <figure><img className="media" style={{ left: '926.5px', top: '723.2px', width: '230.9px', height: '279.7px' }} src="/assets/reference-extracted/photoshoot-direction/raw-17.png" alt="Sony concept image three" /></figure>
        <figure><img className="media" style={{ left: '693.9px', top: '1007.8px', width: '300.1px', height: '168.8px' }} src="/assets/reference-extracted/photoshoot-direction/raw-18.png" alt="Sony concept image four" /></figure>
        <figure><img className="media" style={{ left: '993.4px', top: '909.6px', width: '224.8px', height: '337.2px' }} src="/assets/reference-extracted/photoshoot-direction/raw-19.png" alt="Sony concept image five" /></figure>
        <figure><img className="media" style={{ left: '1160.3px', top: '774.5px', width: '185.1px', height: '278.6px' }} src="/assets/reference-extracted/photoshoot-direction/raw-20.jpg" alt="Sony concept image six" /></figure>
        <figure><img className="media" style={{ left: '63.6px', top: '1050.4px', width: '59px', height: '59px', borderRadius: 0 }} src="/assets/reference-extracted/photoshoot-direction/concept-icon-3.png" alt="On the go concept icon" /></figure>
        <figure><img className="media" style={{ left: '21px', top: '1230px', width: '1325px', height: '883px' }} src="/assets/reference-extracted/photoshoot-direction/hero-composite.png" alt="Sony WF-1000XM6 campaign hero" /></figure>
        <figure>
          <img className="media" style={{ left: '22.2px', top: '2118.2px', width: '258.9px', height: '258.9px' }} src="/assets/reference-extracted/photoshoot-direction/raw-23.png" alt="Portrait of Mr. Trung Bao" />
          <figcaption className="kol-caption" style={{ left: '22px', top: '2391px' }}><strong>Mr. Trung Bao</strong><span>Beatboxer (World Champion) &amp;<br />Visual Artist / Creative Director</span></figcaption>
        </figure>
        <figure>
          <img className="media" style={{ left: '289.9px', top: '2118.5px', width: '257.9px', height: '257.9px' }} src="/assets/reference-extracted/photoshoot-direction/raw-24.jpg" alt="Portrait of Mr. Loi Lam" />
          <figcaption className="kol-caption" style={{ left: '290px', top: '2391px' }}><strong>Mr. Loi Lam</strong><span>Head of Global Licensing<br />Miss COSMO</span></figcaption>
        </figure>
        <figure>
          <img className="media" style={{ left: '1086.1px', top: '2119px', width: '256.9px', height: '256.9px' }} src="/assets/reference-extracted/photoshoot-direction/raw-25.png" alt="Portrait of Mr. Hao Tran" />
          <figcaption className="kol-caption" style={{ left: '1086px', top: '2391px' }}><strong>Mr. Hao Tran</strong><span>CEO/ Producer at Vietcetera</span></figcaption>
        </figure>
        <figure>
          <img className="media" style={{ left: '823.2px', top: '2119px', width: '256.9px', height: '256.9px' }} src="/assets/reference-extracted/photoshoot-direction/raw-26.jpg" alt="Portrait of Mr. Quang Do" />
          <figcaption className="kol-caption" style={{ left: '823px', top: '2391px' }}><strong>Mr. Quang Do</strong><span>Founder of Overseas Vietnamese<br />Community</span></figcaption>
        </figure>
        <figure>
          <img className="media" style={{ left: '557.1px', top: '2119px', width: '256.9px', height: '256.9px' }} src="/assets/reference-extracted/photoshoot-direction/raw-27.png" alt="Portrait of Mr. Gianluca Fiume" />
          <figcaption className="kol-caption" style={{ left: '557px', top: '2391px' }}><strong>Mr. Gianluca Fiume</strong><span>CEO Asia Piaggio Vietnam Co., Ltd</span></figcaption>
        </figure>
      </div>
    </CategoryPage>
  );
}
