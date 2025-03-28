/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly BASE_URL: ImportMetaEnv;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
