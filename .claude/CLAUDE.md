# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Turborepo monorepo for a web platform built with the Better-T-Stack (React, TanStack Router, Hono, ORPC, Drizzle, PostgreSQL).

## Quick Start

```bash
bun install          # Install dependencies
bun run dev         # Start all apps (web:5173, server:3000)
bun run check       # Run oxlint + oxfmt
```

## Common Commands

| Command               | Description               |
| --------------------- | ------------------------- |
| `bun run dev`         | Start all apps            |
| `bun run dev:web`     | Frontend only (port 5173) |
| `bun run dev:server`  | Server only (port 3000)   |
| `bun run build`       | Build all apps            |
| `bun run check-types` | TypeScript check all      |
| `bun run check`       | Lint + format fix         |
| `bun run db:push`     | Push Drizzle schema       |
| `bun run db:studio`   | Open Drizzle Studio       |
| `bun run db:migrate`  | Run migrations            |

## Architecture

```
apps/
├── web/           # React + TanStack Router (frontend)
└── server/        # Hono + ORPC (API server)

packages/
├── api/           # oRPC routers and procedures
├── auth/          # Better-Auth configuration
├── db/             # Drizzle schema & client
└── ui/            # Shared shadcn/ui components
```

## Key Patterns

- **oRPC Procedures**: Define in `packages/api/src/routers/`, export via `index.ts`
- **Protected Routes**: Use `protectedProcedure` from `@platform/api`
- **Database**: Schema in `packages/db/src/schema/`, query via `db` constant
- **Auth**: Configure in `packages/auth/src/`, use `requireAuth` middleware

## Database

Schema lives in `packages/db/src/schema/`. Apply changes with `bun run db:push`.

## Micro / Atomic Commits

When committing, always use **micro/atomic commits**:

- **One commit = one logical change** — each commit does exactly one thing
- **Self-contained** — the code works and passes tests at every commit
- **Never bundle unrelated changes** — split into separate commits if needed
- Stage and commit changes incrementally as you complete each logical unit of work

## Conventional Commits

When the user asks to commit, use the [Conventional Commits](https://www.conventionalcommits.org/) format.

### Format

```
type(scope): description

[optional body]

[optional footer]
```

### Allowed Types

`feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

### Rules

- **Type**: Must be one of the allowed types
- **Scope**: Optional but recommended for clarity
- **Description**: Required; use imperative mood (e.g., "add" not "added")
- **Body**: Optional; use for additional context
- **Footer**: For breaking changes (`BREAKING CHANGE: ...`) or issue references

### Examples

- `feat(parser): add ability to parse arrays`
- `fix(ui): correct button alignment`
- `docs: update README with usage instructions`
- `refactor: improve performance of data processing`
- `chore: update dependencies`
- `feat!: send email on registration` (breaking change)
