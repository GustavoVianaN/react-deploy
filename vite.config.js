import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],  // Corrigido para definir um array de plugins
    base: '/react-vite/', // Corrigido para adicionar a barra antes do caminho
});