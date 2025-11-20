# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Sanity Studio v4 project - a headless CMS for managing content. It serves as the content management backend for the Assymo project.

## Development Commands

```bash
pnpm install           # Install dependencies
pnpm dev               # Start development server
pnpm build             # Build for production
pnpm deploy            # Deploy to Sanity hosting
pnpm deploy-graphql    # Deploy GraphQL API
```

## Architecture

### Schema Organization

The project uses a **page builder pattern** with reusable section blocks.

**Document Types** (in `schemaTypes/`):
- `pageType.ts` - Pages with title, slug, headerImage, and sections array
- `productType.ts` - Solutions (type name: "solution") with same structure as pages
- `navType.ts` - Site navigation structure

**Section Blocks** (in `schemaTypes/blocks/`):
Reusable object types that can be added to page/solution `sections` arrays:
- Text/Image layouts: `textLeftImageRight`, `textRightImageLeft`, `textCentered`
- Image grid variants: `textLeftImageGridRight`, `textRightImageGridLeft`
- Slideshows: `slideshow`, `slideshowLeftTextRight`, `slideshowRightTextLeft`
- Other: `productGrid`, `kaart` (map), `kalender` (calendar), `contactForm`

Each block type has a `preview` configuration for Studio display.

### Registration Flow

All schemas are exported from `schemaTypes/index.ts` and registered in `sanity.config.ts`.

### Key Configuration

- **Project ID**: `naj44gzh`
- **Dataset**: `production`
- **Plugins**: structureTool, visionTool

### Code Style

- No semicolons, single quotes, 100 char line width (Prettier)
- Use `defineType()` and `defineField()` helpers
- Field names use camelCase (become API property names)

## Adding New Section Blocks

1. Create file in `schemaTypes/blocks/`
2. Define as `type: 'object'` with fields and preview config
3. Export from `schemaTypes/index.ts`
4. Add to `sections` array in `pageType.ts` and `productType.ts`

## Legacy Content

Both page and solution types have a hidden `body` field marked as "Legacy Body Content" - this is deprecated in favor of the `sections` array.