# Déploiement VPS avec PM2

Ce guide explique comment déployer LandFlix sur un VPS en utilisant PM2.

## 📋 Prérequis

### Sur votre machine locale
- Node.js >= 18
- pnpm
- PM2 installé globalement: `npm install -g pm2`
- Accès SSH à votre VPS

### Sur le VPS
- Node.js >= 18
- pnpm installé
- PM2 installé globalement
- Git configuré avec accès au dépôt

## 🔧 Configuration

### 1. Configuration du fichier ecosystem.config.js

Modifiez le fichier `ecosystem.config.js` avec vos paramètres :

```javascript
deploy: {
  production: {
    user: 'deploy',              // Votre utilisateur SSH
    host: 'your-vps-ip',         // IP ou domaine de votre VPS
    ref: 'origin/main',          // Branche à déployer
    repo: 'git@github.com:Starland9/landflix-landing.git',
    path: '/var/www/landflix-landing',  // Chemin sur le VPS
    // ...
  },
}
```

### 2. Configuration SSH sur le VPS

```bash
# Sur votre VPS
# Créer l'utilisateur de déploiement
sudo adduser deploy
sudo usermod -aG sudo deploy

# Configurer SSH pour l'utilisateur
sudo su - deploy
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# Ajouter votre clé publique
echo "votre-clé-publique" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys

# Installer Node.js et pnpm
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g pnpm pm2

# Configurer PM2 pour démarrer au boot
pm2 startup
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u deploy --hp /home/deploy
```

### 3. Configuration Git sur le VPS

```bash
# Sur votre VPS, en tant qu'utilisateur deploy
ssh-keygen -t ed25519 -C "deploy@your-vps"
cat ~/.ssh/id_ed25519.pub
# Copier cette clé et l'ajouter comme Deploy Key dans GitHub
```

## 🚀 Déploiement

### Première installation

```bash
# Sur votre machine locale
# 1. Configurer le déploiement
pnpm run deploy:setup

# 2. Premier déploiement
pnpm run deploy:prod
```

### Déploiements suivants

```bash
# Déployer les nouvelles modifications
pnpm run deploy:prod

# Ou mettre à jour sans redémarrer
pnpm run deploy:update
```

### Gestion de l'application

```bash
# Démarrer l'application
pnpm run pm2:start

# Redémarrer (downtime)
pnpm run pm2:restart

# Recharger (zero downtime)
pnpm run pm2:reload

# Arrêter
pnpm run pm2:stop

# Supprimer du PM2
pnpm run pm2:delete

# Voir les logs
pnpm run pm2:logs

# Monitorer
pnpm run pm2:monit

# Revenir en arrière (rollback)
pnpm run deploy:revert
```

## 🔒 Configuration Nginx (optionnel)

Si vous utilisez Nginx comme reverse proxy :

```nginx
# /etc/nginx/sites-available/landflix-landing
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Activer le site
sudo ln -s /etc/nginx/sites-available/landflix-landing /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Installer SSL avec Let's Encrypt (optionnel)
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## 📊 Monitoring

### Via PM2

```bash
# Interface de monitoring
pm2 monit

# Logs en temps réel
pm2 logs landflix-landing

# Informations détaillées
pm2 show landflix-landing

# Liste des processus
pm2 list
```

### Sauvegarder la configuration PM2

```bash
# Sur le VPS
pm2 save
```

## 🔄 Workflow de déploiement

```
┌──────────────────────────────────────────────────┐
│         1. DÉVELOPPEMENT LOCAL                    │
├──────────────────────────────────────────────────┤
│  • Modifications du code                         │
│  • git commit & push                             │
└───────────────┬──────────────────────────────────┘
                │
                ▼
┌──────────────────────────────────────────────────┐
│         2. DÉPLOIEMENT                            │
├──────────────────────────────────────────────────┤
│  • pnpm run deploy:prod                          │
│  • PM2 se connecte au VPS via SSH                │
│  • Git pull du code                              │
│  • pnpm install                                  │
│  • pnpm run build                                │
│  • pm2 reload (zero downtime)                    │
└───────────────┬──────────────────────────────────┘
                │
                ▼
┌──────────────────────────────────────────────────┐
│         3. PRODUCTION                             │
├──────────────────────────────────────────────────┤
│  🌐 https://your-domain.com                      │
│  • Application en ligne                          │
│  • PM2 surveille le processus                    │
│  • Redémarrage automatique en cas d'erreur       │
└──────────────────────────────────────────────────┘
```

## 🛠️ Troubleshooting

### Problème : Permission denied

```bash
# Sur le VPS, vérifier les permissions
sudo chown -R deploy:deploy /var/www/landflix-landing
```

### Problème : Port déjà utilisé

```bash
# Changer le port dans ecosystem.config.js
env: {
  NODE_ENV: 'production',
  PORT: 3001,  // Utiliser un autre port
}
```

### Problème : PM2 n'est pas trouvé après déploiement

```bash
# Sur le VPS, installer PM2 globalement
npm install -g pm2
pm2 update
```

### Voir les erreurs de déploiement

```bash
# Sur votre machine locale
pm2 deploy ecosystem.config.js production --force
```

## 📝 Variables d'environnement

Si vous avez besoin de variables d'environnement :

1. Créer un fichier `.env.production` sur le VPS :
```bash
# /var/www/landflix-landing/source/.env.production
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.example.com
```

2. PM2 chargera automatiquement ces variables.

## 🔐 Sécurité

- ✅ Ne jamais commiter de credentials
- ✅ Utiliser des clés SSH pour l'authentification
- ✅ Configurer un firewall (UFW)
- ✅ Garder Node.js et PM2 à jour
- ✅ Utiliser HTTPS en production

## 📚 Ressources

- [Documentation PM2](https://pm2.keymetrics.io/)
- [PM2 Deployment](https://pm2.keymetrics.io/docs/usage/deployment/)
- [Next.js Production](https://nextjs.org/docs/deployment)
