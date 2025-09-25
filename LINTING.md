# Linting and Code Quality Setup

This project uses a comprehensive linting setup to ensure code quality and consistency across the codebase. The setup includes:

- **ESLint** for TypeScript files
- **Stylelint** for SCSS files
- **Prettier** for code formatting
- **Husky** and **lint-staged** for pre-commit hooks

## Available Commands

### Linting

```bash
# Run all linters
npm run lint

# Lint TypeScript files only
npm run lint:ts

# Lint SCSS files only
npm run lint:scss
```

### Auto-fixing

```bash
# Fix all linting issues
npm run lint:fix

# Fix TypeScript linting issues
npm run lint:ts:fix

# Fix SCSS linting issues
npm run lint:scss:fix
```

### Formatting

```bash
# Format all files with Prettier
npm run format
```

## Features

### TypeScript Linting (ESLint)

- Removes unused components and imports
- Enforces consistent code organization
- Sorts imports in a consistent order
- Enforces naming conventions
- Checks for Angular-specific best practices

### SCSS Linting (Stylelint)

- Enforces consistent property ordering
- Checks for SCSS best practices
- Validates SCSS syntax
- Ensures consistent formatting

### HTML Template Linting

- Checks for accessibility issues
- Validates template syntax
- Ensures best practices in Angular templates

## Pre-commit Hooks

The project uses Husky to run linters before each commit. This ensures that all code committed to the repository meets the quality standards.

The pre-commit hook runs:

1. ESLint on TypeScript files
2. Stylelint on SCSS files
3. Prettier on all files

## Configuration Files

- **eslint.config.js**: ESLint configuration
- **stylelint.config.js**: Stylelint configuration
- **package.json**: Prettier configuration (in the "prettier" field)
- **.husky/pre-commit**: Pre-commit hook configuration

## Adding New Rules

To add new linting rules:

1. For TypeScript: Edit the `eslint.config.js` file
2. For SCSS: Edit the `stylelint.config.js` file
3. For Prettier: Edit the "prettier" field in `package.json`

## Troubleshooting

If you encounter issues with the linting setup:

1. Make sure all dependencies are installed: `npm install`
2. Try running the linters manually: `npm run lint`
3. Check the configuration files for errors
4. If pre-commit hooks aren't working, try reinstalling Husky: `npm run prepare`
