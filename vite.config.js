import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        // lightningcss (Vite's default CSS minifier) rejects some legacy
        // selector syntax in semantic-ui-css; esbuild is more lenient.
        cssMinify: 'esbuild'
    }
});
