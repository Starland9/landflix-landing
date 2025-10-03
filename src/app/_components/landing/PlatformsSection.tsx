import clsx from "clsx";
import styles from "../../page.module.css";
import type { Platform } from "../../_data/landingData";

type PlatformsSectionProps = {
  platforms: Platform[];
};

export function PlatformsSection({ platforms }: PlatformsSectionProps) {
  return (
    <section
      id="platforms"
      className={clsx(styles.section, styles.platformsSection)}
    >
      <div className={styles.container}>
        <div className={clsx(styles.sectionHeader, styles.reveal)}>
          <span className={styles.sectionBadge}>Disponibilité</span>
          <h2>
            Disponible sur
            <span className={styles.gradientText}> toutes vos plateformes</span>
          </h2>
          <p>Développée avec Flutter pour une expérience native partout.</p>
        </div>
        <div className={styles.platformGrid}>
          {platforms.map((platform) => (
            <article
              key={platform.name}
              className={clsx(styles.platformCard, styles.reveal)}
            >
              <div className={styles.platformIcon}>
                <platform.icon aria-hidden />
              </div>
              <h3>{platform.name}</h3>
              <p>{platform.requirement}</p>
              <span className={styles.platformBadge}>{platform.status}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
