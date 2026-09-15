import { CanvaVideo } from '../../components/CanvaVideo';
import { CategoryPage } from '../../components/CategoryPage';
import { CollectionCopy } from '../../components/CollectionCopy';

export function GraphicDesignPage() {
  return (
    <CategoryPage pageHeight={5108} label="Graphic design portfolio" active="space-i">
      <section className="collection-band graphic-c1" aria-labelledby="graphic-c1-title">
        <CollectionCopy
          eyebrow="collection I"
          title="Colos Gain, Vitadairy"
          titleId="graphic-c1-title"
          descriptionLabel="Creative idea"
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
        <figure><img className="media" style={{ left: '20.7px', top: '730.5px', width: '275.8px', height: '275.8px' }} src="/assets/live-canva/graphic/media/f4f744869ab9f565bbf9fb6e9dd0bfae.jpg" alt="Colos Gain campaign artwork one" /></figure>
        <figure><img className="media" style={{ left: '21.1px', top: '1014px', width: '275.4px', height: '275.4px' }} src="/assets/live-canva/graphic/media/2891d96556a2b87d9900c13f70a7ab3f.jpg" alt="Colos Gain campaign artwork two" /></figure>
        <figure><img className="media" style={{ left: '304.8px', top: '730.5px', width: '558.9px', height: '558.9px' }} src="/assets/live-canva/graphic/media/7147e6ece3c54df5514c6277fc42ca71.jpg" alt="Colos Gain campaign artwork three" /></figure>
        <figure><img className="media" style={{ left: '871px', top: '730.5px', width: '231.1px', height: '231.1px' }} src="/assets/live-canva/graphic/media/41a4da433bf9575953d6e2aa0923a736.jpg" alt="Colos Gain campaign artwork four" /></figure>
        <figure><img className="media" style={{ left: '869.1px', top: '971.4px', width: '474.7px', height: '318px' }} src="/assets/live-canva/graphic/media/985594feca224878dee6b5300314d262.jpg" alt="Colos Gain campaign artwork five" /></figure>
        <figure><img className="media" style={{ left: '1110.8px', top: '730.5px', width: '231.1px', height: '231.1px' }} src="/assets/live-canva/graphic/media/a0da706944ed3d5238a874808b47ddef.jpg" alt="Colos Gain campaign artwork six" /></figure>
        <figure><CanvaVideo ariaLabel="Knauf campaign video" src="/assets/live-canva/graphic/video/a0c3a4bd687c520bd2d682a7d4960202.mp4" poster="/assets/live-canva/graphic/video/3c54a517de817bd6ea17abe380f81549.jpg" style={{ left: '20.7px', top: '1649.7px', width: '471px', height: '471px' }} /></figure>
        <figure><img className="media" style={{ left: '500.8px', top: '1647.9px', width: '843.5px', height: '474.5px' }} src="/assets/live-canva/graphic/media/67334b61a6a26010afca85a0a2d0b343.png" alt="Knauf campaign artwork two" /></figure>
        <figure><img className="media" style={{ left: '20.7px', top: '2129.4px', width: '401.9px', height: '502.4px' }} src="/assets/live-canva/graphic/media/dff32bee62f09a92daa964de943d4186.png" alt="Knauf campaign artwork three" /></figure>
        <figure><img className="media" style={{ left: '431.6px', top: '2129.4px', width: '502.4px', height: '502.4px' }} src="/assets/live-canva/graphic/media/6efd9f39536eda3300e60d02a6108ee7.png" alt="Knauf campaign artwork four" /></figure>
        <figure><img className="media" style={{ left: '942.4px', top: '2129.4px', width: '401.9px', height: '502.4px' }} src="/assets/live-canva/graphic/media/b6f61aab378794fff914488245c68090.png" alt="Knauf campaign artwork five" /></figure>
        <figure><img className="media" style={{ left: '20.3px', top: '3786.8px', width: '1327.3px', height: '608px' }} src="/assets/live-canva/graphic/media/97340f81683bc8dc9a23cedb907d2d4a.png" alt="YTRADE packaging artwork one" /></figure>
        <figure><img className="media" style={{ left: '21.1px', top: '4131.2px', width: '1326.5px', height: '884.6px' }} src="/assets/live-canva/graphic/media/8b24acbb4641a4d0330cb490047ab477.png" alt="YTRADE packaging artwork two" /></figure>
        <figure><img className="media" style={{ left: '22px', top: '2967.7px', width: '1325.6px', height: '884.8px' }} src="/assets/live-canva/graphic/media/bdec801db5e95a7341b99d364910903a.jpg" alt="YTRADE packaging artwork three" /></figure>
      </div>
    </CategoryPage>
  );
}
