import clsx from "clsx";
import styles from "../../page.module.css";
import type { Benefit, Tech } from "../../_data/landingData";

type TechSectionProps = {
  techStack: Tech[];
  benefits: Benefit[];
};

export function TechSection({ techStack, benefits }: TechSectionProps) {
  return (
    <section className={clsx(styles.section, styles.techSection)}>
      <div className={styles.container}>
        <div className={clsx(styles.sectionHeader, styles.reveal)}>
          <span className={styles.sectionBadge}>Technologie</span>
          <h2>
            Construit avec les
            <span className={styles.gradientText}>
              {" "}
              meilleures technologies
            </span>
          </h2>
        </div>
        <div className={styles.techGrid}>
          {techStack.map((tech) => (
            <article
              key={tech.name}
              className={clsx(styles.techItem, styles.reveal)}
            >
              <div className={styles.techIcon}>
                <tech.icon aria-hidden />
              </div>
              <h4>{tech.name}</h4>
              <p>{tech.description}</p>
            </article>
          ))}
        </div>
        <div className={clsx(styles.flutterBenefits, styles.reveal)}>
          <h3>Pourquoi Flutter ?</h3>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => (
              <div key={benefit.title} className={styles.benefit}>
                <div className={styles.benefitIcon}>
                  <benefit.icon aria-hidden />
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
