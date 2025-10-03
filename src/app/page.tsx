'use client';

import styles from "./page.module.css";
import { Hero } from "./_components/landing/Hero";
import { StatsSection } from "./_components/landing/StatsSection";
import { FeaturesSection } from "./_components/landing/FeaturesSection";
import { ScreenshotsSection } from "./_components/landing/ScreenshotsSection";
import { PlatformsSection } from "./_components/landing/PlatformsSection";
import { TechSection } from "./_components/landing/TechSection";
import { DownloadSection } from "./_components/landing/DownloadSection";
import { FaqSection } from "./_components/landing/FaqSection";
import { Footer } from "./_components/landing/Footer";
import { useScrollReveal } from "./_hooks/useScrollReveal";
import {
  navLinks,
  stats,
  features,
  screenshots,
  platforms,
  techStack,
  flutterBenefits,
  downloadButtons,
  faqItems,
  socialLinks,
  resourceLinks,
} from "./_data/landingData";

export default function Home() {
  useScrollReveal(styles.reveal, styles.visible);

  return (
    <div className={styles.page}>
      <Hero navLinks={navLinks} />

      <main>
        <StatsSection stats={stats} />
        <FeaturesSection features={features} />
        <ScreenshotsSection screenshots={screenshots} />
        <PlatformsSection platforms={platforms} />
        <TechSection techStack={techStack} benefits={flutterBenefits} />
        <DownloadSection buttons={downloadButtons} />
        <FaqSection faqs={faqItems} />
      </main>

      <Footer
        navLinks={navLinks}
        socialLinks={socialLinks}
        resourceLinks={resourceLinks}
      />
    </div>
  );
}
