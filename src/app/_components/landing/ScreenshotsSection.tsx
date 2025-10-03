import clsx from "clsx";
import styles from "../../page.module.css";
import type { Screenshot } from "../../_data/landingData";

type ScreenshotsSectionProps = {
  screenshots: Screenshot[];
};

export function ScreenshotsSection({ screenshots }: ScreenshotsSectionProps) {
  return (
    <section
      id="screenshots"
      className={clsx(styles.section, styles.screensSection)}
    >
      <div className={styles.container}>
        <div className={clsx(styles.sectionHeader, styles.reveal)}>
          <span className={styles.sectionBadge}>Interface</span>
          <h2>
            Une interface
            <span className={styles.gradientText}> pensée pour vous</span>
          </h2>
        </div>
        <div className={styles.screensCarousel}>
          {screenshots.map((screen) => (
            <article
              key={screen.title}
              className={clsx(styles.screenshotCard, styles.reveal)}
              style={{ borderColor: screen.accent }}
            >
              <div
                className={styles.screenshotPreview}
                style={{ background: screen.accent }}
              />
              <div className={styles.screenshotLabel}>
                <h4>{screen.title}</h4>
                <p>{screen.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
