# LandFlix Landing Page

![LandFlix – Landing](./public/preview.png)

> Landing page officielle de **LandFlix**, l'application multiplateforme pour découvrir, télécharger et organiser vos films et séries préférés. Interface premium, animations fluides et design Material Design 3 adapté aux tendances 2025.

## ✨ Aperçu rapide

- 🎬 **Présentation produit** : sections Hero, fonctionnalités, statistiques, captures d'écran et téléchargements.
- 💻 **Multipériphérique** : mise en avant de la disponibilité Android, iOS, Windows, macOS, Linux et Web.
- 🪄 **Animations douces** : révélations au scroll via Intersection Observer et transitions CSS.
- 🧩 **Code modulaire** : composants isolés, données centralisées et styles via module CSS.
- 🌙 **Design sombre moderne** : palette violette/bleue, effets glassmorphism et typographie Outfit.

## 🗂️ Structure principale

```text
src/
└── app/
    ├── layout.tsx             # Layout global + métadonnées SEO/OG
    ├── globals.css            # Design system & resets
    ├── page.tsx               # Composition de la landing
    ├── page.module.css        # Styles spécifiques à la page
    ├── _components/landing/   # Composants de section (Hero, Stats, etc.)
    ├── _data/landingData.ts   # Contenus statiques typés
    └── _hooks/useScrollReveal.ts # Hook d’animation au scroll
```

## 🛠️ Stack technique

- [Next.js 15 (App Router)](https://nextjs.org/) avec rendu statique.
- [React 19](https://react.dev/) + hooks personnalisés.
- [TypeScript](https://www.typescriptlang.org/) pour la sécurité des types.
- [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules) + design tokens maison.
- [react-icons](https://react-icons.github.io/react-icons/) pour la bibliothèque d’icônes.
- [clsx](https://github.com/lukeed/clsx) pour la composition de classes.

## 🚀 Prise en main

1. **Installer les dépendances** :

```bash
pnpm install
```

1. **Lancer le serveur de développement** :

```bash
pnpm run dev
```

1. Ouvrir [http://localhost:3000](http://localhost:3000) pour voir la page.

1. Modifier les fichiers dans `src/app` : le rechargement se fait automatiquement.

## 📦 Scripts disponibles

- `pnpm run dev` – serveur de développement Next.js avec Turbopack.
- `pnpm run build` – build de production optimisé.
- `pnpm run start` – serveur de production (après build).

## 📸 Mettre à jour les visuels

- Remplacez `public/preview.png`, `public/og-image.jpg` et `public/twitter-card.jpg` par vos assets finaux.
- Les placeholders de mockups (section Hero/Captures) se trouvent dans `page.module.css`.

## 🌐 Déploiement

La page est statique : un `next build` génère le HTML. Vous pouvez déployer sur Vercel, Netlify, Cloudflare Pages ou tout service supportant les sites statiques.

## 🤝 Contribution

1. Fork du projet
2. Création d’une branche : `git checkout -b feature/nouvelle-section`
3. Commit : `git commit -m "feat: ajouter section partenaires"`
4. Push : `git push origin feature/nouvelle-section`
5. Ouvrir une Pull Request

## 📄 Licence

Projet maintenu par **Landry (Starland9)**. Consultez les conditions de réutilisation avant distribution.

---

💬 Besoin d’aide ou envie de contribuer ? Ouvrez une issue sur le dépôt GitHub ou contactez Landry.
