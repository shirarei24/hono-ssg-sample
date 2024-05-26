import ssg from '@hono/vite-ssg'
import { defineConfig } from 'vite'

const entry = 'src/index.tsx'

export default defineConfig({
  plugins: [ssg({ entry })]
})

