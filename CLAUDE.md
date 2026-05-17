<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Architecture

This project uses a feature-first Next.js App Router structure. Keep `src/app` thin: route files should expose URLs, compose feature entry points, and hold only Next.js routing concerns such as `page.tsx`, `layout.tsx`, metadata, route handlers, loading, error, and not-found files.

Business and screen logic belongs under `src/features`. Each feature should own its vertical slice and expose only its intended public API through `src/features/<feature>/index.ts`.

Current feature layout:

```txt
src/
  app/                         # App Router routes and small route helpers only
    _shared/                   # App-router composition helpers, not business logic
  features/
    screen-gallery/
      domain/                  # Types and interfaces
      application/             # Use cases and orchestration
      infrastructure/          # Mock/adapters/data implementations
      ui/                      # Feature UI components
      index.ts                 # Public feature API
  core/
    di/                        # Manual dependency factories / composition root
```

## Dependency Rules

- `app` may import feature public APIs and `core/di` factories.
- `ui` may depend on `application` outputs and `domain` types, but should not construct repositories/adapters.
- `application` should depend on `domain` interfaces, not concrete infrastructure.
- `infrastructure` implements domain/application interfaces and contains mocks, stubs, adapters, and static demo data.
- `core/di` wires concrete infrastructure into use cases with simple factory functions. Prefer manual DI over a global IoC container.
- Avoid importing feature internals from another feature. Add or update the feature `index.ts` when something is intentionally public.

## Current Screen Gallery Pattern

The route pages call `renderScreenPage("XX")` from `src/app/_shared/render-screen-page.tsx`. That helper gets the screen page use case from `src/core/di/screen-gallery.ts` and renders the feature UI from `src/features/screen-gallery`.

Screen HTML/data currently lives in `src/features/screen-gallery/infrastructure/mock-taskboard-screens.ts`. If a new screen is missing or incomplete, add a mock or stub in infrastructure rather than putting fallback business logic in a route component.

## UI Preservation

When restructuring, preserve the rendered look unless the user explicitly asks for design changes. Move code across folders with minimal behavioral changes, then verify with lint/build and, for visible changes, a browser or HTTP smoke check.

## Verification

Use the repo scripts:

```sh
npm run lint
npm run build
```

If a dev server is needed, use `npm run dev` or `npm run start` on an available port. Do not assume port `3000` is free.
