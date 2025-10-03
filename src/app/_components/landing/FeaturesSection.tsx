import clsx from "clsx";
import styles from "../../page.module.css";
import type { Feature } from "../../_data/landingData";

type FeaturesSectionProps = {
  features: Feature[];
};

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section
      id="features"
      className={clsx(styles.section, styles.featuresSection)}
    >
      <div className={styles.container}>
        <div className={clsx(styles.sectionHeader, styles.reveal)}>
          <span className={styles.sectionBadge}>Fonctionnalités</span>
          <h2>
            Une expérience de streaming
            <span className={styles.gradientText}> révolutionnaire</span>
          </h2>
          <p>Découvrez ce qui rend LandFlix unique.</p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <article
              key={feature.title}
              className={clsx(
                styles.featureItem,
                styles.reveal,
                feature.orientation === "reverse" && styles.featureReverse
              )}
            >
              <div className={styles.featureVisual}>
                <div className={styles.featureIcon}>
                  <feature.icon aria-hidden />
                </div>
                <div className={styles.featureMockup}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className={styles.featureContent}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul>
                  {feature.highlights.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
