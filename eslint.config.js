// the latest settings with the custom-rules-eslint/index.js :
// import js from '@eslint/js';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import customRules from './custom-rules-eslint/index.js';
export default [
  {
    files: ['src/components/**/*.{ts,tsx,js,jsx}', 'src/pages/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser,
    },
    plugins: {
      'custom-rules': customRules,
    },
    rules: {},
    linterOptions: {
      noInlineConfig: true, // מבטיח שכללי ה-ESLint יפעלו מבלי להציג הודעות
    },
  },
];

// the new normal settings :
// import { ESLint } from 'eslint';
// import js from '@eslint/js';
// import globals from 'globals';
// import tsParser from '@typescript-eslint/parser'; // ודא שהייבוא נכון
// export default [
//   {
//     files: ['**/*.{ts,tsx,js,jsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       sourceType: 'module',
//       globals: globals.browser,
//       parser: tsParser, // הגדרת הפארסר כאן
//     },
//     rules: {
//       'padding-line-between-statements': [
//         'error',
//         { blankLine: 'always', prev: '*', next: '*' }
//       ],
//     },
//   }
// ];

// the old settings
// import js from '@eslint/js';
// import globals from 'globals';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
// import tseslint from 'typescript-eslint';
// export default tseslint.config(
//   { ignores: ['dist'] },
//   {
//     extends: [js.configs.recommended, ...tseslint.configs.recommended],
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
//     },
//   }
// );
