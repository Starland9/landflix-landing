"use client";

import { useState } from "react";
import clsx from "clsx";
import styles from "../../page.module.css";
import type { FaqItem } from "../../_data/landingData";

type FaqSectionProps = {
  faqs: FaqItem[];
};

export function FaqSection({ faqs }: FaqSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className={clsx(styles.section, styles.faqSection)}>
      <div className={styles.container}>
        <div className={clsx(styles.sectionHeader, styles.reveal)}>
          <span className={styles.sectionBadge}>FAQ</span>
          <h2>
            Questions
            <span className={styles.gradientText}> fréquentes</span>
          </h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={faq.question}
                className={clsx(styles.faqItem, styles.reveal)}
              >
                <button
                  type="button"
                  className={styles.faqQuestion}
                  aria-expanded={isOpen}
                  onClick={() => toggle(index)}
                >
                  <span>{faq.question}</span>
                  <span
                    className={clsx(
                      styles.chevron,
                      isOpen && styles.chevronOpen
                    )}
                  >
                    ▾
                  </span>
                </button>
                <div
                  className={clsx(
                    styles.faqAnswer,
                    isOpen && styles.faqAnswerOpen
                  )}
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
