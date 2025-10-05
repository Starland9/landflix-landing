# Configuration GitHub Pages

Ce document explique comment activer GitHub Pages pour déployer automatiquement le site LandFlix.

## 📋 Prérequis

- Vous devez avoir les droits d'administrateur sur le dépôt `Starland9/landflix-landing`
- Les changements doivent être fusionnés dans la branche `main`

## 🔧 Étapes de configuration (à faire une seule fois)

### 1. Activer GitHub Pages

1. Allez sur la page du dépôt : https://github.com/Starland9/landflix-landing
2. Cliquez sur **Settings** (⚙️ Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **Source** (Build and deployment), sélectionnez :
   - Source : **GitHub Actions**
   - Cliquez sur **Save** si nécessaire

![GitHub Pages Settings](https://docs.github.com/assets/cb-328827/mw-1440/images/help/pages/publishing-source-drop-down.webp)

### 2. Vérifier le déploiement

Une fois la PR fusionnée dans `main` :

1. Allez dans l'onglet **Actions** du dépôt
2. Vous verrez le workflow **Deploy to GitHub Pages** en cours d'exécution
3. Attendez que le workflow soit terminé (✅ symbole vert)
4. Le site sera disponible à : **https://starland9.github.io/landflix-landing**

### 3. Déploiement manuel (optionnel)

Si vous souhaitez déployer manuellement sans push :

1. Allez dans l'onglet **Actions**
2. Sélectionnez **Deploy to GitHub Pages** dans la liste des workflows
3. Cliquez sur **Run workflow** → **Run workflow**

## 🔍 Vérification

Pour vérifier que tout fonctionne :

1. Visitez https://starland9.github.io/landflix-landing
2. Le site doit s'afficher correctement avec tous les styles et images
3. La navigation doit fonctionner

## 🐛 Dépannage

### Le site affiche le README au lieu de la landing page

**Symptôme** : Lorsque vous visitez https://starland9.github.io/landflix-landing, vous voyez le contenu du fichier README.md affiché au lieu de la landing page.

**Causes possibles** :
1. GitHub Pages n'est pas configuré pour utiliser GitHub Actions comme source
2. Le workflow GitHub Actions n'a pas encore été exécuté avec succès
3. La build a échoué et aucun contenu n'a été déployé

**Solutions** :

1. **Vérifier la configuration de GitHub Pages** :
   - Allez dans **Settings** > **Pages** de votre dépôt
   - Sous **Source**, assurez-vous que **GitHub Actions** est sélectionné
   - Si ce n'est pas le cas, sélectionnez **GitHub Actions** et cliquez sur **Save**

2. **Vérifier l'état du workflow** :
   - Allez dans l'onglet **Actions** du dépôt
   - Vérifiez que le workflow "Deploy to GitHub Pages" s'est terminé avec succès
   - Si le workflow a échoué, consultez les logs pour identifier l'erreur
   - Relancez le workflow si nécessaire

3. **Attendre la propagation** :
   - Après un déploiement réussi, attendez 2-3 minutes
   - Videz le cache de votre navigateur (Ctrl+F5 ou Cmd+Shift+R)
   - Réessayez d'accéder au site

### Le site ne s'affiche pas

- Vérifiez que le workflow s'est terminé avec succès dans l'onglet Actions
- Attendez 2-3 minutes après le déploiement (propagation du cache)
- Videz le cache de votre navigateur (Ctrl+F5 ou Cmd+Shift+R)

### Les images ne s'affichent pas

- Vérifiez que toutes les images sont bien dans le dossier `public/`
- Les chemins d'images doivent être relatifs (ex: `/landflix-landing/image.jpg`)

### Les styles ne sont pas appliqués

- Vérifiez les logs du workflow dans Actions
- Assurez-vous que la build s'est terminée sans erreur

## 📝 Notes importantes

- **Déploiement automatique** : Chaque push sur `main` déclenche un nouveau déploiement
- **Temps de déploiement** : Environ 2-3 minutes
- **Cache** : Le site peut mettre quelques minutes à se mettre à jour après déploiement
- **URLs** : Les URLs des assets sont automatiquement préfixées avec `/landflix-landing`

## 🔗 Liens utiles

- [Documentation GitHub Pages](https://docs.github.com/en/pages)
- [Documentation Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Dépôt du projet](https://github.com/Starland9/landflix-landing)
