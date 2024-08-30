import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss" ;
import svgr from 'vite-plugin-svgr'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr({
        include: '**/*.svg?react'
    })],
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
    resolve: {
        alias: {
            shared: '/src/shared',
        }
    }
});
