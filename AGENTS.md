# Agent Guidelines

## Commands
- `npm run dev` - Start development server
- `npm run build` - Production build  
- `npm run build:dev` - Development build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Code Style
- TypeScript with React (TSX)
- Use `@/` alias for src imports
- ESLint with TypeScript rules, unused vars disabled
- Tailwind CSS for styling
- Radix UI components with shadcn/ui patterns
- React Hook Form with Zod validation
- No implicit any disabled, strict null checks off
- Component files in `src/components/`, pages in `src/pages/`
- Use React hooks and functional components only