import clsx from "clsx";
import styles from "../../page.module.css";
import type { DownloadButton } from "../../_data/landingData";

type DownloadSectionProps = {
  buttons: DownloadButton[];
};

export function DownloadSection({ buttons }: DownloadSectionProps) {
  return (
    <section
      id="download"
      className={clsx(styles.section, styles.downloadSection)}
    >
      <div className={styles.container}>
        <div className={clsx(styles.sectionHeader, styles.reveal)}>
          <span className={styles.sectionBadge}>Téléchargement</span>
          <h2>
            Commencez votre
            <span className={styles.gradientText}> aventure streaming</span>
          </h2>
          <p>
            Téléchargez LandFlix gratuitement sur votre plateforme préférée.
          </p>
        </div>
        <div className={styles.downloadGrid}>
          {buttons.map((button) => (
            <a
              key={button.title}
              className={clsx(styles.downloadButton, styles.reveal)}
              href={button.href}
              data-platform={button.title.toLowerCase()}
            >
              <div className={styles.downloadIcon}>
                <button.icon aria-hidden />
              </div>
              <div className={styles.downloadText}>
                <span className={styles.downloadLabel}>{button.label}</span>
                <span className={styles.downloadTitle}>{button.title}</span>
              </div>
            </a>
          ))}
        </div>
        <div className={styles.downloadBadges}>
          <span className={styles.badge}>100% Gratuit</span>
          <span className={styles.badge}>Aucune Publicité</span>
          <span className={styles.badge}>Open Source</span>
        </div>
        <div className={styles.versionInfo}>
          <span className={styles.versionBadge}>v1.0.0</span>
          <span className={styles.separator}>•</span>
          <span>Dernière mise à jour : Octobre 2025</span>
        </div>
      </div>
    </section>
  );
}
