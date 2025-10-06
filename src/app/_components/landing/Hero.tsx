"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "../../page.module.css";
import type { NavLink } from "../../_data/landingData";

type HeroProps = {
  navLinks: NavLink[];
};

export function Hero({ navLinks }: HeroProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  const heroBackgroundUrl = `${basePath}/landscape.jpg`;

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);

    if (typeof window !== "undefined") {
      window.addEventListener("hashchange", closeMenu);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("hashchange", closeMenu);
      }
    };
  }, []);

  return (
    <header className={styles.hero}>
      <div
        className={styles.heroBackground}
        aria-hidden
        style={{ backgroundImage: `url(${heroBackgroundUrl})` }}
      />
      <div className={styles.heroOverlay} aria-hidden />
      <div className={styles.heroGlow} aria-hidden />
      <nav className={styles.navbar}>
        <a href="#" className={styles.brand}>
          <span className={styles.brandIcon}>
            <Image
              src="/icon.jpeg"
              alt="Icône LandFlix"
              fill
              sizes="44px"
              priority
              style={{ objectFit: "cover" }}
            />
          </span>
          <div>
            <span className={styles.brandName}>LandFlix</span>
            <span className={styles.brandTagline}>
              Votre passerelle vers l'univers du streaming
            </span>
          </div>
        </a>
        <button
          className={styles.menuToggle}
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <div
          className={clsx(styles.navLinks, {
            [styles.navLinksOpen]: isMenuOpen,
          })}
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className={styles.navCta} href="#download">
            Télécharger
          </a>
        </div>
      </nav>

      <div className={styles.heroGrid}>
        <div className={clsx(styles.heroContent, styles.reveal)}>
          <div className={styles.appIcon} aria-hidden>
            <Image
              src="/icon.jpeg"
              alt=""
              fill
              sizes="72px"
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
          <h1 className={styles.heroTitle}>LandFlix</h1>
          <p className={styles.heroSubtitle}>
            Votre passerelle vers l'univers du streaming
          </p>
          <p className={styles.heroDescription}>
            Découvrez et téléchargez vos films et séries préférés avec une
            expérience moderne, intuitive et disponible sur tous vos appareils.
          </p>
          <div className={styles.heroCtas}>
            <a className={styles.primaryButton} href="#download">
              Télécharger maintenant
            </a>
            <a className={styles.secondaryButton} href="#features">
              Découvrir les fonctionnalités
            </a>
          </div>
          <div className={styles.trustBadges}>
            <span className={styles.badge}>100% Gratuit</span>
            <span className={styles.badge}>Aucune Publicité</span>
            <span className={styles.badge}>Open Source</span>
          </div>
        </div>
        <div className={clsx(styles.heroMockup, styles.reveal)}>
          <div className={styles.mockupFrame}>
            <div className={styles.mockupHeader}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.mockupBody}>
              <div className={styles.mockupCard}>
                <h3>Top tendances</h3>
                <p>
                  Accédez à plus de 100K contenus et découvrez les nouveautés
                  quotidiennes.
                </p>
                <div className={styles.mockupStats}>
                  <div>
                    <span>+85%</span>
                    <small>Séries terminées</small>
                  </div>
                  <div>
                    <span>12</span>
                    <small>Téléchargements actifs</small>
                  </div>
                  <div>
                    <span>4.8★</span>
                    <small>Note moyenne</small>
                  </div>
                </div>
              </div>
              <div className={styles.mockupCardAlt}>
                <strong>Mode hors ligne</strong>
                <p>
                  Emportez vos films partout. Vos téléchargements restent
                  accessibles sans connexion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
