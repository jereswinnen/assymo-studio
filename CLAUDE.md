# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Sanity Studio v4 project - a headless CMS for managing content. It serves as the content management backend for the Assymo project.

## Development Commands

```bash
# Install dependencies (uses pnpm)
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Deploy to Sanity hosting
pnpm deploy

# Deploy GraphQL API
pnpm deploy-graphql
```

## Architecture

### Content Schema Structure

The project defines three main content types in `schemaTypes/`:

1. **Pages** (`pageType.ts`) - General page content with title, slug, header image, and body
2. **Solutions** (`productType.ts`) - Product/solution content (exports as "solution" type)
3. **Navigation** (`navType.ts`) - Site navigation structure

All schemas are registered in `schemaTypes/index.ts` and imported into `sanity.config.ts`.

### Key Configuration

- **Project ID**: `naj44gzh`
- **Dataset**: `production`
- **Studio Host**: `assymo`
- **Plugins**: Structure Tool (content editing) and Vision Tool (GROQ query testing)

### Code Style

- TypeScript with strict mode
- ESLint with Sanity Studio configuration
- Prettier formatting: no semicolons, single quotes, 100 char line width

## Common Tasks

### Adding New Content Types

1. Create new schema file in `schemaTypes/` directory
2. Export from `schemaTypes/index.ts`
3. Schema will auto-register via the index export

### Modifying Schemas

When changing schemas, remember:
- Schema changes affect production data immediately in dev mode
- Use migrations for breaking changes in production
- Test schema changes thoroughly before deploying

### Sanity-Specific Patterns

- Use `defineType()` and `defineField()` helpers for type safety
- Field names become API property names - use camelCase
- The `slug` field type auto-generates from title fields
- Image fields include built-in asset management