import { CategoryPage } from '../../components/CategoryPage';
import { CollectionCopy } from '../../components/CollectionCopy';

export function GraphicDesignPage() {
  return (
    <CategoryPage pageHeight={5077} label="Graphic design portfolio" active="space-i">
      <section className="collection-band graphic-c1" aria-labelledby="graphic-c1-title">
        <CollectionCopy
          eyebrow="collection I"
          title="Colos Gain, Vitadairy"
          titleId="graphic-c1-title"
          descriptionLabel="Description"
          description={[
            'Childcare is a shared responsibility. The campaign celebrates fathers',
            'and grandparents while positioning Colos Gain as the smart nutritional',
            "choice that empowers every caregiver to support a child's healthy",
            'development.',
          ]}
          role={['Content Planning', 'Graphic Design']}
          project={['Social Design', 'Thematic Campaign']}
        />
      </section>
      <section className="collection-band graphic-c2" aria-labelledby="graphic-c2-title">
        <CollectionCopy
          eyebrow="collection II"
          title="Knauf Vietnam"
          titleId="graphic-c2-title"
          descriptionLabel="Description"
          description={[
            'As a new construction materials brand in Vietnam, Knauf is positioned',
            'as a reliable choice for buildings and homes. Featuring the key message',
            '“Thêm Knauf, Thêm An Tâm” the campaign highlights how Knauf',
            'delivers both practical and emotional value to contractors.',
          ]}
          role={['Graphic Design', 'Motion Design']}
          project={['Social Content', 'Thematic Campaign']}
        />
      </section>
      <section className="collection-band graphic-c3" aria-labelledby="graphic-c3-title">
        <CollectionCopy
          eyebrow="collection III"
          title="YTRADE & Others"
          titleId="graphic-c3-title"
          descriptionLabel="Description"
          description={[
            'Developed packaging and POSM materials, including product boxes,',
            'labels, and custom illustrations, for international brands such as EZ',
            'Furniture, Kutenest, and Bánh Mì Bà Cối to strengthen brand identity',
            'and enhance the customer experience.',
          ]}
          role={['Graphic Design']}
          project={['POSM, Printing']}
        />
      </section>

      <div className="media-layer" aria-label="Graphic design collection artwork">
        <figure><img className="media" style={{ left: '20.7px', top: '732.2px', width: '275.9px', height: '275.9px' }} src="/assets/reference-extracted/graphic-design/raw-10.jpg" alt="Colos Gain campaign artwork one" /></figure>
        <figure><img className="media" style={{ left: '21px', top: '1015.6px', width: '274.9px', height: '274.9px' }} src="/assets/reference-extracted/graphic-design/raw-11.jpg" alt="Colos Gain campaign artwork two" /></figure>
        <figure><img className="media" style={{ left: '304.6px', top: '732.2px', width: '558.7px', height: '558.7px' }} src="/assets/reference-extracted/graphic-design/raw-12.jpg" alt="Colos Gain campaign artwork three" /></figure>
        <figure><img className="media" style={{ left: '870.6px', top: '732.2px', width: '230.9px', height: '230.9px' }} src="/assets/reference-extracted/graphic-design/raw-13.jpg" alt="Colos Gain campaign artwork four" /></figure>
        <figure><img className="media" style={{ left: '868.7px', top: '973px', width: '474.8px', height: '317.8px' }} src="/assets/reference-extracted/graphic-design/raw-14.jpg" alt="Colos Gain campaign artwork five" /></figure>
        <figure><img className="media" style={{ left: '1110.3px', top: '732.2px', width: '230.9px', height: '230.9px' }} src="/assets/reference-extracted/graphic-design/raw-15.jpg" alt="Colos Gain campaign artwork six" /></figure>
        <figure><img className="media" style={{ left: '20.7px', top: '1651.9px', width: '470.8px', height: '470.8px' }} src="/assets/reference-extracted/graphic-design/raw-16.jpg" alt="Knauf campaign artwork one" /></figure>
        <figure><img className="media" style={{ left: '500.6px', top: '1650.2px', width: '843.6px', height: '473.8px' }} src="/assets/reference-extracted/graphic-design/raw-17.png" alt="Knauf campaign artwork two" /></figure>
        <figure><img className="media" style={{ left: '20.7px', top: '2131.5px', width: '401.8px', height: '501.8px' }} src="/assets/reference-extracted/graphic-design/raw-18.png" alt="Knauf campaign artwork three" /></figure>
        <figure><img className="media" style={{ left: '431.4px', top: '2131.5px', width: '501.8px', height: '501.8px' }} src="/assets/reference-extracted/graphic-design/raw-19.png" alt="Knauf campaign artwork four" /></figure>
        <figure><img className="media" style={{ left: '942px', top: '2131.5px', width: '401.8px', height: '501.8px' }} src="/assets/reference-extracted/graphic-design/raw-20.png" alt="Knauf campaign artwork five" /></figure>
        <figure><img className="media" style={{ left: '21px', top: '2970px', width: '1325px', height: '1884px' }} src="/assets/reference-extracted/graphic-design/graphic-c3-composite.png" alt="YTRADE packaging, POSM, and brand identity artwork collage" /></figure>
      </div>
    </CategoryPage>
  );
}
