# Flux de déploiement GitHub Pages pour LandFlix

```
┌─────────────────────────────────────────────────────────────────┐
│                    DÉVELOPPEMENT LOCAL                           │
├─────────────────────────────────────────────────────────────────┤
│  1. Modifications du code                                       │
│  2. git add . && git commit -m "..."                           │
│  3. git push origin main                                        │
└────────────────┬────────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────────┐
│              GITHUB ACTIONS (.github/workflows/deploy.yml)      │
├─────────────────────────────────────────────────────────────────┤
│  JOB: BUILD                                                     │
│  ├─ Checkout du code                                           │
│  ├─ Setup Node.js 20                                           │
│  ├─ Setup pnpm 10                                              │
│  ├─ pnpm install                                               │
│  ├─ pnpm run build                                             │
│  │   └─ Variables d'environnement:                            │
│  │      • NEXT_PUBLIC_BASE_PATH=/landflix-landing            │
│  │      • NEXT_PUBLIC_SITE_URL=https://starland9.github.io/  │
│  └─ Upload artifact (dossier ./out)                           │
│                                                                 │
│  JOB: DEPLOY (après BUILD)                                     │
│  └─ Deploy to GitHub Pages                                     │
└────────────────┬────────────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                    GITHUB PAGES CDN                             │
├─────────────────────────────────────────────────────────────────┤
│  Site disponible à:                                             │
│  🌐 https://starland9.github.io/landflix-landing               │
│                                                                 │
│  Contenu servi:                                                 │
│  • HTML statique (pages pré-rendues)                           │
│  • CSS compilé                                                  │
│  • JavaScript optimisé                                          │
│  • Assets (images, fonts, etc.)                                │
└─────────────────────────────────────────────────────────────────┘

───────────────────────────────────────────────────────────────────

CONFIGURATION NEXT.JS (next.config.ts)
═══════════════════════════════════════

┌─────────────────────────────────────┐
│ output: 'export'                    │  → Export statique (pas de serveur)
│ basePath: '/landflix-landing'       │  → Préfixe tous les chemins
│ images: { unoptimized: true }       │  → Désactive l'optimisation d'images
└─────────────────────────────────────┘

───────────────────────────────────────────────────────────────────

FICHIERS CLÉS
═════════════

📁 .github/workflows/deploy.yml    → Workflow de déploiement automatique
📄 next.config.ts                  → Configuration Next.js pour export statique
📄 src/app/layout.tsx              → Métadonnées avec URL GitHub Pages
📄 public/.nojekyll                → Active les fichiers _ sur GitHub Pages
📄 GITHUB_PAGES_SETUP.md           → Guide de configuration complet

───────────────────────────────────────────────────────────────────

TEMPS DE DÉPLOIEMENT
═══════════════════════

Push → Build (2-3 min) → Deploy (30s-1min) → Live ✅

───────────────────────────────────────────────────────────────────

PROCHAINES ÉTAPES
═════════════════

1. ✅ Fusionner cette PR dans main
2. ✅ Settings → Pages → Source: "GitHub Actions"
3. ✅ Attendre le déploiement automatique
4. 🎉 Visiter https://starland9.github.io/landflix-landing

───────────────────────────────────────────────────────────────────
