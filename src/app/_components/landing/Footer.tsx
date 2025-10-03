import styles from "../../page.module.css";
import type {
  NavLink,
  ResourceLink,
  SocialLink,
} from "../../_data/landingData";

type FooterProps = {
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  resourceLinks: ResourceLink[];
};

export function Footer({ navLinks, socialLinks, resourceLinks }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            <h4>LandFlix</h4>
            <p>
              Votre passerelle vers l'univers du streaming. Découvrez et
              téléchargez vos contenus préférés avec style.
            </p>
            <div className={styles.footerBadge}>
              <span role="img" aria-label="code">
                💻
              </span>
              Made with ❤️ by Landry
            </div>
          </div>
          <div className={styles.footerSection}>
            <h4>Application</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Développeur</h4>
            <ul>
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    <social.icon aria-hidden /> {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Ressources</h4>
            <ul>
              {resourceLinks.map((resource) => (
                <li key={resource.label}>
                  <a
                    href={resource.href}
                    {...(resource.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : undefined)}
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>
            © 2025 LandFlix by <strong>Starland9</strong>. Tous droits réservés.
          </p>
          <div className={styles.footerTech}>
            <span>Développé avec</span>
            <span className={styles.footerTechHighlight}>Flutter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
