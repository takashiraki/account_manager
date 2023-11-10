import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        host: true,
        hmr: {
            host: 'account-manager.localhost',
        },
        watch: {
            usePolling: true
        }
    },
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/sass/style.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
