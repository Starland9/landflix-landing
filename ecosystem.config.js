module.exports = {
    apps: [
        {
            name: 'landflix-landing',
            script: 'npm',
            args: 'start',
            cwd: './',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'production',
                PORT: 3000,
            },
        },
    ],

    deploy: {
        production: {
            user: 'deploy',
            host: 'your-vps-ip',
            ref: 'origin/main',
            repo: 'git@github.com:Starland9/landflix-landing.git',
            path: '/var/www/landflix-landing',
            'pre-deploy-local': '',
            'post-deploy':
                'pnpm install && pnpm run build && pm2 reload ecosystem.config.js --env production',
            'pre-setup': '',
            ssh_options: 'StrictHostKeyChecking=no',
        },
    },
};
