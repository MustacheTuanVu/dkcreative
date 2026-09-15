import { CategoryPage } from '../../components/CategoryPage';
import { CollectionCopy } from '../../components/CollectionCopy';

export function VideoMotionPage() {
  return (
    <CategoryPage pageHeight={4282} label="Video and motion portfolio" active="space-ii">
      <section className="collection-band video-c1" aria-labelledby="video-c1-title">
        <CollectionCopy
          eyebrow="collection IV"
          title="Motion Creatives"
          titleId="video-c1-title"
          descriptionLabel="Description"
          description={[
            'A curated collection of motion graphic projects across different',
            'industries, including collaborations with notable brands such as FPT',
            'Software, BAEMIN, and Poshaco Group.',
          ]}
          role={['Motion Design', 'Content Creation', 'Graphic Design']}
          project={['Ad Creatives']}
        />
      </section>
      <section className="collection-band video-c2" aria-labelledby="video-c2-title">
        <CollectionCopy
          eyebrow="collection V"
          title="Ghost Story, VNG Games"
          titleId="video-c2-title"
          descriptionLabel="Description"
          description={[
            'A promotional campaign for a major game update featuring the',
            "collaboration between A Record of a Mortal's Journey to Immortality",
            'and Ghost Story. The highlight was Login To Love, a short film created',
            'to engage the community.',
          ]}
          role={['Content Planning', 'Video Editing']}
          project={['Seeding/ Booking', 'Content']}
        />
      </section>
      <section className="collection-band video-c3" aria-labelledby="video-c3-title">
        <CollectionCopy
          eyebrow="collection VI"
          title="Mo Stay, Rừng Thông Mo"
          titleId="video-c3-title"
          descriptionLabel="Creative Idea"
          description={[
            '“Forest Retreat” highlights the brand’s unique positioning in the heart',
            'of a pine forest, differentiating it from typical retreat brands. The',
            'content plan explores nature, people, facilities, and lifestyle moments',
            'that nurture physical and mental well-being.',
          ]}
          role={['Create Content', 'Filming (by phone)', 'Editing']}
          project={['Social Content', 'Thematic Campaign']}
        />
      </section>

      <div className="media-layer" aria-label="Video and motion collection artwork">
        <figure><img className="media" style={{ left: '466.7px', top: '731.9px', width: '434.8px', height: '431.8px' }} src="/assets/reference-extracted/video-motion/raw-10.jpg" alt="Motion campaign artwork one" /></figure>
        <figure><img className="media" style={{ left: '914.5px', top: '732.2px', width: '431.8px', height: '431.8px' }} src="/assets/reference-extracted/video-motion/raw-11.jpg" alt="Motion campaign artwork two" /></figure>
        <figure><img className="media" style={{ left: '21.6px', top: '1206.7px', width: '432.8px', height: '432.8px' }} src="/assets/reference-extracted/video-motion/raw-12.jpg" alt="Motion campaign artwork three" /></figure>
        <figure><img className="media" style={{ left: '914.5px', top: '1206.7px', width: '431.8px', height: '431.8px' }} src="/assets/reference-extracted/video-motion/raw-13.jpg" alt="Motion campaign artwork four" /></figure>
        <figure><img className="media" style={{ left: '21.5px', top: '731.9px', width: '431.8px', height: '431.8px' }} src="/assets/reference-extracted/video-motion/raw-14.jpg" alt="Motion campaign artwork five" /></figure>
        <figure><img className="media" style={{ left: '468px', top: '1206.7px', width: '431.8px', height: '431.8px' }} src="/assets/reference-extracted/video-motion/raw-15.jpg" alt="Motion campaign artwork six" /></figure>
        <figure><img className="media" style={{ left: '20.3px', top: '2043.8px', width: '257.9px', height: '458.8px' }} src="/assets/reference-extracted/video-motion/raw-16.jpg" alt="Ghost Story artwork one" /></figure>
        <figure><img className="media" style={{ left: '554px', top: '2043.8px', width: '257.9px', height: '458.8px' }} src="/assets/reference-extracted/video-motion/raw-17.jpg" alt="Ghost Story artwork two" /></figure>
        <figure><img className="media" style={{ left: '820.8px', top: '2043.8px', width: '257.9px', height: '458.8px' }} src="/assets/reference-extracted/video-motion/raw-18.jpg" alt="Ghost Story artwork three" /></figure>
        <figure><img className="media" style={{ left: '1087.6px', top: '2043.8px', width: '257.9px', height: '458.8px' }} src="/assets/reference-extracted/video-motion/raw-19.jpg" alt="Ghost Story artwork four" /></figure>
        <figure><img className="media" style={{ left: '287.1px', top: '2043.8px', width: '257.9px', height: '458.8px' }} src="/assets/reference-extracted/video-motion/raw-20.jpg" alt="Ghost Story artwork five" /></figure>
        <figure><img className="media" style={{ left: '21px', top: '2903px', width: '1325px', height: '1059px' }} src="/assets/reference-extracted/video-motion/video-c3-composite.png" alt="Mo Stay forest retreat motion campaign collage" /></figure>
      </div>
    </CategoryPage>
  );
}
