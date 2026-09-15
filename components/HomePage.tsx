import { ResponsiveArtboard } from './ResponsiveArtboard';
import { ExhibitionTitle } from './ExhibitionTitle';
import { SpaceNavigation } from './SpaceNavigation';
import { contact } from '../lib/site-data';

export function HomePage() {
  return (
    <ResponsiveArtboard>
      <main id="top" className="canvas" aria-label="Khoa's creative works exhibition">
        <header className="header-band">
          <ExhibitionTitle />
          <p className="intro">
            <span>Welcome to the exhibition of Khoa&apos;s graphic works and creative vision.</span>
            <span className="update">* Established since 2021 , last update in 2026 *</span>
          </p>
          <SpaceNavigation />
          <hr className="header-divider" aria-hidden="true" />
        </header>

        <section id="about" aria-labelledby="about-heading">
          <div className="portrait-frame" aria-hidden="true"><img className="portrait" src="/assets/live-canva/home/media/4ade2e532771644cb3747afd6838089b.png" alt="Portrait of Nguyễn Đăng Khoa (Peter)" /></div>
          <div className="profile-block about-block" aria-labelledby="about-heading">
            <h2 id="about-heading">about the author</h2>
            <p className="about-copy">
              <span className="paragraph">
                <span className="about-line about-line-1">Nguyễn Đăng Khoa (Peter) is a Creative professional evolving into a</span>
                <span className="about-line about-line-2">dedicated Graphic &amp; Motion Designer. Backed by a foundation in</span>
                <span className="about-line about-line-3">content marketing, he brings a strategic perspective to visual design,</span>
                <span className="about-line about-line-4">ensuring that every creative output serves a clear purpose.</span>
              </span>
              <span className="paragraph">
                <span className="about-line about-line-5">His work combines creativity, analytical thinking, and problem-solving</span>
                <span className="about-line about-line-6">to create meaningful visual experiences that connect ideas, audiences,</span>
                <span className="about-line about-line-7">and business goals.</span>
              </span>
            </p>
            <a className="contact-row about-phone interactive-link" href={contact.phoneHref} aria-label="Call Khoa at plus 84 708 282 984">
              <img src="/assets/live-canva/home/media/1ff0c1e1972f79cb7c6448d48da50203.png" alt="" /><span className="contact-label">{contact.phoneLabel}</span>
            </a>
            <a className="contact-row about-email interactive-link" href={contact.emailHref} aria-label="Email Khoa">
              <img src="/assets/live-canva/home/media/9286361ccf256558756dc3b283bb5eeb.png" alt="" /><span className="contact-label">{contact.emailLabel}</span>
            </a>
          </div>

          <div className="education-block" aria-labelledby="education-heading">
            <h2 id="education-heading">education</h2>
            <div className="education-list">
              <div className="edu-row"><span>Sep 2016</span><strong>Saigon University</strong></div>
              <div className="edu-row"><span>May 2020</span><span className="degree">Bachelor in International Studies</span></div>
              <div className="edu-row"><span></span><span className="degree">Marketing Concentration</span></div>
            </div>
          </div>

          <div className="experience-block" aria-labelledby="experience-heading">
            <h2 id="experience-heading">experience</h2>
            <div className="experience-list">
              <div className="experience-group">
                <div className="experience-row"><span className="date">Jan 2021</span><strong className="role">FPT Software</strong></div>
                <div className="experience-row"><span className="date">Jul 2022</span><span className="role">Content Marketing Executive</span></div>
              </div>
              <div className="experience-group">
                <div className="experience-row"><span className="date">Jan 2025</span><strong className="role">Lagtuz Agency</strong></div>
                <div className="experience-row"><span className="date">Feb 2026</span><span className="role">Graphic &amp; Motion Design</span></div>
              </div>
              <div className="experience-group">
                <div className="experience-row"><span className="date">Jan 2023</span><strong className="role">Freelance</strong></div>
                <div className="experience-row"><span className="date">present</span><span className="role">Graphic &amp; Motion Design</span></div>
              </div>
            </div>
          </div>

          <div className="software-block" aria-labelledby="software-heading">
            <h2 id="software-heading">software</h2>
            <div className="software-icons" aria-label="Software used">
              <img className="ps" src="/assets/live-canva/home/media/5201fe225f969789c463ef6efe2a7124.png" alt="Adobe Photoshop" />
              <img className="ai" src="/assets/live-canva/home/media/bebe745029851963b6aa5f9b771e6a5d.png" alt="Adobe Illustrator" />
              <img className="pr" src="/assets/live-canva/home/media/a0e3e7306543471becbfd480c6b6186b.png" alt="Adobe Premiere Pro" />
              <img className="figma" src="/assets/live-canva/home/media/c6ee6f1ab872c0e6a44de8c37fc8bb3e.png" alt="Figma" />
              <img className="capcut" src="/assets/live-canva/home/media/2f22452804784354aca3a90062509080.png" alt="CapCut" />
            </div>
          </div>
        </section>

        <section className="clients" aria-label="Selected clients">
          <img className="client-knauf" src="/assets/live-canva/home/media/f168f0873b76dd9375896a4d3b3d400c.png" alt="Knauf" />
          <img className="client-sony" src="/assets/live-canva/home/media/bd580ffeb26f88baa152df45a3d5fe75.png" alt="Sony" />
          <img className="client-vita" src="/assets/live-canva/home/media/58ddaee186284a7ad8e8f376c0f9d802.png" alt="VitaDairy" />
          <img className="client-fpt" src="/assets/live-canva/home/media/b2a989043146739b46de9b37ec4e9a86.png" alt="FPT Software" />
          <img className="client-uob" src="/assets/live-canva/home/media/b1b3b77c7e5138246903ecdd0f1a885f.png" alt="UOB" />
          <img className="client-rung" src="/assets/live-canva/home/media/cdd20ff15501061991dd5315572e6e2b.png" alt="Rừng Thông Kao" />
          <img className="client-baemin" src="/assets/live-canva/home/media/89bc4cafa141e438008b0bcc41975e1b.png" alt="Baemin" />
          <img className="client-vng" src="/assets/live-canva/home/media/f9e462573e56de16bd6268bbf25b3ebf.png" alt="VNG Games" />
        </section>

        <footer>
          <div className="call-block">
            <h2><span className="call-line call-line-one">grab a call.</span><span className="call-line call-line-two">let&apos;s share!</span></h2>
            <a className="contact-row footer-contact interactive-link" href={contact.phoneHref} aria-label="Call Khoa at plus 84 708 282 984">
              <img src="/assets/live-canva/home/media/1ff0c1e1972f79cb7c6448d48da50203.png" alt="" /><span className="contact-label">{contact.phoneLabel}</span>
            </a>
            <a className="contact-row footer-contact footer-email interactive-link" href={contact.emailHref} aria-label="Email Khoa">
              <img src="/assets/live-canva/home/media/9286361ccf256558756dc3b283bb5eeb.png" alt="" /><span className="contact-label">{contact.emailLabel}</span>
            </a>
          </div>

          <div className="shortcut-block" aria-labelledby="shortcut-heading">
            <h2 id="shortcut-heading">shortcut</h2>
            <ul className="shortcut-list">
              <li><a className="interactive-link" href="#space-i">2D graphic design</a><img className="shortcut-art shortcut-i" src="/assets/live-canva/common/media/51bb448756098490afc68bd5b0fdca09.png" alt="" /></li>
              <li><a className="interactive-link" href="#space-ii">video &amp; motion graphic</a><img className="shortcut-art shortcut-ii" src="/assets/live-canva/common/media/2b5997b91d16f29f8ad09b9d4fffc7ce.png" alt="" /></li>
              <li><a className="interactive-link" href="#space-iii">photoshoot direction</a><img className="shortcut-art shortcut-iii" src="/assets/live-canva/common/media/9f264ce4f15a371f39bdb2cf6fce36ef.png" alt="" /></li>
              <li><a className="interactive-link" href="#space-iv">logo &amp; brand identity</a><img className="shortcut-art shortcut-iv" src="/assets/live-canva/common/media/1c8109f7193837ec5797c18c0f94eacf.png" alt="" /></li>
            </ul>
            <a className="back-to-top interactive-link" href="#top" aria-label="Back to top">
              <img src="/assets/live-canva/home/media/5a7207f185462d4441892b56d1c56b9a.png" alt="" /><span>back to top</span>
            </a>
          </div>
        </footer>
      </main>
    </ResponsiveArtboard>
  );
}
