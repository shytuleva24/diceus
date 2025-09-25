// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const importPlugin = require("eslint-plugin-import");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    plugins: {
      import: importPlugin,
    },
    processor: angular.processInlineTemplates,
    rules: {
      // Angular specific rules
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      // Remove unused components and imports
      "no-unused-vars": "off", // Disable base rule
      "@typescript-eslint/no-unused-vars": ["error", {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false,
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }],
      // Import organization
      "sort-imports": ["error", {
        "ignoreCase": false,
        "ignoreDeclarationSort": true, // Let import/order handle declaration sorting
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
        "allowSeparatedGroups": true
      }],
      "import/order": ["error", {
        "groups": [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "index",
          "object",
          "type"
        ],
        "pathGroups": [
          {
            "pattern": "@angular/**",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "@app/**",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "@core/**",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "@shared/**",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "@features/**",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "@services/**",
            "group": "internal",
            "position": "before"
          }
        ],
        "pathGroupsExcludedImportTypes": ["@angular/**"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "newlines-between": "always"
      }],
      "import/no-duplicates": "error",
      "import/no-unused-modules": ["error", {
        "unusedExports": true
      }],
      // Enforce consistent code style
      "@typescript-eslint/member-ordering": ["error", {
        "default": [
          // Index signature
          "signature",

          // Fields
          "public-static-field",
          "protected-static-field",
          "private-static-field",

          "public-decorated-field",
          "protected-decorated-field",
          "private-decorated-field",

          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",

          "public-abstract-field",
          "protected-abstract-field",

          "public-field",
          "protected-field",
          "private-field",

          "static-field",
          "instance-field",
          "abstract-field",

          "decorated-field",

          "field",

          // Constructors
          "public-constructor",
          "protected-constructor",
          "private-constructor",

          "constructor",

          // Methods
          "public-static-method",
          "protected-static-method",
          "private-static-method",

          "public-decorated-method",
          "protected-decorated-method",
          "private-decorated-method",

          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",

          "public-abstract-method",
          "protected-abstract-method",

          "public-method",
          "protected-method",
          "private-method",

          "static-method",
          "instance-method",
          "abstract-method",

          "decorated-method",

          "method"
        ]
      }],
      // Enforce consistent naming
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "default",
          "format": ["camelCase"],
          "filter": {
            "regex": "^--[a-zA-Z][a-zA-Z0-9]*$",
            "match": false
          }
        },
        {
          "selector": "variable",
          "format": ["camelCase", "UPPER_CASE"]
        },
        {
          "selector": "parameter",
          "format": ["camelCase"],
          "leadingUnderscore": "allow"
        },
        {
          "selector": "memberLike",
          "modifiers": ["private"],
          "format": ["camelCase"],
          "leadingUnderscore": "require"
        },
        {
          "selector": "typeLike",
          "format": ["PascalCase"]
        },
        {
          "selector": "enumMember",
          "format": ["PascalCase", "UPPER_CASE"]
        },
        {
          "selector": "property",
          "format": null,
          "filter": {
            "regex": "^style\\.--[a-zA-Z][a-zA-Z0-9-]*$",
            "match": true
          }
        },
        {
          "selector": "objectLiteralProperty",
          "format": null,
          "filter": {
            "regex": "^\\[style\\.--[a-zA-Z][a-zA-Z0-9-]*\\]$",
            "match": true
          }
        }
      ],
      // Enforce single-line empty blocks
      "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
      // Enforce no empty lines in empty blocks
      "no-empty": ["error", { "allowEmptyCatch": true }],
      "object-curly-spacing": ["error", "always"],
      "block-spacing": ["error", "always"],
      "padded-blocks": ["error", "never"]
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      // HTML template rules
      "@angular-eslint/template/no-duplicate-attributes": "error"
    },
  }
);
