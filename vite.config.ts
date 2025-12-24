import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * ⚠️ SECURITY WARNING: API keys defined here are bundled into client-side JavaScript
 * and will be visible to anyone who inspects your website's source code.
 *
 * For production, consider:
 * 1. Creating a backend API proxy that handles Gemini API calls
 * 2. Using serverless functions (Vercel, Netlify, AWS Lambda)
 * 3. Implementing rate limiting and domain restrictions on your API key
 *
 * Current setup is acceptable for development/demo purposes only.
 */

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // ⚠️ These keys are exposed in the browser - see security warning above
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
