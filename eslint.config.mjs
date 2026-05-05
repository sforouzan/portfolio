import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals").map((config) => ({
    ...config,
    files: config.files ?? ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
  })),
];

export default eslintConfig;
