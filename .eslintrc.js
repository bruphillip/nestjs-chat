module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-unresolved': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
      },

      // use <root>/path/to/folder/tsconfig.json
      typescript: {
        directory: './path/to/folder',
      },

      // Multiple tsconfigs (Useful for monorepos)

      // use a glob pattern
      typescript: {
        directory: './packages/*/tsconfig.json',
      },

      // use an array
      typescript: {
        directory: [
          './packages/module-a/tsconfig.json',
          './packages/module-b/tsconfig.json',
        ],
      },

      // use an array of glob patterns
      typescript: {
        directory: [
          './packages/*/tsconfig.json',
          './other-packages/*/tsconfig.json',
        ],
      },
    },
  },
};
