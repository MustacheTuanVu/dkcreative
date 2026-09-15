import { contact } from '../lib/site-data';

export function CategoryFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-contact">
        <h2>contact</h2>
        <a className="footer-row interactive-link" href={contact.phoneHref} aria-label="Call Khoa">
          <img src="/assets/live-canva/common/media/b60295ff80dbaac9ee39b0149181f1e1.png" alt="" />
          <span className="label">{contact.phoneLabel}</span>
        </a>
        <a className="footer-row interactive-link" href={contact.emailHref} aria-label="Email Khoa">
          <img src="/assets/live-canva/common/media/1d55b1be73df7e2972ef388b4a0491f8.png" alt="" />
          <span className="label">{contact.emailLabel}</span>
        </a>
      </div>
      <a className="back-to-top interactive-link" href="#top" aria-label="Back to top">
        <img src="/assets/live-canva/common/media/7c6df236decd5431c2afb7fecbad5286.png" alt="" />
        <span>back to top</span>
      </a>
    </footer>
  );
}
