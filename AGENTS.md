# Agent Guidelines for phil-takes-photos

## Build/Lint/Test Commands

- **Dev**: `npm run dev` (Vite dev server)
- **Build**: `npm run build` (TypeScript check + Vite build)
- **Lint**: `npm run lint` (ESLint all files)
- **Preview**: `npm run preview` (Preview production build)
- **No test suite configured** - no test commands available

## Stack

- React 19 + TypeScript + Vite
- React Router for routing
- Tailwind CSS + Flowbite React for UI
- ESLint with TypeScript, React Hooks, and React Refresh plugins

## Code Style

- **Imports**: Group by external libs, then internal modules, then styles. Use named imports for types with `type` keyword (e.g., `import { type GalleryData }`)
- **Types**: Use TypeScript strict mode. Define types in separate files (e.g., `galleryDataTypes.tsx`). Use `React.FC<Props>` for functional components
- **Naming**: PascalCase for components/types, camelCase for functions/variables, kebab-case for CSS classes
- **Files**: `.tsx` for React components, `.ts` for utilities. Component files match component names
- **Components**: Export both named and default exports. Define interfaces inline or in types files
- **Error Handling**: Use conditional rendering and `<Navigate>` for invalid states (see Gallery.tsx:28-35)
- **Formatting**: 2-space indentation, double quotes for strings, trailing commas
