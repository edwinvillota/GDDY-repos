/// <reference types="vite/client" />

interface ViteTypeOptions {
	strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
	readonly VITE_GDDY_REPOS_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
