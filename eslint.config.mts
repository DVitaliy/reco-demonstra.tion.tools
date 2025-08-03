import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import react from "eslint-plugin-react"
import stylistic from "@stylistic/eslint-plugin"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import boundaries from "eslint-plugin-boundaries"
import reactHooks from "eslint-plugin-react-hooks"

export default tseslint.config({
  extends: [
    js.configs.recommended,
    tseslint.configs.recommended,
    react.configs.flat.recommended,
    stylistic.configs.recommended,
    eslintConfigPrettier
  ],
  ignores: ["node_modules/**", "dist/**"],
  files: ["src/**/*.{ts,tsx}", "**.*.mts"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: { ...globals.browser, ...globals.node }
  },
  plugins: {
    "@typescript-eslint": tseslint.plugin,
    "react-hooks": reactHooks,
    boundaries
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true
      }
    },

    "boundaries/elements": [
      {
        type: "app",
        pattern: "./src/app"
      },
      {
        type: "features",
        pattern: "./src/features/*"
      },
      {
        type: "shared",
        pattern: "./src/shared"
      }
    ]
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false
      }
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/prop-types": "warn",
    "react/jsx-key": "error",
    "react/no-unescaped-entities": "warn",
    "react/no-unused-state": "warn",
    "react/jsx-no-duplicate-props": "error",

    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-inferrable-types": "warn",

    "no-console": "warn",
    "no-debugger": "error",
    "no-duplicate-imports": "error",
    "no-unused-vars": "off",
    "no-var": "error",

    "no-eval": "error",
    "no-implied-eval": "error",
    "no-new-func": "error",
    "no-script-url": "error",

    "boundaries/element-types": [
      2,
      {
        default: "allow",
        rules: [
          {
            from: "shared",
            disallow: ["app", "features"],
            message: "${file.type}s of category ${file.category} are not allowed to import ${dependency.category}s"
          },
          {
            from: "features",
            disallow: ["app"],
            message: "${file.type}s of category ${file.category} are not allowed to import ${dependency.category}s"
          }
        ]
      }
    ],
    "boundaries/entry-point": [
      2,
      {
        default: "disallow",
        message: "Module (${file.type}) use public API. Direct import from ${dependency.source} is denied",

        rules: [
          {
            target: ["shared", "app"],
            allow: "**"
          },
          {
            target: ["features"],
            allow: ["index.(ts|tsx)", "*.page.tsx"]
          }
        ]
      }
    ]
  }
})
