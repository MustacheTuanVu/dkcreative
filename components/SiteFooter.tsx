import { contact } from '../lib/site-data';

export function CategoryFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-contact">
        <h2>contact</h2>
        <a className="footer-row interactive-link" href={contact.phoneHref} aria-label="Call Khoa">
          <img src="/assets/contact-phone.png" alt="" />
          <span className="label">{contact.phoneLabel}</span>
        </a>
        <a className="footer-row interactive-link" href={contact.emailHref} aria-label="Email Khoa">
          <img src="/assets/contact-email.png" alt="" />
          <span className="label">{contact.emailLabel}</span>
        </a>
      </div>
      <a className="back-to-top interactive-link" href="#top" aria-label="Back to top">
        <img src="/assets/raster-crops/back_60_transparent.png" alt="" />
        <span>back to top</span>
      </a>
    </footer>
  );
}
