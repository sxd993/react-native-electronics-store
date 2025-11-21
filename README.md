# React Native + Expo + NativeWind + FSD Template

This repo is a starter template that combines Expo Router, React Native, NativeWind (Tailwind for RN), and the Feature-Sliced Design (FSD) folder layout. It comes preconfigured with absolute path imports and TypeScript.

## Features

- Expo Router with file-based navigation
- FSD-inspired structure (`src/app`, `src/entities`, `src/features`, `src/pages`, `src/shared`, `src/widgets`)
- NativeWind + Tailwind CSS setup for styling
- Absolute imports via `@`, `@app`, `@entities`, `@features`, `@pages`, `@shared`, `@widgets`
- TypeScript, ESLint (Expo config) included

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```
2. Run the app (choose your target)
   ```bash
   npx expo start
   # or
   npm run android
   npm run ios
   npm run web
   ```

## Project Structure

```
src/
  app/        # screens and routes (Expo Router)
  entities/   # business entities and models
  features/   # user-facing features (logic + UI)
  pages/      # page-level compositions
  shared/     # ui, lib, api, config, assets
  widgets/    # reusable UI blocks
```

## Absolute Imports

Path aliases are set in `tsconfig.json` and `babel.config.js`. Import using:
```ts
import { SomeWidget } from "@widgets/SomeWidget";
import { api } from "@shared/api";
```

## Scripts

- `npm run start` / `npx expo start` – start dev server
- `npm run android` / `npm run ios` / `npm run web` – platform targets
- `npm run lint` – run ESLint
- `npm run reset-project` – reset starter code to a blank app

## Notes

- Tailwind entry is configured via `global.css` and `nativewind`.
- Metro and Babel are already wired for NativeWind and absolute paths.
