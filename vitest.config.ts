import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul'
    },
    css: true,
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./src/__tests__/setup.ts']
  }
})
