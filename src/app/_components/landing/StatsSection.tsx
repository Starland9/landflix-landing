import clsx from "clsx";
import styles from "../../page.module.css";
import type { Stat } from "../../_data/landingData";

type StatsSectionProps = {
  stats: Stat[];
};

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className={clsx(styles.section, styles.statsSection)}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <article
              key={stat.label}
              className={clsx(styles.statCard, styles.reveal)}
            >
              <div className={styles.statIcon}>
                <stat.icon aria-hidden />
              </div>
              <p className={styles.statValue}>{stat.value}</p>
              <p className={styles.statLabel}>{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
