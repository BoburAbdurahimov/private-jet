import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from 'rollup-plugin-visualizer'
import compression from 'vite-plugin-compression'
import { imagetools } from 'vite-imagetools'
import strip from '@rollup/plugin-strip'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    imagetools(),
    compression({ algorithm: 'brotliCompress', ext: '.br' }),
    compression({ algorithm: 'gzip', ext: '.gz' }),
    visualizer({ filename: 'dist/stats.html', gzipSize: true, brotliSize: true, template: 'treemap' }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es2020',
    minify: 'esbuild',
    cssCodeSplit: true,
    reportCompressedSize: false,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router')) return 'router'
            if (id.includes('react-dom')) return 'react-dom'
            if (id.includes('react')) return 'react'
            if (id.includes('@radix-ui') || id.includes('shadcn')) return 'ui-core'
            if (id.includes('lucide-react')) return 'icons'
            if (id.includes('@tanstack')) return 'query'
            return 'vendor'
          }
        },
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
      plugins: [
        strip({
          functions: ['console.*', 'assert.*', 'debug', 'alert'],
          debugger: true,
        }),
      ],
    },
  },
}));
