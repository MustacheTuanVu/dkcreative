import { ResponsiveArtboard } from './ResponsiveArtboard';
import { ExhibitionTitle } from './ExhibitionTitle';
import { SpaceNavigation } from './SpaceNavigation';
import { contact } from '../lib/site-data';

export function HomePage() {
  return (
    <ResponsiveArtboard>
      <main id="top" className="canvas" aria-label="Khoa's creative works exhibition">
        <header>
          <ExhibitionTitle />
          <p className="intro">
            <span>Welcome to the exhibition of Khoa&apos;s graphic works and creative vision.</span>
            <span className="update">* Established since 2021 , last update in 2026 *</span>
          </p>
        </header>

        <SpaceNavigation />

        <section id="about" aria-labelledby="about-heading">
          <div className="portrait-frame" aria-hidden="true"><img className="portrait" src="/assets/peter-photo-cropped.png" alt="Portrait of Nguyễn Đăng Khoa (Peter)" /></div>
          <div className="profile-block about-block">
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
              <img src="/assets/contact-phone.png" alt="" /><span className="contact-label">{contact.phoneLabel}</span>
            </a>
            <a className="contact-row about-email interactive-link" href={contact.emailHref} aria-label="Email Khoa">
              <img src="/assets/contact-email.png" alt="" /><span className="contact-label">{contact.emailLabel}</span>
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
              <img className="ps" src="/assets/raster-crops/soft_ps.png" alt="Adobe Photoshop" />
              <img className="ai" src="/assets/raster-crops/soft_ai.png" alt="Adobe Illustrator" />
              <img className="pr" src="/assets/raster-crops/soft_pr.png" alt="Adobe Premiere Pro" />
              <img className="figma" src="/assets/raster-crops/soft_figma.png" alt="Figma" />
              <img className="capcut" src="/assets/raster-crops/soft_capcut.png" alt="CapCut" />
            </div>
          </div>
        </section>

        <section className="clients" aria-label="Selected clients">
          <img className="client-knauf" src="/assets/raster-crops/knauf.png" alt="Knauf" />
          <img className="client-sony" src="/assets/raster-crops/sony.png" alt="Sony" />
          <img className="client-vita" src="/assets/raster-crops/vita.png" alt="VitaDairy" />
          <img className="client-fpt" src="/assets/raster-crops/fpt.png" alt="FPT Software" />
          <img className="client-uob" src="/assets/raster-crops/uob.png" alt="UOB" />
          <img className="client-rung" src="/assets/raster-crops/rung.png" alt="Rừng Thông Kao" />
          <img className="client-baemin" src="/assets/raster-crops/baemin.png" alt="Baemin" />
          <img className="client-vng" src="/assets/raster-crops/vng.png" alt="VNG Games" />
        </section>

        <footer>
          <div className="call-block">
            <h2><span className="call-line call-line-one">grab a call.</span><span className="call-line call-line-two">let&apos;s share!</span></h2>
            <a className="contact-row footer-contact interactive-link" href={contact.phoneHref} aria-label="Call Khoa at plus 84 708 282 984">
              <img src="/assets/contact-phone.png" alt="" /><span className="contact-label">{contact.phoneLabel}</span>
            </a>
            <a className="contact-row footer-contact footer-email interactive-link" href={contact.emailHref} aria-label="Email Khoa">
              <img src="/assets/contact-email.png" alt="" /><span className="contact-label">{contact.emailLabel}</span>
            </a>
          </div>

          <div className="shortcut-block" aria-labelledby="shortcut-heading">
            <h2 id="shortcut-heading">shortcut</h2>
            <ul className="shortcut-list">
              <li><a className="interactive-link" href="#space-i">2D graphic design</a><img className="shortcut-art shortcut-i" src="/assets/raster-crops/shortcut_i.png" alt="" /></li>
              <li><a className="interactive-link" href="#space-ii">video &amp; motion graphic</a><img className="shortcut-art shortcut-ii" src="/assets/raster-crops/shortcut_ii.png" alt="" /></li>
              <li><a className="interactive-link" href="#space-iii">photoshoot direction</a><img className="shortcut-art shortcut-iii" src="/assets/raster-crops/shortcut_iii.png" alt="" /></li>
              <li><a className="interactive-link" href="#space-iv">logo &amp; brand identity</a><img className="shortcut-art shortcut-iv" src="/assets/raster-crops/shortcut_iv.png" alt="" /></li>
            </ul>
            <a className="back-to-top interactive-link" href="#top" aria-label="Back to top">
              <img src="/assets/raster-crops/back_60_transparent.png" alt="" /><span>back to top</span>
            </a>
          </div>
        </footer>
      </main>
    </ResponsiveArtboard>
  );
}
